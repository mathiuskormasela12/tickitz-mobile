// ==== Social Media Container
// import all modules
import {StyleSheet} from 'react-native';
import * as variables from '../../style/variable';

export default StyleSheet.create({
  container: {
    marginTop: 52,
    marginBottom: 58,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  mr: {
    marginRight: 32,
  },
  items: {
    width: 64,
    height: 64,
    backgroundColor: variables.light,
    elevation: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid',
    borderColor: variables.light,
    borderWidth: 0.5,
    borderRadius: 4,
  },
  img: {
    height: 30,
    width: 30,
  },
});
