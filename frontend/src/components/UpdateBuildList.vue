<template>
  <div>    
    <b-table-simple hover small caption-top responsive>
      <b-thead>
        <b-tr>
            <b-th id="border">----------------</b-th>
            <b-th id="border">Build ID</b-th>
            <b-th id="border">CPU</b-th>
            <b-th id="border">Case</b-th>
            <b-th id="border">PSU</b-th>
            <b-th id="border">Motherboard</b-th>
            <b-th id="border">RAM</b-th>
            <b-th id="border">Cooling Device</b-th>
            <b-th id="border">Storage Device</b-th>
            <b-th id="border">GPU</b-th>
            <b-th id="border">--------------------</b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr v-for="build in build">
            <b-td><b-button id="styleThese" variant="warning" @click="() => updateBuild(build.buildid)" href="#/update">Edit Build</b-button></b-td>
            <b-td><b-button variant="default" >{{ build.buildid }}</b-button></b-td>
            <b-td><b-button id="styleThese" variant="default" @click="() => getCPU(build.cpuid)">{{ build.modelnamecpu }}</b-button></b-td>
            <b-td><b-button id="styleThese" variant="default" @click="() => getCase(build.caseid)">{{ build.modelnamecase }}</b-button></b-td>
            <b-td><b-button id="styleThese" variant="default" @click="() => getPSU(build.psuid)">{{ build.modelnamepsu }}</b-button></b-td>
            <b-td><b-button id="styleThese" variant="default" @click="() => getMotherboard(build.motherboardid)">{{ build.modelnamemb }}</b-button></b-td>
            <b-td><b-button id="styleThese" variant="default" @click="() => getRAM(build.ramid)">{{ build.modelnameram }}</b-button></b-td>
            <b-td><b-button id="styleThese" variant="default" @click="() => getCooling(build.coolingid)">{{ build.modelnamecool }}</b-button></b-td>
            <b-td><b-button id="styleThese" variant="defualt" @click="() => getStorage(build.storageid)">{{ build.modelnamehdd }}</b-button></b-td>
            <b-td><b-button id="styleThese" variant="default" @click="() => getGPU(build.gpuid)">{{ build.modelnamegpu }}</b-button></b-td>
            <b-td><b-button id="styleThese" variant="danger" @click="() => deleteBuild(build.buildid)">Delete Build</b-button></b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple>
    <b-table-simple hover small caption-top responsive>
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
    deleteBuild(buildid) {
      this.loading = true;
      this.temp = [];
      Api.deleteBuild(buildid).then((res) => {
        this.temp = res.data;
        this.loading = false;
      });
    }, 
    updateBuild(buildid) {
      let bID = buildid;
      localStorage.setItem("build",bID);
    //  this.loading = true;
    //  this.temp = [];
    //  Api.updateBuild(buildid).thn((res) => {
    //    this.temp = res.data;
    //    this.loading = false;
    //  });
    }
  }
};
</script>

<style scoped>

#styleThese {

  color: white;

}

#border {

  border: 2px solid white;
}

</style>
