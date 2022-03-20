<template>
  <div>
    <h2>Edit Your Build</h2>
    <br>
    <b-table-simple hover small caption-top responsive>
       <b-thead><strong>Motherboard</strong>
          <b-tr>
            <b-th></b-th>
            <b-th>Motherboard ID</b-th>
            <b-th>Model Name</b-th>
            <b-th>Form Factor</b-th>
            <b-th>Socket Type</b-th>
            <b-th>RAM Slots</b-th>
            <b-th>HDMI Ports</b-th>
            <b-th>USB Ports</b-th>
            <b-th>PCIe Gen</b-th>
            <b-th>PCB Color</b-th>
            <b-th>Brand Name</b-th>
            <b-th>CPU Sockets</b-th>
            <b-th>RAM Type</b-th>
            <b-th>RGB</b-th>
            <b-th>Total Video Ports</b-th>
            <b-th>Sata Ports</b-th>
            <b-th>M.2 Ports</b-th> 
            <b-th>Price (USD)</b-th>
          </b-tr>
        </b-thead>
        <b-tbody>
          <b-tr v-for="motherboard in motherboard" :key="motherboard.motherboardid">
            <b-td>
              <b-radio-group v-model="rmotherboard">
                <b-radio :value="motherboard.motherboardid"/>
              </b-radio-group> 
            </b-td>
            <b-td>{{ motherboard.motherboardid }}</b-td>
            <b-td>{{ motherboard.modelnamemb }}</b-td>
            <b-td>{{ motherboard.formfactor }}</b-td>
            <b-td>{{ motherboard.sockettype }}</b-td>
            <b-td>{{ motherboard.numramslots }}</b-td>
            <b-td>{{ motherboard.hashdmi }}</b-td>
            <b-td>{{ motherboard.numusbports }}</b-td>
            <b-td>{{ motherboard.pciegeneration }}</b-td>
            <b-td>{{ motherboard.pcbcolor }}</b-td>
            <b-td>{{ motherboard.brandname }}</b-td>
            <b-td>{{ motherboard.numsockets }}</b-td>
            <b-td>{{ motherboard.ramtype }}</b-td>
            <b-td>{{ motherboard.hasrgb }}</b-td>
            <b-td>{{ motherboard.numvideoports }}</b-td>
            <b-td>{{ motherboard.numsataports }}</b-td>
            <b-td>{{ motherboard.numm2ports }}</b-td>
            <b-td>${{ motherboard.price }}</b-td>
          </b-tr>
        </b-tbody>      
    </b-table-simple>
<br>
    <b-table-simple hover small caption-top responsive>
        <b-thead><strong>Processor</strong>
          <b-tr>
            <b-th></b-th>
            <b-th>CPU ID</b-th>
            <b-th>Model Name</b-th>
            <b-th>Core Count</b-th>
            <b-th>Multi-threaded</b-th>
            <b-th>Clockspeed</b-th>
            <b-th>Socket Type</b-th>
            <b-th>Brand Name</b-th>
            <b-th>Price</b-th>
          </b-tr>
        </b-thead>
        <b-tbody>
          <b-tr v-for="cpu in cpu" :key="cpu.cpuid">
            <b-td>
              <b-radio-group v-model="rcpu">
                <b-radio :value="cpu.cpuid"/>
              </b-radio-group>
            </b-td>
            <b-td>{{ cpu.cpuid }}</b-td>
            <b-td>{{ cpu.modelnamecpu }}</b-td>
            <b-td>{{ cpu.numcores }}</b-td>
            <b-td>{{ cpu.ismultithreaded }}</b-td>
            <b-td>{{ cpu.clockspeed }}</b-td>
            <b-td>{{ cpu.sockettype }}</b-td>
            <b-td>{{ cpu.brandname }}</b-td>
            <b-td>${{ cpu.price }}</b-td>
          </b-tr>
        </b-tbody>
    </b-table-simple>
