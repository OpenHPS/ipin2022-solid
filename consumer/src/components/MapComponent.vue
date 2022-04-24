<template>
    <VlMap
        ref="map"
        :controls="false"
        data-projection="EPSG:4326"
        @created="onMapCreated"
    >
        <VlView
            ref="view"
            :center.sync="center"
            :zoom.sync="zoom"
            :rotation.sync="rotation"/>

        <VlFeature
            v-if="position.deployment"
            id="position-deployment-feature">
            <VlGeomPolygon :coordinates="position.deployment.geometry" />
            <VlStyle>
                <VlStyleFill color="rgba(51, 204, 51, 0.5)" />
                <VlStyleStroke color="rgba(51, 204, 51, 1)" />
            </VlStyle>
        </VlFeature>
        <VlFeature
            v-if="position && this.map"
            id="position-accuracy-feature">
            <VlGeomPolygon :coordinates="this.convertRadiusToGeometry(position.latlng, position.accuracy)" />
        </VlFeature>
        <VlFeature
            v-if="position"
            id="position-feature">
            <VlGeomPoint :coordinates="position.latlng"/>
            <VlStyle>
                <VlStyleIcon
                    src="../assets/marker.png"
                    :scale="0.4"
                    :anchor="[0.5, 1]"/>
            </VlStyle>
        </VlFeature>

        <VlLayerTile key="osm">
            <VlSourceOsm />
        </VlLayerTile>
    </VlMap>
</template>

<script>
import { circular } from 'ol/geom/Polygon';

export default {
  name: 'MapComponent',
  props: ['position'],
  data() {
    return {
        center: [0, 0],
        zoom: 2,
        rotation: 0,
        map: undefined
    }
  },
  mounted() {
      this.center = this.position.latlng;
      this.zoom = 20;
      return;
  },
  methods: {
    onMapCreated(vm) {
        this.map = vm;
    },
    /**
     * Convert a radius to a geometry
     */
    convertRadiusToGeometry(center, radius) {
        const circle = circular(center, radius, 128);
        return circle.getCoordinates();
    }
  }
}
</script>

<style lang="scss" scoped>
.map {
  width: 400px;
  height: 500px;
  margin: 0px;
  padding: 0;

  .vl-map {
    position: relative;
  }

  @media (min-width: 400px) {
    width: 100%;
  }
}

.base-layers-panel {
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
}
</style>
