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
   methods: {
//     refresh() {
  //     window.location.reload();
    // }
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
