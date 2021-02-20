// ===== Home
// import all modules
import React, {Fragment} from 'react';
import {ScrollView} from 'react-native';

// import all components
import {HeroHead, NowShowing, UpcomingMovie} from '../components';
import Navbar from '../components/navbar/Navbar';

function Home() {
    return (
        <Fragment>
					<ScrollView>
						<Navbar />
						<HeroHead />
						<NowShowing />
						<UpcomingMovie />
					</ScrollView>
        </Fragment>
    )
}

export default Home;