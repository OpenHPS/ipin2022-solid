<template>
  <b-navbar 
    :fixed-top="true" 
    type="is-primary"
    :shadow="true"
  >
    <template #brand>
      <b-navbar-item active>
        <h1>{{ title }}</h1>
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item :href="webId">
        {{ name }}
      </b-navbar-item>
      <b-navbar-dropdown label="Applications">
        <b-navbar-item href="../consumer/">
          Consumer application
        </b-navbar-item>
        <b-navbar-item href="../geolocationapi/">
          Geolocation API
        </b-navbar-item>
        <b-navbar-item href="../qrscanner/">
          QR-scanner
        </b-navbar-item>
      </b-navbar-dropdown>
    </template>
    <template #end>
      <b-navbar-item tag="div">
          <div class="buttons">
              <a v-if="isLoggedIn" class="button is-light" @click="logout">
                  Log out
              </a>
          </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: 'MenuComponent',
  props: ['controller', 'title'],
  data () {
    return {
      isLoggedIn: false,
      name: "",
      webId: "#"
    };
  },
  mounted() {
    this.controller.once('ready', () => {
      this.isLoggedIn = true;
      this.name = this.controller.name;
      this.webId = this.controller.getSession().info.webId;
    });
  },
  methods: {
    logout() {
      this.controller.logout();
      window.location = window.location;
    }
  }
}
</script>
