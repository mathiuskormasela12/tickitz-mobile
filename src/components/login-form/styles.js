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

export const TextGray = styled.Text`
  line-height: 20px;
  font-family: 'Mulish-Medium';
  font-size: 16px;
  text-align: center;
  color: #6e7191;
`;

export const Link = styled.Text`
  color: ${variables.primary}
  font-family: 'Mulish-Medium';
  font-size: 16px;
  margin-left: 8px;
`;

export const LinkControl = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const flexStyle = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
});
