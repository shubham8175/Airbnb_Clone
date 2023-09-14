import {StatusBarStyle, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderColor: 'lightgrey',
    marginHorizontal: 20,
    paddingVertical:10

  },

  buttonsWithValue: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  plusMinus: {
    height: 26,
    width: 26,
    borderWidth: 2,
    borderColor: '#C9C9C9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 13,
   marginLeft:11
  },
  valueText: {
    color: '#AAA4A4',
    marginLeft:11
  },
  buttonColor: {
    color: '#AAA4A4',
  },
  age: {
    color: '#AAA4A4',
  },
});
export default styles;
