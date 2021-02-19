// ===== TextField Style
// import styled component
import React, {Fragment} from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import {peekPassword} from '../../redux/actions/auth';

// import styles
import {PasswordFieldStyle, Container, Edge} from './styled';

export default function PasswordField(props) {
  const dispatch = useDispatch();
  const shown = useSelector((state) => state.auth.showPassword);

  const handlePeekPassword = () => {
    dispatch(peekPassword());
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
