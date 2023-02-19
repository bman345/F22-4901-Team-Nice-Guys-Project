import React from "react";
import render from "react-native-web/dist/cjs/exports/render";
import renderer from 'react-test-renderer';
import Login from "../screens/Login";

test('renders correctly', () => {
    const tree = renderer.create(<Login/>).toJSON();
    expect(tree).toMatchSnapshot();
  });