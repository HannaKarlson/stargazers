import {BASE_URL} from 'react-native-dotenv';
import axios from 'axios';
import {nextPattern} from './constants';

export const getStarGazers = async ({user, repo, url}) => {
  let nextUrl = null;

  // if (!url && (!user || !repo)) {
  //   return null;
  // }
  const composedString = url ? url : `${BASE_URL}/${user}/${repo}/stargazers`;
  try {
    const response = await axios.get(composedString);
    //console.log({response});
    const linkHeader = response.headers.link;
   // console.log({linkHeader});
    if (linkHeader && linkHeader.includes(`rel=\"next\"`) && response.data) {
      console.log('in if');

      console.log('match', linkHeader.match(nextPattern)[0]);
      nextUrl = linkHeader.match(nextPattern)[0];
      return {data: response.data, nextUrl: nextUrl};
    }
   // console.log(response.headers.link);
    return {data: response.data, nextUrl: nextUrl};
  } catch (e) {
    if (!e.response) {
      return 'Network error';
    } else {
      return e.response.code;
    }
  }
};

// const switchErrorStatus = (status) => {
//   switch (status) {
//     case 404:
//       return ['error', 'No repo found with the provided data']
//     case 403:
//       return ['error', 'Api rate exceeded, try again later.']
//     default:
//       return ['error', 'Unknown error, try again later']
//   }
// }
