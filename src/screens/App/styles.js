import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  container: {
    backgroundColor: '#102027',
    flex: 1,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: windowHeight * 0.03,
    marginHorizontal: windowWidth * 0.04,
  },

  title: {
    color: '#f9a200',
    fontSize: 36,
    fontWeight: 'bold',
  },

  counter: {
    color: '#f9a200',
    fontSize: 36,
    fontWeight: 'bold',
  },

  body: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: windowHeight * 0.01,
    padding: windowWidth * 0.03,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  todobody: {
    marginLeft: windowWidth * 0.02,
    marginBottom: windowHeight * 0.2,
  },
});
