import React from 'react';
import renderer from 'react-test-renderer';
import Analysis from '../screens/Analysis';


test('renders correctly', () => {
    const tree = renderer.create(<Analysis />).toJSON();
    expect(tree).toMatchSnapshot();
  });