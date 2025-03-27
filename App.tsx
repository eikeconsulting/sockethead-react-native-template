import React from 'react'
import Routes from '@app/routes'
import { Provider } from "react-redux";
import { persistor, store } from '@app/store/store';
import { PersistGate } from "redux-persist/integration/react";
import { TextField } from '@app/components';
import { View } from 'react-native';

const App = () => {
  return(
    <View
    style={{margin:20}}>
    <TextField
     title={'name'}
    />
    </View>
  )
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  )
}

export default App