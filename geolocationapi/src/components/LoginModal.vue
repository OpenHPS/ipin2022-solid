<template>
    <b-modal
        :active="active"
        has-modal-card
        :can-cancel="false"
        aria-role="dialog"
        aria-label="Solid Login"
        aria-modal>
        <form action="" @submit="(e) => { e.preventDefault(); login(); }">
            <div class="modal-card" style="width: 100%">
                <header class="modal-card-head">
                    <p class="modal-card-title">Login to Solid Provider</p>
                </header>
                <section class="modal-card-body">
                    <b-field label="Solid Issuer">
                        <b-input
                            type="url"
                            v-model="issuer"
                            placeholder="Your Solid Issuer"
                            required>
                        </b-input>
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
            active: true
        }
    },
    methods: {
        login() {
            this.controller.login(this.issuer);
        },
        isLoggedIn() {
            return this.controller ? this.controller.isLoggedIn : false;
        }
    },
    mounted() {
        this.controller.once('ready', () => {
            this.active = false;
        });
    }
};
</script>

<style lang="scss" scoped>
@import "~bulma/sass/utilities/all";
</style>
