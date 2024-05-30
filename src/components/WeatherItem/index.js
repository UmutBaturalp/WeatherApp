import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  Image,
} from 'react-native';
import React from 'react';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height - StatusBar.currentHeight;

const WeatherItem = props => {
  const {dummyData} = props;
  return (
    <View>
      <View style={styles.otherDaysItem}>
        <Text style={styles.otherDaysInfoText}>{dummyData?.day}</Text>
        <Image source={{uri: dummyData?.icon}} style={styles.otherDaysIcon} />
        <Text style={styles.otherDaysDegrees}>
          {dummyData?.min}/{dummyData?.max}
        </Text>
      </View>
    </View>
  );
};

export default WeatherItem;

const styles = StyleSheet.create({
  otherDaysItem: {
    alignItems: 'center',
    rowGap: windowWidth * 0.015,
    width: windowWidth * 0.2,
    height: windowWidth * 0.2,
  },

  otherDaysInfoText: {
    color: 'white',
    fontSize: windowWidth * 0.033,
    fontWeight: '400',
    textTransform: 'capitalize',
  },
  otherDaysIcon: {
    width: windowWidth * 0.09,
    height: windowWidth * 0.09,
  },

  otherDaysDegrees: {
    color: 'black',
    fontSize: windowWidth * 0.035,
    fontWeight: '500',
  },
});
