// ===== Header Styles
// import all modules
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import * as variables from '../../style/variable';

export const FooterStyle = styled.View`
  background-color: ${variables.light};
  padding-vertical: 40px;
`;

export const Container = styled.View`
  width: 85%;
  margin: 0 auto;
`;

export const Header = styled.View`
  margin-bottom: 10px;
`;

export const Image = styled.Image`
  width: 130px;
  height: 50px;
`;

export const Sponsor = styled.Image`
  height:${(props) => props.height};
  width: ${(props) => props.width};
`;

export const Follow = styled.Image`
  height:${(props) => props.height};
  width: ${(props) => props.width};
  margin-right: 30px;
`;

export const ListImg = styled.View`
  width: 30%;
  height: 20px;
`;

export const Subtitle = styled.Text`
  margin-top: 20px;
  width: 250px;
  font-size: 16px;
  color: #6E7191;
`;

export const Section = styled.View`
  margin-top: 30px;
`;

export const TitleList = styled.Text`
  color: black;
  font-size: 18px;
  margin-bottom: 20px;
`;

export const List = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ListSponsor = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items:center;
`;

export const ListFollow = styled.View`
  flex-direction: row;
  align-items:center;
`;

export const ListItems = styled.Text`
  font-size: 16px;
  color: #6E7191;
  width: 33%;
  margin-bottom: 15px;
`;

export const Text = styled.Text`
font-size: 16px;
color: #6E7191;
margin-top: 50px;
`

