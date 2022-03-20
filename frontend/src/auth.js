import jwt_decode from "jwt-decode";

export function getJwtToken() {
  return localStorage.getItem("accessToken");
}

export function getUserIdFromToken(token) {
  const decoded = jwt_decode(token);
  console.log(decoded);
  return decoded.isadmin;
}

export function setJwtToken(token) {
  localStorage.setItem("accessToken", token);
}

export function deleteJwtToken() {
  localStorage.removeItem("accessToken");
}

export function authHeader() {
  let accessToken = getJwtToken();

  if (accessToken) {
    return { Authorization: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW5zIn0.XRNmHd9WhODHbC4l5Qt4rmOMATwnKkhPbuBnktBjzOo" };
    // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjF9.tX216fldKbYbkSgcx7vw_ghCp0mNYityXSaDYWu7iZo" };  
    //"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW5zIn0.XRNmHd9WhODHbC4l5Qt4rmOMATwnKkhPbuBnktBjzOo" };
  } else {
    return "unauthorized access";
  }
}
