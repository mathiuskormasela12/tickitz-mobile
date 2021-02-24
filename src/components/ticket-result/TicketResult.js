// ===== Ticket Result
// import all modules
import React, {Fragment} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Dash from 'react-native-dash';

// import all components
import {SimpleCard} from '../';

// import img
import Barcode from '../../assets/img/barcode.svg';

export function TicketResult() {
  return (
    <Fragment>
      <View style={style.container}>
        <SimpleCard>
          <View style={style.card}>
            <View style={style.header}>
              <Barcode width={160} height={160} />
              <Dash style={style.dashed} dashColor="#DEDEDE" />
              <View style={[style.circle, style.leftCircle]} />
              <View style={[style.circle, style.rightCircle]} />
            </View>
            <View style={style.main}>
              <View style={style.containerFixed}>
                <View style={style.row}>
                  <View style={style.col}>
                    <Text style={style.title}>Movie</Text>
                    <Text style={style.subtitle}>Spider-Man: ..</Text>
                  </View>
                  <View style={style.col}>
                    <Text style={style.title}>Category</Text>
                    <Text style={style.subtitle}>PG-18</Text>
                  </View>
                  <View style={style.col}>
                    <Text style={style.title}>Date</Text>
                    <Text style={style.subtitle}>07 July</Text>
                  </View>
                  <View style={style.col}>
                    <Text style={style.title}>Time</Text>
                    <Text style={style.subtitle}>2:00 pm</Text>
                  </View>
                  <View style={style.col}>
                    <Text style={style.title}>Count</Text>
                    <Text style={style.subtitle}>3 pcs</Text>
                  </View>
                  <View style={style.col}>
                    <Text style={style.title}>Seats</Text>
                    <Text style={style.subtitle}>C4, C5, C6</Text>
                  </View>
                </View>
                <View style={style.box}>
                  <View style={[style.containerFixed, style.boxFlex]}>
                    <View style={style.item}>
                      <Text style={style.total}>Total</Text>
                    </View>
                    <View style={style.item}>
                      <Text style={style.price}>$30.00</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </SimpleCard>
      </View>
    </Fragment>
  );
}

const style = StyleSheet.create({
  container: {
    width: (90 / 100) * Dimensions.get('screen').width,
    marginBottom: 0,
    marginTop: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  card: {
    paddingVertical: 25,
  },
  header: {
    height: 150,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    paddingTop: 10,
  },
  containerFixed: {
    width: '85%',
    marginBottom: 0,
    marginTop: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  dashed: {
    width: '100%',
    height: 1,
    marginTop: 15,
  },
  circle: {
    backgroundColor: '#F5F6F8',
    height: 30,
    width: 30,
    borderRadius: 30,
    position: 'absolute',
  },
  leftCircle: {
    left: -15,
    bottom: -31,
  },
  rightCircle: {
    right: -15,
    bottom: -31,
  },
  main: {
    marginTop: 80,
    paddingBottom: 10,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  col: {
    width: '42%',
    marginBottom: 15,
  },
  title: {
    color: '#AAAAAA',
    fontSize: 14,
    marginBottom: 10,
  },
  subtitle: {
    color: '#14142B',
    fontSize: 16,
  },
  box: {
    marginTop: 15,
    paddingVertical: 15,
    borderStyle: 'solid',
    borderWidth: 0.8,
    borderColor: '#DEDEDE',
  },
  boxFlex: {
    flexDirection: 'row',
  },
  item: {
    flex: 1,
  },
  total: {
    color: 'black',
    fontSize: 17,
  },
  price: {
    color: 'black',
    fontSize: 17,
    textAlign: 'right',
  },
});
