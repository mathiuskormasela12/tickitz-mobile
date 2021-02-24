// ===== TextField Style
// import styled component
import React, {Fragment} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

export default function PhoneField(props) {
  return (
    <Fragment>
      <View style={[style.control, style.height(props.height)]}>
        <View style={[style.label, style.height(props.height)]}>
          <Text style={style.phoneText}>+62</Text>
        </View>
        <View style={[style.value, style.height(props.height)]}>
          <TextInput
            {...props}
            keyboardType="number-pad"
            style={[style.input, style.height(props.height)]}
          />
        </View>
      </View>
    </Fragment>
  );
}

const style = StyleSheet.create({
  input: {
    borderRadius: 4,
    backgroundColor: 'transparent',
    fontSize: 16,
    color: '#4E4B66',
    borderWidth: 0,
    paddingLeft: 12,
  },
  phoneText: {
    fontSize: 16,
    color: '#4E4B66',
  },
  label: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: '#DEDEDE',
    borderStyle: 'solid',
  },
  value: {
    flex: 4,
  },
  control: {
    flexDirection: 'row',
    backgroundColor: '#fcfdfe',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#DEDEDE',
    borderStyle: 'solid',
  },
  height: function (height) {
    return {
      height,
    };
  },
});
