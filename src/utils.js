import {NO_SEARCH, NO_OWNER, NO_REPO, NO_RESULT} from './constants';

export const getMessageText = message => {
  switch (message) {
    case NO_SEARCH: {
      return {
        header: 'Welcome to Stargazer',
        text: `To search the list of Stargazers for a github repository just enter the owner and the name of the repository.`,
      };
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
    default: {
      return {
        header: 'Error',
        text: 'Something went wrong',
      };
    }
  }
};
