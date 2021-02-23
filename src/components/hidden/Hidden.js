// ===== Hidden
import React, {Fragment} from 'react';
import {View, StyleSheet} from 'react-native';

export default () => {
  return (
    <Fragment>
      <View style={styled.hero} />
    </Fragment>
  );
};

const styled = StyleSheet.compose({
  hero: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 10000,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});
