// ===== Header
// import all modules
import React, {Component} from 'react';
import {View, TouchableWithoutFeedback} from 'react-native';
import {connect} from 'react-redux';
import { showMessage } from "react-native-flash-message";
import http from '../../services/Services'
import append from '../../helpers/append';
import push from '../../helpers/push';

// import actions
import loading from '../../redux/actions/loading';

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

class RegisterFormComponent extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      type: null,
      message: null,
    }
    this.handlePush = this.handlePush.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handlePush() {
    this.props.navigation.navigate('Login');
  };

  handleInput(name, value) {
    this.setState({
      [name]: value
    })
  }

  async handleSubmit() {
    this.props.loading()
    const formData = new FormData()
    append(formData, {
      email: this.state.email,
      password: this.state.password,
      password_confirm: this.state.password,
      role: 'user'
    })
    try {
      const {data} = await http.register(formData)
      this.props.loading()
      showMessage({
        message: data.message,
        type: data.success ? 'success' : 'warning',
        duration: 2000,
        hideOnPress: true
      })
      setTimeout(() => {
        push(this.props, 'Login')
      }, 2000)
    } catch (err) {
      this.props.loading()
      console.log(err)
      showMessage({
        message: err.response.data.message,
        type: err.response.data.success ? 'success' : 'warning',
        duration: 3000,
        hideOnPress: true
      })
    }
  }

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
                  onChangeText={(event) => this.handleInput('email', event)}
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
                  onChangeText={(event) => this.handleInput('password', event)}
                />
              </Field>
            </Control>
            <Control>
              <Button primary width="100%" height="62px" onPress={this.handleSubmit}>
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

const mapStateToProps = (state) => ({
  ...state.loading
})

const mapDispatchToProps = {
  loading
}

export const RegisterForm = connect(mapStateToProps, mapDispatchToProps)(RegisterFormComponent)
