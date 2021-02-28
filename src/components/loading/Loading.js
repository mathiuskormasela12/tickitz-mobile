// ===== Loading
import React, {Fragment, useEffect} from 'react';
import {View, StyleSheet, ActivityIndicator, BackHandler} from 'react-native';
import {useSelector} from 'react-redux'

export function Loading() {
  const loading = useSelector(state => state.loading.loading);

  useEffect(() => {
    console.log('JAALAN')
    console.log(loading)
  }, [])

  const backAction = () => {
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);
  }, [])

  useEffect(() => {
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', backAction);
    }
  })

  if(loading) {
    return (
      <Fragment>
        <View style={style.hero}>
          <View style={style.box}>
            <ActivityIndicator size="large" color="#5F2EEA" />
          </View>
        </View>
      </Fragment>
    )
  } else {
    return <Fragment />
  }
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
    alignItems: 'center'
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center'
  }
})