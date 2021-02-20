// ===== Header Styles
// import all modules
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import * as variables from '../../style/variable';

export const NowShowingStyle = styled.View`
  padding-vertical: 50px;
`;

export const Header = styled.View`
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const Title = styled.Text`
  font-weight: bold;
  color:  ${variables.primary};
  font-size: 20px;
`;

export const Subtitle = styled.Text`
  font-weight: normal;
  color:  ${variables.primary};
  font-size: 16px;
`;

export const Main = styled.View`
  width: 100%;
  overflow: scroll;
  flex-direction: row;
`;