import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/screen/LoginScreen';
import HomeScreen from './src/screen/HomeScreen';
import CreateAccount from './src/screen/CreateAccount';
import ForgotPassword from './src/screen/ForgotPassword';

const RootStack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <RootStack.Navigator headerMode='none' initialRouteName='LoginScreen'>
          <RootStack.Screen name='LoginScreen' component={LoginScreen} />
          <RootStack.Screen name='HomeScreen' component={HomeScreen} />
          <RootStack.Screen name='CreateAccount' component={CreateAccount} />
          <RootStack.Screen name='ForgotPassword' component={ForgotPassword} />
        </RootStack.Navigator>
      </NavigationContainer>
    );
  }
};



export default App;
