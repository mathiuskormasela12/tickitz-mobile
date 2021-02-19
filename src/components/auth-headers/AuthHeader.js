// ===== Header
// import all modules
import React, {Fragment, Component} from 'react';

// import styles
import {Image, Navbar} from './styles';

// import all components
import Container from '../container/Container';

// import assets
import logo from '../../assets/img/logo.png';

class AuthHeader extends Component {
  render() {
    return (
      <Fragment>
        <Navbar>
          <Container>
            <Image source={logo} />
          </Container>
        </Navbar>
      </Fragment>
    );
  }
}

export {AuthHeader};
