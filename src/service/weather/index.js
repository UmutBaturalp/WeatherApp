import {getWeather} from '../NetworkUrl';
import {get} from '../main';

const getWeatherApi = body => {
  const weatherUrl = getWeather + body;
  return get(weatherUrl);
};

export {getWeatherApi};
