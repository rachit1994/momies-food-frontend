/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectState = state => state.register || initialState;

const getState = () =>
  createSelector(
    selectState,
    homeState => homeState,
  );

export { selectState, getState };
