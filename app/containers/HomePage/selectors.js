/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectDataCovid = state => state.dataCovid || initialState;

const makeSelectDataCountry = () =>
  createSelector(
    selectDataCovid,
    state => state.dataCountry,
  );

export { selectDataCovid, makeSelectDataCountry };
