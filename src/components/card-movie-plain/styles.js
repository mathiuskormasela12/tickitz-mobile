// import all modules
import styled from 'styled-components/native';
import * as variables from '../../style/variable';

export const Card = styled.View`
  border: 1px solid #dedede;
  padding: 20px;
  border-radius: 10px;
  width: 220px;
  height: 300px;
  background-color: ${variables.light};
`;

export const CardHead = styled.View`
  height: 100%;
  width: 100%;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: stretch;
`;
