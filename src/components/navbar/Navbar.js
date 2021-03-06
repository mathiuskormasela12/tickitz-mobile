// ===== Navbar
// import all modules
import React, {useState} from 'react';
import {View, TouchableWithoutFeedback, Text, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';

// import actions
import {showToggle} from '../../redux/actions/home';

// import all components
import Container from '../container/Container';
import SearchField from '../search-field/SearchField';
import {
	Nav, 
	Brand, 
	Row, 
	Form, 
	Collapse, 
	CollapseItem, 
	DropdownHead, 
	Navs, 
	CollapseTopItem, 
	styles,
	DropdownList,
	CollapseItemDropdown,
	DropdownItem,
	CollapseFoot,
	TextFoot
} from './styled';

// import img
import logo from '../../assets/img/logo.png';
import Burger from '../../assets/img/burger.svg';

export default function Navbar() {
		const dispatch = useDispatch();
		const toggle = useSelector(toggle => toggle.home.toggle)
		const [dropdown, setDropdown] = useState(false)

		const handleToggle = () => {
			dispatch(showToggle())
		}

		const handleDropdown = () => {
			setDropdown(show => !show)
		}

    return (
        // <ScrollView>
					<Nav>
						<Navs>
							<Container>
								<Row>
									<View>
										<Brand source={logo}/>
									</View>
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
								<CollapseTopItem>
									<Form>
										<SearchField keyboardType="web-search" placeholder="Search..." placeholderColor="#A0A3BD" />
									</Form>
								</CollapseTopItem>
								<CollapseItemDropdown style={dropdown ? styles.dropdownPadding : styles.dropdownHeight}>
									<TouchableWithoutFeedback onPress={handleDropdown}>
										<DropdownHead style={dropdown && styles.dropdownHead}>
											<Text style={styles.textMarginRight}>Location</Text>
											<Icon name="angle-down" size={15} />
										</DropdownHead>
									</TouchableWithoutFeedback>
									{
										dropdown && (
											<DropdownList>
												<DropdownItem>
													<Text>Jakarta</Text>
												</DropdownItem>
												<DropdownItem>
													<Text>Surabaya</Text>
												</DropdownItem>
											</DropdownList>
										)
									}
								</CollapseItemDropdown>
								<CollapseItem>
									<Text>Movies</Text>
								</CollapseItem>
								<CollapseItem>
									<Text>Cinemas</Text>
								</CollapseItem>
								<CollapseItem>
									<Text>Buy Ticket</Text>
								</CollapseItem>
								<CollapseFoot>
									<TextFoot>© 2021 Tickitz. All Rights Reserved.</TextFoot>
								</CollapseFoot>
							</Collapse>
						)}
					</Nav>
        // </ScrollView>
    )
}
