// ===== Social Media
// import all modules
import React, {Fragment} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Line(props) {
  return (
    <Fragment>
      <View style={[styled.container, props.style]}>
        <View style={[styled.col, styled.large]} />
        <View style={styled.medium}>
          <Text style={styled.text}>Or</Text>
        </View>
        <View style={[styled.col, styled.large]} />
      </View>
    </Fragment>
  );
}

const styled = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 60,
  },
  col: {
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: '#DEDEDE',
  },
  large: {
    flex: 2,
  },
  medium: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    color: '#AAAAAA',
  },
});
