// ===== Card Now Showing
// import all modules
import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';

// import all components
import {Card, CardHead, Image} from './styles';

// import images
import superman from '../../assets/img/superman.png';

function CardNowShowing(props) {
  const push = () => {
    props.navigation.navigate('Detail');
  };

  return (
    <TouchableWithoutFeedback onPress={push}>
      <Card {...props}>
        <CardHead>
          <Image source={superman} />
        </CardHead>
      </Card>
    </TouchableWithoutFeedback>
  );
}

export {CardNowShowing};
