// ===== Password Field Styling
// import all modules
import styled from 'styled-components';

export const PasswordFieldStyle = styled.TextInput`
  padding-left: 21px;
  font-size: 16px;
  height: ${(props) => props.height};
  flex: 6;
`;

export const Container = styled.View`
  background-color: #fcfdfe;
  border-radius: 4px;
  border: 1px solid #dedede;
  elevation: 1;
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const Edge = styled.View`
  flex: 1;
`;
