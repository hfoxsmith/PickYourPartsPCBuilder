<template>
  <div>
    <b-jumbotron>
      <h1 v-flex justify-center>Pick Your Parts PC Builder</h1>
	<button>Login</button>
    </b-jumbotron>
    <br />
    <div v-if="loading">Loading PC Goodies....</div>
    <ul v-else>
      <li v-for="article in articles" :key="article.articleid">
        <router-link :to="`article/${article.articleid}`">{{
          article.title
        }}</router-link>
      </li>
    </ul>
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
