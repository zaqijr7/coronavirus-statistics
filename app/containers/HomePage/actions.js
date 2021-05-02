import { GET_DATA_COVID, ERROR_GET_DATA_COVID } from './constants';

export function getDataCovid(data) {
  return {
    type: GET_DATA_COVID,
    payload: data,
  };
}

export function errorGetDataCovid(data) {
  return {
    type: ERROR_GET_DATA_COVID,
    payload: data,
  };
}
