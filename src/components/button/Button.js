// ===== Button
// import all modules
import React, {Fragment} from 'react';

// import styles
import {Warpper, Text} from './styles';

export default function Button(props) {
  return (
    <Fragment>
      <Warpper {...props}>
        <Text {...props}>{props.children}</Text>
      </Warpper>
    </Fragment>
  );
}
