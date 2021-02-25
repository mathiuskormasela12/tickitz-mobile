// ===== Home
// import all modules
import React, {Fragment} from 'react';
import {ScrollView} from 'react-native';
import {useSelector} from 'react-redux';

// import all components
import {Footer} from '../components';
import {Details, ShowTimes} from '../components';
import Hidden from '../components/hidden/Hidden';
import HiddenWrapper from '../components/hidden-wrapper/HiddenWrapper';

function MovieDetail(props) {
  const toggle = useSelector((state) => state.home.toggle);

  return (
    <Fragment>
      <ScrollView>
        <HiddenWrapper>
          {toggle && <Hidden />}
          <Details />
          <ShowTimes {...props} />
          <Footer />
        </HiddenWrapper>
      </ScrollView>
    </Fragment>
  );
}

export default MovieDetail;
