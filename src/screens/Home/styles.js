import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
  },
  title: {
    color: 'white',
    fontSize: 80,
    fontWeight: 'bold',
    width: '70%',
    marginLeft: 25,
    marginTop:66
  },
  button: {
    backgroundColor: 'white',
    width: 200,
    marginLeft: 25,
    height: 40,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  buttonText: {
    fontSize: 14,
    color: 'black',
  },
  searchButton: {
    backgroundColor: '#ffff',
    borderRadius: 25,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height:45,
    marginTop:20
  },
  searchButtonText:{
    marginLeft:11, 
    fontSize:14,
  }
});
export default styles;
