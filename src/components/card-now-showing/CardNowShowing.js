// ===== Card Now Showing
// import all modules
import React, {useState} from 'react';
import {TouchableWithoutFeedback} from 'react-native'

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
            <Button height="40px" width="100%">Details</Button>
            <Button height="40px" width="100%" primary>Details</Button>
          </CardFooter>
        )}
      </Card>
    </TouchableWithoutFeedback>
  )
}

export {CardNowShowing};
