// ===== Payment
// import all modules
import React, {Fragment} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

// import all components
import {SimpleCard} from '../';
import TextField from '../text-field/TextField';
import PhoneField from '../phone-field/PhoneField';
import Button from '../button/Button';

// import img
import Warning from '../../assets/img/warning.svg';

export function PaymentPersonal() {
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
                        value="Mathius Kormasela"
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
                        value="mathiuskormasela12@gmail.com"
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
                        value="8953251765440"
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View style={[style.row, style.alertMargin]}>
                <View style={style.col}>
                  <View style={style.alert}>
                    <View style={style.alertIcon}>
                      <Warning size={14} />
                    </View>
                    <View style={style.alertContent}>
                      <Text style={style.alertText}>
                        Fill your data correctly.
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </SimpleCard>
        </View>
        <View style={[style.row, style.btnMargin]}>
          <View style={style.col}>
            <Button height="55px" width="100%" primary>
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
