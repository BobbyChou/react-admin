/*
 * @Author: zhou teng
 * @Date: 2021-03-11 18:51:07
 * @LastEditTime: 2021-03-13 11:14:29
 */
import { createStore } from 'redux'
import { combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import MessageReducer from './../pages/Message/store/reducer'

const persistConfig = {
  key: 'root',
  storage: storage
}

const store: any = createStore(persistReducer(persistConfig, combineReducers({
  MessageReducer
})))
const persistor: any = persistStore(store)

export {
  store,
  persistor
}
