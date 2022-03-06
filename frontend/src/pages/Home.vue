<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand>Pick Your Parts PC Builder</b-navbar-brand> 
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
	<b-navbar-nav>
		<b-button size="sm" type="submit" href="#/login">Login</b-button>
		<b-button size="sm" type="submit" href="#/Register">Register</b-button>
	</b-navbar-nav>
      </b-collapse>
    </b-navbar>
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