<br>
   <!-- <b-table-simple hover small caption-top responsive>
        <b-thead><strong>RAM</strong>
          <b-tr>
            <b-th></b-th>
            <b-th>RAM ID</b-th>
            <b-th>Model Name</b-th>
            <b-th>Brand Name</b-th>
            <b-th>RAM Type</b-th>
            <b-th>RAM Speed</b-th>
            <b-th>Memory Per Stick</b-th>
            <b-th>PCB Color</b-th>
            <b-th>hasrgb</b-th>
            <b-th>laptopordesktop</b-th>
            <b-th>price</b-th>
          </b-tr>
        </b-thead>
        <b-tbody>
          <b-tr v-for="ram in ram" :key="ram.ramid">
            <b-td>
               <b-radio-group v-model="rram">
                 <b-radio :value="ram.ramid"/>
               </b-radio-group>
            </b-td>
            <b-td>{{ ram.ramid }}</b-td>
            <b-td>{{ ram.modelnameram }}</b-td>
            <b-td>{{ ram.brandname }}</b-td>
            <b-td>{{ ram.ramtype }}</b-td>
            <b-td>{{ ram.ramspeed }}</b-td>
            <b-td>{{ ram.storageperstick }}</b-td>
            <b-td>{{ ram.pcbcolor }}</b-td>
            <b-td>{{ ram.hasrgb }}</b-td>
            <b-td>{{ ram.laptopordekstop }}</b-td>
            <b-td>${{ ram.price }}</b-td>
          </b-tr>
        </b-tbody>
      </b-table-simple>
<br>
      <b-table-simple hover small caption-top responsive>
        <b-thead><strong>Storage</strong>
          <b-tr>
            <b-th></b-th>
            <b-th>Storage ID</b-th>
            <b-th>Model Name</b-th>
            <b-th>Storage Type</b-th>
            <b-th>Form Factor</b-th>
            <b-th>Connector Type</b-th>
            <b-th>Storage Size</b-th>
            <b-th>Theoretical Speed</b-th>
            <b-th>Brand Name</b-th>
            <b-th>Price</b-th>
          </b-tr>
        </b-thead>
        <b-tbody>
          <b-tr v-for="storage in storage" :key="storage.storageid">
            <b-td>
              <b-radio-group v-model="rstorage">
                <b-radio :value="storage.storageid"/>
              </b-radio-group> 
            </b-td>
            <b-td>{{ storage.storageid }}</b-td>
            <b-td>{{ storage.modelnamehdd }}</b-td>
            <b-td>{{ storage.storagetype }}</b-td>
            <b-td>{{ storage.formfactor }}</b-td>
            <b-td>{{ storage.connectortype }}</b-td>
            <b-td>{{ storage.storageamount }}</b-td>
            <b-td>{{ storage.theoreticalspeed }}</b-td>
            <b-td>{{ storage.brandname }}</b-td>
            <b-td>${{ storage.price }}</b-td>
          </b-tr>
        </b-tbody>
      </b-table-simple> -->
<br>
      <b-table-simple hover small caption-top responsive>
        <b-thead><strong>Power Supply</strong>
          <b-tr>
            <b-th></b-th>
            <b-th>PSU ID</b-th>
            <b-th>Model Name</b-th>
            <b-th>Color</b-th>
            <b-th>Efficiency Rating</b-th>
            <b-th>Modular</b-th>
            <b-th>Watts</b-th>
            <b-th>Brand Name</b-th>
            <b-th>Price</b-th>
          </b-tr>
        </b-thead>
        <b-tbody>
          <b-tr v-for="psu in psu" :key="psu.psuid">
            <b-td>
              <b-radio-group v-model="rpsu">
                <b-radio :value="psu.psuid"/>
              </b-radio-group> 
            </b-td>
            <b-td>{{ psu.psuid }}</b-td>
            <b-td>{{ psu.modelnamepsu }}</b-td>
            <b-td>{{ psu.color }}</b-td>
            <b-td>{{ psu.efficiencyrating }}</b-td>
            <b-td>{{ psu.ismodular }}</b-td>
            <b-td>{{ psu.watts }}</b-td>
            <b-td>{{ psu.brandname }}</b-td>
            <b-td>${{ psu.price }}</b-td>
          </b-tr>
        </b-tbody>
      </b-table-simple>
