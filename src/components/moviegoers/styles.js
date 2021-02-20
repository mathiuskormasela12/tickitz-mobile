// import all modules
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import * as variables from '../../style/variable';

export const MovigoersStyle = styled.View`
  background-color: ${variables.light};
  padding-vertical: 50px;
  elevation: 1;
`;

export const Header = styled.View`
  margin-bottom: 10px;
`;
export const Footer = styled.View`
  margin-top: 10px;
`;

export const Control = styled.View`
  width: 80%;
`;

export const Form = styled.View`
  width: 100%;
  margin-vertical: 15px;
  align-items: center;
`;

export const Subtitle = styled.Text`
  font-size: 19px;
  color:#4E4B66;
  text-align:center;
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  font-size: 29px;
  color: ${variables.primary};
  text-align:center;
  font-weight: bold;
  letter-spacing: 1px;
`;

export const Text = styled.Text`
  font-size: 18px;
  color:#6E7191;
  text-align: center;
`;