import React from 'react';
import Loading from './Loading';

import renderer from 'react-test-renderer';

it('should render <Loading /> correctly', () => {
  const component = renderer.create(<Loading />)
  const snapshotTree = component.toJSON();

  expect(snapshotTree).toMatchSnapshot();
});



