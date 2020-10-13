import React from 'react';
import {Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';
import {Provider} from 'react-redux';
import {store} from './redux';

const App = () => {
  const entireScreenWidth = Dimensions.get('window').width;
  EStyleSheet.build({$rem: entireScreenWidth / 320});
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
