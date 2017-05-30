import React from 'react';
import Display from './Display';

import renderer from 'react-test-renderer';

it('should render <Display /> correctly', () => {
  const component = renderer.create(
    <Display
      inputText={'hello'}
      bgColor={'#fff'}
      onClick={() => null}
    />
  );
  let snapshotTree = component.toJSON();
  expect(snapshotTree).toMatchSnapshot();

  snapshotTree.props.onClick();
  snapshotTree = component.toJSON();
  expect(snapshotTree).toMatchSnapshot();
});

