import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  container: {
    backgroundColor: '#37474f',
    width: windowWidth * 0.95,
    height: windowHeight * 0.15,
    borderRadius: windowWidth * 0.04,
    paddingHorizontal: windowWidth * 0.04,
  },

  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#556973',
    paddingBottom: windowWidth * 0.003,
    marginTop: windowHeight * 0.01,
  },

  buttonContainer: {
    alignItems: 'center',
  },

  button: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.05,
    backgroundColor: '#808080',
    borderRadius: windowWidth * 0.03,
    marginTop: windowHeight * 0.015,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: windowWidth * 0.04,
  },
});
