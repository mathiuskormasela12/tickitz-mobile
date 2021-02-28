// ===== Home
// import all modules
import React, {Fragment} from 'react';
import {ScrollView} from 'react-native';

// import all components
import {AuthHeader, Hero, RegisterForm, Loading} from '../components';

function Register(props) {
  return (
    <Fragment>
      <ScrollView>
        <Hero>
          <AuthHeader {...props} />
          <RegisterForm {...props} />
        </Hero>
      </ScrollView>
      <Loading />
    </Fragment>
  );
}

export default Register;
