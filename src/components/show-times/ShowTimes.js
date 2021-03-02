// ===== Container
// import all modules
import React, {Fragment, Component} from 'react';
import {TouchableWithoutFeedback, View} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {Picker} from '@react-native-picker/picker';
import moment from 'moment';
import http from '../../services/Services';

// import all components
import {
  styles,
  ShowTime,
  Header,
  Title,
  Form,
  InputDate,
  DateText,
  Column,
  AppendIcon,
  AppendText,
  Row,
  Col,
  Pagination,
} from './styles';
import Container from '../container/Container';
import {ShowTimeCard, MiniLoading, MiniMessage} from '../';
import Button from '../button/Button';

// import img
import Calendar from '../../assets/img/calendar.svg';
import Location from '../../assets/img/location.svg';

class ShowTimesComponent extends Component {
  state = {
    isVisible: false,
    selectedDate: moment(Date.now()).format('YYYY-MM-DD'),
    location: 'Jakarta',
    showTimes: [],
    loading: false,
    message: null,
    times: [],
    activeTimes: [],
    cities: [],
  };

  getAllCities = async () => {
    try {
      const {data: cities } = await http.getAllCities(); 
      this.setState({
        cities: cities.results
      })
    } catch (error) {
      this.setState((state) => ({
        message: err.response.data.message
      }))
    }
  }

  async componentDidMount() {
    this.getAllCities()
    this.setState((state) => ({
      loading: !state.loading,
    }))
    try {
      const {data} = await http.getShowTimes(this.props.token, this.props.route.params.id, this.state.selectedDate, this.state.location)
      const {data: times} = await http.getAllTimes(this.props.token)
      setTimeout(() => {
        const modifiedTime = times.results.map((item, index) => ({
          id: item.id,
          realTime: item.showTime,
          time: `${item.showTime.slice(0, 5)}${Number(item.showTime.slice(0, 2)) >= 0 && item.showTime.slice(0, 2) < 12 ? 'am' : 'pm'}`,
        }))
        if(data.results.length < 1) {
          this.setState((state) => ({
            loading: !state.loading,
            message: 'There is not show time',
          }))
        } else {
          this.setState((state) => ({
            showTimes: data.results,
            times: modifiedTime,
            loading: !state.loading,
            activeTimes: data.results[0].time,
          }));
        }
      }, 2000)
    } catch (err) {
      console.log(err);
      this.setState((state) => ({
        loading: !state.loading,
        message: err.response.data.message
      }))
    }
  }

  async componentDidUpdate(props, state) {
    if(state.selectedDate !== this.state.selectedDate || state.location !== this.state.location) {
      this.setState((state) => ({
        loading: !state.loading
      }))
      try {
        const {data} = await http.getShowTimes(this.props.token, this.props.route.params.id, this.state.selectedDate, this.state.location)
        const {data: times} = await http.getAllTimes(this.props.token)
        if(data.results < 1) {
          this.setState((state) => ({
            showTimes: data.results,
            message: 'There is not show time',
            loading: !state.loading
          }));
        } else {
          const modifiedTime = times.results.map((item, index) => ({
            id: item.id,
            realTime: item.showTime,
            time: `${item.showTime.slice(0, 5)}${Number(item.showTime.slice(0, 2)) >= 0 && item.showTime.slice(0, 2) < 12 ? 'am' : 'pm'}`,
          }))
          console.log('======== MOD =====')
          console.log(data.results)
          console.log('======== ACTIVE ======')
        console.log(data.results)
        console.log('======== ALL ======')
        console.log(times.results)
          this.setState((state) => ({
            showTimes: data.results,
            loading: !state.loading,
            times: modifiedTime,
            activeTimes: data.results[0].time
          }));
        }
      } catch (err) {
        console.log(err);
        this.setState((state) => ({
          loading: !state.loading,
          message: err.response.data.message
        }));
      }
    }
  }

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
                  <InputDate>
                    <AppendIcon>
                      <Calendar width="22" height="22" />
                    </AppendIcon>
                    <AppendText>
                      <DateText>{this.state.selectedDate ? this.state.selectedDate : 'Set a Date'}</DateText>
                    </AppendText>
                    <AppendIcon>
                      <Icon name="angle-down" size={15} style={styles.icon} />
                    </AppendIcon>
                  </InputDate>
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
                    {
                      this.state.cities.map((item, index) => (
                        <Picker.Item
                          key={String(index)}
                          label={item.substr(0, 1).toUpperCase().concat(item.substr(1))}
                          style={styles.item}
                          value={item.toLowerCase()}
                        />
                      ))
                    }
                  </Picker>
                </View>
              </Column>
            </Form>
            <Row>
              {
                this.state.loading ? <MiniLoading /> : (this.state.showTimes.length < 1 ? <MiniMessage message={this.state.message} /> : (
                  <Fragment>
                    {this.state.showTimes.map((item, index) => (
                      <Col key={String(index)}>
                        <ShowTimeCard cinemaPosterProps={item.cinemaPoster} cinema={item.cinema} city={item.city} movieTitleProps={item.movieTitle} movieIdProps={item.movieId} categoryProps={item.category} cinemaIdProps={item.cinemaId} activeTimes={item.time} price={item.pricePerSeat} address={item.address} times={this.state.times} selectedDate={this.state.selectedDate} movieId={this.props.route.params.id}  {...this.props} />
                      </Col>
                    ))}
                  </Fragment>
                ))
              }
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

const mapStateToProps = (state) => ({
  ...state.auth,
});

const mapDispatchToProps = {}

export const ShowTimes = connect(mapStateToProps, mapDispatchToProps)(ShowTimesComponent);
