import {NO_SEARCH, NO_OWNER, NO_REPO, NO_RESULT, API_RATE_EXCEEDED, NETWORK_ERROR,GENERIC_ERROR} from './constants';
import colors from './theme/colors';

export const getMessageText = message => {
  switch (message) {
    case NO_SEARCH: {
      return {
        header: 'Welcome to Stargazer',
        text: `To search the list of Stargazers for a github repository just enter the owner and the name of the repository.`,
      };
    }
    case NETWORK_ERROR: {
      return {
        header: 'Network error',
        text: 'It seems that you have weak of no access to the internet. Check  your connection and retry.'
      }
    }
    case NO_OWNER: {
      return {
        header: 'Missing owner name',
        text: 'It seems that you did not provide the name of the owner of the repository. Type it in the text input box and retry.',
      };
    }
    case NO_REPO: {
      return {
        header: 'Missing repository name',
        text: 'It seems that you did not provide the name of the repository. Type it in the text input box and retry.',
      };
    }
    case NO_RESULT: {
      return {
        header: 'Repository not found',
        text: 'Make sure that the searched repository is a public github repository and that you have spelled the owner name and the repository name correctly.',
      };
    }
    case API_RATE_EXCEEDED: {
      return {
        header: 'Search rate exceeded',
        text: 'You can only make 60 searches per hour and you seem to have exceeded this limit. Wait for some time and retry.'
      }
    }
    case API_RATE_EXCEEDED: {
      return {
        header: 'Error',
        text: 'Something went wrong',
      };
    }
    default: {
      return {
        header: 'Error',
        text: 'Something went wrong',
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
