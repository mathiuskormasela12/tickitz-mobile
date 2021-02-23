// ===== Details Styles
// import all modules
import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import * as variables from '../../style/variable';

export const Detail = styled.View`
  background-color: ${variables.light};
  padding-vertical: 30px;
`;

export const Header = styled.View`
  margin-top: 30px;
`;

export const Footer = styled.View`
  margin-top: 30px;
`;

export const Column = styled.View`
  width: 45%;
`;

export const Main = styled.View`
  width: 100%;
  margin-top: 30px;
  border-bottom-width: 0.5px;
  border-color: #d6d8e7;
  border-style: solid;
  padding-vertical: 20px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Image = styled.Image`
  background-color: ${variables.light};
  padding-vertical: 20px;
`;

export const Title = styled.Text`
  font-size: 25px;
  color: black;
  text-align: center;
`;

export const LittleSubtitle = styled.Text`
  margin-top: 14px;
  font-size: 18px;
  color: #121212;
`;

export const LittleTitle = styled.Text`
  font-size: 16px;
  color: #8692a6;
`;

export const Subtitle = styled.Text`
  margin-top: 15px;
  font-size: 19px;
  color: #4e4b66;
  text-align: center;
`;

export const SynopsisTitle = styled.Text`
  margin-top: 14px;
  font-size: 20px;
  color: #14142b;
`;

export const Synopsis = styled.Text`
  margin-top: 15px;
  font-size: 16px;
  color: #4e4b66;
  line-height: 25px;
`;

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
