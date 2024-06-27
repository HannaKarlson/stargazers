import React from 'react';
import {jest} from '@jest/globals';
import '@fortawesome/react-native-fontawesome';

jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: ({...props}) => <mock testID={props.testID} />,
}));
