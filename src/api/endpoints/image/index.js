import axios from "axios";
import endpoints from "./endpoints";

export function getImages() {
  const config = endpoints.getImages();
  return axios(config);
}
