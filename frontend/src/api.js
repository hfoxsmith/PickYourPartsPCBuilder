import axios from "axios";
import { authHeader, getJwtToken, getUserIdFromToken } from "./auth";

const API_URL = "http://54.215.186.101:8000";

class Api {

  getUserBuilds() {
    return  axios.get(API_URL + `/userbuilds?userid=eq.${getUserIdFromToken(getJwtToken())}`);
  }

  getCPUID(id) {
   return  axios.get(API_URL + `/processor?cpu.id=eq.${id}`);
  }

  getCaseID(id) {
   return  axios.get(API_URL + `/pc_case?case.id=eq.${id}`);
  }

  getPSUID(id) {
   return  axios.get(API_URL + `/psu?psu.id=eq.${id}`);
  }

  getMotherboardID(id) {
    return axios.get(API_URL + `/motherboard?motherboard.id=eq.${id}`);
  }

  getRAMID(id) {
    return  axios.get(API_URL + `/ram?ram.id=eq.${id}`);
  }

  getCoolingID(id) {
   return  axios.get(API_URL + `/cooling?cooling.id=eq.${id}`);
  }

  getStorageID(id) {
    return axios.get(API_URL + `/storage?storage.id=eq.${id}`);
  }

  getGPUID(id) {
   return  axios.get(API_URL + `/gpu?gpu.id=eq.${id}`);
  }

  getMotherboard() {
     return axios.get(API_URL + `/motherboard?motherboardid`, {});
  }

  getCPU() {
    return axios.get(API_URL + `/processor?cpuid`, {});
  }

  getCase() {
        return  axios.get(API_URL + `/pc_case?caseid`, {});
  }

  getPSU() {
        return  axios.get(API_URL + `/psu?psuid`, {});
  }

  getRam() {
        return  axios.get(API_URL + `/ram?ramid`, {});
  }

  getCooling() {
        return  axios.get(API_URL + `/cooling?coolingid`, {});
  }

  getStorage() {
        return  axios.get(API_URL + `/storage?storageid`, {});
  }

  getGPU() {
       return   axios.get(API_URL + `/gpu?gpuid`, {});
  }

  createBuild(rcpu, rcase, rpsu, rmotherboard) {
    return axios.post(
      API_URL + `/saved_pc_builds`,
      {
         'totalprice': 0,
         'userid': getUserIdFromToken(getJwtToken()),
         'cpuid': rcpu,
         'caseid': rcase,
         'psuid': rpsu,
         'motherboardid': rmotherboard,
      },
      {
        headers: authHeader(),
      }
    );
  }
  
  addBuildGPU(rgpu, rbuildid) {
    return axios.post( 
        API_URL + `/hasgpu`, 
        { 
          'gpuid': rgpu, 
          'buildid': rbuildid,
        }, 
        { headers: authHeader(), } );
  }

  addBuildStorage(rstorage, rbuildid) {
    return axios.post( 
        API_URL + "/hasstorage", 
        { 
          'storageid': rstorage,
          'buildid': rbuildid, 
        }, 
        { headers: authHeader(), } ); 
  }

  addBuildCooling(rcooling, rbuildid) {
    return axios.post( 
        API_URL + "/hascooling", 
        { 
          'coolingid': rcooling,
          'buildid': rbuildid, 
        }, 
        { headers: authHeader(), } );
  }

  addBuildRam(rram, rbuildid) {
    return axios.post( 
        API_URL + "/hasram", 
        { 
          'ramid': rram,
          'buildid': rbuildid,
        }, 
        { headers: authHeader(), } );
  }

 updateBuildGPU(rgpu, rbuildid) {
    return axios.patch( 
        API_URL + `/hasgpu`, 
        { 
          'gpuid': rgpu, 
          'buildid': rbuildid,
        }, 
        { headers: authHeader(), } );
  }

  updateBuildStorage(rstorage, rbuildid) {
    return axios.patch( 
        API_URL + "/hasstorage", 
        { 
          'storageid': rstorage,
          'buildid': rbuildid, 
        }, 
        { headers: authHeader(), } ); 
  }

  updateBuildCooling(rcooling, rbuildid) {
    return axios.patch( 
        API_URL + "/hascooling", 
        { 
          'coolingid': rcooling,
          'buildid': rbuildid, 
        }, 
        { headers: authHeader(), } );
  }

  updateBuildRam(rram, rbuildid) {
    return axios.patch( 
        API_URL + "/hasram", 
        { 
          'ramid': rram,
          'buildid': rbuildid,
        }, 
        { headers: authHeader(), } );
  }

  updateBuild(buildid, rcpu, rcase, rpsu, rmotherboard) {
    return axios.patch(
      API_URL + `/saved_pc_builds?buildid=eq.${buildid}`,
      {
         'totalprice': 10000,
         'userid': getUserIdFromToken(getJwtToken()),
         'cpuid': rcpu,
         'caseid': rcase,
         'psuid': rpsu,
         'motherboardid': rmotherboard,
      },
      {
        headers: authHeader(),
      }
    );

  }

  deleteBuild(id) {
    return axios.delete(API_URL + `/saved_pc_builds?buildid=eq.${id}`, {
      headers: authHeader(),
    });
  }

  publishArticle(id) {
    return axios.post(
      API_URL + "/rpc/publish",
      { id: id },
      {
        headers: authHeader(),
      }
    );
  }

  login(username, password) {
    return axios.post(API_URL + "/rpc/login", { username, password });
  }

  signup( email, password, username, lastname, firstname) {
    return axios.post(API_URL + "/rpc/signup", { email, password, username, lastname, firstname });  }
}

export default new Api();
