<template>
  <div class="map">
    <MenuComponent :controller="controller" :title="title" />
    <VlMap
      v-if="controller && controller.isLoggedIn"
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

      <VlFeature
        v-if="position"
        id="position-feature">
        <VlGeomPoint :coordinates="position.lnglat"/>
        <VlStyle>
          <VlStyleIcon
            src="../assets/marker.png"
            :scale="0.4"
            :anchor="[0.5, 1]"/>
        </VlStyle>
      </VlFeature>

    </VlMap>
    <LoginModal :controller="controller" />
  </div>
</template>

<script>
import { FullScreen } from 'ol/control';
import { LoginModal, MenuComponent } from 'ipin2022-components';
import { BASE_URI, SolidController } from 'ipin2022-common';

const PROCEDURE = BASE_URI + "geolocationapi";

export default {
  name: 'MapComponent',
  components: { LoginModal, MenuComponent },
  data () {
    return {
      title: "IPIN2022 Geolocation API",
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
        speed: null,
        accuracy: null,
        altitudeAccuracy: null
      },
      controller: null
    }
  },
  beforeMount() {
    this.controller = new SolidController(this.title);
    this.controller.once('ready', () => {
      this.controller.updatePosition({
        lnglat: this.position.lnglat,
        altitude: this.position.altitude,
        accuracy: this.position.accuracy,
        altitudeAccuracy: this.position.altitudeAccuracy,
        heading: this.position.heading,
        speed: this.position.speed,
        procedure: {
          uri: PROCEDURE
        }
      });
    });
  },
  mounted() {
    navigator.geolocation.watchPosition(this.onUpdatePosition.bind(this), 
      console.error, 
      {
        enableHighAccuracy: true,
        maximumAge: 5000
      });
  },
  methods: {
    onMapCreated(vm) {
      this.map = vm;
      // Add visual controls to the map
      vm.addControls([
        new FullScreen(),
      ]);
    },
    onUpdatePosition(event) {
      // Extract information from event
      this.position.lnglat = [event.coords.longitude, event.coords.latitude];
      this.position.accuracy = event.coords.accuracy;
      this.position.altitude = event.coords.altitude;
      this.position.altitudeAccuracy = event.coords.altitudeAccuracy;
      this.position.speed = event.coords.speed;
      this.position.heading = event.coords.heading;

      // Update the map view
      this.center = this.position.lnglat;
      this.zoom = 16;

      if (this.controller.isLoggedIn) {
        this.controller.updatePosition({
          lnglat: this.position.lnglat,
          altitude: this.position.altitude,
          accuracy: this.position.accuracy,
          altitudeAccuracy: this.position.altitudeAccuracy,
          procedure: {
            uri: PROCEDURE
          }
        });
      }
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
