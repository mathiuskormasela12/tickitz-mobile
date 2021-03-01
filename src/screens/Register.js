// ===== Home
// import all modules
import React, {Fragment} from 'react';
import {ScrollView} from 'react-native';

// import all components
import {AuthHeader, Hero, RegisterForm} from '../components';

function Register(props) {
  return (
    <Fragment>
      <ScrollView>
        <Hero>
          <AuthHeader {...props} />
          <RegisterForm {...props} />
        </Hero>
      </ScrollView>
    </Fragment>
  );
}

export default Register;
