import React from 'react';
import Input from './Input';

import renderer from 'react-test-renderer';

it('should render <Input /> correctly', () => {
  const component = renderer.create(<Input onChangeText={() => null}/>)
  const snapshotTree = component.toJSON();

  expect(snapshotTree).toMatchSnapshot();
});


