import React from 'react';
import Display from './Display';

import renderer from 'react-test-renderer';

it('should render <Display /> correctly', () => {
  const component = renderer.create(<Display />)
  const snapshotTree = component.toJSON();

  expect(snapshotTree).toMatchSnapshot();
});

