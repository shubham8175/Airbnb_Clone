import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  textInput: {
    fontSize: 20,
    marginBottom:20
  },
  container: {
    margin: 20,

  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    paddingVertical: 7,
  },
  iconContainer: {
    height: 40,
    width: 40,
    backgroundColor: '#EDEAEC',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginRight: 15,
  },
});
export default styles;
