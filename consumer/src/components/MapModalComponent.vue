<template>
    <div class="modal-card">
        <section class="modal-card-body map">
            <VlMap
                ref="map"
                data-projection="EPSG:4326"
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
                    v-if="position"
                    id="position-accuracy-feature">
                    <VlGeomPoint :coordinates="position.latlng" />
                    <VlStyle>
                        <VlStyleCircle :radius="position.accuracy" />
                    </VlStyle>
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
        </section>
    </div>
</template>

<script>
export default {
  name: 'MapModalComponent',
  props: ['position'],
  data() {
    return {
        title: "",
        center: [0, 0],
        zoom: 2,
        rotation: 0,
    }
  },
  mounted() {
      this.center = this.position.latlng;
      this.zoom = 20;
      return;
  }
}
</script>

<style lang="scss" scoped>
.modal-card {
    margin: 0;
    padding: 0;
}

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
