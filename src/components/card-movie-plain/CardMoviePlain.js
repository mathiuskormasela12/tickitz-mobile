// ===== Card Now Showing
// import all modules
import React, {Fragment} from 'react';

// import all components
import {Card, CardHead, Image} from './styles';

// import images
import superman from '../../assets/img/superman.png';

function CardNowMoviePlain(props) {
  return (
    <Fragment>
      <Card {...props}>
        <CardHead>
          <Image source={superman} />
        </CardHead>
      </Card>
    </Fragment>
  );
}

export {CardNowMoviePlain};
