// ===== Card Upcoming
// import all modules
import React, {Fragment} from 'react';

// import all components
import {Card, CardHead, Image, CardFooter, Title, Subtitle} from './styles';
import Button from '../button/Button'

// import images
import superman from '../../assets/img/superman.png';

function CardUpcoming(props) {
  return (
    <Fragment>
      <Card {...props}>
        <CardHead>
          <Image source={superman} />
        </CardHead>
        <CardFooter>
          <Title>Spider-Man : H...</Title>
          <Subtitle>Action, Adventure, Sci-Fi</Subtitle>
          <Button height="40px" width="100%">Details</Button>
        </CardFooter>
      </Card>
    </Fragment>
  )
}

export {CardUpcoming};
