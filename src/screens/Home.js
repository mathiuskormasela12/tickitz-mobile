// ===== Home
// import all modules
import React, {Fragment} from 'react';
import {ScrollView} from 'react-native';

// import all components
import {HeroHead, NowShowing, UpcomingMovie, Movigoers, Footer} from '../components';
import Navbar from '../components/navbar/Navbar';

function Home() {
    return (
        <Fragment>
					<ScrollView>
						<Navbar />
						<HeroHead />
						<NowShowing />
						<UpcomingMovie />
						<Movigoers />
						<Footer />
					</ScrollView>
        </Fragment>
    )
}

export default Home;