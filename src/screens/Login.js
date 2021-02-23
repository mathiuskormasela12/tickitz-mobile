// ===== Home
// import all modules
import React, {Fragment} from 'react';
import {ScrollView} from 'react-native';

// import all components
import {AuthHeader, Hero, LoginForm} from '../components';

function Login(props) {
  return (
    <Fragment>
      <ScrollView>
        <Hero>
          <AuthHeader />
          <LoginForm {...props} />
        </Hero>
      </ScrollView>
    </Fragment>
  );
}

export default Login;
