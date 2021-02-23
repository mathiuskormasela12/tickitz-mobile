// ===== Container
// import all modules
import React, {Fragment} from 'react';

// import styles
import {Row, Col, Subtitle, Title, Image, styles, Hero} from './styles';

// import all components
import Container from '../container/Container';

// import images
import img from '../../assets/img/hero-img.png';

export function HeroHead() {
  return (
    <Fragment>
      <Hero>
        <Container>
          <Row>
            <Col style={styles.customizeCol}>
              <Subtitle>Nearest Cinema, Newest Movie</Subtitle>
              <Title>Find Out Now!</Title>
            </Col>
            <Col style={styles.colFlex}>
              <Image source={img} />
            </Col>
          </Row>
        </Container>
      </Hero>
    </Fragment>
  );
}
