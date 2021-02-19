// ===== Header
// import all modules
import React, {Component} from 'react';
import {View, TouchableWithoutFeedback} from 'react-native';

// import styles
import {
  Form,
  Title,
  Control,
  Label,
  Field,
  TextGray,
  Link,
  LinkControl,
  flexStyle,
} from './styles';

// import all components
import Container from '../container/Container';
import TextField from '../text-field/TextField';
import PasswordField from '../password-field/PasswordField';
import Button from '../button/Button';
import Line from '../line/Line';
import SocialMedia from '../social-media/SocialMedia';

class RegisterForm extends Component {
  handlePush = () => {
    this.props.navigation.navigate('Login');
  };

  render() {
    return (
      <View style={flexStyle.flexOne}>
        <Container style={flexStyle.flexOne}>
          <Form style={flexStyle.flexOne}>
            <Title>Sign Up</Title>
            <Control>
              <Label>Email</Label>
              <Field>
                <TextField
                  height="62px"
                  keyboardType="email-address"
                  placeholderTextColor="#A0A3BD"
                  placeholder="Write your email"
                />
              </Field>
            </Control>
            <Control>
              <Label>Password</Label>
              <Field>
                <PasswordField
                  height="62px"
                  secureTextEntry
                  placeholderTextColor="#A0A3BD"
                  placeholder="Write your password"
                />
              </Field>
            </Control>
            <Control>
              <Button primary width="100%" height="62px">
                Join For Free
              </Button>
            </Control>
            <Control>
              <LinkControl>
                <TextGray>Do you already have an account?</TextGray>
                <TouchableWithoutFeedback>
                  <Link onPress={this.handlePush}>Log In</Link>
                </TouchableWithoutFeedback>
              </LinkControl>
            </Control>
            <Line />
            <SocialMedia />
          </Form>
        </Container>
      </View>
    );
  }
}

export {RegisterForm};
