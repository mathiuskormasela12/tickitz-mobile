// ===== Header
// import all modules
import React, {Fragment, Component} from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import push from '../../helpers/push';

// import styles
import {Image, Navbar} from './styles';

// import all components
import Container from '../container/Container';

// import assets
import logo from '../../assets/img/logo.png';

class AuthHeader extends Component {
  render() {
    console.log('MAAA');
    console.log(Object.keys(this.props.navigation));
    return (
      <Fragment>
        <Navbar>
          <Container>
            <TouchableWithoutFeedback onPress={() => push(this.props, 'Home')}>
              <Image source={logo} />
            </TouchableWithoutFeedback>
          </Container>
        </Navbar>
      </Fragment>
    );
  }
}

export {AuthHeader};
