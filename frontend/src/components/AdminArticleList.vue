<template>
  <div>
    <!--<div v-if="loading">Loading articles....</div>
    <router-link to="admin/add" tag="b-button" class="float-right"
      >Add article</router-link
    > -->
    
    <b-table-simple hover small caption-top responsive>
      <b-thead>
        <b-tr>
            <b-th>Build ID</b-th>
            <b-th>CPU</b-th>
            <b-th>Case</b-th>
            <b-th>PSU</b-th>
            <b-th>Motherboard</b-th>
            <b-th>RAM</b-th>
            <b-th>Cooling Device</b-th>
            <b-th>Storage Device</b-th>
            <b-th>GPU</b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr v-for="build in build">
            <b-td>{{ build.buildid }}</b-td>
            <b-td><b-button id="styleThese" variant="outline-primary" @click="() => getCPU(build.cpuid)">{{ build.modelnamecpu }}</b-button></b-td>
            <b-td><b-button variant="outline-primary" @click="() => getCase(build.caseid)">{{ build.modelnamecase }}</b-button></b-td>
            <b-td><b-button variant="outline-primary" @click="() => getPSU(build.psuid)">{{ build.modelnamepsu }}</b-button></b-td>
            <b-td><b-button variant="outline-primary" @click="() => getMotherboard(build.motherboardid)">{{ build.modelnamemb }}</b-button></b-td>
            <b-td><b-button variant="outline-primary" @click="() => getRAM(build.ramid)">{{ build.modelnameram }}</b-button></b-td>
            <b-td><b-button variant="outline-primary" @click="() => getCooling(build.coolingid)">{{ build.modelnamecool }}</b-button></b-td>
            <b-td><b-button variant="outline-primary" @click="() => getStorage(build.storageid)">{{ build.modelnamehdd }}</b-button></b-td>
            <b-td><b-button variant="outline-primary" @click="() => getGPU(build.gpuid)">{{ build.modelnamegpu }}</b-button></b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple>
    <b-table-simple hover small caption-top responsive>
      <b-thead>
        <b-th>Item Attributes</b-th>
      </b-thead>
      <b-tbody>
        <b-tr v-for="(value, name) in temp[0]" :key="name">
          <b-td>{{ name }}</b-td>
          <b-td>{{ value }}</b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple>
  </div>
</template>

<script>
import Api from "../api";

export default {
  name: "AdminArticleList",
  data: function () {
    return {
      loading: false,
      build: [],
      temp: [],
    };
  },
  created: function () {
      this.loadBuilds();
  },

   methods: {
    loadBuilds() {
      this.loading = true;
      this.build = [];
      Api.getUserBuilds().then((res) => {
        this.build = res.data;
        this.loading = false;
      });
    },
    getCPU(cpuid) {
      this.loading = true;
      this.temp = [];
      Api.getCPUID(cpuid).then((res) => {
        this.temp = res.data;
        this.loading = false;
      });
    },
    getCase(caseid) {
      this.loading = true;
      this.temp = [];
      Api.getCaseID(caseid).then((res) => {
        this.temp = res.data;
        this.loading = false;
      });
    },
    getPSU(psuid) {
      this.loading = true;
      this.temp = [];
      Api.getPSUID(psuid).then((res) => {
        this.temp = res.data;
        this.loading = false;
      });
    },
    getMotherboard(id) {
      this.loading = true;
      this.temp = [];
      Api.getMotherboardID(id).then((res) => {
        this.temp = res.data;
        this.loading = false;
      });
    },
    getRAM(ramid) {
      this.loading = true;
      this.temp = [];
      Api.getRAMID(ramid).then((res) => {
        this.temp = res.data;
        this.loading = false;
      });
    },
    getCooling(coolingid) {
      this.loading = true;
      this.temp = [];
      Api.getCoolingID(coolingid).then((res) => {
        this.temp = res.data;
        this.loading = false;
      });
    },
    getStorage(storageid) {
      this.loading = true;
      this.temp = [];
      Api.getStorageID(storageid).then((res) => {
        this.temp = res.data;
        this.loading = false;
      });
    },
    getGPU(gpuid) {
      this.loading = true;
      this.temp = [];
      Api.getGPUID(gpuid).then((res) => {
        this.temp = res.data;
        this.loading = false;
      });
    }, 
  },
};
</script>

<style scoped>

#styleThese {

  color: white;

}

</style>
