import nock from 'nock';
import {
  API,
  fetchColor,
  getColor
} from './api';

describe('API tests', () => {
  afterEach(() => {
    nock.cleanAll()
  });

  it('should get the color', () => {
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

  it('should get colors from the api', () => {
    const rawColor = {
      colors: [
        {
          hex: 'f0f0f0'
        }
      ]
    };

    nock(API)
      .get('/random')
      .reply(200, rawColor);

    fetchColor()
      .then(color => {
        expect(color).toEqual('#f0f0f0');
      });
  });
});
