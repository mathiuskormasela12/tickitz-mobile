// ===== Container
// import all modules
import React, {Fragment, Component} from 'react';
import {connect} from 'react-redux';
import http from '../../services/Services';
import push from '../../helpers/push';

// import actions
import loading from '../../redux/actions/loading';

// import all components
import Container from '../container/Container';
import {Header, Title, NowShowingStyle, Subtitle, Main, style} from './styles';
import {CardNowShowing, MiniMessage, MiniLoading} from '../';
import {ScrollView, TouchableOpacity} from 'react-native';

class NowShowingComponent extends Component {
  state = {
    nowShowing: [],
    messageNowShowing: null,
    loading: false
  }
  async componentDidMount() {
    this.setState((state) => ({
      loading: !state.loading
    }))
    try {
      const {data} = await http.getNowShowing()
      setTimeout(() => {
        this.setState((state) => ({
          nowShowing: data.results,
          loading: !state.loading
        }))
      }, 500)
    } catch (err) {
      console.log(err);
      this.setState((state) => ({
        messageNowShowing: err.response.data.message,
        loading: !state.loading
      }))
    }
  }
  render() {
    return (
      <Fragment>
        <NowShowingStyle>
          <Container>
            <Header>
              <Title>Now Showing</Title>
              <TouchableOpacity onPress={() => push(this.props, 'View All')}>
                <Subtitle>View All</Subtitle>
              </TouchableOpacity>
            </Header>
            {
              this.state.loading ? <MiniLoading /> : (this.state.nowShowing.length < 1 ? <MiniMessage message={this.state.messageNowShowing} /> : (
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <Main>
                    {this.state.nowShowing.map((item, index) => (
                      <Fragment key={String(index)}>
                        <CardNowShowing style={style.card} {...this.props} poster={item.poster} id={item.id} />
                      </Fragment>
                    ))}
                  </Main>
                </ScrollView>
              ))
            }
          </Container>
        </NowShowingStyle>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.home,
});

const mapDispatchToProps = {
  loading
}

const NowShowing = connect(mapStateToProps, mapDispatchToProps)(NowShowingComponent);

export {NowShowing};
