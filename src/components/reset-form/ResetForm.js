// ===== Header
// import all modules
import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {showMessage} from 'react-native-flash-message';
import http from '../../services/Services';
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
  flexStyle,
  Subtitle,
} from './styles';

// import all components
import Container from '../container/Container';
import TextField from '../text-field/TextField';
import Button from '../button/Button';

class ResetFormComponent extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      type: null,
      message: null,
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(name, value) {
    this.setState({
      [name]: value,
    });
  }

  async handleSubmit() {
    this.props.loading();
    try {
      const {data} = await http.sendForgotPasswordLink(this.state.email);
      this.props.loading();
      showMessage({
        message: data.message,
        type: data.success ? 'success' : 'warning',
        duration: 2000,
        hideOnPress: true,
      });
      setTimeout(() => {
        push(this.props, 'Login');
      }, 2000);
    } catch (err) {
      this.props.loading();
      console.log(err);
      showMessage({
        message: err.response.data.message,
        type: err.response.data.success ? 'success' : 'warning',
        duration: 3000,
        hideOnPress: true,
      });
    }
  }
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
                  onChangeText={(event) => this.handleInput('email', event)}
                />
              </Field>
            </Control>
            <Control>
              <Button
                primary
                width="100%"
                height="62px"
                onPress={this.handleSubmit}>
                Active Now
              </Button>
            </Control>
          </Form>
        </Container>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.loading,
});

const mapDispatchToProps = {
  loading,
};

export const ResetForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResetFormComponent);
