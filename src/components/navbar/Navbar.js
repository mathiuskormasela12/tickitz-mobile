// ===== Navbar
// import all modules
import React, {useState, Fragment} from 'react';
import {View, TouchableWithoutFeedback, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import push from '../../helpers/push';
import {useNavigation} from '@react-navigation/native';

// import actions
import {showToggle} from '../../redux/actions/home';
import {logout} from '../../redux/actions/auth';
import {resetTransaction} from '../../redux/actions/transaction';

// import all components
import Container from '../container/Container';
import {
  Nav,
  Brand,
  Row,
  Collapse,
  CollapseItem,
  DropdownHead,
  Navs,
  styles,
  DropdownList,
  CollapseItemDropdown,
  DropdownItem,
  CollapseFoot,
  TextFoot,
} from './styled';

// import img
import logo from '../../assets/img/logo.png';
import Burger from '../../assets/img/burger.svg';

export default function Navbar() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const toggle = useSelector((currentToggle) => currentToggle.home.toggle);
  const token = useSelector((state) => state.auth.token);
  const [dropdown, setDropdown] = useState(false);

  const handleToggle = () => {
    dispatch(showToggle());
  };

  const handleLogout = () => {
    dispatch(logout());
    dispatch(resetTransaction());
    push({navigation}, 'Login');
  };

  const handlePush = () => {
    push({navigation}, 'Home');
    dispatch(resetTransaction());
  };

  const handleDropdown = () => {
    setDropdown((show) => !show);
  };

  return (
    <Fragment>
      <Nav>
        <Navs>
          <Container>
            <Row>
              <TouchableWithoutFeedback onPress={handlePush}>
                <Brand source={logo} />
              </TouchableWithoutFeedback>
              <View>
                <TouchableWithoutFeedback onPress={handleToggle}>
                  <Burger width="30" height="30" />
                </TouchableWithoutFeedback>
              </View>
            </Row>
          </Container>
        </Navs>
        {toggle && (
          <Collapse>
            <CollapseItemDropdown
              style={dropdown ? styles.dropdownPadding : styles.dropdownHeight}>
              <TouchableWithoutFeedback onPress={handleDropdown}>
                <DropdownHead style={dropdown && styles.dropdownHead}>
                  <Text style={styles.textMarginRight}>Location</Text>
                  <Icon name="angle-down" size={15} />
                </DropdownHead>
              </TouchableWithoutFeedback>
              {dropdown && (
                <DropdownList>
                  <DropdownItem>
                    <Text>Jakarta</Text>
                  </DropdownItem>
                  <DropdownItem>
                    <Text>Surabaya</Text>
                  </DropdownItem>
                </DropdownList>
              )}
            </CollapseItemDropdown>
            <CollapseItem>
              <Text>Movies</Text>
            </CollapseItem>
            {!token && (
              <Fragment>
                <CollapseItem>
                  <TouchableWithoutFeedback
                    onPress={() => push({navigation}, 'Login')}>
                    <Text>Login</Text>
                  </TouchableWithoutFeedback>
                </CollapseItem>
                <CollapseItem>
                  <TouchableWithoutFeedback
                    onPress={() => push({navigation}, 'Register')}>
                    <Text>Register</Text>
                  </TouchableWithoutFeedback>
                </CollapseItem>
              </Fragment>
            )}
            {token && (
              <Fragment>
                <CollapseItem>
                  <TouchableWithoutFeedback
                    onPress={() => push({navigation}, 'Profile')}>
                    <Text>Profile</Text>
                  </TouchableWithoutFeedback>
                </CollapseItem>
                <CollapseItem>
                  <TouchableWithoutFeedback onPress={handleLogout}>
                    <Text>Logout</Text>
                  </TouchableWithoutFeedback>
                </CollapseItem>
              </Fragment>
            )}
            <CollapseFoot>
              <TextFoot>© 2021 Tickitz. All Rights Reserved.</TextFoot>
            </CollapseFoot>
          </Collapse>
        )}
      </Nav>
    </Fragment>
  );
}
