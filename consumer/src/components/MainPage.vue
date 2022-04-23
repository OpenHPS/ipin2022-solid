<template>
  <div class="app">
    <MenuComponent :controller="controller" :title="title" />
    <b-tabs
        expanded
    >
        <b-tab-item icon="fas fa-map-marker" label="Position">
            <b-table 
                :striped="true" 
                :narrowed="true"
                :loading="loading.positions"
                :data="observations.positions">
                <b-table-column field="datetime" width="180" label="Date" v-slot="props">
                    {{ props.row.datetime }}
                </b-table-column>
                <b-table-column width="200" field="position" label="Coordinates" v-slot="props">
                    <b-button style="width: 100%" size="is-small" @click="openMap(props.row._raw)">
                        {{ props.row.latitude }}, {{ props.row.longitude }}
                    </b-button>
                </b-table-column>
                <b-table-column field="altitude" label="Altitude" v-slot="props">
                    {{ props.row.altitude }}
                </b-table-column>
                <b-table-column field="accuracy" label="Accuracy" v-slot="props">
                    {{ props.row.accuracy }}
                </b-table-column>
                <b-table-column field="system" label="System" v-slot="props">
                    <b-tooltip :label="props.row.system.comments"
                        type="is-primary is-light"
                        position="is-bottom" dashed>
                        {{ props.row.system.label }}
                    </b-tooltip>
                </b-table-column>
            </b-table>
        </b-tab-item>

        <b-tab-item icon="fas fa-compass" label="Orientation">
            <b-table 
                :striped="true"
                :narrowed="true"
                :loading="loading.orientations"
                :data="observations.orientations">
                <b-table-column field="datetime" width="180" label="Date" v-slot="props">
                    {{ props.row.datetime }}
                </b-table-column>
                <b-table-column field="heading" label="Heading (degrees)" v-slot="props">
                    {{ props.row.heading }}
                </b-table-column>
                <b-table-column field="system" label="System" v-slot="props">
                    {{ props.row.system.label }}
                </b-table-column>
            </b-table>
        </b-tab-item>

        <b-tab-item icon="fas fa-tachometer" label="Velocity">
            <b-table 
                :striped="true" 
                :narrowed="true"
                :loading="loading.velocities"
                :data="observations.velocities">
                <b-table-column field="datetime" width="180" label="Date" v-slot="props">
                    {{ props.row.datetime }}
                </b-table-column>
                <b-table-column field="speed" label="Speed" v-slot="props">
                    {{ props.row.speed }}
                </b-table-column>
                <b-table-column field="system" label="System" v-slot="props">
                    {{ props.row.system.label }}
                </b-table-column>
            </b-table>
        </b-tab-item>
    </b-tabs>
    <LoginModal :controller="controller" />
  </div>
</template>

<script>
import { LoginModal, MenuComponent } from 'ipin2022-components';
import { SolidController } from 'ipin2022-common';
import MapModalComponent from './MapModalComponent.vue';

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
        loading: {
            positions: true,
            velocities: true,
            orientations: true
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
        // Listen for updates
        this.controller.listen();
        // Fetch the latest information
        this.loadOrientations();
        this.loadPositions();
        this.loadVelocities();
    });
    this.controller.on('newPosition', () => {
        console.log("New position! Refreshing ...");
        this.loadPositions(true);
    });
    this.controller.on('newOrientation', () => {
        this.loadOrientations(true);
    });
    this.controller.on('newVelocity', () => {
        this.loadVelocities(true);
    });
  },
  methods: {
    openMap(position) {
        this.$buefy.modal.open({
            parent: this,
            component: MapModalComponent,
            hasModalCard: true,
            props: { position }
        });
    },
    loadPositions(append = false) {
        this.loading.positions = !append && true;
        this.controller.findAllPositions(this.controller.getSession(), undefined, append ? 1 : 50).then(positions => {
            this.loading.positions = !append && false;
            const results = positions
                .map(position => ({
                    datetime: this.formatDate(new Date(position.timestamp)),
                    longitude: this.formatDegrees(position.latlng[0], true),
                    latitude: this.formatDegrees(position.latlng[1], false),
                    altitude: position.altitude ? this.formatNumber(position.altitude, 2) + " m" : "-",
                    accuracy: position.accuracy ? this.formatNumber(position.accuracy, 2) + " m" : "-",
                    system: position.procedure ? position.procedure : {},
                    _raw: position
                }));
            if (append && results.length > 0) {
                this.observations.positions.unshift(...results);
                this.$buefy.toast.open(`Position was updated (${results[0].datetime})!`);
            } else {
                this.observations.positions = results;
            }
        }).catch(console.error);
    },
    loadOrientations(append = false) {
        this.loading.orientations = !append && true;
        this.controller.findAllOrientations(this.controller.getSession(), append ? 1 : 50).then(orientations => {
            this.loading.orientations = !append && false;
            const results = orientations
                .map(orientation => ({
                    datetime: this.formatDate(new Date(orientation.timestamp)),
                    heading: this.formatNumber(orientation.heading, 2) + "\u00b0",
                    system: orientation.procedure ? orientation.procedure : {},
                    _raw: orientation
                }));
            if (append) {
                this.observations.orientations.unshift(...results);
            } else {
                this.observations.orientations = results;
            }
        }).catch(console.error);
    },
    loadVelocities(append = false) {
        this.loading.velocities = !append && true;
        this.controller.findAllVelocities(this.controller.getSession(), append ? 1 : 50).then(velocities => {
            this.loading.velocities = !append && false;
            const results = velocities
                .map(velocity => ({
                    datetime: this.formatDate(new Date(velocity.timestamp)),
                    speed: this.formatNumber(velocity.speed, 2) + " m/s",
                    system: velocity.procedure ? velocity.procedure : {},
                    _raw: velocity
                }));
            if (append) {
                this.observations.velocities.unshift(...results);
            } else {
                this.observations.velocities = results;
            }
        }).catch(console.error);
    },
    formatDate(date) {
        return date.toLocaleDateString() + " " + date.toLocaleTimeString();
    },
    formatNumber(number, decimals) {
        const pow = Math.pow(10, decimals);
        return Math.round(number * pow) / pow;
    },
    /**
     * Format DD to DMS
     * @see {@link https://stackoverflow.com/questions/5786025/decimal-degrees-to-degrees-minutes-and-seconds-in-javascript}
     */
    formatDegrees(D, lng) {
        const dms = {
            dir: D < 0 ? (lng ? "W" : "S") : lng ? "E" : "N",
            deg: 0 | (D < 0 ? (D = -D) : D),
            min: 0 | (((D += 1e-9) % 1) * 60),
            sec: (0 | (((D * 60) % 1) * 6000)) / 100,
        };
        return `${dms.deg}\u00b0 ${dms.min}' ${dms.sec}'' ${dms.dir}`;
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
