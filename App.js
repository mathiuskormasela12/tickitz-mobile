// ===== App
// import all modules
import React, {Fragment} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import persistedStore from './src/redux/store';

// import all screens
import Register from './src/screens/Register';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import ResetPassword from './src/screens/ResetPassword';

// import navbar
import Navbar from './src/components/navbar/Navbar'

// create stack
const Stack = createStackNavigator();

export default function App() {
  const {persistor, store} = persistedStore();
  return (
    <Fragment>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{header: () => <Navbar />}}
              />
              <Stack.Screen
                name="Register"
                component={Register}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Login"
                component={Login}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="ResetPassword"
                component={ResetPassword}
                options={{headerShown: false}}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </Fragment>
  );
}
