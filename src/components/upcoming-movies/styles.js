// import all modules
import styled from 'styled-components/native';
import * as variables from '../../style/variable';

export const UpcomingStyle = styled.View`
  padding-vertical: 50px;
  background-color: ${variables.light};
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
  font-size: 23px;
`;

export const Subtitle = styled.Text`
  font-weight: normal;
  color:  ${variables.primary};
  font-size: 19px;
`;

export const Main = styled.View`
  width: 100%;
  overflow: scroll;
  flex-direction: row;
`;