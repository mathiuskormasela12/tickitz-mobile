// ===== Header Styles
// import all modules
import styled from 'styled-components/native';
import * as variables from '../../style/variable';

export const Card = styled.View`
  border: 1px solid white;
  padding: 25px;
  border-radius: 10px;
  width: 280px;
  background-color: ${variables.light};
  elevation: 1;
`;

export const CardHead = styled.View`
  height: ${(70/100) * 500}px;
  width: 100%;
  background-color:blue;
`;
export const CardFooter = styled.View`
  height: ${(30/100) * 500}px;
  width: 100%;
  margin-top: 40px;
`;

export const Image = styled.Image`
    width: 100%;
`;

export const Title = styled.Text`
  color: #14142B;
  font-size: 22px;
  font-family: Mulish-Bold;
  text-align: center;
  margin-bottom: 10px;
`;

export const Subtitle = styled.Text`
  color: #A0A3BD;
  text-align: center;
  font-size: 19px;
  font-family: Mulish-Regular;
`;
