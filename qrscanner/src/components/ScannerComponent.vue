<template>
  <div class="app">
    <MenuComponent :controller="controller" :title="title" />
    <b-button
      v-if="this.camera === 'off'"
      :disabled="this.processing"
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
    <b-loading :is-full-page="true" v-model="processing" :can-cancel="false"></b-loading>
  </div>
</template>

<script>
import { LoginModal, MenuComponent } from 'ipin2022-components';
import { SolidController, BuildingController, BASE_URI } from 'ipin2022-common';
import { QrcodeStream } from 'vue-qrcode-reader';
import beepOK from '../assets/beep-02.mp3';
import beepERR from '../assets/beep-03.mp3';

const PROCEDURE_CHECK_IN = BASE_URI + "qrscanner_checkin";
const PROCEDURE_CHECK_OUT = BASE_URI + "qrscanner_checkout";

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
      camera: 'off',
      processing: false
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
        this.qr = space.displayName;
        new Audio(beepOK).play(); // Beep sound for OK
        this.camera = 'off';
        this.processing = true;

        // Check if check in or check out
        return Promise.all([space, this.controller.findAllPositions(
          this.controller.getSession(),
          undefined,
          1,
          [PROCEDURE_CHECK_IN, PROCEDURE_CHECK_OUT]
        )]);
      }).then(([space, positions]) => {
        let procedure = PROCEDURE_CHECK_IN;
        if (positions.length > 0) {
          const lastPosition = positions[0];
          // Check out if the last position was a check in in the same space
          if (lastPosition.procedure && lastPosition.procedure.uri === PROCEDURE_CHECK_IN && 
            lastPosition.deployment && lastPosition.deployment.uri.indexOf(space.uid) !== -1) {
            procedure = PROCEDURE_CHECK_OUT;
          }
        }
        const position = this.buildingController.getGeographicalPosition(space);
        this.controller.updatePosition({
          lnglat: [position.longitude, position.latitude],
          accuracy: position.accuracy.value,
          altitude: position.altitude,
          procedure: {
            uri: procedure
          },
          deployment: {
            uri: BASE_URI + space.uid
          }
        });
        this.processing = false;
      }).catch(err => {
        console.error(err);
        this.qr = undefined;
        this.processing = false;
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
