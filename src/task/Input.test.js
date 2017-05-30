import React from 'react';
import Input from './Input';

import renderer from 'react-test-renderer';

it('should render <Input /> correctly', () => {
  const component = renderer.create(<Input onChangeText={() => null}/>);
  let snapshotTree = component.toJSON();
  expect(snapshotTree).toMatchSnapshot();

  snapshotTree.props.onChange();
  snapshotTree = component.toJSON();
  expect(snapshotTree).toMatchSnapshot();
});


