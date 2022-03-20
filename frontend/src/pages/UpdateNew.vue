<template>
  <div>
    <h1>Your Created PC Builds</h1>
    <br>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Admin",
   mounted() {
    if (localStorage.getItem('reloaded')) {
        // The page was just reloaded. Clear the value from local storage
        // so that it will reload the next time this page is visited.
        localStorage.removeItem('reloaded');
    } else {
        // Set a flag so that we know not to reload the page twice.
        localStorage.setItem('reloaded', '1');
        location.reload();
    }
  }
};
</script>

<style scoped>

h1 {
  text-align: center;
}
b-tr {
  color: white;
}

</style>
