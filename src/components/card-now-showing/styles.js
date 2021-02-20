// ===== Header Styles
// import all modules
import styled from 'styled-components/native';
import * as variables from '../../style/variable';

export const Card = styled.View`
  border: 1px solid white;
  padding: 25px;
  padding-bottom: ${(props) => props.color ? '10px' : '30px'};
  border-radius: 10px;
  width: 290px;
  ${(props) => props.color && `background-color: ${variables.light};`}
  ${(props) => props.color && `elevation: 1;`}
`;

export const CardHead = styled.View`
  ${(props) => props.color && `height: ${(61/100) * 600}px;`}
  width: 100%;
  background-color:blue;
`;
export const CardFooter = styled.View`
  height: ${(39/100) * 600}px;
  width: 100%;
  padding-top: 20px;
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
