// ===== Header Styles
// import all modules
import {StyleSheet, Dimensions} from 'react-native';
import styled from 'styled-components/native';
import * as variables from '../../style/variable';

export const Hero = styled.View`
  flex: 1;
  height: ${Dimensions.get('window').height - 80}px;
  align-items: center;
  align-content: center;
  justify-content: center;
  background-color: white;
`;

export const Row = styled.View``;

export const Col = styled.View`
  width: 100%;
`;

export const Subtitle = styled.Text`
  font-size: 18px;
  color: gray;
`;

export const Title = styled.Text`
  font-size: 28px;
  color: ${variables.primary};
`;

export const Image = styled.Image`
  width: 300px;
  height: 400px;
`;

export const styles = StyleSheet.create({
  customizeCol: {},
  colFlex: {
    alignItems: 'center',
  },
});
