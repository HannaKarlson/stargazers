import {waitFor} from '@testing-library/react-native';
import {getStarGazers} from '../src/services';
import axios from 'axios';
import {
  API_RATE_EXCEEDED,
  GENERIC_ERROR,
  NETWORK_ERROR,
  NO_RESULT,
} from '../src/constants';
jest.mock('axios');

afterEach(() => {
  jest.clearAllMocks();
});

const mockedReturnData = [{login: 'Hanna', url: 'hannas-avatar-url'}];
const user = 'Yoda';
const repo = 'ways-of-the-force';

describe('getStarGazers', () => {
  it('should return correct data when promise is resolved and there is more data to load', async () => {
    await axios.get.mockResolvedValueOnce({
      data: mockedReturnData,
      status: 200,
      headers: {
        link: '<https://api.github.com/repositories/23088740/stargazers?page=2>; rel="next", <https://api.github.com/repositories/23088740/stargazers?page=1334>; rel="last"',
      },
    });
    const result = await getStarGazers({
      user,
      repo,
      url: null,
    });
    await waitFor(() =>
      expect(result).toEqual({
        data: mockedReturnData,
        nextUrl:
          'https://api.github.com/repositories/23088740/stargazers?page=2',
      }),
    );
  });
  it('should return correct data when promise is resolved and there is no more data to load', async () => {
    await axios.get.mockResolvedValueOnce({
      data: mockedReturnData,
      status: 200,
      headers: {link: undefined},
    });
    const result = await getStarGazers({
      user,
      repo,
      url: null,
    });
    await waitFor(() =>
      expect(result).toEqual({
        data: mockedReturnData,
        nextUrl: null,
      }),
    );
  });
  it('should return correct data when promise is resolved and load more url is provided', async () => {
    await axios.get.mockResolvedValueOnce({
      data: mockedReturnData,
      status: 200,
      headers: {link: undefined},
    });
    const result = await getStarGazers({
      user: '',
      repo: '',
      url: 'load-more-url',
    });
    await waitFor(() =>
      expect(result).toEqual({
        data: mockedReturnData,
        nextUrl: null,
      }),
    );
  });
  it('should throw network error when error is thrown without response', async () => {
    await axios.get.mockRejectedValueOnce({response: undefined});
    let thrownError = null;
    try {
      await getStarGazers({user, repo, url: null});
    } catch (error) {
      thrownError = error;
    }
    expect(thrownError).toBe(NETWORK_ERROR);
  });
  it('should throw no result error when no result is returned', async () => {
    await axios.get.mockRejectedValueOnce({response: {status: 404}});
    let thrownError = null;
    try {
      await getStarGazers({user, repo, url: null});
    } catch (error) {
      thrownError = error;
    }
    expect(thrownError).toBe(NO_RESULT);
  });
  it('should throw correct error when api rate is exceeded', async () => {
    await axios.get.mockRejectedValueOnce({response: {status: 403}});
    let thrownError = null;
    try {
      await getStarGazers({user, repo, url: null});
    } catch (error) {
      thrownError = error;
    }
    expect(thrownError).toBe(API_RATE_EXCEEDED);
  });
  it('should throw correct error when other error is thrown', async () => {
    await axios.get.mockRejectedValueOnce({response: {status: 123}});
    let thrownError = null;
    try {
      await getStarGazers({user, repo, url: null});
    } catch (error) {
      thrownError = error;
    }
    expect(thrownError).toBe(GENERIC_ERROR);
  });
  it('should return null if no url nor user is provided', async () => {
    await axios.get.mockResolvedValueOnce({
      data: mockedReturnData,
      status: 200,
      headers: {link: undefined},
    });
    const result = await getStarGazers({
      user: '',
      repo,
      url: null,
    });
    await waitFor(() => expect(result).toBe(null));
  });
  it('should return null if no url nor repo is provided', async () => {
    await axios.get.mockResolvedValueOnce({
      data: mockedReturnData,
      status: 200,
      headers: {link: undefined},
    });
    const result = await getStarGazers({
      user,
      repo: '',
      url: null,
    });
    await waitFor(() => expect(result).toBe(null));
  });
});
