// ===== Header Styles
// import all modules
import styled from 'styled-components/native';
import * as variables from '../../style/variable';

export const Card = styled.View`
  border: 1px solid #dedede;
  border-radius: 10px;
  width: 220px;
  height: 500px;
  padding: 20px;
  background-color: ${variables.light};
`;

export const CardHead = styled.View`
  width: 100%;
  height: 60%;
`;
export const CardFooter = styled.View`
  width: 100%;
  height: 40%;
  margin-top: 28px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: stretch;
`;

export const Title = styled.Text`
  color: #14142b;
  font-size: 20px;
  font-family: Mulish-Bold;
  text-align: center;
  margin-bottom: 10px;
`;

export const Subtitle = styled.Text`
  color: #a0a3bd;
  text-align: center;
  font-size: 18px;
  font-family: Mulish-Regular;
`;
