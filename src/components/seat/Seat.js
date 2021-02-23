// ===== Hidden
import React, {Component, Fragment} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// import all components
import {SimpleCard} from '../';

export default class Seat extends Component {
  state = {
    selectedSeat: [],
    seat: null,
  };

  getValue = (seat) => {
    this.setState({
      seat,
    });
  };
  render() {
    return (
      <Fragment>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Choose Your Seat</Text>
          </View>
          <SimpleCard style={styles.card}>
            <View style={styles.containerPercentage}>
              <View style={styles.weightLine} />
              <View style={styles.row}>
                <View style={styles.col}>
                  <View style={styles.boxContainer}>
                    {[...Array(49)].map((item, index) => (
                      <View style={styles.boxCol} key={String(index)}>
                        <TouchableWithoutFeedback
                          onPress={() => this.getValue('row + col')}>
                          <View style={[styles.box, styles.normal]} />
                        </TouchableWithoutFeedback>
                      </View>
                    ))}
                  </View>
                  <View style={styles.thinLine} />
                </View>
                <View style={styles.col}>
                  <View style={styles.boxContainer}>
                    {[...Array(49)].map((item, index) => (
                      <View style={styles.boxCol} key={String(index)}>
                        <TouchableWithoutFeedback
                          onPress={() => this.getValue('row + col')}>
                          <View style={[styles.box, styles.normal]} />
                        </TouchableWithoutFeedback>
                      </View>
                    ))}
                  </View>
                  <View style={styles.thinLine} />
                </View>
              </View>
              <View style={styles.cardFoot}>
                <Text style={styles.titleSeat}>Seating Key</Text>
                <View style={styles.rows}>
                  <View style={styles.cols}>
                    <Icon name="arrow-down-outline" size={20} color="#14142B" />
                    <Text style={styles.text}>A - G</Text>
                  </View>
                  <View style={styles.cols}>
                    <Icon
                      name="arrow-forward-outline"
                      size={20}
                      color="#14142B"
                    />
                    <Text style={styles.text}>A - G</Text>
                  </View>
                  <View style={styles.cols}>
                    <View style={[styles.square, styles.normal]} />
                    <Text style={styles.text}>Available</Text>
                  </View>
                  <View style={styles.cols}>
                    <View style={[styles.square, styles.checked]} />
                    <Text style={styles.text}>Selected</Text>
                  </View>
                  <View style={styles.cols}>
                    <View style={[styles.square, styles.loveNest]} />
                    <Text style={styles.text}>Love Nest</Text>
                  </View>
                  <View style={styles.cols}>
                    <View style={[styles.square, styles.disabled]} />
                    <Text style={styles.text}>Sold</Text>
                  </View>
                </View>
              </View>
            </View>
          </SimpleCard>
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.compose({
  header: {
    marginBottom: 10,
  },
  container: {
    width: (90 / 100) * Dimensions.get('screen').width,
    marginBottom: 0,
    marginTop: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  containerPercentage: {
    width: '90%',
    marginBottom: 0,
    marginTop: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  title: {
    color: '#14142B',
    fontSize: 21,
    fontWeight: '600',
    fontFamily: 'Mulish-Regular',
    letterSpacing: 0.75,
    marginBottom: 15,
  },
  card: {
    paddingVertical: 30,
    width: '100%',
  },
  weightLine: {
    backgroundColor: '#9570FE',
    borderRadius: 3,
    width: '100%',
    height: 9,
    marginBottom: 20,
  },
  thinLine: {
    backgroundColor: '#ED2E7E',
    width: '100%',
    height: 1,
    marginTop: 20,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  col: {
    width: '48%',
    height: '100%',
  },
  boxContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignContent: 'space-between',
    height: 130,
  },
  box: {
    width: 16,
    height: 16,
    borderRadius: 2,
  },
  boxCol: {
    width: '10%',
    marginRight: 4,
    marginBottom: 4,
  },
  checked: {
    backgroundColor: '#5F2EEA',
  },
  disabled: {
    backgroundColor: '#6E7191',
  },
  normal: {
    backgroundColor: '#D6D8E7',
  },
  titleSeat: {
    color: 'black',
    fontFamily: 'Mulish-Regular',
    fontWeight: '600',
    fontSize: 17,
    letterSpacing: 0.75,
  },
  cardFoot: {
    marginTop: 35,
  },
  rows: {
    flexDirection: 'row',
    marginTop: 20,
    flexWrap: 'wrap',
  },
  cols: {
    width: '48%',
    flexDirection: 'row',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: '#4E4B66',
    marginLeft: 8,
  },
  square: {
    width: 20,
    height: 20,
    borderRadius: 4,
    marginRight: 5,
  },
  loveNest: {
    backgroundColor: '#F589D7',
  },
});
