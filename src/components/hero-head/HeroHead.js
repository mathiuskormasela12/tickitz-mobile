// ===== Container
// import all modules
import React, {Fragment} from 'react';
import {useSelector} from 'react-redux';
import {StyleSheet} from 'react-native';

// import styles
import {Row, Col, Subtitle, Title, Image, styles, Hero} from './styles';

// import all components
import Container from '../container/Container';

// import images
import img from '../../assets/img/hero-img.png';

const styled = StyleSheet.create({
	hero: {
		backgroundColor: 'rgba(0, 0, 0, 0.24)',
	}
})

export function HeroHead() {
  const toggle = useSelector(state => state.home.toggle);

  return (
    <Fragment>
      <Hero style={toggle && styled.hero}>
        <Container>
          <Row>
            <Col style={styles.customizeCol}>
              <Subtitle>
                Nearest Cinema, Newest Movie
              </Subtitle>
              <Title>
                Find Out Now!
              </Title>
            </Col>
            <Col style={styles.colFlex}>
              <Image source={img} />
            </Col>
          </Row>
        </Container>
      </Hero>
    </Fragment>
  )
}