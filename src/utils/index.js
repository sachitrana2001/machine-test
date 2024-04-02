import BaseService from "../services/BaseService";

export function getApi(endpoint, params) {
    return BaseService.get(endpoint, { params }).then((res) => res?.data);
  }
  
  export function postApi(endpoint, payload) {
    return BaseService.post(endpoint, payload).then((res) => res?.data);
  }
  