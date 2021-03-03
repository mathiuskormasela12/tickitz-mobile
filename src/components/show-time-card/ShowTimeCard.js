// ===== Container
// import all modules
import React, {Fragment, Component} from 'react';
import {connect} from 'react-redux';
import loading from '../../redux/actions/loading';
import push from '../../helpers/push';
import http from '../../services/Services';
import moment from 'moment';
import {showMessage} from 'react-native-flash-message';

// import actions
import {setTransaction} from '../../redux/actions/transaction';

// import all components
import {
  Card,
  Container,
  Header,
  Image,
  Subtitle,
  Main,
  Times,
  TimesText,
  Footer,
  Row,
  Col,
  Price,
  PriceLabel,
  styles,
} from './styles';
import Button from '../button/Button';
import { TouchableWithoutFeedback } from 'react-native';


class ShowTimeCardComponent extends Component {
  state = {
    selectedTime: null,
    selectedRealTime: null,
    timeId: null,
  }
  navigate = async () => {
    if(!this.state.timeId) {
      showMessage({
        message: 'Please select your show time',
        type: 'warning',
        duration: 2000,
        hideOnPress: true
      })
    }
    else if(!this.props.token) {
      push(this.props, 'Login');
    } else {
      this.props.loading()
      try {
        const {data} = await http.getSelectedShowTimeId(this.props.selectedDate, this.props.movieIdProps, this.state.timeId, this.props.cinemaIdProps);
        this.props.loading();
        this.props.setTransaction({
          showTimeId: data.results.showTimeId,
          time: this.state.selectedRealTime,
          timeId: this.state.timeId,
          movieId: this.props.movieIdProps,
          cinemaPoster: this.props.cinemaPosterProps,
          category: this.props.categoryProps,
          movieTitle: this.props.movieTitleProps,
          pricePerSeat: this.props.price,
          showTimeDate: this.props.selectedDate,
          cinemaId: this.props.cinemaIdProps,
          cinemaCity: this.props.city,
          cinemaName: this.props.cinema,
        });
        push(this.props, 'Order');
      } catch (err) {
        console.log(err);
        showMessage({
          message: err.response.data.message,
          type: 'warning',
          duration: 2000,
          hideOnPress: true
        })
        this.props.loading()
      }
    }
  };

  selectTime = (time, realTime, timeId) => {
    this.setState({
      selectedTime: time,
      selectedRealTime: realTime,
      timeId
    })
  }

  render() {
    const modifiedActiveTimes = this.props.activeTimes.map((item) => moment(new Date(2021, 3, 1, `${item.split(':')[0]}`, `${item.split(':')[1]}`, `${item.split(':')[2]}`, '00')).format('hh:mma'));

    return (
      <Fragment>
        <Card>
          <Container>
            <Header>
              <Image source={{
                uri: this.props.cinemaPosterProps
              }} />
              <Subtitle>{this.props.address}</Subtitle>
            </Header>
            <Main>
              {this.props.times.map((item, index) => (
                <Times key={String(index)}>
                  {
                    item.time === this.state.selectedTime ? (
                      <TouchableWithoutFeedback onPress={() => this.selectTime(item.time, item.realTime, item.id)}>
                        <TimesText checked>{item.time}</TimesText>
                      </TouchableWithoutFeedback>
                    ) : modifiedActiveTimes.indexOf(item.time) !== -1 ? (
                      (
                        <TouchableWithoutFeedback onPress={() => this.selectTime(item.time, item.realTime, item.id)}>
                          <TimesText enabled>{item.time}</TimesText>
                        </TouchableWithoutFeedback>
                      )
                    ) : (
                      (
                        <TouchableWithoutFeedback>
                          <TimesText>{item.time}</TimesText>
                        </TouchableWithoutFeedback>
                      )
                    )
                  }
                </Times>
              ))}
            </Main>
            <Footer>
              <Row>
                <Col>
                  <PriceLabel>Price</PriceLabel>
                </Col>
                <Col>
                  <Price>${this.props.price}/seat</Price>
                </Col>
              </Row>
              <Row style={styles.footer}>
                <Col>
                  <Button
                    height="43px"
                    width="100%"
                    primary
                    onPress={this.navigate}>
                    Book Now
                  </Button>
                </Col>
                <Col>
                  <Button height="43px" width="100%">
                    Add To Chart
                  </Button>
                </Col>
              </Row>
            </Footer>
          </Container>
        </Card>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.auth,
  ...state.transaction
});

const mapDispatchToProps = {
  loading,
  setTransaction
}

export const ShowTimeCard = connect(mapStateToProps, mapDispatchToProps)(ShowTimeCardComponent);
