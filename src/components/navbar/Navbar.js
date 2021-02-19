// ===== Navbar
// import all modules
import React, {Fragment, useState} from 'react';
import {View, TouchableWithoutFeedback, Text} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

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
	CollapseItemDropdown
} from './styled';

// import img
import logo from '../../assets/img/logo.png';
import Burger from '../../assets/img/burger.svg';

export default function Navbar() {
		const [show, setShow] = useState(false)

		const handleToggle = () => {
			setShow(show => !show)
		}

    return (
        <Fragment>
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
						{show && (
							<Collapse>
								<CollapseTopItem>
									<Form>
										<SearchField keyboardType="web-search" placeholder="Search..." placeholderColor="#A0A3BD" />
									</Form>
								</CollapseTopItem>
								<CollapseItemDropdown height={'200px'}>
									<DropdownHead>
										<Text style={styles.textMarginRight}>Location</Text>
										<Icon name="angle-down" size={15} />
									</DropdownHead>
									<DropdownList>
										<Text>Jakarta</Text>
										<Text>Surabaya</Text>
									</DropdownList>
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
							</Collapse>
						)}
					</Nav>
        </Fragment>
    )
}
