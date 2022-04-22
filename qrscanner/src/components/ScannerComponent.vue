<template>
  <div class="app">
    <MenuComponent :controller="controller" :title="title" />
    <b-button
      v-if="this.camera === 'off'"
      id="scanBtn"
      size="is-large"
      icon-left="fa-solid fa-qrcode"
      label="Scan"
      type="is-primary"
      @click="() => { this.camera = 'auto'; }" outlined />

    <QrcodeStream 
      v-if="this.camera != 'off'" 
      :camera="this.camera" 
      :track="this.paintOutline" 
      @decode="this.onDecode">
    </QrcodeStream>
    <LoginModal :controller="controller" />
  </div>
</template>

<script>
import { LoginModal, MenuComponent } from 'ipin2022-components';
import { SolidController, BuildingController } from 'ipin2022-common';
import { QrcodeStream } from 'vue-qrcode-reader';
import beepOK from '../assets/beep-02.mp3';
import beepERR from '../assets/beep-03.mp3';

const PROCEDURE_CHECK_IN = "qrscanner_checkin";
const PROCEDURE_CHECK_OUT = "qrscanner_checkout";

export default {
  name: 'ScannerComponent',
  components: { 
    LoginModal,
    MenuComponent,
    QrcodeStream,
  },
  data () {
    return {
      title: "IPIN2022 QR-scanner",
      controller: null,
      buildingController: null,
      qr: undefined,
      camera: 'off'
    }
  },
  beforeMount() {
    this.controller = new SolidController(this.title);
    this.buildingController = new BuildingController();
    this.buildingController.initialize().then(() => {
      // Ready
    }).catch(console.error);
  },
  methods: {
    onDecode(event) {
      // Get the first detected code
      this.buildingController.findByURI(event).then(space => {
        // Check if check in or check out
        // this.controller.findAllPositions(
        //   this.controller.getSession(),
        //   undefined,
        //   1,
        //   [PROCEDURE_CHECK_IN, PROCEDURE_CHECK_OUT]
        // ).then(positions => {
        //   if (positions.)
        // });
        const position = this.buildingController.getGeographicalPosition(space);
        this.controller.updatePosition({
          lnglat: [position.longitude, position.latitude],
          accuracy: position.accuracy.value,
          altitude: position.altitude,
          procedure: PROCEDURE_CHECK_IN
        });
        this.qr = space.displayName;
        new Audio(beepOK).play(); // Beep sound for OK
        this.camera = 'off';
      }).catch(err => {
        console.error(err);
        this.qr = undefined;
        new Audio(beepERR).play(); // Beep sound for ERROR
      });
    },
    paintOutline(detectedCodes, ctx) {
      for (const detectedCode of detectedCodes) {
        const [ firstPoint, ...otherPoints ] = detectedCode.cornerPoints

        ctx.strokeStyle = this.qr ? "green" : "red";
        ctx.lineWidth = 10;
        ctx.beginPath();
        ctx.moveTo(firstPoint.x, firstPoint.y);
        for (const { x, y } of otherPoints) {
          ctx.lineTo(x, y);
        }
        ctx.lineTo(firstPoint.x, firstPoint.y);
        ctx.closePath();
        ctx.stroke();

        const { boundingBox } = detectedCode

        const centerX = boundingBox.x + boundingBox.width/ 2
        const centerY = boundingBox.y + boundingBox.height/ 2

        const fontSize = Math.max(20, 50 * boundingBox.width/ctx.canvas.width)

        ctx.font = `bold ${fontSize}px sans-serif`
        ctx.textAlign = "center"

        ctx.fillStyle = ctx.strokeStyle;
        ctx.fillText(this.qr ?? "Error", centerX, centerY)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.app {
  position: relative;
  width: 100%;
  height: 100%;
}

#scanBtn {
  position: fixed;
  width: 80%;
  top: 40%;
  left: 10%;
  margin-left: auto;
  margin-right: auto;
  z-index: 1
}
</style>
