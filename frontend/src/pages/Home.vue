<template>
  <div>
    <br>
    <h1 class="welcome"><strong>Welcome to Pick Your Parts PC Builder!</strong></h1>
    <hr>
    <h4 class="welcome">
      We aim to help all PC enthusiasts in finding the right parts for their PC build!
      Our system will check for part compatability to ensure that your chosen parts will
      work together. You can be assured that our system will save you time, effort, and stress! 
    </h4>
    <hr>
    <h4 class="welcome">
      Please make an account to get started with your PC build:      
      <b-button class="pagebtn" size="lg" type="button" btn-primary href="#/Register">Register Here</b-button>
    </h4>
    <router-link></router-link>
  </div>
</template>

<script>
import Api from "../api";

export default {
  name: "Home",
  components: {},
  data: function () {
    return {
      loading: false,
      articles: [],
    };
  },
  created: function () {
    this.loading = true;
    Api.getArticles().then((res) => {
     this.articles = res.data;
     this.loading = false;
   });
  },
};
</script>

<style scoped>

.welcome {

  text-align: center;

}

.pagebtn {

  color: gold;
  text-align: center;
}

</style>
