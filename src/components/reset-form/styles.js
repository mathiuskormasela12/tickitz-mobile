// ===== Header Styles
// import all modules
import {StyleSheet} from 'react-native';
import styled from 'styled-components';
import * as variables from '../../style/variable';

export const Form = styled.View`
  margin-vertical: 10px;
`;

export const Title = styled.Text`
  color: ${variables.dark};
  font-size: 32px;
  font-family: 'Mulish-Medium';
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Subtitle = styled.Text`
  color: #8692a6;
  font-size: 16px;
  font-family: 'Mulish-Medium';
  margin-bottom: 20px;
`;

export const Control = styled.View`
  margin: 10px 0 0 0;
`;

export const Label = styled.Text`
  color: #4e4b66;
  line-height: 60px;
  font-size: 16px;
`;

export const Field = styled.View`
  line-height: 20px;
`;

export const flexStyle = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
});
