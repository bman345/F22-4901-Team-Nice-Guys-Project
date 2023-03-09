import React from 'react';
import renderer from 'react-test-renderer';
import render from '@testing-library/react-native'
import MainHomeScreen from '../screens/MainHomeScreen';


test('renders correctly', () => {
    const tree = renderer.create(<MainHomeScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });

test('check if button components are there'

);