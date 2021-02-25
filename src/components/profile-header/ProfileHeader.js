// ===== Profile Header
import React, {Fragment} from 'react';
import {Text, View, StyleSheet, Dimensions, Image} from 'react-native';

// import all components
import {SimpleCard} from '../';

// import assets
import photo from '../../assets/img/profile.png';
import HorizontalFill from '../../assets/img/horizontal-fill.svg';
import Star from '../../assets/img/star.svg';

export function ProfileHeader() {
  return (
    <Fragment>
      <View style={style.container}>
        <SimpleCard style={style.card}>
          <View style={style.head}>
            <View style={style.containerFixed}>
              <View style={style.header}>
                <View style={style.headerCol}>
                  <Text style={style.textInfo}>info</Text>
                </View>
                <View style={[style.headerCol, style.right]}>
                  <HorizontalFill />
                </View>
              </View>
              <View style={style.imageHeader}>
                <Image source={photo} style={style.profile} />
                <Text style={style.figcaption}>Mathius Kormasela</Text>
                <Text style={style.caption}>Moviegoers</Text>
              </View>
            </View>
          </View>
          <View style={style.foot}>
            <View style={style.containerFixed}>
              <Text style={style.loyalty}>Loyalty Point</Text>
              <View style={style.moviegoersCard}>
                <View style={style.containerFixed}>
                  <Star style={style.star} />
                  <View style={[style.baloon, style.first]} />
                  <View style={[style.baloon, style.last]} />
                  <Text style={style.cardTitle}>Moviegoers</Text>
                  <View style={style.cardFoot}>
                    <Text style={style.points}>420</Text>
                    <Text style={style.textPoints}>points</Text>
                  </View>
                </View>
              </View>
              <View style={style.progress}>
                <Text style={style.textProgress}>
                  180 points become a master
                </Text>
                <View style={style.progressBar}>
                  <View style={style.progressValue(50)} />
                </View>
              </View>
            </View>
          </View>
        </SimpleCard>
      </View>
    </Fragment>
  );
}

const style = StyleSheet.create({
  container: {
    width: (88 / 100) * Dimensions.get('screen').width,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  containerFixed: {
    width: '85%',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  card: {
    paddingVertical: 25,
    width: '100%',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  head: {
    borderBottomColor: '#DEDEDE',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    paddingBottom: 42,
  },
  headerCol: {
    flex: 1,
  },
  imageHeader: {
    alignItems: 'center',
  },
  profile: {
    resizeMode: 'contain',
    width: 200,
    height: 200,
    borderRadius: 200,
  },
  textInfo: {
    fontSize: 18,
    color: '#4E4B66',
    textTransform: 'uppercase',
  },
  right: {
    alignItems: 'flex-end',
  },
  figcaption: {
    color: '#14142B',
    fontSize: 22,
    marginBottom: 12,
    textTransform: 'capitalize',
  },
  caption: {
    fontSize: 17,
    color: '#4E4B66',
  },
  foot: {
    paddingVertical: 35,
  },
  loyalty: {
    color: '#4E4B66',
    fontSize: 19,
  },
  moviegoersCard: {
    marginTop: 27,
    position: 'relative',
    width: '100%',
    paddingVertical: 25,
    backgroundColor: '#5F2EEA',
    borderRadius: 8,
    overflow: 'hidden',
  },
  cardTitle: {
    fontSize: 18,
    color: 'white',
    marginBottom: 40,
  },
  points: {
    fontSize: 25,
    color: 'white',
  },
  textPoints: {
    color: 'white',
    fontSize: 15,
    marginLeft: 4,
  },
  cardFoot: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  star: {
    position: 'absolute',
    right: 0,
    zIndex: 2,
  },
  baloon: {
    width: 150,
    height: 150,
    borderRadius: 150,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    position: 'absolute',
  },
  first: {
    right: -70,
    top: -70,
  },
  last: {
    right: -50,
    top: -90,
  },
  textProgress: {
    color: '#4E4B66',
    fontSize: 18.5,
    textAlign: 'center',
  },
  progress: {
    marginTop: 40,
  },
  progressBar: {
    marginTop: 20,
    width: '100%',
    height: 20,
    borderRadius: 15,
    backgroundColor: '#F5F6F8',
  },
  progressValue: function (width) {
    return {
      width: `${width}%`,
      height: 20,
      borderRadius: 15,
      backgroundColor: '#5F2EEA',
    };
  },
});