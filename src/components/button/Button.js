// ===== Button
// import all modules
import React, {Fragment} from 'react';

// import styles
import {Warpper, Text} from './styles';

export default function Button(props) {
  return (
    <Fragment>
      <Warpper {...props}>
        <Text primary={props.primary} outline={props.outline}>
          {props.children}
        </Text>
      </Warpper>
    </Fragment>
  );
}
