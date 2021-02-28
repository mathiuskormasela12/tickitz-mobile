// ===== Card Now Showing
// import all modules
import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';

// import all components
import {Card, CardHead, Image} from './styles';

function CardNowShowing(props) {
  const push = () => {
    props.navigation.navigate('Detail');
  };

  return (
    <TouchableWithoutFeedback onPress={push}>
      <Card {...props}>
        <CardHead>
          <Image source={{
            uri: props.poster
          }} />
        </CardHead>
      </Card>
    </TouchableWithoutFeedback>
  );
}

export {CardNowShowing};