<br>
      <!--<b-table-simple hover small caption-top responsive>
        <b-thead><strong>Graphics Card</strong>
          <b-tr>
            <b-th></b-th>
            <b-th>GPU ID</b-th>
            <b-th>Model Name</b-th>
            <b-th>Brand Name</b-th>
            <b-th>VRAM</b-th>
            <b-th>Color</b-th>
            <b-th>RGB</b-th>
            <b-th>GPU Length</b-th>
            <b-th>GPU Height</b-th>
            <b-th># Displays</b-th>
          </b-tr>
        </b-thead>
        <b-tbody>
          <b-tr v-for="gpu in gpu" :key="gpu.gpuid">
            <b-td>
              <b-radio-group v-model="rgpu">
                <b-radio :value="gpu.gpuid"/>
              </b-radio-group> 
            </b-td>
            <b-td>{{ gpu.gpuid }}</b-td>
            <b-td>{{ gpu.modelnamegpu }}</b-td>
            <b-td>{{ gpu.brandname }}</b-td>
            <b-td>{{ gpu.vramamount }}</b-td>
            <b-td>{{ gpu.color }}</b-td>
            <b-td>{{ gpu.hasrgb }}</b-td>
            <b-td>{{ gpu.gpulength }}</b-td>
            <b-td>{{ gpu.gpuheight }}</b-td>
            <b-td>{{ gpu.numdisplayssupported }}</b-td>
          </b-tr>
        </b-tbody>
      </b-table-simple>
<br>
      <b-table-simple hover small caption-top responsive>
        <b-thead><strong>Cooling Solutions</strong>
          <b-tr>
            <b-th></b-th>
            <b-th>Part ID</b-th>
            <b-th>Model Name</b-th>
            <b-th>Cooling Type</b-th>
            <b-th>RGB</b-th>
            <b-th>Size</b-th>
            <b-th>Fan Connector</b-th>
            <b-th>Brand Name</b-th>
            <b-th>Color</b-th>
            <b-th>Num Fans</b-th>
            <b-th>Price</b-th>
          </b-tr>
        </b-thead>
        <b-tbody>
          <b-tr v-for="cooling in cooling" :key="cooling.coolingid">
            <b-td>
              <b-radio-group v-model="rcooling">
                <b-radio :value="cooling.coolingid"/>
              </b-radio-group> 
            </b-td>
            <b-td>{{ cooling.coolingid }}</b-td>
            <b-td>{{ cooling.modelnamecool }}</b-td>
            <b-td>{{ cooling.coolingtype }}</b-td>
            <b-td>{{ cooling.hasrgb }}</b-td>
            <b-td>{{ cooling.size }}</b-td>
            <b-td>{{ cooling.fanconnectortype }}</b-td>
            <b-td>{{ cooling.brandname }}</b-td>
            <b-td>{{ cooling.color }}</b-td>
            <b-td>{{ cooling.numfans }}</b-td>
            <b-td>${{ cooling.price }}</b-td>
          </b-tr>
        </b-tbody>
      </b-table-simple>-->
<br>
      <b-table-simple hover small caption-top responsive>
        <b-thead><strong>PC Case</strong>
          <b-tr>
            <b-th></b-th>
            <b-th>Case ID</b-th>
            <b-th>Model Name</b-th>
            <b-th>RGB</b-th>
            <b-th>Form Factor</b-th>
            <b-th>Tempered Glass</b-th>
            <b-th>Dust Filters</b-th>
            <b-th>Color</b-th>
            <b-th>Fans Included</b-th>
            <b-th>Brand Name</b-th>
            <b-th>Front Panel</b-th>
            <b-th>Price</b-th>
          </b-tr>
        </b-thead>
        <b-tbody>
          <b-tr v-for="pcase in pcase" :key="pcase.caseid">
            <b-td>
              <b-radio-group v-model="rcase">
                <b-radio :value="pcase.caseid"/>
              </b-radio-group> 
            </b-td>
            <b-td>{{ pcase.caseid }}</b-td>
            <b-td>{{ pcase.modelnamecase }}</b-td>
            <b-td>{{ pcase.hasrgb }}</b-td>
            <b-td>{{ pcase.supportedmbformfactor }}</b-td>
            <b-td>{{ pcase.hastemperedglass }}</b-td>
            <b-td>{{ pcase.hasdustfilters }}</b-td>
            <b-td>{{ pcase.color }}</b-td>
            <b-td>{{ pcase.numfansincluded }}</b-td>
            <b-td>{{ pcase.brandname }}</b-td>
            <b-td>{{ pcase.frontpanelports }}</b-td>
            <b-td>${{ pcase.price }}</b-td>
          </b-tr>
        </b-tbody>
      </b-table-simple>
