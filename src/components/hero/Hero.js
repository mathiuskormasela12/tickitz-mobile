// ===== Container
// import all modules
import React, {Fragment, Component} from 'react';

// import all components
import {Hero as HeroStyle} from './styles';

class Hero extends Component {
  render() {
    return (
      <Fragment>
        <HeroStyle {...this.props}>{this.props.children}</HeroStyle>
      </Fragment>
    );
  }
}

export {Hero};
