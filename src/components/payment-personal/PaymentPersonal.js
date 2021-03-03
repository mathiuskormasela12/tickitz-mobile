// ===== Payment
// import all modules
import React, {Fragment} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {showMessage} from 'react-native-flash-message';
import http from '../../services/Services';
import append from '../../helpers/append';
import {PHOTO_URL} from '@env';

// import actions
import {setInput, setMessage} from '../../redux/actions/transaction';
import loading from '../../redux/actions/loading';

// import all components
import {SimpleCard} from '../';
import TextField from '../text-field/TextField';
import PhoneField from '../phone-field/PhoneField';
import Button from '../button/Button';

// import img
import Warning from '../../assets/img/warning.svg';
import push from '../../helpers/push';

export function PaymentPersonal(props) {
  const state = useSelector(state => state.transaction);
  const token = useSelector(state => state.auth.token);

  const dispatch = useDispatch();

  const handleInput = (name, value) => {
    dispatch(setInput(name, value));
  }

  const order = async () => {
    if(!state.paymentMethod) {
      showMessage({
        message: 'Please choose your payment method',
        type: 'warning',
        duration: 3000,
        hideOnPress: true
      });
    } else if(!state.fullName || !state.email || !state.phoneNumber) {
      dispatch(setMessage("Form can't be empty", 'warning'));
    } else if (state.email.match(/[^@$a-z0-9.]/gi) || !state.email.match(/@\b/g) || state.email.match(/\s/) || state.email.match(/\b[0-9]/) || !state.email.split('@').pop().includes('.')) {
      dispatch(setMessage("Incorrect email", 'warning')); 
    } else if(state.phoneNumber.match(/[a-z]/gi) || state.phoneNumber.match(/[^0-9]/gi)) {
      dispatch(setMessage("Incorrect phone number", 'warning')); 
    } else {
      dispatch(setMessage(null, null))
      dispatch(loading());
      const formData = new URLSearchParams();
        append(formData, {
          showTimeId: state.showTimeId,
          timeId: state.timeId,
          cinemaId: state.cinemaId,
          totalPayment: state.totalPayment,
          paymentMethod: state.paymentMethod,
          seats: state.seats.join(', '),
          movieId: state.movieId,
          showTimeDate: state.showTimeDate,
          ticketTime: state.time,
          cinemaName: state.cinemaName,
          cinemaPoster: state.cinemaPoster.replace(PHOTO_URL, ''),
          cinemaCity: state.cinemaCity,
          movieTitle: state.movieTitle,
        })
      try {
        const response = await http.buyTicket(token, formData);
        dispatch(loading());
        showMessage({
          message: response.data.message,
          type: 'success',
          duration: 3000,
          hideOnPress: true
        });
        push(props, 'Ticket');
      } catch (err) {
        console.log(err);
        dispatch(loading());
        showMessage({
          message: err.response.data.message,
          type: 'warning',
          duration: 3000,
          hideOnPress: true
        });
      }
    }
  }
  return (
    <Fragment>
      <View style={style.container}>
        <View style={style.header}>
          <Text style={style.title}>Personal Info</Text>
        </View>
        <View>
          <SimpleCard style={style.card}>
            <View style={style.containerStatic}>
              <View style={style.row}>
                <View style={style.col}>
                  <View style={style.control}>
                    <Text style={style.label}>Full Name</Text>
                    <View style={style.field}>
                      <TextField
                        placeholder="Write Your Full Name"
                        placeholderColor="#A0A3BD"
                        height="50px"
                        onChangeText={(value) => handleInput('fullName', value)}
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
                        onChangeText={(value) => handleInput('email', value)}
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
                        onChangeText={(value) => handleInput('phoneNumber', value)}
                      />
                    </View>
                  </View>
                </View>
              </View>
              {(state.message) && (
                <View style={[style.row, style.alertMargin]}>
                  <View style={style.col}>
                    <View style={style.alert}>
                      <View style={style.alertIcon}>
                        <Warning size={14} />
                      </View>
                      <View style={style.alertContent}>
                        <Text style={style.alertText}>
                          {state.message || 'Please fill the form'}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              )}
            </View>
          </SimpleCard>
        </View>
        <View style={[style.row, style.btnMargin]}>
          <View style={style.col}>
            <Button
              height="55px"
              width="100%"
              primary
              onPress={order}>
              Pay Your Order
            </Button>
          </View>
        </View>
      </View>
    </Fragment>
  );
}

const style = StyleSheet.create({
  container: {
    width: (90 / 100) * Dimensions.get('screen').width,
    marginTop: 40,
    marginBottom: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  alert: {
    width: '100%',
    paddingVertical: 20,
    borderRadius: 6,
    flexDirection: 'row',
    backgroundColor: 'rgba(244, 183, 64, 0.3)',
  },
  alertIcon: {
    flex: 1,
    alignItems: 'center',
  },
  alertContent: {
    flex: 4,
  },
  alertText: {
    color: '#4E4B66',
    fontSize: 16,
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
  title: {
    color: '#14142B',
    fontSize: 20,
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
  alertMargin: {
    marginTop: 10,
  },
  btnMargin: {
    marginTop: 10,
  },
});
