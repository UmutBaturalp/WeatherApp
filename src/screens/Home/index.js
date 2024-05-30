import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {Images} from '../../assets'; //images && icons
import {dummyData} from '../../assets/contants'; //dummyData
import {WeatherItem} from '../../components'; //weatherItem
import {getWeatherApi} from '../../service/weather';
const Home = () => {
  const urlSend = '?data.lang=tr&data.city=ankara';
  const [weatherData, setweatherData] = useState([]);
  const apiFunc = () => {
    getWeatherApi(urlSend).then(res => {
      console.log(res);
      setweatherData(res.result);
      console.log('weatherData', weatherData);
    });
  };
/*  useEffect(() => {
    apiFunc();
  });*/
  return (
    <SafeAreaView>
      <ImageBackground source={Images.bgImage} style={styles.container}>
        <View style={styles.citySection}>
          <TouchableOpacity onPress={apiFunc}>
            <Text style={styles.cityText}>İstanbul</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.weatherIcon}>
          <Image
            source={{uri: weatherData[0]?.icon}}
            style={styles.weatherIcon}
          />
        </View>
        <View style={styles.weatherDegree}>
          <Text style={styles.degreeText}>{weatherData[0]?.degree}°</Text>
        </View>
        <View style={styles.weatherInfoo}>
          <View style={styles.weatherMinMaxDegree}>
            <Text style={styles.minMaxDegreeText}>
              {weatherData[0]?.min}° - {weatherData[0]?.max}°
            </Text>
          </View>
          <View style={styles.weatherDescription}>
            <Text style={styles.weatherDescriptionText}>
              {weatherData[0]?.description}
            </Text>
          </View>
        </View>
        <View style={styles.otherDays}>
          <View style={styles.line}></View>
          <View style={styles.otherDaysInfo}>
            <WeatherItem dummyData={weatherData && weatherData[0]} />
            <WeatherItem dummyData={weatherData && weatherData[1]} />
            <WeatherItem dummyData={weatherData && weatherData[0]} />
          </View>
          <View style={styles.otherDaysInfo}>
            <WeatherItem dummyData={weatherData && weatherData[0]} />
            <WeatherItem dummyData={weatherData && weatherData[0]} />
            <WeatherItem dummyData={weatherData && weatherData[0]} />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Home;