<br>
      <b-button variant="primary" @click="() => updateBuild(getbID())">Update Build</b-button>              
  </div>
</template>

<script>
import Api from "../api";
export default {
  name: "Update",
  data: function () {
    return {
      loading: false,
      Url: "",
      
      motherboard: [],
      cpu: [],
      ram: [],
      storage: [],
      psu: [],
      gpu: [],
      cooling: [],
      pcase: [],
      rmotherboard: '',
      rcpu: '',
      rram: '',
      rstorage: '',
      rpsu: '',
      rgpu: '',
      rcooling: '',
      rcase: '',
    };
  },
  created: function () {
   // this.loadBuilds();
    this.loadMotherboard();
    this.loadCPU();
    this.loadRam();
    this.loadStorage();
    this.loadPSU();
    this.loadGPU();
    this.loadCooling();
    this.loadCase();
  },

  methods: {
    loadMotherboard() {
      this.loading = true;
      this.motherboard = [];
      Api.getMotherboard().then((res) => {
        this.motherboard = res.data;
        this.loading = false;
      });
    },
    loadCPU() {
      this.loading = true;
      this.cpu = [];
      Api.getCPU().then((res) => {
        this.cpu = res.data;
        this.loading = false;
      });
    },
    loadRam() {
     this.loading = true;
     this.ram = [];
     Api.getRam().then((res) => {
       this.ram = res.data;
       this.loading = false;
     });
    },
    loadStorage() {
      this.loading = true;
      this.storage = [];
      Api.getStorage().then((res) => {
        this.storage = res.data;
        this.loading = false;
      });
    },
    loadPSU() {
      this.loading = true;
      this.psu = [];
      Api.getPSU().then((res) => {
        this.psu = res.data;
        this.loading = false;
      });
    },
    loadGPU() {
      this.loading = true;
      this.gpu = [];
      Api.getGPU().then((res) => {
        this.gpu = res.data;
        this.loading = false;
      });
    },
    loadCooling() {
      this.loading = true;
      this.cooling = [];
      Api.getCooling().then((res) => {
        this.cooling = res.data;
        this.loading = false;
      });
    },
    loadCase() {
      this.loading = true;
      this.pcase = [];
      Api.getCase().then((res) => {
        this.pcase = res.data;
        this.loading = false;
      });
    },
    updateBuild(buildid) {
      this.loading = true;
      this.buildlocation = '';
      let tmp = buildid;
      console.log(tmp);
      Api.updateBuild(buildid, this.rcpu, this.rcase, this.rpsu, this.rmotherboard).then((res) => {
        //this.Url = res.headers['location'];
        //const id = parseInt(this.Url);
        console.log(buildid);
        this.$router.push('admin');
      });
    },
    gpuTables(buildid) {
       Api.updateBuildGPU(this.rgpu, buildid).then((res) => {
         this.coolingTables(buildid);
       });
    },
    coolingTables(buildid) {
       Api.updateBuildCooling(this.rcooling, buildid).then((res) => {
         this.storageTables(buildid);
       });
    },
    storageTables(buildid) {
       Api.updateBuildStorage(this.rstorage, buildid).then((res) => {
         this.ramTable(buildid);
       });
    },
    ramTable(buildid) {
       Api.updateBuildRam(this.rram, buildid).then((res) => {
         setTimeout(() => { this.$router.push('admin'); }, 3000);
       });
    },

    getbID() {
      let bID = localStorage.getItem("build");
      console.log(bID);
      return bID;
    }
  },
};
</script>

<style scoped>

h2 {

  text-align: center;

}

</style>
