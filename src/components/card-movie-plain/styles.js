// import all modules
import styled from 'styled-components/native';
import * as variables from '../../style/variable';

export const Card = styled.View`
  border: 1px solid white;
  padding: 25px;
  padding-bottom: 30px;
  border-radius: 10px;
  width: 280px;
  background-color: ${variables.light};
  elevation: 1;
`;

export const CardHead = styled.View`
  height: 370px;
  width: 100%;
  background-color:blue;
`;

export const Image = styled.Image`
    width: 100%;
`;