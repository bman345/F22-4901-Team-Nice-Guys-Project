import React from 'react';
import renderer from 'react-test-renderer';
import CreateBaby from '../screens/CreateBaby';


test('renders correctly', () => {
    const tree = renderer.create(<CreateBaby />).toJSON();
    expect(tree).toMatchSnapshot();
  });