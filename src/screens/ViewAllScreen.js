// ===== View All Screen
// import all modules
import React, {Fragment} from 'react';
import {ScrollView} from 'react-native';
import {useSelector} from 'react-redux';

// import all components
import {
  Footer,
  ViewAll,
} from '../components';
import Hidden from '../components/hidden/Hidden';
import HiddenWrapper from '../components/hidden-wrapper/HiddenWrapper';

function ViewAllScreen(props) {
  const toggle = useSelector((state) => state.home.toggle);

  return (
    <Fragment>
      <ScrollView>
        <HiddenWrapper>
          {toggle && <Hidden />}
          <ViewAll {...props} />
          <Footer />
        </HiddenWrapper>
      </ScrollView>
    </Fragment>
  );
}

export default ViewAllScreen;
