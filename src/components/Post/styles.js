import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    aspectRatio: 3 / 2,
    height: undefined,
    borderRadius: 15,
  },
  container: {
    margin: 10,
  },
  bedroom: {
    color: '#A1989A',
    fontSize: 13,
    marginVertical: 5,
  },
  description: {
    color: '#545253',
    fontSize: 18,
    marginBottom: 5,
  },
  prices: {
    fontSize: 18,
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    paddingLeft: 33,
  },
  newPrice: {
    fontWeight: 'bold',
    color: 'black',
  },
  totalPrice: {
    textDecorationLine: 'underline',
  },
});

export default styles;
