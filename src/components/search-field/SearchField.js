// ===== TextField Style
// import styled component
import React, {Fragment} from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// import styles
import {SearchFieldStyle, Container, Edge} from './styled';

export default function SearchField(props) {
  return (
    <Fragment>
      <Container>
        <SearchFieldStyle {...props} />
        <TouchableWithoutFeedback>
          <Edge>
            <Icon name="search" size={18} color="#6E7191" />
          </Edge>
        </TouchableWithoutFeedback>
      </Container>
    </Fragment>
  );
}
