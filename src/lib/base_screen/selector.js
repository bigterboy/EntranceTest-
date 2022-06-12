import {createSelector} from 'reselect';
import {Map} from '@reducers';

const getLanguage = state => state[Map.LANGUAGE];

export default createSelector([getLanguage], language => ({...language}));
