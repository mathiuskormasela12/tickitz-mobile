// import all modules
import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import * as variables from '../../style/variable';

export const ShowTime = styled.View`
  background-color: ${variables.light};
  padding-vertical: 30px;
`;

export const Header = styled.View`
  width: 100%;
`;

export const Title = styled.Text`
  color: black;
  font-size: 23px;
  text-align: center;
  font-weight: bold;
`;

export const Form = styled.View`
  margin-top: 30px;
  width: 100%;
  align-items: center;
`;

export const Column = styled.View`
  width: 88%;
  margin-bottom: 20px;
`;

export const Date = styled.View`
  width: 100%;
  background-color:#EFF0F6;
  height: 55px;
  border-radius: 6px;
  flex-direction: row;
  align-items:center;
  justify-content: space-between;
  padding-horizontal: 21px;
`;

export const AppendIcon = styled.View`
  flex: 1;
`;

export const AppendText = styled.View`
  flex: 4;
`;

export const DateText = styled.Text`
  font-size: 16px;
  color: #4E4B66;
  font-weight: 600;
`;

export const styles = StyleSheet.create({
  icon: {
    textAlign: 'right',
    color: '#A0A3BD'
  }
})