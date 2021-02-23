// ===== Button Styles
// import styled modules
import styled from 'styled-components';
import * as variables from '../../style/variable';

export const Warpper = styled.TouchableOpacity`
  margin-top: 20px;
  width: 100%;
  height: ${(props) => props.height && props.height};
  width: ${(props) => props.width && props.width};
  border-radius: 6px;
  background-color: ${(props) =>
    props.primary ? variables.primary : 'transparent'};
  align-items: center;
  border: 1px solid ${variables.primary};
  justify-content: center;
`;

export const Text = styled.Text`
  font-size: 16px;
  font-family: 'Mulish-Regular';
  font-weight: 700;
  color: ${(props) =>
    props.primary ? '#F7F7FC' : props.outline ? '' : variables.primary};
`;
