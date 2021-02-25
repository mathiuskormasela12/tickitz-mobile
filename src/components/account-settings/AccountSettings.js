// ===== Order Header
// import all modules
import React, {Component, Fragment} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

// import all components
import {SimpleCard} from '../';
import TextField from '../text-field/TextField';
import PhoneField from '../phone-field/PhoneField';
import Button from '../button/Button';

class AccountSettings extends Component {
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
                <View style={style.col}>
                  <Button height="55px" width="100%" primary>
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
                <View style={style.col}>
                  <Button height="55px" width="100%" primary>
                    Update Changes
                  </Button>
                </View>
              </View>
            </View>
          </SimpleCard>
        </View>
      </Fragment>
    );
  }
}

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
});
