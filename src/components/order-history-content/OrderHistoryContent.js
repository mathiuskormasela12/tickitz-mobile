// ===== Order History Content
// import all modules
import React, {Fragment} from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';

// import all components
import {SimpleCard} from '../';
import Button from '../button-profile/Button';

// import assets
import cineone from '../../assets/img/cineone.png';
import ebv from '../../assets/img/ebv.png';

export function OrderHistoryContent() {
  return (
    <Fragment>
      <View style={style.container}>
        <View style={style.row}>
          <View style={style.col}>
            <SimpleCard style={style.card}>
              <View style={style.cardHeader}>
                <View style={style.containerFixed}>
                  <Image source={cineone} style={style.img} />
                  <Text style={style.time}>
                    Tuesday, 07 July 2020 - 04:30pm
                  </Text>
                  <Text style={style.title}>Spider-Man: Homecoming</Text>
                </View>
              </View>
              <View style={style.cardFooter}>
                <View style={[style.containerFixed, style.flex]}>
                  <Button active height="45px" width="100%">
                    Ticket In Active
                  </Button>
                </View>
              </View>
            </SimpleCard>
          </View>
          <View style={style.col}>
            <SimpleCard style={style.card}>
              <View style={style.cardHeader}>
                <View style={style.containerFixed}>
                  <Image source={ebv} style={style.img} />
                  <Text style={style.time}>
                    Tuesday, 07 July 2020 - 04:30pm
                  </Text>
                  <Text style={style.title}>Spider-Man: Homecoming</Text>
                </View>
              </View>
              <View style={style.cardFooter}>
                <View style={[style.containerFixed, style.flex]}>
                  <Button height="45px" width="100%">
                    Ticket Used
                  </Button>
                </View>
              </View>
            </SimpleCard>
          </View>
          <View style={style.col}>
            <SimpleCard style={style.card}>
              <View style={style.cardHeader}>
                <View style={style.containerFixed}>
                  <Image source={cineone} style={style.img} />
                  <Text style={style.time}>
                    Tuesday, 07 July 2020 - 04:30pm
                  </Text>
                  <Text style={style.title}>Spider-Man: Homecoming</Text>
                </View>
              </View>
              <View style={style.cardFooter}>
                <View style={[style.containerFixed, style.flex]}>
                  <Button active height="45px" width="100%">
                    Ticket In Active
                  </Button>
                </View>
              </View>
            </SimpleCard>
          </View>
          <View style={style.col}>
            <SimpleCard style={style.card}>
              <View style={style.cardHeader}>
                <View style={style.containerFixed}>
                  <Image source={ebv} style={style.img} />
                  <Text style={style.time}>
                    Tuesday, 07 July 2020 - 04:30pm
                  </Text>
                  <Text style={style.title}>Spider-Man: Homecoming</Text>
                </View>
              </View>
              <View style={style.cardFooter}>
                <View style={[style.containerFixed, style.flex]}>
                  <Button height="45px" width="100%">
                    Ticket Used
                  </Button>
                </View>
              </View>
            </SimpleCard>
          </View>
        </View>
      </View>
    </Fragment>
  );
}

const style = StyleSheet.create({
  container: {
    width: (90 / 100) * Dimensions.get('screen').width,
    marginBottom: 0,
    marginTop: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  containerFixed: {
    width: '85%',
    marginBottom: 0,
    marginTop: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  row: {
    flex: 1,
  },
  col: {
    flex: 1,
    marginBottom: 17,
  },
  cardHeader: {
    width: '100%',
    borderBottomColor: '#DEDEDE',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    paddingVertical: 15,
  },
  time: {
    fontSize: 16,
    color: '#AAAAAA',
    marginBottom: 5,
  },
  title: {
    fontSize: 19,
    color: 'black',
  },
  img: {
    resizeMode: 'contain',
    width: 100,
    height: 30,
    marginBottom: 15,
  },
  card: {
    paddingVertical: 20,
  },
  cardFooter: {
    width: '100%',
    paddingVertical: 20,
  },
});
