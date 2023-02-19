import React from 'react';
import renderer from 'react-test-renderer';
import Track from '../screens/Track';


test('renders correctly', () => {
    const tree = renderer.create(<Track />).toJSON();
    expect(tree).toMatchSnapshot();
  });