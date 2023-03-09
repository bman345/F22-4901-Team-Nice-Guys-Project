import React from 'react';
import renderer from 'react-test-renderer';
import AccountScreen from '../screens/Account';


test('renders correctly', () => {
    const tree = renderer.create(<AccountScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });