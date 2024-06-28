import React from 'react';
import {
  render,
  screen,
  fireEvent,
  userEvent,
  act,
  waitFor,
} from '@testing-library/react-native';
import App from '../App';
import * as services from '../src/services';

jest.mock('../src/services');
services.getStarGazers = jest.fn();
const user = userEvent.setup();
const mockedReturnData = [{login: 'Hanna', url: 'hannas-avatar-url', id: 1}];
const mockedMoreReturnData = [{login: 'Mia', url: 'mias-avatar-url', id: 2}];
afterEach(() => {
  jest.clearAllMocks();
});

describe('App', () => {
  it('should render header', () => {
    render(<App />);
    expect(screen.getByTestId('header')).toBeTruthy();
  });
  it('should render correct message screen when first rendered', () => {
    render(<App />);
    expect(screen.getByTestId('message-screen')).toBeTruthy();
    expect(screen.getByText('Welcome to Stargazers')).toBeTruthy();
  });
  it('should call loading function with correct parameters and render LoadingSkeleton when data is loading', async () => {
    services.getStarGazers.mockResolvedValueOnce({
      data: mockedReturnData,
      nextUrl: 'some-url',
    });
    render(<App />);
    const ownerInput = screen.getByPlaceholderText('Owner');
    const repoInput = screen.getByPlaceholderText('Repository');
    const searchButton = screen.getByTestId('search-button');
    act(() => fireEvent.changeText(ownerInput, 'Leia'));
    act(() => fireEvent.changeText(repoInput, 'princess-warior'));
    act(() => fireEvent.press(searchButton));
    await waitFor(() =>
      expect(screen.getByTestId('loading-skeleton')).toBeTruthy(),
    );
  });
  it('should render the stargazers list when data has been loaded', async () => {
    services.getStarGazers.mockResolvedValueOnce({
      data: mockedReturnData,
      nextUrl: 'some-url',
    });
    render(<App />);
    const ownerInput = screen.getByPlaceholderText('Owner');
    const repoInput = screen.getByPlaceholderText('Repository');
    const searchButton = screen.getByTestId('search-button');
    act(() => fireEvent.changeText(ownerInput, 'Leia'));
    act(() => fireEvent.changeText(repoInput, 'princess-warior'));
    act(() => fireEvent.press(searchButton));
    await waitFor(() =>
      expect(services.getStarGazers).toHaveBeenCalledWith({
        user: 'Leia',
        repo: 'princess-warior',
        url: null,
      }),
    );
    await waitFor(() => expect(screen.getByTestId('gazers-list')).toBeTruthy());
  });
  it('should fetch and display more data when gazers list is scrolled', async () => {
    services.getStarGazers.mockResolvedValueOnce({
      data: mockedReturnData,
      nextUrl: 'some-url',
    });
    services.getStarGazers.mockResolvedValueOnce({
      data: mockedMoreReturnData,
      nextUrl: 'some-url',
    });
    render(<App />);
    const ownerInput = screen.getByPlaceholderText('Owner');
    const repoInput = screen.getByPlaceholderText('Repository');
    const searchButton = screen.getByTestId('search-button');
    act(() => fireEvent.changeText(ownerInput, 'Leia'));
    act(() => fireEvent.changeText(repoInput, 'princess-warior'));
    act(() => fireEvent.press(searchButton));
    expect(screen.queryByTestId('Mia')).toBeFalsy();
    const gazersList = await waitFor(() => screen.getByTestId('gazers-list'));
    expect(gazersList).toBeTruthy();
    await user.scrollTo(gazersList, {
      y: 600,
      momentumY: 600,
      contentSize: {width: 100, height: 600},
    });
    expect(services.getStarGazers).toHaveBeenCalledTimes(2);
    expect(services.getStarGazers).toHaveBeenCalledWith({
      user: 'Leia',
      repo: 'princess-warior',
      url: null,
    });
    expect(services.getStarGazers).toHaveBeenCalledWith({
      user: 'Leia',
      repo: 'princess-warior',
      url: 'some-url',
    });
    expect(screen.getByText('Mia')).toBeTruthy();
  });
  it('should render message screen with correct content when non allowed chars are used in owner input', async () => {
    services.getStarGazers.mockResolvedValueOnce({
      data: mockedReturnData,
      nextUrl: 'some-url',
    });
    render(<App />);
    const ownerInput = screen.getByPlaceholderText('Owner');
    const repoInput = screen.getByPlaceholderText('Repository');
    const searchButton = screen.getByTestId('search-button');
    act(() => fireEvent.changeText(ownerInput, 'Lei@'));
    act(() => fireEvent.changeText(repoInput, 'princess-warior'));
    act(() => fireEvent.press(searchButton));
    await waitFor(() => screen.getByTestId('message-screen'));
    await waitFor(() => screen.getByText('Spelling error'));
  });
  it('should render message screen with correct content when non allowed chars are used in repo input', async () => {
    render(<App />);
    const ownerInput = screen.getByPlaceholderText('Owner');
    const repoInput = screen.getByPlaceholderText('Repository');
    const searchButton = screen.getByTestId('search-button');
    act(() => fireEvent.changeText(ownerInput, 'Leia'));
    act(() => fireEvent.changeText(repoInput, 'princess=warior'));
    act(() => fireEvent.press(searchButton));
    await waitFor(() => screen.getByTestId('message-screen'));
    await waitFor(() => screen.getByText('Spelling error'));
  });
  it('should render message screen with correct content when user makes a search without providing owner name', async () => {
    render(<App />);

    const repoInput = screen.getByPlaceholderText('Repository');
    const searchButton = screen.getByTestId('search-button');

    act(() => fireEvent.changeText(repoInput, 'princess-warior'));
    act(() => fireEvent.press(searchButton));
    await waitFor(() => screen.getByTestId('message-screen'));
    await waitFor(() => screen.getByText('Missing owner name'));
  });
  it('should render message screen with correct content when user makes a search without providing repo name', async () => {
    render(<App />);

    const ownerInput = screen.getByPlaceholderText('Owner');
    const searchButton = screen.getByTestId('search-button');

    act(() => fireEvent.changeText(ownerInput, 'Leia'));
    act(() => fireEvent.press(searchButton));
    await waitFor(() => screen.getByTestId('message-screen'));
    await waitFor(() => screen.getByText('Missing repository name'));
  });
});
