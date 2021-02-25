// ===== Home
// import all modules
import React, {Fragment} from 'react';
import {ScrollView} from 'react-native';
import {useSelector} from 'react-redux';

// import all components
import {
  HeroHead,
  NowShowing,
  UpcomingMovie,
  Movigoers,
  Footer,
} from '../components';
import Hidden from '../components/hidden/Hidden';
import HiddenWrapper from '../components/hidden-wrapper/HiddenWrapper';

function Home(props) {
  const toggle = useSelector((state) => state.home.toggle);

  return (
    <Fragment>
      <ScrollView>
        <HiddenWrapper>
          {toggle && <Hidden />}
          <HeroHead />
          <NowShowing {...props} />
          <UpcomingMovie {...props} />
          <Movigoers />
          <Footer />
        </HiddenWrapper>
      </ScrollView>
    </Fragment>
  );
}

export default Home;
