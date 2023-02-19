import React from 'react';
import renderer from 'react-test-renderer';
import Reminders from '../screens/Reminders';


test('renders correctly', () => {
    const tree = renderer.create(<Reminders />).toJSON();
    expect(tree).toMatchSnapshot();
  });