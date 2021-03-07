// ===== Card Now Showing
// import all modules
import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';

// import all components
import {Card, CardHead, Image} from './styles';

function CardNowShowing(props) {
  const push = (id) => {
    props.navigation.navigate('Detail', {id});
  };

  return (
    <TouchableWithoutFeedback onPress={() => push(props.id)}>
      <Card {...props}>
        <CardHead>
          <Image
            source={{
              uri: props.poster,
            }}
          />
        </CardHead>
      </Card>
    </TouchableWithoutFeedback>
  );
}

export {CardNowShowing};
