// ===== Order History Content
// import all modules
import React, {Fragment, useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import {useSelector} from 'react-redux';
import moment from 'moment';
import http from '../../services/Services';

// import all components
import {SimpleCard, MiniLoading, MiniMessage} from '../';
import Button from '../button-profile/Button';

// import assets
import cineone from '../../assets/img/cineone.png';
import ebv from '../../assets/img/ebv.png';

export function OrderHistoryContent() {
  const token = useSelector(state => state.auth.token);
  const [orderHistory, setOrderHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    fetchOrderHistory();
  }, []);

  const fetchOrderHistory = async () => {
    setLoading(loading => !loading);
    try {
      const {data} = await http.getOrderHistory(token);
      console.log('======= RESULTS ======')
      console.log(data)
      setOrderHistory(data.results);
      setLoading(loading => !loading);
      setMessage(data.message);
    } catch (error) {
      console.log(error);
      setLoading(loading => !loading);
      setMessage(error.response.data.message);
    }
  }

  return (
    <Fragment>
      <View style={style.container}>
        <View style={style.row}>
        {
          loading ? <MiniLoading /> : (orderHistory.length < 1 ? <MiniMessage message={message} /> : (
            <Fragment>
              {orderHistory.map((item, index) => (
                <View style={style.col} key={String(index)}>
                  <SimpleCard style={style.card}>
                    <View style={style.cardHeader}>
                      <View style={style.containerFixed}>
                        <Image source={{
                          uri: item.cinemaPoster
                        }} style={style.img} />
                        <Text style={style.time}>
                          {moment(new Date(item.showTimeDate)).format('dddd, DD MMMM YYYY')} - {moment(new Date(2021, 4, 1, item.ticketTime.split(':')[0], item.ticketTime.split(':')[1], item.ticketTime.split(':')[2], 0)).format('hh:mma')}
                        </Text>
                        <Text style={style.title}>{item.movieTitle}</Text>
                      </View>
                    </View>
                    <View style={style.cardFooter}>
                      <View style={[style.containerFixed, style.flex]}>
                        {
                          (new Date(item.showTimeDate).getTime() < Date.now()) ? (
                            <Button height="45px" width="100%">
                              Ticket Used
                            </Button>
                          ) : (
                            <Button active height="45px" width="100%">
                            Ticket In Active
                          </Button>
                          )
                        }
                      </View>
                    </View>
                  </SimpleCard>
                </View>
              ))}
            </Fragment>
          ))
        }
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
