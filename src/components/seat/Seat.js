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
import {Picker} from '@react-native-picker/picker';
import push from '../../helpers/push';

// import all components
import {SimpleCard} from '../';
import Button from '../button/Button';

export default class Seat extends Component {
  state = {
    selectedSeat: ['A1', 'C2'],
    seat: null,
    soldSeat: ['A2', 'F1', 'D2'],
  };

  getValue = (seat) => {
    this.setState({
      seat,
    });
  };

  render() {
    const seatNum = [1, 2, 3, 4, 5, 6, 7];
    const seatNumRight = ['8', '9', '10', '11', '12', '13', '14'];
    const seatAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

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
                    {seatAlphabet.map((row, rowIndex) => (
                      <Fragment key={rowIndex}>
                        {seatNum.map((col, colIndex) => (
                          <Fragment key={colIndex}>
                            {this.state.soldSeat.some(
                              (item) => item === `${row}${col}`,
                            ) ? (
                              <Fragment>
                                <View style={styles.boxCol}>
                                  <TouchableWithoutFeedback
                                    onPress={() => this.getValue(row + col)}>
                                    <View
                                      style={[styles.box, styles.disabled]}
                                    />
                                  </TouchableWithoutFeedback>
                                </View>
                              </Fragment>
                            ) : !this.state.selectedSeat.some(
                                (item) => item === `${row}${col}`,
                              ) ? (
                              <Fragment>
                                <View style={styles.boxCol}>
                                  <TouchableWithoutFeedback
                                    onPress={() => this.getValue(row + col)}>
                                    <View style={[styles.box, styles.normal]} />
                                  </TouchableWithoutFeedback>
                                </View>
                              </Fragment>
                            ) : (
                              <Fragment>
                                <View style={styles.boxCol}>
                                  <TouchableWithoutFeedback
                                    onPress={() => this.getValue(row + col)}>
                                    <View
                                      style={[styles.box, styles.checked]}
                                    />
                                  </TouchableWithoutFeedback>
                                </View>
                              </Fragment>
                            )}
                          </Fragment>
                        ))}
                      </Fragment>
                    ))}
                  </View>
                  <View style={styles.thinLine} />
                </View>
                <View style={styles.col}>
                  <View style={styles.boxContainer}>
                    {seatAlphabet.map((row, rowIndex) => (
                      <Fragment key={String(rowIndex)}>
                        {seatNumRight.map((col, colIndex) => (
                          <Fragment key={colIndex}>
                            {row === 'F' && Number(col) === 10 ? (
                              this.state.soldSeat.some(
                                (item) => item === `${row}${col}`,
                              ) ? (
                                <View style={styles.doubleBoxCol}>
                                  <TouchableWithoutFeedback
                                    onPress={() =>
                                      this.getValue(
                                        `${row + col},${
                                          row + (Number(col) + 1)
                                        }`,
                                      )
                                    }>
                                    <View
                                      style={[
                                        styles.doubleBox,
                                        styles.disabled,
                                      ]}
                                    />
                                  </TouchableWithoutFeedback>
                                </View>
                              ) : !this.state.selectedSeat.some(
                                  (item) => item === `${row}${col}`,
                                ) ? (
                                <Fragment>
                                  <View style={styles.doubleBoxCol}>
                                    <TouchableWithoutFeedback
                                      onPress={() =>
                                        this.getValue(
                                          `${row + col},${
                                            row + (Number(col) + 1)
                                          }`,
                                        )
                                      }>
                                      <View
                                        style={[
                                          styles.doubleBox,
                                          styles.loveNest,
                                        ]}
                                      />
                                    </TouchableWithoutFeedback>
                                  </View>
                                </Fragment>
                              ) : (
                                <Fragment>
                                  <View style={styles.doubleBoxCol}>
                                    <TouchableWithoutFeedback
                                      onPress={() =>
                                        this.getValue(
                                          `${row + col},${
                                            row + (Number(col) + 1)
                                          }`,
                                        )
                                      }>
                                      <View
                                        style={[
                                          styles.doubleBox,
                                          styles.checked,
                                        ]}
                                      />
                                    </TouchableWithoutFeedback>
                                  </View>
                                </Fragment>
                              )
                            ) : row === 'F' && Number(col) === 11 ? null : (
                              <Fragment>
                                {this.state.soldSeat.some(
                                  (item) => item === `${row}${col}`,
                                ) ? (
                                  <Fragment>
                                    <View style={styles.boxCol}>
                                      <TouchableWithoutFeedback
                                        onPress={() =>
                                          this.getValue(
                                            `${row + col},${
                                              row + (Number(col) + 1)
                                            }`,
                                          )
                                        }>
                                        <View
                                          style={[styles.box, styles.disabled]}
                                        />
                                      </TouchableWithoutFeedback>
                                    </View>
                                  </Fragment>
                                ) : !this.state.selectedSeat.some(
                                    (item) => item === `${row}${col}`,
                                  ) ? (
                                  <Fragment>
                                    <View style={styles.boxCol}>
                                      <TouchableWithoutFeedback
                                        onPress={() =>
                                          this.getValue(
                                            `${row + col},${
                                              row + (Number(col) + 1)
                                            }`,
                                          )
                                        }>
                                        <View
                                          style={[styles.box, styles.normal]}
                                        />
                                      </TouchableWithoutFeedback>
                                    </View>
                                  </Fragment>
                                ) : (
                                  <Fragment>
                                    <View style={styles.boxCol}>
                                      <TouchableWithoutFeedback
                                        onPress={() =>
                                          this.getValue(
                                            `${row + col},${
                                              row + (Number(col) + 1)
                                            }`,
                                          )
                                        }>
                                        <View
                                          style={[styles.box, styles.checked]}
                                        />
                                      </TouchableWithoutFeedback>
                                    </View>
                                  </Fragment>
                                )}
                              </Fragment>
                            )}
                          </Fragment>
                        ))}
                      </Fragment>
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
                    <Text style={styles.text}>1 - 14</Text>
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
          <SimpleCard style={styles.cardChoosed}>
            <View style={styles.containerPercentage}>
              <View style={styles.rowCard}>
                <View style={styles.colCard}>
                  <Text style={styles.choosed}>Choosed</Text>
                </View>
                <View style={styles.colCard}>
                  <Text style={styles.seats}>C4, C5, C6</Text>
                </View>
              </View>
            </View>
          </SimpleCard>
          <SimpleCard style={styles.cardSelect}>
            <View style={styles.containerPercentage}>
              <View style={styles.rowForm}>
                <View style={styles.colForm}>
                  <View style={styles.pickerContainer}>
                    <Picker
                      dropdownIconColor="#A0A3BD"
                      selectedValue={this.state.location}
                      style={styles.picker}
                      onValueChange={(itemValue, itemIndex) =>
                        this.setState({seat: itemValue})
                      }>
                      <Picker.Item label="C" style={styles.item} value="C" />
                      <Picker.Item label="D" value="D" />
                    </Picker>
                  </View>
                </View>
                <View style={styles.colForm}>
                  <View style={styles.pickerContainer}>
                    <Picker
                      dropdownIconColor="#A0A3BD"
                      selectedValue={this.state.location}
                      style={styles.picker}
                      onValueChange={(itemValue, itemIndex) =>
                        this.setState({seat: itemValue})
                      }>
                      <Picker.Item label="4" style={styles.item} value="4" />
                      <Picker.Item label="5" value="5" />
                    </Picker>
                  </View>
                </View>
              </View>
            </View>
          </SimpleCard>
          <SimpleCard style={styles.cardSelect}>
            <View style={styles.containerPercentage}>
              <View style={styles.rowForm}>
                <View style={styles.colForm}>
                  <View style={styles.pickerContainer}>
                    <Picker
                      dropdownIconColor="#A0A3BD"
                      selectedValue={this.state.location}
                      style={styles.picker}
                      onValueChange={(itemValue, itemIndex) =>
                        this.setState({seat: itemValue})
                      }>
                      <Picker.Item label="C" style={styles.item} value="C" />
                      <Picker.Item label="D" value="D" />
                    </Picker>
                  </View>
                </View>
                <View style={styles.colForm}>
                  <View style={styles.pickerContainer}>
                    <Picker
                      dropdownIconColor="#A0A3BD"
                      selectedValue={this.state.location}
                      style={styles.picker}
                      onValueChange={(itemValue, itemIndex) =>
                        this.setState({seat: itemValue})
                      }>
                      <Picker.Item label="4" style={styles.item} value="4" />
                      <Picker.Item label="5" value="5" />
                    </Picker>
                  </View>
                </View>
              </View>
            </View>
          </SimpleCard>
          <SimpleCard style={styles.cardSelect}>
            <View style={styles.containerPercentage}>
              <View style={styles.rowForm}>
                <View style={styles.colForm}>
                  <View style={styles.pickerContainer}>
                    <Picker
                      dropdownIconColor="#A0A3BD"
                      selectedValue={this.state.location}
                      style={styles.picker}
                      onValueChange={(itemValue, itemIndex) =>
                        this.setState({seat: itemValue})
                      }>
                      <Picker.Item label="C" style={styles.item} value="C" />
                      <Picker.Item label="D" value="D" />
                    </Picker>
                  </View>
                </View>
                <View style={styles.colForm}>
                  <View style={styles.pickerContainer}>
                    <Picker
                      dropdownIconColor="#A0A3BD"
                      selectedValue={this.state.location}
                      style={styles.picker}
                      onValueChange={(itemValue, itemIndex) =>
                        this.setState({seat: itemValue})
                      }>
                      <Picker.Item label="4" style={styles.item} value="4" />
                      <Picker.Item label="5" value="5" />
                    </Picker>
                  </View>
                </View>
              </View>
            </View>
          </SimpleCard>
          <View style={styles.rowBtn}>
            <View style={styles.colBtn}>
              <Button outline height="55px" width="100%">
                Add New Seat
              </Button>
            </View>
            <View style={styles.colBtn}>
              <Button
                primary
                height="55px"
                width="100%"
                onPress={() => push(this.props, 'Payment')}>
                Checkout Now
              </Button>
            </View>
          </View>
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
    height: 140,
  },
  box: {
    width: 16,
    height: 16,
    borderRadius: 2,
  },
  doubleBox: {
    width: 38,
    height: 16,
    borderRadius: 2,
  },
  boxCol: {
    width: '14%',
  },
  doubleBoxCol: {
    width: '28%',
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
  choosed: {
    color: '#4E4B66',
    fontSize: 19,
  },
  cardChoosed: {
    marginTop: 20,
    paddingVertical: 19,
  },
  cardSelect: {
    marginTop: 20,
    paddingVertical: 19,
  },
  rowCard: {
    flexDirection: 'row',
  },
  colCard: {
    width: '50%',
  },
  rowForm: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  colForm: {
    width: '48%',
  },
  seats: {
    color: 'black',
    fontSize: 21,
    textAlign: 'right',
  },
  picker: {
    width: '100%',
    height: 55,
    color: '#4E4B66',
  },
  pickerContainer: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#EFF0F6',
    borderStyle: 'solid',
    backgroundColor: '#EFF0F6',
    width: '100%',
    paddingLeft: 5,
  },
  rowBtn: {
    flexDirection: 'column',
    marginTop: 10,
  },
  colBtn: {
    width: '100%',
  },
});
