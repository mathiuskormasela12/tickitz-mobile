// ===== Home
// import all modules
import React, {Fragment} from 'react';
import {Text, ScrollView, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux'

// import all components
import {Hero} from '../components';
import Navbar from '../components/navbar/Navbar';

const styled = StyleSheet.create({
	hero: {
		backgroundColor: 'rgba(0, 0, 0, 0.24)'
	}
})

function Home() {
		const toggle = useSelector(state => state.home.toggle);
    return (
        <Fragment>
					<ScrollView>
						<Hero style={toggle && styled.hero}>
							<Navbar />
							<Text>Ini</Text>
						</Hero>
					</ScrollView>
        </Fragment>
    )
}

export default Home;