// ===== Navbar Style
import {StyleSheet} from 'react-native'
import styled from 'styled-components';
import * as variables from '../../style/variable'

export const Nav = styled.View`
    background-color: ${variables.light};
`;

export const Brand = styled.Image`
    width: 86px;
    height: 22px;
`;

export const Row = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`;

export const Navs = styled.View`
    width: 100%;
    justify-content: center;
    height: 80px;
`;
export const Collapse = styled.View``;

export const CollapseItem = styled.View`
    width: 100%;
    height: 60px;
    justify-content: center;
    align-items: center;
    border-bottom-color: #DEDEDE;
    border-bottom-width: 0.5px;
    border-style: solid;
`;

export const CollapseItemDropdown = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    height: ${props => props.height ? props.height : '60px'};
    border-bottom-color: #DEDEDE;
    border-bottom-width: 0.5px;
    border-style: solid;
`;

export const DropdownHead = styled.View`
    flex-direction: row;
`;

export const CollapseTopItem = styled.View`
    width: 100%;
    height: 80px;
    justify-content: center;
    align-items: center;
    border-bottom-color: #DEDEDE;
    border-bottom-width: 0.5px;
    border-style: solid;
`;

export const Form = styled.View`
    width: 90%;
    height: 100%;
`;

export const DropdownList = styled.View`
    width: 90%;
    height: 100%;
`;

export const styles = StyleSheet.create({
    textMarginRight: {
        marginRight: 10
    }
})