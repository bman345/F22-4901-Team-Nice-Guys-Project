import React from 'react';
import renderer from 'react-test-renderer';
import HomeCalendar from '../screens/CalendarScreen';


test('renders correctly', () => {
    const tree = renderer.create(<HomeCalendar />).toJSON();
    expect(tree).toMatchSnapshot();
  });