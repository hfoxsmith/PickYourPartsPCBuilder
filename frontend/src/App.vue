<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <b-navbar-brand id="btn-style" href="#/" >Pick Your Parts PC Builder</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-button style="color:white; font-weight:bold;" v-if="notLoggedIn" size="lg" type="button" variant="btn-default" href="#/login">Login</b-button>
          <b-button style="color:white; font-weight:bold;" v-if="notLoggedIn" size="lg" type="button" variant="btn-default" href="#/Register">Register</b-button>
          <b-button style="color:white; font-weight:bold;" v-if="isLoggedIn" size="lg" type="button" variant="btn-default" href="#/">Create</b-button>
          <b-button style="color:white; font-weight:bold;" v-if="isLoggedIn" size="lg" type="button" variant="btn-default" href="#/admin">Builds</b-button>
          <b-button style="color:white; font-weight:bold;" v-if="isLoggedIn" v-on:click="refresh()" size="lg" type="button" variant="btn-default" href="#/logout">Logout</b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <b-container>
      <router-view></router-view>
    </b-container>
  </div>
</template>

<script>
import { getJwtToken } from "./auth";

export default {
  name: "App",
  components: {},
  computed: {
    isLoggedIn() {
      let token = getJwtToken();
      if (token === undefined || token === "undefined" || token === null) {
      //checks if token is set and updates the navbar accordingly
       // if logged in
	return false;
      } else {
        //if logged out
        return true;
      }
    },
    notLoggedIn() {
      let token = getJwtToken();
      if (token === undefined || token === "undefined" || token === null) {
      //checks if token is set and updates the navbar accordingly
       // if not logged in
        return true;
      } else {
        //if logged in
        return false;
      }
    },
  },
  //created: {
  //  isLoggedIn(),
  //  notLoggedIn(),
  //},
  methods: {
    refresh() {
      window.location.reload();
    }
  },
};
</script>

<style>

#app {
 
  background-color: grey;
  color: white;
  min-height: 100vh;

}
</style>
