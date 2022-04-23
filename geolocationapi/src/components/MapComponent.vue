<template>
  <div class="map">
    <MenuComponent :controller="controller" :title="title" />
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
    onUpdateAltitude(altitude) {
      this.position.altitude = altitude;
    },
    onUpdateHeading(heading) {
      this.position.heading = heading;
      if (this.controller.isLoggedIn) {
        this.controller.updatePosition({
          heading,
          procedure: {
            uri: PROCEDURE
          }
        });
      }
    },
    onUpdateSpeed(speed) {
      this.position.speed = speed;
      if (this.controller.isLoggedIn) {
        this.controller.updatePosition({
          speed,
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
