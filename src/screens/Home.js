// ===== Home
// import all modules
import React, {Fragment} from 'react';
import {Text, ScrollView} from 'react-native'

// import all components
import {Hero} from '../components'
import Search from '../components/search-field/SearchField'

function Home() {
    return (
        <Fragment>
					<ScrollView>
						<Hero>
							<Text>Ini</Text>
						</Hero>
					</ScrollView>
        </Fragment>
    )
}

export default Home;