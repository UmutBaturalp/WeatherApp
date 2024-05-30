import {StyleSheet, Dimensions, StatusBar} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height - StatusBar.currentHeight;

export default styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: windowHeight * 0.02,
  },

  //---------------------------------------

  cityText: {
    color: 'white',
    fontSize: windowWidth * 0.1,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },

  weatherIcon: {
    width: windowWidth * 0.4,
    height: windowWidth * 0.4,
  },

  degreeText: {
    color: 'white',
    fontSize: windowWidth * 0.15,
    fontWeight: 'bold',
  },

  weatherInfoo: {
    alignItems: 'center',
  },
  minMaxDegreeText: {
    color: 'white',
    fontSize: windowWidth * 0.06,
    fontWeight: 'bold',
  },

  weatherDescriptionText: {
    color: 'white',
    fontSize: windowWidth * 0.06,
    fontWeight: '500',
    textTransform: 'capitalize',
  },

  //---------------------------------------
  line: {
    width: windowWidth * 0.9,
    height: 0.75,
    backgroundColor: 'white',
  },

  otherDaysInfo: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: windowWidth * 0.9,
    paddingVertical: windowHeight * 0.015,
  },

  otherDaysItem: {
    alignItems: 'center',
    rowGap: windowWidth * 0.015,
  },

  otherDaysInfoText: {
    color: 'black',
    fontSize: windowWidth * 0.04,
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  otherDaysIcon: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
  },

  otherDaysDegrees: {
    color: 'white',
    fontSize: windowWidth * 0.035,
    fontWeight: '500',
  },
});
