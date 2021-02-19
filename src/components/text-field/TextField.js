// ===== TextField Style
// import styled component
import React, {Fragment} from 'react';
import styled from 'styled-components';

const TextFieldStyle = styled.TextInput`
  border: 1px solid #dedede;
  border-radius: 4px;
  background-color: #fcfdfe;
  padding-left: 21px;
  font-size: 16px;
  elevation: 1;
  height: ${(props) => props.height};
`;

export default function TextField(props) {
  return (
    <Fragment>
      <TextFieldStyle {...props} />
    </Fragment>
  );
}
