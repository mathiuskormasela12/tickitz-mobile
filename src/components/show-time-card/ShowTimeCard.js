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
import {setShowTimeId} from '../../redux/actions/transaction';

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
        const {data} = await http.getSelectedShowTimeId(this.props.selectedDate, this.props.movieId, this.state.timeId, this.props.cinemaId);
        this.props.loading();
        console.log('======= DATA +++++++++')
        console.log(data.results.showTimeId)
        this.props.setShowTimeId(data.results.showTimeId);
        push(this.props, 'Order');
      } catch (err) {
        console.log(err);
        showMessage({
          message: err.response.data.message,
          type: 'warning',
          duration: 2000,
          hideOnPress: true
        })
      }
    }
  };

  selectTime = (time, timeId) => {
    this.setState({
      selectedTime: time,
      timeId
    })
  }

  render() {
    const modifiedActiveTimes = this.props.activeTimes.map((item) => `${item.slice(0, 5)}${Number(item.slice(0, 2)) >= 0 && item.slice(0, 2) < 12 ? 'am' : 'pm'}`)
    console.log('===== MODIFIED ======')
    console.log(modifiedActiveTimes)
    return (
      <Fragment>
        <Card>
          <Container>
            <Header>
              <Image source={{
                uri: this.props.cinemaPoster
              }} />
              <Subtitle>{this.props.address}</Subtitle>
            </Header>
            <Main>
              {this.props.times.map((item, index) => (
                <Times key={String(index)}>
                  {
                    item.time === this.state.selectedTime ? (
                      <TouchableWithoutFeedback onPress={() => this.selectTime(item.time, item.id)}>
                        <TimesText checked>{item.time}</TimesText>
                      </TouchableWithoutFeedback>
                    ) : modifiedActiveTimes.indexOf(item.time) !== -1 ? (
                      (
                        <TouchableWithoutFeedback onPress={() => this.selectTime(item.time, item.id)}>
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
  setShowTimeId
}

export const ShowTimeCard = connect(mapStateToProps, mapDispatchToProps)(ShowTimeCardComponent);
