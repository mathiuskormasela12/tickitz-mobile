// ===== TextField Style
// import styled component
import React, {Fragment, useState} from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// import styles
import {PasswordFieldStyle, Container, Edge} from './styled';

export default function PasswordField(props) {
  const [shown, setShown] = useState(false);
  const handlePeekPassword = () => {
    setShown((currentShown) => !currentShown);
  };

  return (
    <Fragment>
      <Container>
        <PasswordFieldStyle {...props} secureTextEntry={!shown} />
        <TouchableWithoutFeedback onPress={handlePeekPassword}>
          <Edge>
            {shown ? (
              <Icon name="eye-off-outline" color="#A0A3BD" size={25} />
            ) : (
              <Icon name="eye-outline" color="#A0A3BD" size={25} />
            )}
          </Edge>
        </TouchableWithoutFeedback>
      </Container>
    </Fragment>
  );
}
