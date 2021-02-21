// ===== Container
// import all modules
import React, {Fragment, Component} from 'react';

// import all components
import {
  Detail,
  styles,
  Title,
  Header,
  Subtitle,
  Main,
  Column,
  LittleSubtitle,
  LittleTitle,
  Footer,
  Synopsis,
  SynopsisTitle
} from './styles';
import Container from '../container/Container';
import {
  CardNowMoviePlain
} from '../';

class Details extends Component {
  render() {
    return (
      <Fragment>
        <Detail>
          <Container style={styles.container}>
            <CardNowMoviePlain  />
            <Header>
              <Title>Spider-Man: Homecoming</Title>
              <Subtitle>Adventure, Action, Sci-Fi</Subtitle>
            </Header>
            <Main>
              <Column>
                <LittleTitle>Release date</LittleTitle>
                <LittleSubtitle>June 28, 2017</LittleSubtitle>
              </Column>
              <Column>
                <LittleTitle>Directed by</LittleTitle>
                <LittleSubtitle>Jon Watss</LittleSubtitle>
              </Column>
              <Column>
                <LittleTitle>Duration</LittleTitle>
                <LittleSubtitle>2 hrs 13 min</LittleSubtitle>
              </Column>
              <Column>
                <LittleTitle>Casts</LittleTitle>
                <LittleSubtitle>
                  Tom Holland, Robert Downey Jr. ,etc.
                </LittleSubtitle>
              </Column>
            </Main>
            <Footer>
              <SynopsisTitle>Synopsis</SynopsisTitle>
              <Synopsis>
                Thrilled by his experience with the Avengers, 
                Peter returns home, where he lives with his 
                Aunt May, under the watchful eye of 
                his new mentor Tony Stark, Peter 
                tries to fall back into his normal 
                daily routine - distracted by thoughts 
                of proving himself to be more than 
                just your friendly neighborhood 
                Spider-Man - but when the Vulture 
                emerges as a new villain, everything 
                that Peter holds most important will 
                be threatened. 
              </Synopsis>
            </Footer>
          </Container>
        </Detail>
      </Fragment>
    );
  }
}

export {Details};
