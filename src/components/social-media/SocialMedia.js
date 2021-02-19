// ===== Social Media
// import all modules
import React, {Fragment} from 'react';
import {View, Image} from 'react-native';

// import styles
import styles from './styles';

// import assets
import google from '../../assets/img/google.png';
import facebook from '../../assets/img/facebook.png';

export default function SocialMedia() {
  return (
    <Fragment>
      <View style={styles.container}>
        <View style={[styles.items, styles.mr]}>
          <Image source={google} style={styles.img} />
        </View>
        <View style={styles.items}>
          <Image source={facebook} style={styles.img} />
        </View>
      </View>
    </Fragment>
  );
}
