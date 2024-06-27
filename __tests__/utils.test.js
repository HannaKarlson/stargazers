import {getIconColor, getThemeColors, getMessageContent} from '../src/utils';
import * as constants from '../src/constants';
import welcome from '../assets/welcome.json';
import empty from '../assets/empty.json';
import networkError from '../assets/networkError.json';
import missingInformation from '../assets/missingInfo.json';
import wait from '../assets/wait.json';
import error from '../assets/error.json';
import typo from '../assets/typo.json';
import colors from '../src/theme/colors';

describe('getMessageContent', () => {
  it('should return correct message content when no search has been made', () => {
    const expected = {
      header: 'Welcome to Stargazer',
      text: 'To search the list of Stargazers for a github repository just enter the owner and the name of the repository.',
      animation: welcome,
    };
    expect(getMessageContent(constants.NO_SEARCH)).toEqual(expected);
  });
  it('should return correct message content when there are network issues', () => {
    const expected = {
      header: 'Network error',
      text: 'It seems that you have weak of no access to the internet. Check  your connection and retry.',
      animation: networkError,
    };
    expect(getMessageContent(constants.NETWORK_ERROR)).toEqual(expected);
  });
  it('should return correct message content when user tries to make a search with no owner provided', () => {
    const expected = {
      header: 'Missing owner name',
      text: 'It seems that you did not provide the name of the owner of the repository. Type it in the text input box and retry.',
      animation: missingInformation,
    };
    expect(getMessageContent(constants.NO_OWNER)).toEqual(expected);
  });
  it('should return correct message content when user tries to make a search with no repo name provided', () => {
    const expected = {
      header: 'Missing repository name',
      text: 'It seems that you did not provide the name of the repository. Type it in the text input box and retry.',
      animation: missingInformation,
    };
    expect(getMessageContent(constants.NO_REPO)).toEqual(expected);
  });
  it('should return correct message content when no repo is found', () => {
    const expected = {
      header: 'Repository not found',
      text: 'Make sure that the searched repository is a public github repository and that you have spelled the owner name and the repository name correctly.',
      animation: empty,
    };
    expect(getMessageContent(constants.NO_RESULT)).toEqual(expected);
  });
  it('should return correct message content when api search rate has been exceded', () => {
    const expected = {
      header: 'Search rate exceeded',
      text: 'You can only make 60 searches per hour and you seem to have exceeded this limit. Wait for some time and retry.',
      animation: wait,
    };
    expect(getMessageContent(constants.API_RATE_EXCEEDED)).toEqual(expected);
  });
  it('should return correct message content when there is a spelling error', () => {
    const expected = {
      header: 'Spelling error',
      text: 'It seems that you have used a character that is not allowed for github repos. Allowed charachters are letters(a-Z), numbers, dash(-), underscore(_) and dot(.)',
      animation: typo,
    };
    expect(getMessageContent(constants.SPELLING_ERROR)).toEqual(expected);
  });
  it('should return correct message content for generic error', () => {
    const expected = {
      header: 'Error',
      text: 'Something went wrong',
      animation: error,
    };
    expect(getMessageContent(constants.GENERIC_ERROR)).toEqual(expected);
  });
  it('should return correct message content for an unexpedted error message', () => {
    const expected = {
      header: 'Error',
      text: 'Something went wrong',
      animation: error,
    };
    expect(getMessageContent('Beware of the dark side')).toEqual(expected);
  });
  it('should return correct message content when error is undefined', () => {
    const expected = {
      header: 'Error',
      text: 'Something went wrong',
      animation: error,
    };
    expect(getMessageContent(undefined)).toEqual(expected);
  });
  it('should return correct message content when error is null', () => {
    const expected = {
      header: 'Error',
      text: 'Something went wrong',
      animation: error,
    };
    expect(getMessageContent(null)).toEqual(expected);
  });
});

describe('getIconColor', () => {
  it('should render correct color for dark mode', () => {
    const expected = colors.dark600;
    expect(getIconColor('dark')).toEqual(expected);
  });
  it('should render correct color for light mode', () => {
    const expected = colors.dark400;
    expect(getIconColor('light')).toEqual(expected);
  });
});

describe('getThemeColors', () => {
  it('should render correct colors for dark mode', () => {
    const expected = {
      iconColor: colors.dark600,
      buttonColor: colors.dark200,
      text: colors.white,
    };
    expect(getThemeColors('dark')).toEqual(expected);
  });
  it('should render correct colors for light mode', () => {
    const expected = {
      iconColor: colors.dark400,
      buttonColor: colors.dark800,
      text: colors.dark50,
    };
    expect(getThemeColors('light')).toEqual(expected);
  });
});
