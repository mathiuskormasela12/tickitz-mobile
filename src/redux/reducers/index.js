import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';
import auth from './auth';
import home from './home';
import loading from './loading';
import transaction from './transaction';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['auth'],
};

const persistConfig = {
  key: 'auth',
  storage: AsyncStorage,
  stateReconciler: hardSet,
};

const reducers = combineReducers({
  auth: persistReducer(persistConfig, auth),
  home,
  loading,
  transaction,
});

export default persistReducer(rootPersistConfig, reducers);
