import {
  NO_SEARCH,
  NO_OWNER,
  NO_REPO,
  NO_RESULT,
  API_RATE_EXCEEDED,
  NETWORK_ERROR,
  GENERIC_ERROR,
} from './constants';
import colors from './theme/colors';
import welcome from '../assets/welcome.json';
import empty from '../assets/empty.json';
import networkError from '../assets/networkError.json';
import missingInformation from '../assets/missingInfo.json';
import wait from '../assets/wait.json';
import error from '../assets/error.json';

export const getMessageContent = message => {
  switch (message) {
    case NO_SEARCH: {
      return {
        header: 'Welcome to Stargazer',
        text: 'To search the list of Stargazers for a github repository just enter the owner and the name of the repository.',
        animation: welcome,
      };
    }
    case NETWORK_ERROR: {
      return {
        header: 'Network error',
        text: 'It seems that you have weak of no access to the internet. Check  your connection and retry.',
        animation: networkError,
      };
    }
    case NO_OWNER: {
      return {
        header: 'Missing owner name',
        text: 'It seems that you did not provide the name of the owner of the repository. Type it in the text input box and retry.',
        animation: missingInformation,
      };
    }
    case NO_REPO: {
      return {
        header: 'Missing repository name',
        text: 'It seems that you did not provide the name of the repository. Type it in the text input box and retry.',
        animation: missingInformation,
      };
    }
    case NO_RESULT: {
      return {
        header: 'Repository not found',
        text: 'Make sure that the searched repository is a public github repository and that you have spelled the owner name and the repository name correctly.',
        animation: empty,
      };
    }
    case API_RATE_EXCEEDED: {
      return {
        header: 'Search rate exceeded',
        text: 'You can only make 60 searches per hour and you seem to have exceeded this limit. Wait for some time and retry.',
        animation: wait,
      };
    }
    case GENERIC_ERROR: {
      return {
        header: 'Error',
        text: 'Something went wrong',
        animation: error,
      };
    }
    default: {
      return {
        header: 'Error',
        text: 'Something went wrong',
        animation: error,
      };
    }
  }
};

export const getIconColor = colorMode => {
  if (colorMode === 'dark') {
    return colors.dark600;
  }
  return colors.dark400;
};

export const getThemeColors = colorMode => {
  if (colorMode === 'dark') {
    return {
      iconColor: colors.dark600,
      buttonColor: colors.dark200,
      text: colors.white,
    };
  }
  return {
    iconColor: colors.dark400,
    buttonColor: colors.dark800,
    text: colors.dark50,
  };
};

export const headerStyle = {
  fontSize: 24,
  fontWeight: '600',
};

export const textStyle = {
  fontSize: 18,
};
