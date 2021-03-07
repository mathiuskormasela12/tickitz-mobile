// ===== Loading
import React, {Fragment, useEffect} from 'react';
import {View, StyleSheet, ActivityIndicator, BackHandler} from 'react-native';

export default function Loading() {
  const backAction = () => {
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);
  }, []);

  useEffect(() => {
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', backAction);
    };
  });

  return (
    <Fragment>
      <View style={style.hero}>
        <View style={style.box}>
          <ActivityIndicator size="large" color="#5F2EEA" />
        </View>
      </View>
    </Fragment>
  );
}

const style = StyleSheet.create({
  hero: {
    position: 'absolute',
    flex: 1,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
  },
});
