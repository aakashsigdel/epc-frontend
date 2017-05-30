import { getColor } from './api';

it('should render <Display /> correctly', () => {
  const initialValue = {
    colors: [
      {
        hex: 'ffffff'
      }
    ]
  };

  const expectedValue = 'ffffff';

  expect(getColor(initialValue)).toEqual(expectedValue);
});

