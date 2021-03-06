// ===== App
// import all modules
import React, {Fragment} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import persistedStore from './src/redux/store';
import PushNotification from 'react-native-push-notification';

// import StackScreen
import StackScreen from './StackScreen';

PushNotification.createChannel(
  {
    channelId: "general",
    channelName: "General Notification",
    channelDescription: "A channel to categorise your notifications",
    playSound: false, 
    soundName: "default",
    importance: 4, 
    vibrate: true,
  },
  (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
);

export default function App() {
  const {persistor, store} = persistedStore();
  return (
    <Fragment>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StackScreen />
        </PersistGate>
      </Provider>
    </Fragment>
  );
}
