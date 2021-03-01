// import all modules
import React, {Fragment, Component} from 'react';
import {ScrollView} from 'react-native';

// import all components
import {
  MovigoersStyle,
  Subtitle,
  Title,
  Header,
  Form,
  Control,
  Footer,
  Text,
} from './styles';
import Container from '../container/Container';
import TextField from '../text-field/TextField';
import Button from '../button/Button';

class Movigoers extends Component {
  render() {
    return (
      <Fragment>
        <ScrollView>
          <MovigoersStyle>
            <Container>
              <Header>
                <Subtitle>Be the vanguard of the</Subtitle>
                <Title>Movigoers</Title>
              </Header>
              <Form>
                <Control>
                  <TextField
                    placeholder="Type your email"
                    keyboardType="email-address"
                    height="55px"
                  />
                </Control>
                <Control>
                  <Button height="55px" primary width="100%">
                    Join Now
                  </Button>
                </Control>
              </Form>
              <Footer>
                <Text>
                  By joining you as a Tickitz member, we will always send you the
                  latest updates via email .
                </Text>
              </Footer>
            </Container>
          </MovigoersStyle>
        </ScrollView>
      </Fragment>
    );
  }
}

export {Movigoers};
