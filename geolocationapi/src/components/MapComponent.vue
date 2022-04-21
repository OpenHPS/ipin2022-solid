<template>
  <div class="map">
    <VlMap
      ref="map"
      data-projection="EPSG:4326"
      @created="onMapCreated"
    >
      <VlView
        ref="view"
        :center.sync="center"
        :zoom.sync="zoom"
        :rotation.sync="rotation"/>
      <VlLayerTile key="osm">
        <VlSourceOsm />
      </VlLayerTile>

      <VlGeoloc 
        @update:accuracy="position.accuracy = $event"
        @update:altitude="onUpdateAltitude"
        @update:altitudeaccuracy="position.altitudeAccuracy = $event"
        @update:heading="onUpdateHeading"
        @update:speed="onUpdateSpeed"
        @update:position="onUpdatePosition"
        @tracking-options="trackingOptions">
        <template #default="geoloc">
          <VlFeature
            v-if="geoloc.position"
            id="position-feature">
            <VlGeomPoint :coordinates="geoloc.position"/>
            <VlStyle>
              <VlStyleIcon
                src="../assets/marker.png"
                :scale="0.4"
                :anchor="[0.5, 1]"/>
            </VlStyle>
          </VlFeature>
        </template>
      </VlGeoloc>

    </VlMap>
    <LoginModal :controller="controller" />
  </div>
</template>

<script>
import { FullScreen } from 'ol/control';
import LoginModal from './LoginModal.vue';
import { SolidController } from 'ipin2022-common';

const PROCEDURE = "geolocationapi";

export default {
  name: 'MapComponent',
  components: { LoginModal },
  data () {
    return {
      center: [0, 0],
      zoom: 2,
      rotation: 0,
      trackingOptions: {
        enableHighAccuracy: true
      },
      position: {
        lnglat: [],
        altitude: null,
        heading: null,
        accuracy: null,
        altitudeAccuracy: null
      },
      controller: null
    }
  },
  beforeMount() {
    this.controller = new SolidController("IPIN2022 Geolocation API");
  },
  methods: {
    onMapCreated(vm) {
      this.map = vm;
      // Add visual controls to the map
      vm.addControls([
        new FullScreen(),
      ]);
    },
    onUpdatePosition(position) {
      this.position.lnglat = position;
      this.center = position;
      this.zoom = 16;
      this.controller.updatePosition({
        lnglat: this.position.lnglat,
        altitude: this.position.altitude,
        accuracy: this.position.accuracy,
        altitudeAccuracy: this.position.altitudeAccuracy,
        procedure: PROCEDURE
      });
    },
    onUpdateAltitude(altitude) {
      this.position.altitude = altitude;
    },
    onUpdateHeading(heading) {
      this.position.heading = heading;
      this.controller.updatePosition({
        heading,
        procedure: PROCEDURE
      });
    },
    onUpdateSpeed(speed) {
      this.position.speed = speed;
      this.controller.updatePosition({
        speed,
        procedure: PROCEDURE
      });
    },
  },
}
</script>

<style lang="scss" scoped>
.map {
  position: relative;
  width: 100%;
  height: 100%;

  .vl-map {
    position: relative;
  }
}

.base-layers-panel {
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
}
</style>
