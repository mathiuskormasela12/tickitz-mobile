// ===== Header
// import all modules
import React, {Component} from 'react';
import {View} from 'react-native';

// import styles
import {
  Form,
  Title,
  Control,
  Label,
  Field,
  flexStyle,
  Subtitle,
} from './styles';

// import all components
import Container from '../container/Container';
import TextField from '../text-field/TextField';
import Button from '../button/Button';

class ResetForm extends Component {
  render() {
    return (
      <View style={flexStyle.flexOne}>
        <Container style={flexStyle.flexOne}>
          <Form style={flexStyle.flexOne}>
            <Title>Forgot Password</Title>
            <Subtitle>we'll send a link to your email shortly</Subtitle>
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
              <Button primary width="100%" height="62px">
                Active Now
              </Button>
            </Control>
          </Form>
        </Container>
      </View>
    );
  }
}

export {ResetForm};
