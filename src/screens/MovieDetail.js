// ===== Home
// import all modules
import React, {Fragment} from 'react';
import {ScrollView} from 'react-native';

// import all components
import {Footer} from '../components';
import Navbar from '../components/navbar/Navbar';
import {
	Details,
	ShowTimes
} from '../components';

function MovieDetail() {
    return (
        <Fragment>
					<ScrollView>
						<Navbar />
						<Details />
						<ShowTimes />
						<Footer />
					</ScrollView>
        </Fragment>
    )
}

export default MovieDetail;