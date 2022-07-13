import * as HttpService from "./http.service";
import { GET_SERVICE_BY_ID } from "./url.service";

export const getServiceById = (id) => {
  return HttpService.getWithOutAuth(GET_SERVICE_BY_ID({id}));
};
