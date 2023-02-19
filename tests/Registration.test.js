import React from 'react';
import renderer from 'react-test-renderer';
import Registration from '../screens/Registration';


test('renders correctly', () => {
    const tree = renderer.create(<Registration />).toJSON();
    expect(tree).toMatchSnapshot();
  });