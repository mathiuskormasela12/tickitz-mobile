// ===== Home
// import all modules
import React, {Fragment} from 'react';
import {ScrollView} from 'react-native';

// import all components
import {Footer} from '../components';
import Navbar from '../components/navbar/Navbar';

function MovieDetail() {
    return (
        <Fragment>
					<ScrollView>
						<Navbar />
						<Footer />
					</ScrollView>
        </Fragment>
    )
}

export default MovieDetail;