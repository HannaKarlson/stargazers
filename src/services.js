import {BASE_URL} from 'react-native-dotenv'
import axios from 'axios'

export const getStarGazers = async ({user, repo, url}) => {
  // this should be moved to a constants file
  const nextPattern = /(?<=<)([\S]*)(?=>; rel="next")/i;
  let nextUrl = null

    if(user === ''){
        return 'no user added'
    }
    if(repo === ''){
        return 'no repo added'
    }
const composedString = url?url:`${BASE_URL}/${user}/${repo}/stargazers`
try {
    const response = await axios.get(
      composedString,
    );
    const linkHeader = response.headers.link
    console.log({linkHeader})
    if(linkHeader && linkHeader.includes(`rel=\"next\"`)){
      console.log('in if')
      console.log('match',linkHeader.match(nextPattern)[0])
      nextUrl = linkHeader.match(nextPattern)[0]; 
      return ({'data':response.data, 'nextUrl':nextUrl})
    }
    console.log(response.headers.link)
    return ({'data':response.data, 'nextUrl':nextUrl});
  } catch (e) {
    if (!e.response) {
      return 'Network error'
  }
  else{
    return (e.response.code)
  }
}
}

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