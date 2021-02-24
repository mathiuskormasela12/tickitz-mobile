// ===== Hidden
import React, {Fragment} from 'react';
import {View, StyleSheet} from 'react-native';

export default (props) => {
  return (
    <Fragment>
      <View style={styled.hero}>{props.children}</View>
    </Fragment>
  );
};

const styled = StyleSheet.compose({
  hero: {
    backgroundColor: '#F7F7FC',
    paddingVertical: 30,
    position: 'relative',
  },
});
