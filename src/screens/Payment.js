// ===== Home
// import all modules
import React, {Fragment} from 'react';
import {ScrollView} from 'react-native';
import {useSelector} from 'react-redux';

// import all components
import {
  Footer,
  PaymentMethod,
  PriceNavbar,
  PaymentPersonal,
} from '../components';
import Hidden from '../components/hidden/Hidden';
import HiddenWrapper from '../components/hidden-wrapper/HiddenWrapper';
import HeroGray from '../components/hero-gray/HeroGray';

function Order(props) {
  const toggle = useSelector((state) => state.home.toggle);

  return (
    <Fragment>
      <ScrollView>
        <HiddenWrapper>
          {toggle && <Hidden />}
          <HeroGray>
            <PriceNavbar />
            <PaymentMethod {...props} />
            <PaymentPersonal {...props} />
          </HeroGray>
          <Footer />
        </HiddenWrapper>
      </ScrollView>
    </Fragment>
  );
}

export default Order;
