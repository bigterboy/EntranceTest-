import {combineReducers} from 'redux';
import Map from './map';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

// Base Reducer only a example for create new screen via script
import baseReducer from './baseReducer';

import loginReducer from './loginReducer';
import languageReducer from './languageReducer';
import userReducer from './userReducer';

const persistConfigApp = key => {
  return {
    key: key,
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel2,
  };
};

const reducers = {
  [Map.BASE_REDUCER]: persistReducer(
    persistConfigApp(Map.BASE_REDUCER),
    baseReducer,
  ), // only use for create base screen
  [Map.LOGIN_REDUCER]: persistReducer(
    persistConfigApp(Map.LOGIN_REDUCER),
    loginReducer,
  ),
  [Map.USER_REDUCER]: userReducer,
  [Map.LANGUAGE_REDUCER]: languageReducer,
};

export default combineReducers(reducers);
export {Map};
