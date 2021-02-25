// ===== Order History Content
// import all modules
import React, {Fragment} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

export function OrderHistoryContent() {
  return (
    <Fragment>
      <View style={style.container}>
        <Text>Hello</Text>
      </View>
    </Fragment>
  );
}

const style = StyleSheet.create({
  container: {
    width: (90 / 100) * Dimensions.get('screen').width,
    marginBottom: 0,
    marginTop: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});
