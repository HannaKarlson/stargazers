import React from 'react';
import {render, screen, userEvent} from '@testing-library/react-native';
import GazersList from '../src/components/GazersList';

const starGazers = [
  {login: 'ObiWan', avtar_url: 'ObiWans-avatar', id: 1},
  {login: 'Quai-GonJinn', avatar_url: 'Quai-Gons-avatar', id: 2},
];
const mockedLoadMoreElements = jest.fn();

const user = userEvent.setup();

const setUp = ({loadMoreIsLoading, gazers}) => {
  return {
    loadMoreIsLoading: loadMoreIsLoading,
    gazers: gazers,
    loadMoreElements: mockedLoadMoreElements,
  };
};

describe('GazersList', () => {
  it('should render with correct items', () => {
    const props = setUp({loadMoreIsLoading: false, gazers: starGazers});
    render(<GazersList {...props} />);
    const list = screen.getByTestId('gazers-list');
    expect(list).toBeTruthy();
    expect(list.props.data).toEqual(starGazers);
  });
  it('should render correct header', () => {
    const props = setUp({loadMoreIsLoading: false, gazers: starGazers});
    render(<GazersList {...props} />);
    expect(screen.getByText('Stargazers')).toBeTruthy();
  });
  it('should render loading spinner when more content is loading', () => {
    const props = setUp({loadMoreIsLoading: true, gazers: starGazers});
    render(<GazersList {...props} />);
    expect(screen.getByTestId('list-loading-spinner')).toBeTruthy();
  });
  it('should NOT render loading spinner when more content is loading', () => {
    const props = setUp({loadMoreIsLoading: false, gazers: starGazers});
    render(<GazersList {...props} />);
    expect(screen.queryByTestId('list-loading-spinner')).toBeFalsy();
  });
  it('should call load more function when scrolled to end', async () => {
    const props = setUp({loadMoreIsLoading: false, gazers: starGazers});
    render(<GazersList {...props} />);
    const list = screen.getByTestId('gazers-list');
    await user.scrollTo(list, {
      y: 600,
      momentumY: 600,
      contentSize: {width: 100, height: 600},
    });
    expect(mockedLoadMoreElements).toHaveBeenCalledTimes(1);
  });
});
