<template>
  <div class="app">
    <MenuComponent :controller="controller" :title="title" />
    <b-tabs>
        <b-tab-item label="Position">
            <b-table :data="observations.positions" :columns="columns.positions"></b-table>
        </b-tab-item>

        <b-tab-item label="Orientation">
            <b-table :data="observations.orientations" :columns="columns.orientations"></b-table>
        </b-tab-item>

        <b-tab-item label="Velocity">
            <b-table :data="observations.positions" :columns="columns.positions"></b-table>
        </b-tab-item>
    </b-tabs>
    <LoginModal :controller="controller" />
  </div>
</template>

<script>
import { LoginModal, MenuComponent } from 'ipin2022-components';
import { SolidController } from 'ipin2022-common';

export default {
  name: 'MainPage',
  components: { 
    LoginModal,
    MenuComponent
  },
  data () {
    return {
        title: "IPIN2022 Consumer Application",
        controller: null,
        columns: {
            positions: [
                {
                    field: 'datetime',
                    label: 'Date',
                },
                {
                    field: 'latitude',
                    label: 'Latitude',
                },
                {
                    field: 'longitude',
                    label: 'Longitude',
                },
                {
                    field: 'altitude',
                    label: 'Altitude',
                },
                {
                    field: 'accuracy',
                    label: 'Accuracy',
                },
                {
                    field: 'system',
                    label: 'System',
                }
            ],
            orientations: [
                {
                    field: 'datetime',
                    label: 'Date',
                },
                {
                    field: 'heading',
                    label: 'Heading (degrees)',
                },
                {
                    field: 'system',
                    label: 'System',
                }
            ],
            velocities: [
                {
                    field: 'datetime',
                    label: 'Date',
                },
                {
                    field: 'speed',
                    label: 'Speed',
                },
                {
                    field: 'system',
                    label: 'System',
                }
            ]
        },
        observations: {
            positions: [],
            velocities: [],
            orientations: []
        }
    }
  },
  beforeMount() {
    this.controller = new SolidController(this.title);
  },
  mounted() {
    this.controller.once('ready', () => {
        this.loadOrientations();
        this.loadPositions();
        this.loadVelocities();
    });
  },
  methods: {
    loadPositions() {
        this.controller.findAllPositions(this.controller.getSession(), 50).then(positions => {
            this.observations.positions = positions
                .map(position => ({
                    datetime: new Date(position.timestamp).toTimeString(),
                    longitude: position.latlng[0],
                    latitude: position.latlng[1],
                    altitude: position.altitude ? position.altitude : "",
                    accuracy: position.accuracy ? position.accuracy + " m" : "",
                    system: position.procedure ? position.procedure : ""
                }));
        }).catch(console.error);
    },
    loadOrientations() {
        this.controller.findAllOrientations(this.controller.getSession(), 50).then(orientations => {
            this.observations.orientations = orientations
                .map(orientation => ({
                    datetime: new Date(orientation.timestamp).toTimeString(),
                    heading: orientation.heading,
                    system: orientation.procedure ? orientation.procedure : ""
                }));
        }).catch(console.error);
    },
    loadVelocities() {
        this.controller.findAllVelocities(this.controller.getSession(), 50).then(velocities => {
            this.observations.velocities = velocities
                .map(velocity => ({
                    datetime: new Date(velocity.timestamp).toTimeString(),
                    speed: velocity.speed + " m/s",
                    system: velocity.procedure ? velocity.procedure : ""
                }));
        }).catch(console.error);
    }
  },
}
</script>

<style lang="scss" scoped>
.app {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
