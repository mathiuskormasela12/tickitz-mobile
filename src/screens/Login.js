// ===== Home
// import all modules
import React, {Fragment} from 'react';
import {ScrollView} from 'react-native';
import FlashMessage from 'react-native-flash-message';

// import all components
import {AuthHeader, Hero, LoginForm, Loading} from '../components';

function Login(props) {
  return (
    <Fragment>
      <ScrollView>
        <Hero>
          <AuthHeader {...props} />
          <LoginForm {...props} />
        </Hero>
      </ScrollView>
      <Loading />
      <FlashMessage position="top" />
    </Fragment>
  );
}

export default Login;
