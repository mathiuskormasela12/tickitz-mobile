// import all modules
import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const ShowTime = styled.View`
  background-color: #f5f6f8;
  padding-vertical: 30px;
`;

export const Header = styled.View`
  width: 100%;
`;

export const Title = styled.Text`
  color: black;
  font-size: 23px;
  text-align: center;
  font-weight: bold;
`;

export const Form = styled.View`
  margin-top: 30px;
  width: 100%;
  align-items: center;
`;

export const Column = styled.View`
  width: 88%;
  margin-bottom: 20px;
`;

export const Date = styled.View`
  width: 100%;
  background-color: #eff0f6;
  height: 55px;
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 21px;
`;

export const AppendIcon = styled.View`
  flex: 1;
`;

export const AppendText = styled.View`
  flex: 4;
`;

export const DateText = styled.Text`
  font-size: 16px;
  color: #4e4b66;
  font-weight: 600;
`;

export const Row = styled.View`
  margin-top: 20px;
  align-content: space-between;
  width: 100%;
`;

export const Col = styled.View`
  width: 100%;
  margin-bottom: 20px;
`;

export const Pagination = styled.View`
  width: 100%;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const styles = StyleSheet.create({
  icon: {
    textAlign: 'right',
    color: '#A0A3BD',
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
    paddingLeft: 55,
  },
  location: {
    position: 'absolute',
    top: 18,
    left: 20,
  },
  button: {
    marginRight: 10,
  },
});
