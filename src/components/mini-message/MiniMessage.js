// ===== Mini Loading
// import all modules
import React, {Fragment} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export function MiniMessage(props) {
  return (
    <Fragment>
      <View style={style.container}>
        <Text style={style.text}>{props.message}</Text>
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
  text: {
    fontSize: 19,
    textAlign: 'center',
    color: '#14142B',
  },
});
