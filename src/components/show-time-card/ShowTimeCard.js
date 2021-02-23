// ===== Container
// import all modules
import React, {Fragment, Component} from 'react';
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

// import images
import ebv from '../../assets/img/ebv.png';

class ShowTimeCard extends Component {
  navigate = () => {
    push(this.props, 'Order');
  };

  render() {
    return (
      <Fragment>
        <Card>
          <Container>
            <Header>
              <Image source={ebv} />
              <Subtitle>Whatever street No.12, South Purwokerto</Subtitle>
            </Header>
            <Main>
              {[...Array(8)].map((item, index) => (
                <Times key={String(index)}>
                  <TimesText>08:30am</TimesText>
                </Times>
              ))}
            </Main>
            <Footer>
              <Row>
                <Col>
                  <PriceLabel>Price</PriceLabel>
                </Col>
                <Col>
                  <Price>$10.00/seat</Price>
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

export {ShowTimeCard};
