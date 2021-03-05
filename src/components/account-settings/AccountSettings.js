// ===== Order Header
// import all modules
import React, {Component, Fragment} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import { connect } from 'react-redux';
import http from '../../services/Services';
import {showMessage} from 'react-native-flash-message';
import append from '../../helpers/append';
import jwtdecode from 'jwt-decode';

// import actions
import {refresh} from '../../redux/actions/auth';
import loading from '../../redux/actions/loading';

// import all components
import {SimpleCard} from '../';
import TextField from '../text-field/TextField';
import PhoneField from '../phone-field/PhoneField';
import PasswordField from '../password-field/PasswordField';
import Button from '../button/Button';

class AccountSettingsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: null,
      passwordConfirm: null,
      fullName: this.props.fullName,
      email: this.props.email,
      phoneNumber: this.props.phoneNumber,
    }
  }

  fetchData = async () => {
    try {
      const {data} = await http.getUserDetail(this.props.token);
      this.setState({
        fullName: data.results.first_name && `${data.results.first_name}${data.results.last_name && ` ${data.results.last_name && data.results.last_name}`}`,
        email: data.results.email,
        phoneNumber: data.results.phone,
      })
      console.log('======== STATE =========')
      console.log(this.state);
      console.log(data.results)
      console.log('======== STATE =========')
    } catch (err) {
      console.log(err);
      showMessage({
        message: err.response.data.message,
        type: 'warning',
        duration: 2000,
        hideOnPress: true
      });
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if(this.props.isRefresh !== prevProps.isRefresh) {
      this.fetchData();
    }
  }

  handleInput = (name, value) => {
    this.setState({
      [name]: value,
    })
  }

  editProfile = async () => {
    const email = this.state.email.match(/[^@$a-z0-9.]/gi)
    if(!this.state.fullName || !this.state.phoneNumber || !this.state.email) {
      showMessage({
        message: "Form can't be empty",
        type: 'warning',
        duration: 2000,
        hideOnPress: true
      });
    } else if (email || !this.state.email.match(/@\b/g) || this.state.email.match(/\s/) || this.state.email.match(/\b[0-9]/) || !this.state.email.split('@').pop().includes('.')) {
      showMessage({
        message: 'Incorect email',
        type: 'warning',
        duration: 2000,
        hideOnPress: true
      });
    } else if(this.state.phoneNumber.match(/[^0-9]/gi) !== null) {
      showMessage({
        message: 'Incorect phone number',
        type: 'warning',
        duration: 2000,
        hideOnPress: true
      });
    } else {
      this.props.loading();
      const formData = new FormData();
      append(formData, {
        first_name: this.state.fullName ? this.state.fullName.split(' ')[0] : '',
        last_name: this.state.fullName ? this.state.fullName.split(' ')[1] : '',
        phone: this.state.phoneNumber,
        email: this.state.email,
      })
      try {
        const {data} = await http.editUserDetail(this.props.token, formData);
        this.props.loading();
        showMessage({
          message: data.message,
          type: 'success',
          duration: 2000,
          hideOnPress: true
        });
        this.props.refresh();
      } catch (err) {
        console.log(err.response.data);
        this.props.loading();
        showMessage({
          message: err.response.data.message,
          type: 'warning',
          duration: 2000,
          hideOnPress: true
        })
        
      }
    }
  }

  handleEditPassword = async () => {
    if(!this.state.password || !this.state.passwordConfirm) {
      showMessage({
        message: "Form can't be empty",
        type: 'warning',
        duration: 2000,
        hideOnPress: true
      });
    } else if(this.state.password !== this.state.passwordConfirm) {
      showMessage({
        message: "Password doesn't match",
        type: 'warning',
        duration: 2000,
        hideOnPress: true
      });
    } else if (this.state.password.length > 15 || this.state.password.length < 5) {
      showMessage({
        message: 'Password min 5 character and max 15 character',
        type: 'warning',
        duration: 2000,
        hideOnPress: true
      });
    } else if (this.state.password.match(/[a-z]/g) === null || this.state.password.match(/\d/g) === null || this.state.password.match(/[A-Z]/g) === null || this.state.password.match(/[^a-z0-9]/gi) === null) {
      showMessage({
        message: 'Password must include lower case and uppercase letters, numbers and symbol',
        type: 'warning',
        duration: 2000,
        hideOnPress: true
      });
    } 
    else {
      this.props.loading();
      const formData = new FormData();
      append(formData, {
        password: this.state.password
      })
      try {
        const {data} = await http.resetPassword(formData, jwtdecode(this.props.token).id, this.props.email);
        this.props.loading();
        showMessage({
          message: data.message,
          type: 'success',
          duration: 2000,
          hideOnPress: true
        });
        this.props.refresh();
      } catch (err) {
        console.log(err.response.data);
        this.props.loading();
        showMessage({
          message: err.response.data.message,
          type: 'warning',
          duration: 2000,
          hideOnPress: true
        })
      }
    }
  }

  render() {
    return (
      <Fragment>
        <View style={style.container}>
          <SimpleCard style={[style.card, style.cardMargin]}>
            <View style={style.containerStatic}>
              <View style={[style.row, style.titleHeader]}>
                <View style={style.col}>
                  <Text style={style.title}>Details Information</Text>
                </View>
              </View>
              <View style={style.row}>
                <View style={style.col}>
                  <View style={style.control}>
                    <Text style={style.label}>Full Name</Text>
                    <View style={style.field}>
                      <TextField
                        placeholder="Write Your Full Name"
                        placeholderColor="#A0A3BD"
                        height="50px"
                        value={this.state.fullName}
                        onChangeText={(value) => this.handleInput('fullName', value)}
                      />
                    </View>
                  </View>
                </View>
                <View style={style.col}>
                  <View style={style.control}>
                    <Text style={style.label}>Email</Text>
                    <View style={style.field}>
                      <TextField
                        placeholder="Write Your Email"
                        placeholderColor="#A0A3BD"
                        height="50px"
                        keyboardType="email-address"
                        value={this.state.email}
                        onChangeText={(value) => this.handleInput('email', value)}
                      />
                    </View>
                  </View>
                </View>
                <View style={style.col}>
                  <View style={style.control}>
                    <Text style={style.label}>Phone Number</Text>
                    <View style={style.field}>
                      <PhoneField
                        placeholder="Write Your Phone Number"
                        placeholderColor="#A0A3BD"
                        height={50}
                        value={this.state.phoneNumber}
                        onChangeText={(value) => this.handleInput('phoneNumber', value)}
                      />
                    </View>
                  </View>
                </View>
                <View style={style.col}>
                  <Button height="55px" width="100%" primary onPress={this.editProfile}>
                    Update Changes
                  </Button>
                </View>
              </View>
            </View>
          </SimpleCard>
          <SimpleCard style={style.card}>
            <View style={style.containerStatic}>
              <View style={[style.row, style.titleHeader]}>
                <View style={style.col}>
                  <Text style={style.title}>Account and Privacy</Text>
                </View>
              </View>
              <View style={[style.control, style.passwordField]}>
                <Text style={style.label}>New Password</Text>
                <View style={style.field}>
                  <PasswordField
                    height="60px"
                    secureTextEntry
                    placeholderTextColor="#A0A3BD"
                    placeholder="Write your password"
                    onChangeText={(value) => this.handleInput('password', value)}
                  />
                </View>
              </View>
              <View style={[style.control, style.passwordField]}>
                <Text style={style.label}>Confirm</Text>
                <View style={style.field}>
                  <PasswordField
                    height="60px"
                    secureTextEntry
                    placeholderTextColor="#A0A3BD"
                    placeholder="Write your password"
                    onChangeText={(value) => this.handleInput('passwordConfirm', value)}
                  />
                </View>
              </View>
              <View style={style.control}>
                <Button height="55px" width="100%" primary onPress={() => this.handleEditPassword()}>
                  Update Changes
                </Button>
              </View>
            </View>
          </SimpleCard>
        </View>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.auth
});

const mapDispatchToProps = {
  loading,
  refresh
}

const AccountSettings = connect(mapStateToProps, mapDispatchToProps)(AccountSettingsComponent);
export default AccountSettings;

const style = StyleSheet.create({
  container: {
    width: (90 / 100) * Dimensions.get('screen').width,
    marginTop: 40,
    marginBottom: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'space-between',
    justifyContent: 'space-between',
  },
  col: {
    width: '100%',
    marginBottom: 10,
  },
  containerStatic: {
    width: '85%',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  header: {
    marginBottom: 20,
  },
  card: {
    paddingVertical: 30,
  },
  control: {
    marginBottom: 15,
  },
  label: {
    color: '#696F79',
    fontSize: 16,
    marginBottom: 15,
  },
  btnMargin: {
    marginTop: 10,
  },
  title: {
    color: '#14142B',
    fontSize: 18,
  },
  titleHeader: {
    marginBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#DEDEDE',
    borderStyle: 'solid',
  },
  cardMargin: {
    marginBottom: 40,
  },
  passwordField: {
    marginBottom: 25,
  },
});
