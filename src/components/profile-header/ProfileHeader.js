// ===== Profile Header
import React, {Fragment, useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  Modal,
  TouchableOpacity,
} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import http from '../../services/Services';

// import actions
import {refresh} from '../../redux/actions/auth';
import loading from '../../redux/actions/loading';

// import all components
import {SimpleCard} from '../';
import Button from '../button/Button';

// import assets
import photo from '../../assets/img/profile.png';
import HorizontalFill from '../../assets/img/horizontal-fill.svg';
import Star from '../../assets/img/star.svg';

export function ProfileHeader() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [isVisible, setVisible] = useState(false);
  const [state, setState] = useState({
    photo: null,
    fullName: null,
  });

  const handleImgLib = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: false,
      },
      async (response) => {
        if (response.uri) {
          if (response.fileSize > 3000000) {
            setVisible(!isVisible);
            showMessage({
              message: 'Photo size must be lower than 3mb',
              type: 'warning',
              duration: 2000,
              hideOnPress: true,
            });
          } else {
            const formData = new FormData();
            formData.append('poster', {
              uri: response.uri,
              type: response.type,
              name: response.fileName,
            });
            setVisible(!isVisible);
            dispatch(loading());
            try {
              const {data} = await http.upload(auth.token, formData);
              dispatch(loading());
              showMessage({
                message: data.message,
                type: data.success ? 'success' : 'warning',
                duration: 2000,
                hideOnPress: true,
              });
              dispatch(refresh());
            } catch (err) {
              console.log(err);
              dispatch(loading());
              showMessage({
                message: err.response.data.message,
                type: err.response.data.success ? 'success' : 'warning',
                duration: 2000,
                hideOnPress: true,
              });
            }
          }
        }
      },
    );
  };

  const handleCamera = () => {
    launchCamera(
      {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 200,
        maxWidth: 200,
      },
      async (response) => {
        if (response.uri) {
          const formData = new FormData();
          formData.append('poster', {
            uri: response.uri,
            type: response.type,
            name: response.fileName,
          });
          setVisible(!isVisible);
          dispatch(loading());
          try {
            const {data} = await http.upload(auth.token, formData);
            dispatch(loading());
            showMessage({
              message: data.message,
              type: data.success ? 'success' : 'warning',
              duration: 2000,
              hideOnPress: true,
            });
            dispatch(refresh());
          } catch (err) {
            console.log(err);
            dispatch(loading());
            showMessage({
              message: err.response.data.message,
              type: err.response.data.success ? 'success' : 'warning',
              duration: 2000,
              hideOnPress: true,
            });
          }
        }
      },
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data} = await http.getUserDetail(auth.token);
        setState((currentState) => ({
          ...currentState,
          fullName:
            data.results.first_name &&
            `${data.results.first_name}${
              String(data.results.last_name) !== 'undefined' &&
              String(data.results.last_name) !== 'null'
                ? ` ${data.results.last_name}`
                : ''
            }`,
          photo:
            data.results.poster.split('/').pop() === 'null'
              ? null
              : data.results.poster,
        }));
      } catch (err) {
        console.log(err);
        showMessage({
          message: err.response.data.message,
          type: 'warning',
          duration: 2000,
          hideOnPress: true,
        });
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.isRefresh]);

  return (
    <Fragment>
      <View style={style.container}>
        <Modal animationType="slide" transparent={true} visible={isVisible}>
          <View style={style.modalFlex}>
            <View style={style.modal}>
              <View style={style.containerModal}>
                <Button
                  primary
                  height="55px"
                  width="100%"
                  onPress={handleImgLib}>
                  Choose From Gallery
                </Button>
                <Button
                  primary
                  height="55px"
                  width="100%"
                  onPress={handleCamera}>
                  Take a Photo
                </Button>
                <Button
                  primary
                  height="55px"
                  width="100%"
                  onPress={() => setVisible(!isVisible)}>
                  Close
                </Button>
              </View>
            </View>
          </View>
        </Modal>
        <SimpleCard style={style.card}>
          <View style={style.head}>
            <View style={style.containerFixed}>
              <View style={style.header}>
                <View style={style.headerCol}>
                  <Text style={style.textInfo}>info</Text>
                </View>
                <View style={[style.headerCol, style.right]}>
                  <TouchableOpacity onPress={() => setVisible(!isVisible)}>
                    <HorizontalFill />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={style.imageHeader}>
                {!state.photo ? (
                  <Image source={photo} style={style.profile} />
                ) : (
                  <Image
                    source={{
                      uri: state.photo,
                    }}
                    style={style.profile}
                  />
                )}
                <Text style={style.figcaption}>{state.fullName || '-'}</Text>
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
    resizeMode: 'cover',
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
    marginTop: 17,
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
  modal: {
    height: 300,
    width: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalFlex: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: (100 / 100) * Dimensions.get('screen').height,
    width: (100 / 100) * Dimensions.get('screen').width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerModal: {
    width: '80%',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  buttonMargin: {
    marginBottom: 0,
  },
});
