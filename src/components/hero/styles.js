// ===== Header Styles
// import all modules
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import * as variables from '../../style/variable';

export const Hero = styled.View`
  background-color: ${variables.light};
  ${(props) => props.fluid && `height: ${Dimensions.get('screen').height}px;`}
`;
