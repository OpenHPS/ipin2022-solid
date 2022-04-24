<template>
    <b-modal
        :active="active"
        has-modal-card
        :can-cancel="false"
        aria-role="dialog"
        aria-label="Solid Login"
        aria-modal>
        <form action="" @submit="(e) => { e.preventDefault(); login(); }">
            <div class="modal-card" style="width: 100%; min-width: 300px;">
                <header class="modal-card-head">
                    <p class="modal-card-title">Login to Solid Provider</p>
                </header>
                <section class="modal-card-body">
                    <b-field label="Solid Issuer">
                        <b-autocomplete
                            type="url"
                            v-model="issuer"
                            :data="knownIssuers"
                            placeholder="Your Solid Issuer"
                            clearable
                            required
                            @select="option => selected = option">
                        </b-autocomplete>
                    </b-field>
                </section>
                <footer class="modal-card-foot">
                    <b-button
                        label="Login"
                        type="is-primary"
                        @click="login" />
                </footer>
            </div>
        </form>
    </b-modal>
</template>

<script>
export default {
    name: 'LoginModal',
    props: ['controller'],
    data () {
        return {
            issuer: null,
            active: true,
            knownIssuers: [
                "https://solidweb.org/",
                "https://broker.pod.inrupt.com/",
                "https://solidcommunity.net/"
            ]
        }
    },
    methods: {
        login() {
            this.controller.login(this.issuer);
        }
    },
    mounted() {
        this.controller.once('ready', () => {
            this.active = false;
        });
    }
};
</script>

<style scoped>
.modal .animation-content .modal-card {
  overflow: visible !important;
}

.modal-card-body {
  overflow: visible !important;
}
</style>