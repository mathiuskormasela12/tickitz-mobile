// ===== Container
// import all modules
import React, {Fragment, Component} from 'react';
import {TouchableWithoutFeedback, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {Picker} from '@react-native-picker/picker';
import moment from 'moment';

// import all components
import {
  styles,
  ShowTime,
  Header,
  Title,
  Form,
  Date,
  DateText,
  Column,
  AppendIcon,
  AppendText,
  Row,
  Col,
  Pagination,
} from './styles';
import Container from '../container/Container';
import {ShowTimeCard} from '../';
import Button from '../button/Button';

// import img
import Calendar from '../../assets/img/calendar.svg';
import Location from '../../assets/img/location.svg';

class ShowTimes extends Component {
  state = {
    isVisible: false,
    selectedDate: null,
    location: 'Jakarta',
  };

  showDatePicker = () => {
    this.setState({
      isVisible: true,
    });
  };

  hideDatePicker = () => {
    this.setState({
      isVisible: false,
    });
  };

  handleConfirm = (date) => {
    this.setState({
      selectedDate: moment(date).format('YYYY-MM-DD'),
    });
    this.hideDatePicker();
  };

  render() {
    return (
      <Fragment>
        <ShowTime>
          <Container>
            <Header>
              <Title>Showtimes and Tickets</Title>
            </Header>
            <Form>
              <Column>
                <TouchableWithoutFeedback onPress={this.showDatePicker}>
                  <Date>
                    <AppendIcon>
                      <Calendar width="22" height="22" />
                    </AppendIcon>
                    <AppendText>
                      <DateText>
                        {this.state.selectedDate
                          ? this.state.selectedDate
                          : 'Set a Date'}
                      </DateText>
                    </AppendText>
                    <AppendIcon>
                      <Icon name="angle-down" size={15} style={styles.icon} />
                    </AppendIcon>
                  </Date>
                </TouchableWithoutFeedback>
                <DateTimePickerModal
                  isVisible={this.state.isVisible}
                  mode="date"
                  onConfirm={this.handleConfirm}
                  onCancel={this.hideDatePicker}
                />
              </Column>
              <Column>
                <View style={styles.pickerContainer}>
                  <Location style={styles.location} width="18" height="18" />
                  <Picker
                    dropdownIconColor="#A0A3BD"
                    selectedValue={this.state.location}
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) =>
                      this.setState({location: itemValue})
                    }>
                    <Picker.Item
                      label="Jakarta"
                      style={styles.item}
                      alue="Jakarta"
                    />
                    <Picker.Item label="Bogor" value="Bogor" />
                  </Picker>
                </View>
              </Column>
            </Form>
            <Row>
              {[...Array(10)].map((item, index) => (
                <Col key={String(index)}>
                  <ShowTimeCard {...this.props} />
                </Col>
              ))}
            </Row>
            <Pagination>
              {[...Array(5)].map((item, index) => (
                <View key={String(index)} style={styles.button}>
                  <Button height="30px" width="30px">
                    {index + 1}
                  </Button>
                </View>
              ))}
            </Pagination>
          </Container>
        </ShowTime>
      </Fragment>
    );
  }
}

export {ShowTimes};
