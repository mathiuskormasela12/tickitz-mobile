// ===== Reset Password
// import all modules
import React, {Fragment, Component} from 'react';
import {ScrollView} from 'react-native';

// import all components
import {AuthHeader, Hero, ResetForm} from '../components';

class ResetPassword extends Component {
  render() {
    return (
      <Fragment>
        <ScrollView>
          <Hero>
            <AuthHeader />
            <ResetForm {...this.props} />
          </Hero>
        </ScrollView>
      </Fragment>
    );
  }
}

export default ResetPassword;
