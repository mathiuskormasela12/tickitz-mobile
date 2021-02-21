// import all modules
import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import * as variables from '../../style/variable';

export const Card = styled.View`
  background-color: ${variables.light};
  padding-vertical: 30px;
  elevation: 1;
  border-radius: 8px;
`;

export const Container = styled.View`
  width: 85%;
  margin: 0 auto;
`;

export const Header = styled.View`
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #DEDEDE;
  border-style: solid;
  padding-bottom: 20px;
  padding-top: 10px;
`;

export const Image = styled.Image`
  width: 100px;
  height: 40px;
  resize-mode: stretch;
`;

export const Subtitle = styled.Text`
  color: #AAAAAA;
  font-size: 16px;
  margin-top: 20px;
  width: 200px;
  text-align:center;
  line-height: 28px;
`;

export const Main = styled.View`
  margin-top: 8px;
  padding-vertical: 20px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Times = styled.View`
  width: 23%;
  margin-bottom: 10px;
`;

export const TimesText = styled.Text`
  color: ${(props) => props.checked ? '#4E4B66' : '#A0A3BD'};
  font-size: 15px;
`;

export const Footer = styled.View`
  width: 100%;
`;

export const Row = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
  justify-content: space-between;
`;

export const Col = styled.View`
  width: 47%;
`;

export const PriceLabel = styled.Text`
  color: #6B6B6B;
  font-size: 17px;
`;

export const Price = styled.Text`
  color: black;
  font-size: 17px;
  text-align: right;
`;

export const styles = StyleSheet.create({
  footer: {
    marginTop: 5
  }
})