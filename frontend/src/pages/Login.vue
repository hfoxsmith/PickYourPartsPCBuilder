<template>
  <div class="col-md-12">
    <div class="card card-container">
      <form name="form" @submit.prevent="handleLogin">
        <div class="form-group">
          <label  for="username">Username</label>
          <input
            v-model="username"
            type="text"
            class="form-control"
            name="username"
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            v-model="password"
            type="password"
            class="form-control"
            name="password"
          />
        </div>
        <div class="form-group">
          <button class="btn btn-primary btn-block">
            <!--<span
              v-show="loading"
              class="spinner-border spinner-border-sm"
            ></span>-->
            <span>Login</span>
          </button>
        </div>
        <div class="form-group">
          <div v-if="message" class="alert alert-danger" role="alert">
            {{ message }}
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Api from "../api";
import { setJwtToken } from "../auth";

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      loading: false,
      message: "",
    };
  },
  methods: {
    handleLogin() {

      var crypto = require('crypto');
      Api.login(this.username, crypto.createHash('md5').update(this.password).digest('hex'))
        .then((res) => {
          setJwtToken(res.data[0].token);
          if (this.$route.params.nextUrl != null) {
            this.$router.push(this.$route.params.nextUrl);
          } else {
            this.$router.push("/admin");
          }
        })
        .catch((error) => {
          console.log(error);
          if (error.response && error.response.status === 403) {
            this.message = error.response.data.message;
          }
          this.loading = false;
        });
    },
    refresh() {
      window.location.reload();
    }
  },
};
</script>

<style scoped>
label {
  display: block;
  margin-top: 10px;
}

.card-container.card {
  max-width: 350px !important;
  padding: 40px 40px;
}

.card {
  background-color: #f7f7f7;
  padding: 20px 25px 30px;
  margin: 0 auto 25px;
  margin-top: 50px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 10px;
  -moz-box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}

.profile-img-card {
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}

label {

  color: black;

}
</style>
