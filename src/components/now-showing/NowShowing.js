// ===== Container
// import all modules
import React, {Fragment, Component} from 'react';

// import all components
import Container from '../container/Container';
import {Header, Title, NowShowingStyle, Subtitle, Main} from './styles';
import {CardNowShowing} from '../';
import { ScrollView, StyleSheet, TouchableWithoutFeedback } from 'react-native';

class NowShowing extends Component {
  render() {
    return (
      <Fragment>
        <NowShowingStyle>
          <Container>
            <Header>
              <Title>
                Now Showing
              </Title>
              <Subtitle>
                View All
              </Subtitle>
            </Header>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Main>
                {[...Array(10)].map((item, index) => (
                  <Fragment key={String(index)}>
                    <CardNowShowing style={styled.card} />
                  </Fragment>
                ))}
              </Main>
            </ScrollView>
          </Container>
        </NowShowingStyle>
      </Fragment>
    );
  }
}

const styled = StyleSheet.create({
  card: {
    marginRight: 20,
  }
})

export {NowShowing};
