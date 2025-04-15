import React, { useEffect } from 'react';
import Routes from '@app/routes';
import { Provider } from "react-redux";
import { persistor, store } from '@app/store/store';
import { PersistGate } from "redux-persist/integration/react";
import SplashScreen from "react-native-splash-screen";
import ErrorBoundary from 'react-native-error-boundary';
import { ErrorFallback } from '@app/components';

const App = () => {

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Routes />
        </ErrorBoundary>
      </PersistGate>
    </Provider>
  );
}

export default App;
