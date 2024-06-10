import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  container: {
    backgroundColor: '#7da453',
    width: windowWidth * 0.95,
    height: windowHeight * 0.05,
    borderRadius: windowWidth * 0.01,
    justifyContent: 'center',
    marginTop: windowHeight * 0.02,
  },

  title: {color: 'white', marginLeft: windowWidth * 0.02},
});
