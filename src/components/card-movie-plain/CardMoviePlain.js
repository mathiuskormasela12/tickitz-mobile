// ===== Card Now Showing
// import all modules
import React, {Fragment} from 'react';

// import all components
import {Card, CardHead, Image} from './styles';

function CardNowMoviePlain(props) {
  return (
    <Fragment>
      <Card {...props}>
        <CardHead>
          <Image
            source={{
              uri: props.poster,
            }}
          />
        </CardHead>
      </Card>
    </Fragment>
  );
}

export {CardNowMoviePlain};
