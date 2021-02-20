// ===== Home
// import all modules
import React, {Fragment} from 'react';
import {View, ScrollView} from 'react-native';
import {useSelector} from 'react-redux'

// import all components
import {HeroHead} from '../components';
import Navbar from '../components/navbar/Navbar';

function Home() {
		const toggle = useSelector(state => state.home.toggle);
    return (
        <Fragment>
					<ScrollView>
						<Navbar />
						<HeroHead />
					</ScrollView>
        </Fragment>
    )
}

export default Home;