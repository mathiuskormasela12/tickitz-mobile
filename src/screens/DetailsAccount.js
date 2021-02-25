// ===== Details Account
// import all modules
import React, {Fragment} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';

// import all components
import {Footer, ProfileHeader} from '../components';
import Hidden from '../components/hidden/Hidden';
import HiddenWrapper from '../components/hidden-wrapper/HiddenWrapper';
import HeroGray from '../components/hero-gray/HeroGray';
import AccountSettings from '../components/account-settings/AccountSettings';

export default function DetailsAccount(props) {
  const toggle = useSelector((state) => state.home.toggle);
  return (
    <Fragment>
      <ScrollView>
        <HiddenWrapper style={style.hero}>
          {toggle && <Hidden />}
          <HeroGray>
            <ProfileHeader {...props} />
            <AccountSettings {...props} />
          </HeroGray>
          <Footer />
        </HiddenWrapper>
      </ScrollView>
    </Fragment>
  );
}

const style = StyleSheet.create({
  hero: 100,
});
