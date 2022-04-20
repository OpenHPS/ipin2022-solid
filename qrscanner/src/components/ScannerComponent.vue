<template>
  <div class="app">
    <b-button
      :v-show="this.camera === 'off'"
      id="scanBtn"
      size="is-large"
      icon-left="fa-solid fa-qrcode"
      label="Scan"
      type="is-primary"
      @click="() => { this.camera = 'auto'; }" outlined />

    <QrcodeStream 
      :v-show="this.camera != 'off'" 
      :camera="this.camera" 
      :track="this.paintOutline" 
      @decode="this.onDecode">
    </QrcodeStream>
    <LoginModal :controller="controller" />
  </div>
</template>

<script>
import LoginModal from './LoginModal.vue';
import { SolidController, BuildingController } from 'ipin2022-common';
import { QrcodeStream } from 'vue-qrcode-reader';
import { DataObject, DataSerializer } from '@openhps/core';
import beepOK from '../assets/beep-02.mp3';
import beepERR from '../assets/beep-03.mp3';

DataSerializer.serialize(new DataObject())
export default {
  name: 'ScannerComponent',
  components: { 
    LoginModal,
    QrcodeStream,
  },
  data () {
    return {
      controller: null,
      buildingController: null,
      qr: undefined,
      camera: 'off'
    }
  },
  beforeMount() {
    this.controller = new SolidController("IPIN2022 QR-scanner");
    this.buildingController = new BuildingController();
    this.buildingController.initialize().then(() => {
      // Ready
    }).catch(console.error);
  },
  methods: {
    onDecode(event) {
      // Get the first detected code
      this.buildingController.findByURI(event).then(space => {
        const position = space.transform(space.toPosition(), space);
        this.controller.updatePosition({
          lngLat: [position.longitude, position.latitude],
          accuracy: position.accuracy.value
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
