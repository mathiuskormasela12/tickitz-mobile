// ===== Button Styles
// import styled modules
import styled from 'styled-components';

export const Warpper = styled.TouchableOpacity`
  margin-top: 20px;
  width: 100%;
  height: ${(props) => props.height && props.height};
  width: ${(props) => props.width && props.width};
  border-radius: 6px;
  background-color: ${(props) => (props.active ? '#00BA88;' : '#6E7191;')};
  align-items: center;
  border: ${(props) => (props.active ? '#00BA88;' : '#6E7191;')};
  justify-content: center;
`;

export const Text = styled.Text`
  font-size: 16px;
  font-family: 'Mulish-Regular';
  font-weight: 700;
  color: white;
`;
