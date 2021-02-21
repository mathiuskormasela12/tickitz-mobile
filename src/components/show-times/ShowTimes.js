// ===== Container
// import all modules
import React, {Fragment, Component} from 'react';
import {Alert, TouchableWithoutFeedback} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import DateTimePickerModal from "react-native-modal-datetime-picker";

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
  AppendText
} from './styles';
import Container from '../container/Container';

// import img
import Calendar from '../../assets/img/calendar.svg';

class ShowTimes extends Component {
  state = {
    isVisible: false,
    selectedDate: null
  }

  showDatePicker = () => {
    this.setState({
      isVisible: true
    })
  };

  hideDatePicker = () => {
    this.setState({
      isVisible: false
    })
  };

  handleConfirm = (date) => {
    this.setState({
      selectedDate: date
    })
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
                      <Calendar width="22" height="22"  />
                    </AppendIcon>
                    <AppendText>
                      <DateText>Set a Date</DateText>
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
            </Form>
          </Container>
        </ShowTime>
      </Fragment>
    );
  }
}

export {ShowTimes};
