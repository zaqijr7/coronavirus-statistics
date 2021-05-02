import * as actions from './constants';
export const initialState = {
  dataCountry: null,
  errorGetData: false,
};

const dataCovid = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_DATA_COVID:
      return {
        ...state,
        dataCountry: action.payload,
      };
    case actions.ERROR_GET_DATA_COVID:
      return {
        ...state,
        errorGetData: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default dataCovid;
