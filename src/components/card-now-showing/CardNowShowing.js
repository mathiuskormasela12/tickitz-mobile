// ===== Card Now Showing
// import all modules
import React, {useState} from 'react';
import {TouchableWithoutFeedback, Alert} from 'react-native'

// import all components
import {Card, CardHead, Image, CardFooter, Title, Subtitle} from './styles';
import Button from '../button/Button'

// import images
import superman from '../../assets/img/superman.png';

function CardNowShowing(props) {
  const [expand, setExpand] = useState(false);

  const show = () => {
    setExpand(expand => !expand)
  }

  const push = () => {
    props.navigation.navigate('Detail');
  }

  return (
    <TouchableWithoutFeedback onPress={show}>
      <Card color={expand && true} {...props}>
        <CardHead>
          <Image source={superman} />
        </CardHead>
        {expand && (
          <CardFooter>
            <Title>Spider-Man : H...</Title>
            <Subtitle>Action, Adventure, Sci-Fi</Subtitle>
            <TouchableWithoutFeedback onPress={push}>
              <Button height="40px" width="100%">Details</Button>
            </TouchableWithoutFeedback>
            <Button height="40px" width="100%" primary>Book Now</Button>
          </CardFooter>
        )}
      </Card>
    </TouchableWithoutFeedback>
  )
}

export {CardNowShowing};
