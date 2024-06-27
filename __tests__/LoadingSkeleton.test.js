import React from 'react';
import {render, screen} from '@testing-library/react-native';
import LoadingSkeleton from '../src/components/LoadingSkeleton';

describe('Loading Skeleton', () => {
  it('should render with correct elements', () => {
    render(<LoadingSkeleton />);
    expect(screen.getByTestId('loading-skeleton')).toBeTruthy();
    expect(screen.getByTestId('skeleton-header')).toBeTruthy();
    expect(screen.getAllByTestId('skeleton-item').length).toBe(10);
  });
});
