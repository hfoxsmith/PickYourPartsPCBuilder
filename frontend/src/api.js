import axios from "axios";
import { authHeader, getJwtToken, getUserIdFromToken } from "./auth";

const API_URL = "http://54.153.113.42:8000";

class Api {

  getUserBuilds() {
          let temp = getUserIdFromToken(getJwtToken());
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

  addArticle(article) {
    return axios.post(
      API_URL + "/articles",
      {
        ...article,
        // add user id from JWT token
        userid: getUserIdFromToken(getJwtToken()),
      },
      {
        headers: authHeader(),
      }
    );
  }

  updateArticle(article) {
    return axios.patch(
      API_URL + `/articles?articleid=eq.${article.articleid}`,
      article,
      {
        headers: authHeader(),
      }
    );
  }

  deleteArticle(id) {
    return axios.delete(API_URL + `/articles?articleid=eq.${id}`, {
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
