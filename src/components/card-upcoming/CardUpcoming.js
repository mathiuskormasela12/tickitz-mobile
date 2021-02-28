// ===== Card Upcoming
// import all modules
import React, {Fragment} from 'react';
import push from '../../helpers/push';

// import all components
import {Card, CardHead, Image, CardFooter, Title, Subtitle} from './styles';
import Button from '../button/Button';

function CardUpcoming(props) {
  const navigate = () => {
    push(props, 'Detail');
  };
  return (
    <Fragment>
      <Card {...props}>
        <CardHead>
          <Image source={{
            uri: props.poster
          }} />
        </CardHead>
        <CardFooter>
          <Title>{props.title}</Title>
          <Subtitle>{props.genres}</Subtitle>
          <Button height="40px" width="100%" onPress={navigate}>
            Details
          </Button>
        </CardFooter>
      </Card>
    </Fragment>
  );
}

export {CardUpcoming};