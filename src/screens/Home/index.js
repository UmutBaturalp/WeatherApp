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
import {WeatherItem, SelectModal} from '../../components'; //weatherItem
import {getWeatherApi} from '../../service/weather';
const Home = () => {
  //selectCity
  const [selected, setSelected] = React.useState('ankara');
  const [city, setCity] = useState('ankara');
  const [isVisible, setIsVisible] = useState(false);
  const metot = () => {
    setCity(selected);
  };
  const modalFunc = () => {
    setIsVisible(!isVisible);
  };
  //selectCity duzenleme
  const urlSend = `?data.lang=tr&data.city=${city}`;
  const [weatherData, setweatherData] = useState([]);
  const apiFunc = () => {
    getWeatherApi(urlSend).then(res => {
      console.log(res);
      setweatherData(res.result);
      console.log('weatherData', weatherData);
    });
  };

  useEffect(() => {
    apiFunc();
  }, [city]);

  return (
    <SafeAreaView>
      <ImageBackground source={Images.bgImage} style={styles.container}>
        <View style={styles.citySection}>
          <TouchableOpacity onPress={apiFunc} style={styles.citySelect}>
            <Text style={styles.cityText}>{selected}</Text>
            <TouchableOpacity onPress={modalFunc}>
              <Text style={styles.downArrow}> ↓ </Text>
            </TouchableOpacity>
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
            <WeatherItem dummyData={weatherData && weatherData[1]} />
            <WeatherItem dummyData={weatherData && weatherData[2]} />
            <WeatherItem dummyData={weatherData && weatherData[3]} />
          </View>
          <View style={styles.otherDaysInfo}>
            <WeatherItem dummyData={weatherData && weatherData[4]} />
            <WeatherItem dummyData={weatherData && weatherData[5]} />
            <WeatherItem dummyData={weatherData && weatherData[6]} />
          </View>
        </View>
      </ImageBackground>
      <SelectModal
        selected={selected}
        setSelected={setSelected}
        metot={metot}
        modalFunc={modalFunc}
        isVisible={isVisible}
      />
    </SafeAreaView>
  );
};

export default Home;

/*<SelectList
setSelected={val => setSelected(val)}
data={data}
save="value"
/> */
