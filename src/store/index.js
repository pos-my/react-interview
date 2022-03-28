import storage from 'redux-persist/lib/storage'
import rootReducer from '../reducers'
import { persistReducer } from 'redux-persist'
import { createStore } from 'redux'

const persistConfig = {
    key: 'root',
    storage,
}
  
const persistedReducer = persistReducer(persistConfig, rootReducer)
let store = createStore(persistedReducer)

export default store;