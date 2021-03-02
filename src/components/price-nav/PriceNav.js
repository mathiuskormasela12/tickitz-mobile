// ===== Hero
// import all modules
import React, {Fragment} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

export function PriceNavbar() {
  const totalPayment = useSelector(state => state.transaction.totalPayment);

  return (
    <Fragment>
      <View style={style.navbar}>
        <View style={style.containerStatic}>
          <View style={style.navbarRow}>
            <View style={style.navbarCol}>
              <Text style={style.navTitle}>Total Payment</Text>
            </View>
            <View style={style.navbarCol}>
              <Text style={style.navPrice}>${totalPayment}</Text>
            </View>
          </View>
        </View>
      </View>
    </Fragment>
  );
}

const style = StyleSheet.create({
  navbar: {
    position: 'absolute',
    width: '100%',
    backgroundColor: 'white',
    height: 60,
    zIndex: 3,
    top: 0,
  },
  navTitle: {
    color: '#AAAAAA',
    fontSize: 16,
  },
  navPrice: {
    color: '#14142B',
    fontSize: 20,
  },
  navbarRow: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
  },
  containerStatic: {
    width: '85%',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
