// ===== App
// import all modules
import React, {Fragment} from 'react';
import {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import persistedStore from './src/redux/store';
import RNBootSplash from 'react-native-bootsplash';
import FlashMessage from "react-native-flash-message";

// import all screens
import Register from './src/screens/Register';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import MovieDetail from './src/screens/MovieDetail';
import ResetPassword from './src/screens/ResetPassword';
import Order from './src/screens/Order';
import Payment from './src/screens/Payment';
import Ticket from './src/screens/Ticket';
import Profile from './src/screens/Profile';
import Navbar from './src/components/navbar/Navbar';

// create stack
const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);

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
                name="Order"
                component={Order}
                options={{header: () => <Navbar />}}
              />
              <Stack.Screen
                name="Ticket"
                component={Ticket}
                options={{header: () => <Navbar />}}
              />
              <Stack.Screen
                name="Detail"
                component={MovieDetail}
                options={{header: () => <Navbar />}}
              />
              <Stack.Screen
                name="Payment"
                component={Payment}
                options={{header: () => <Navbar />}}
              />
              <Stack.Screen
                name="Profile"
                component={Profile}
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
          <FlashMessage position="top" />
        </PersistGate>
      </Provider>
    </Fragment>
  );
}
