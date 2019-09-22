import axios from "axios";

// Creating default base path for api
const api = axios.create({
  baseURL: "http://localhost:3000/api"
});

// these are set up in marker routes
export const insertMarker = payload => api.post("/marker", payload);
export const getAllMarkers = () => api.get("/markers");

const apis = {
  insertMarker,
  getAllMarkers
};

export default apis;

// TODO: Add other consts for markers if needed?
// http://52.64.156.148/
// baseURL: "http://localhost:3000/api"
