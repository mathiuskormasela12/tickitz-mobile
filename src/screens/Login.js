// ===== Home
// import all modules
import React, {Fragment, Component} from 'react';
import {ScrollView} from 'react-native';

// import all components
import {AuthHeader, Hero, LoginForm} from '../components';

class Login extends Component {
  render() {
    return (
      <Fragment>
        <ScrollView>
          <Hero>
            <AuthHeader />
            <LoginForm {...this.props} />
          </Hero>
        </ScrollView>
      </Fragment>
    );
  }
}

export default Login;
