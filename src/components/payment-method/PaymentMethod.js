// ===== Payment
// import all modules
import React, {Fragment} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import * as variables from '../../style/variable';
import {useDispatch} from 'react-redux';

// import actions
import {setPaymentMethod} from '../../redux/actions/transaction';

// import all components
import {SimpleCard} from '../';
import Line from '../line/Line';

// import img
import paypal from '../../assets/img/paypal.png';
import googlepay from '../../assets/img/googlepay.png';
import gopay from '../../assets/img/gopay.png';
import dana from '../../assets/img/dana.png';
import ovo from '../../assets/img/ovo.png';
import visa from '../../assets/img/visa.png';

export function PaymentMethod() {
  const dispatch = useDispatch();

  const setPayment = (value) => {
    dispatch(setPaymentMethod(value));
  }

  return (
    <Fragment>
      <View style={style.container}>
        <View style={style.header}>
          <Text style={style.title}>Payment Method</Text>
        </View>
        <View>
          <SimpleCard style={style.card}>
            <View style={style.containerStatic}>
              <View style={style.row}>
                <View style={style.col}>
                  <TouchableOpacity onPress={() => setPayment('Google Pay')}>
                    <SimpleCard style={style.cardImg}>
                      <Image style={style.img} source={googlepay} />
                    </SimpleCard>
                  </TouchableOpacity>
                </View>
                <View style={style.col}>
                  <TouchableOpacity onPress={() => setPayment('Visa')}>
                    <SimpleCard style={style.cardImg}>
                      <Image style={style.img} source={visa} />
                    </SimpleCard>
                  </TouchableOpacity>
                </View>
                <View style={style.col}>
                  <TouchableOpacity onPress={() => setPayment('GoPay')}>
                    <SimpleCard style={style.cardImg}>
                      <Image style={style.img} source={gopay} />
                    </SimpleCard>
                  </TouchableOpacity>
                </View>
                <View style={style.col}>
                  <TouchableOpacity onPress={() => setPayment('PayPal')}>
                    <SimpleCard style={style.cardImg}>
                      <Image style={style.img} source={paypal} />
                    </SimpleCard>
                  </TouchableOpacity>
                </View>
                <View style={style.col}>
                  <TouchableOpacity onPress={() => setPayment('Ovo')}>
                    <SimpleCard style={style.cardImg}>
                      <Image style={style.img} source={ovo} />
                    </SimpleCard>
                  </TouchableOpacity>
                </View>
                <View style={style.col}>
                  <TouchableOpacity onPress={() => setPayment('Dana')}>
                    <SimpleCard style={style.cardImg}>
                      <Image style={style.img} source={dana} />
                    </SimpleCard>
                  </TouchableOpacity>
                </View>
              </View>
              <Line style={style.line} />
              <Text style={style.text}>
                Pay via cash.
                <Text style={style.primary}> See how it work</Text>
              </Text>
            </View>
          </SimpleCard>
        </View>
      </View>
    </Fragment>
  );
}

const style = StyleSheet.create({
  container: {
    width: (90 / 100) * Dimensions.get('screen').width,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 90,
    alignContent: 'space-between',
    justifyContent: 'space-between',
  },
  col: {
    width: '31%',
  },
  cardImg: {
    alignItems: 'center',
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: '#DEDEDE',
    borderStyle: 'solid',
  },
  img: {
    resizeMode: 'contain',
    width: 40,
    height: 25,
  },
  containerStatic: {
    width: '85%',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  header: {
    marginTop: 70,
    marginBottom: 20,
  },
  title: {
    color: '#14142B',
    fontSize: 20,
  },
  card: {
    paddingVertical: 30,
  },
  line: {
    marginTop: 25,
  },
  text: {
    marginTop: 20,
    color: '#6E7191',
    fontSize: 15.8,
    textAlign: 'center',
  },
  primary: {
    color: variables.primary,
  },
});
