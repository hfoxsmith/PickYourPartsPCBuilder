<template>
  <div class="col-md-12">
    <div class="card card-container">
   <!-- <img
        id="profile-img"
        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
        class="profile-img-card"
      /> -->
      <form name="form" @submit.prevent="handleRegister">
        <div>
          <div class="form-group">
            <label for="firstname">First Name</label>
            <input
              v-model="firstname"
              type="text"
              class="form-control"
              name="firstname"
            />
          </div>
          <div class="form-group">
            <label for="lastname">Last Name</label>
            <input
              v-model="lastname"
              type="text"
              class="form-control"
              name="lastname"
            />
          </div>
          <div class="form-group">
            <label for="username">User name</label>
            <input
              v-model="username"
              type="text"
              class="form-control"
              name="username"
            />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              v-model="email"
              type="email"
              class="form-control"
              name="email"
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
            <password-meter :password="password" @score="onScore"/>
          </div>
          <div class="form-group">
            <button class="btn btn-primary btn-block" :disabled="loading">
              <span
                v-show="loading"
                class="spinner-border spinner-border-sm"
              ></span>
              <span>Sign Up</span>
            </button>
          </div>
        </div>
      </form>

      <div v-if="message" class="alert alert-danger">
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script>
import Api from "../api";
import passwordMeter from "vue-simple-password-meter";
export default {
  name: "Register",
  components: {passwordMeter},
  data() {
    return {
      username: "",
      email: "",
      password: "",
      lastname: "",
      firstname: "",
      loading: false,
      message: "",
      score: "",
    };
  },
  methods: {
    onScore({score}) {
      this.score = score;
    },
    handleRegister() {
       if(this.score < 4) {
          this.message = "Make sure the password has a number, special character, a capital leter, and is at least 8 characters long.";
       }else {
           this.message = "";
           this.loading = true;
      
           var crypto =  require('crypto');
           Api.signup( this.email, crypto.createHash('md5').update(this.password).digest('hex'), this.username, this.lastname, this.firstname)
           .then(() => {
               this.$router.push("/login");
           })
           .catch((error) => {
             console.log(error);
               if (error.response) {
                this.message = error.response.data.message;
             }
              this.loading = false;
           });
       }
    },
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
  border-radius: 2px;
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
