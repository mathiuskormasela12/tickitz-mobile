// ===== Container
// import all modules
import React, {Fragment, Component} from 'react';
import {connect} from 'react-redux';
import push from '../../helpers/push';

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
    selectedTime: null
  }
  navigate = () => {
    if(!this.props.token) {
      push(this.props, 'Login');
    } else {
      push(this.props, 'Order');
    }
  };

  selectTime = (time) => {
    this.setState({
      selectedTime: time
    })
  }

  render() {
    console.log('====== TIMES --========')
    console.log(this.props.times)
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
                    item === this.state.selectedTime ? (
                      <TouchableWithoutFeedback onPress={() => this.selectTime(item)}>
                        <TimesText checked>{item}</TimesText>
                      </TouchableWithoutFeedback>
                    ) : (
                      <TouchableWithoutFeedback onPress={() => this.selectTime(item)}>
                        <TimesText>{item}</TimesText>
                      </TouchableWithoutFeedback>
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
});

const mapDispatchToProps = {}

export const ShowTimeCard = connect(mapStateToProps, mapDispatchToProps)(ShowTimeCardComponent);
