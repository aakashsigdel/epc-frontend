import React from 'react';
import App from './App';

import renderer from 'react-test-renderer';

it('should render <App /> correctly', () => {
  const component = renderer.create(<App />)
  const snapshotTree = component.toJSON();

  expect(snapshotTree).toMatchSnapshot();
});

