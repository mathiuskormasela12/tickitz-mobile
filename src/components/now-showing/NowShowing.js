// ===== Container
// import all modules
import React, {Fragment, Component} from 'react';
import {connect} from 'react-redux';

// import all components
import Container from '../container/Container';
import {Header, Title, NowShowingStyle, Subtitle, Main, style} from './styles';
import {CardNowShowing} from '../';
import {ScrollView} from 'react-native';

class NowShowingComponent extends Component {
  render() {
    return (
      <Fragment>
        <NowShowingStyle>
          <Container>
            <Header>
              <Title>Now Showing</Title>
              <Subtitle>View All</Subtitle>
            </Header>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <Main>
                {[...Array(10)].map((item, index) => (
                  <Fragment key={String(index)}>
                    <CardNowShowing style={style.card} {...this.props} />
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

const mapStateToProps = (state) => ({
  ...state.home,
});

const NowShowing = connect(mapStateToProps, null)(NowShowingComponent);

export {NowShowing};
