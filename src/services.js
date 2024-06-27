import {BASE_URL} from 'react-native-dotenv';
import axios from 'axios';
import {nextPattern} from './constants';
import {
  NO_RESULT,
  API_RATE_EXCEEDED,
  GENERIC_ERROR,
  NETWORK_ERROR,
} from './constants';

const switchErrorStatus = status => {
  switch (status) {
    case 404:
      return NO_RESULT;
    case 403:
      return API_RATE_EXCEEDED;
    default:
      return GENERIC_ERROR;
  }
};

export const getStarGazers = async ({user, repo, url}) => {
  let nextUrl = null;
  if (!url && (!user || !repo)) {
    return null;
  }
  // if url is provided more data is loaded for the same repo
  const composedString = url ? url : `${BASE_URL}/${user}/${repo}/stargazers`;
  try {
    const response = await axios.get(composedString);
    const linkHeader = response.headers?.link;
    if (linkHeader && linkHeader.includes('rel="next"') && response.data) {
      nextUrl =
        linkHeader.match(nextPattern) && linkHeader.match(nextPattern)[0];
      return {data: response.data, nextUrl: nextUrl};
    }
    return {data: response.data, nextUrl: nextUrl};
  } catch (e) {
    if (!e.response) {
      throw NETWORK_ERROR;
    } else {
      throw switchErrorStatus(e.response.status);
    }
  }
};
