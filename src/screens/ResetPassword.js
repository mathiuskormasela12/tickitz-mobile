// ===== Reset Password
// import all modules
import React, {Fragment} from 'react';
import {ScrollView} from 'react-native';

// import all components
import {AuthHeader, Hero, ResetForm} from '../components';

function ResetPassword(props) {
  return (
    <Fragment>
      <ScrollView>
        <Hero fluid>
          <AuthHeader />
          <ResetForm {...props} />
        </Hero>
      </ScrollView>
    </Fragment>
  );
}

export default ResetPassword;
