// ===== Home
// import all modules
import React, {Fragment, Component} from 'react';
import {ScrollView} from 'react-native';

// import all components
import {AuthHeader, Hero, RegisterForm} from '../components';

class Register extends Component {
  render() {
    return (
      <Fragment>
        <ScrollView>
          <Hero>
            <AuthHeader />
            <RegisterForm {...this.props} />
          </Hero>
        </ScrollView>
      </Fragment>
    );
  }
}

export default Register;
