// ===== View All
// import all modules
import React, {Fragment, useState, useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/Ionicons';
import http from '../../services/Services';

// import all components
import SearchField from '../search-field/SearchField';
import {SimpleCard, CardViewAll, MiniLoading, MiniMessage} from '../';
import Button from '../button/Button';

export function ViewAll(props) {
  const [state, setState] = useState({
    keyword: '',
    selectedSort: 'id',
    isAsc: true,
    movies: [],
    loading: false,
    message: '',
    isRefresh: false,
    prevLink: null,
    nextLink: null,
    page: 1,
  });

  const handleSearch = (value) => {
    setState((current) => ({
      ...current,
      keyword: value,
      isRefresh: !current.isRefresh,
      page: 1,
    }));
  };

  const handleAsc = () => {
    setState((currentState) => ({
      ...currentState,
      isAsc: !currentState.isAsc,
      isRefresh: !currentState.isRefresh,
      page: 1,
    }));
  };

  const handleNextPage = () => {
    setState((current) => ({
      ...current,
      page: Number(current.page) + 1,
      isRefresh: !current.isRefresh,
    }));
  };

  const handlePrevPage = () => {
    setState((current) => ({
      ...current,
      page: Number(current.page) - 1,
      isRefresh: !current.isRefresh,
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
      setState((current) => ({
        ...current,
        loading: !current.loading,
      }));
      try {
        const {data} = await http.getAllMovies({
          search: state.keyword,
          by: state.selectedSort,
          sort: state.isAsc ? 'ASC' : 'DESC',
          page: state.page,
        });

        setState((current) => ({
          ...current,
          isRefresh: current.isRefresh,
          message: data.message,
          movies: data.results,
          loading: !current.loading,
          prevLink: data.pageInfo.previousMovie,
          nextLink: data.pageInfo.nextMovie,
          page: data.pageInfo.currentPage,
        }));
      } catch (err) {
        console.log(err);
        setState((current) => ({
          ...current,
          isRefresh: current.isRefresh,
          loading: !current.loading,
          message: err.response.data.message,
          prevLink: null,
          nextLink: null,
        }));
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.isRefresh]);

  return (
    <Fragment>
      <View style={styles.hero}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>All Moviews</Text>
            <View style={styles.line} />
          </View>
          <SimpleCard style={styles.form}>
            <View style={styles.containerFixed}>
              <View style={styles.containerSearch}>
                <SearchField
                  keyboardType="web-search"
                  placeholderColor="#4E4B66"
                  placeholder="Search Movie ..."
                  onChangeText={handleSearch}
                />
              </View>
              <View style={styles.pickerContainer}>
                {state.isAsc ? (
                  <Icon
                    name="arrow-up-outline"
                    style={styles.arrow}
                    size={22}
                    color="#6E7191"
                    onPress={handleAsc}
                  />
                ) : (
                  <Icon
                    name="arrow-down-outline"
                    style={styles.arrow}
                    size={22}
                    color="#6E7191"
                    onPress={handleAsc}
                  />
                )}
                <Picker
                  dropdownIconColor="#A0A3BD"
                  selectedValue={state.selectedSort}
                  onValueChange={(itemValue, itemIndex) =>
                    setState((currentState) => ({
                      ...currentState,
                      selectedSort: itemValue,
                      isRefresh: !currentState.isRefresh,
                    }))
                  }
                  style={styles.picker}>
                  <Picker.Item label="ID" style={styles.item} value="id" />
                  <Picker.Item
                    label="Title"
                    style={styles.item}
                    value="title"
                  />
                  <Picker.Item
                    label="Release Date"
                    style={styles.item}
                    value="releaseDate"
                  />
                  <Picker.Item
                    label="Duration"
                    style={styles.item}
                    value="duration"
                  />
                </Picker>
              </View>
            </View>
          </SimpleCard>
          {state.loading ? (
            <MiniLoading />
          ) : state.movies.length < 1 ? (
            <MiniMessage message={state.message} />
          ) : (
            <View style={styles.row}>
              {state.movies.map((item, index) => (
                <Fragment key={String(index)}>
                  <View style={[styles.col, styles.margin]}>
                    <CardViewAll {...props} poster={item.poster} id={item.id} />
                  </View>
                </Fragment>
              ))}
            </View>
          )}
          <View style={styles.footer}>
            <View style={styles.row}>
              <View style={styles.col}>
                {state.prevLink ? (
                  <Button height="50px" width="100%" onPress={handlePrevPage}>
                    Previous
                  </Button>
                ) : (
                  <Button height="50px" width="100%" disabled>
                    Previous
                  </Button>
                )}
              </View>
              <View style={styles.col}>
                {state.nextLink ? (
                  <Button
                    height="50px"
                    width="100%"
                    primary
                    onPress={handleNextPage}>
                    Next
                  </Button>
                ) : (
                  <Button height="50px" width="100%" disabled>
                    Next
                  </Button>
                )}
              </View>
            </View>
          </View>
        </View>
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    width: (90 / 100) * Dimensions.get('screen').width,
    marginBottom: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  containerFixed: {
    width: '85%',
    marginBottom: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  hero: {
    backgroundColor: '#f5f6f8',
    paddingTop: 45,
  },
  header: {
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: '#14142B',
    fontFamily: 'Mulish-Bold',
    marginBottom: 13,
  },
  line: {
    backgroundColor: '#5F2EEA',
    height: 2.2,
    width: 60,
  },
  form: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingVertical: 20,
    marginTop: 25,
    backgroundColor: 'transparent',
    marginBottom: 10,
  },
  containerSearch: {
    height: 60,
  },
  picker: {
    width: '100%',
    height: 55,
    color: '#4E4B66',
  },
  pickerContainer: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#EFF0F6',
    borderStyle: 'solid',
    backgroundColor: '#EFF0F6',
    width: '100%',
    paddingLeft: 45,
    marginTop: 20,
  },
  row: {
    width: '100%',
    marginBottom: 40,
    alignItems: 'center',
  },
  col: {
    width: '80%',
    alignItems: 'center',
  },
  arrow: {
    position: 'absolute',
    top: 17,
    left: 20,
  },
  margin: {
    marginTop: 25,
  },
});
