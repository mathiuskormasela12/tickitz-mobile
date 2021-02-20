// ===== Container
// import all modules
import React, {Fragment, Component} from 'react';

// import all components
import Container from '../container/Container';
import {Header, Title, UpcomingStyle, Subtitle, Main} from './styles';
import {CardUpcoming} from '../';
import Button from '../button/Button';
import { ScrollView, StyleSheet, View } from 'react-native';

class UpcomingMovie extends Component {
  render() {
    const months = [
      'September', 
      'October', 
      'November', 
      'December', 
      'January', 
      'February', 
      'March', 
      'April', 
      'May', 
      'June', 
      'July', 
      'August'
    ]

    return (
      <Fragment>
        <UpcomingStyle>
          <Container>
            <Header>
              <Title>
                Upcoming Movie
              </Title>
              <Subtitle>
                View All
              </Subtitle>
            </Header>
            <Header>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                  months.map((item, index) => (
                    <View key={String(index)} style={styled.button}>
                      <Button height="40px" width="120px">{item}</Button>
                    </View>
                  ))
                }
              </ScrollView>
            </Header>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Main>
                {[...Array(10)].map((item, index) => (
                  <Fragment key={String(index)}>
                    <CardUpcoming style={styled.card} />
                  </Fragment>
                ))}
              </Main>
            </ScrollView>
          </Container>
        </UpcomingStyle>
      </Fragment>
    );
  }
}

const styled = StyleSheet.create({
  card: {
    marginRight: 20,
  },
  button: {
    marginRight: 10
  }
})

export {UpcomingMovie};
