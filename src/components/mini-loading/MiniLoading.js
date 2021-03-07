// ===== Mini Loading
// import all modules
import React, {Fragment} from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';

export function MiniLoading() {
  return (
    <Fragment>
      <View style={style.container}>
        <ActivityIndicator size="large" color="#5F2EEA" />
      </View>
    </Fragment>
  );
}
const style = StyleSheet.create({
  container: {
    paddingVertical: 45,
    justifyContent: 'center',
    width: '100%',
  },
});
