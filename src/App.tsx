/*
 * @Author: zhou teng
 * @Date: 2021-04-07 22:59:02
 * @LastEditTime: 2021-04-20 14:58:03
 */
import React from 'react'
import Layout from './layout'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { store, persistor } from './store'

const User = React.createContext({})

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <User.Provider value={{
          name: 'zhouteng',
          age: 26,
          sex: 'male'
        }}>
          <div className="App">
            <Layout />
          </div>
        </User.Provider>
      </PersistGate>
    </Provider>
  );
}

export default App;
