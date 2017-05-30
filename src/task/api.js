import fetch from 'isomorphic-fetch';
import {
  compose,
  head,
  prop
} from 'ramda';

export const API = 'http://www.colr.org/json/color';

export const getColor = compose(
  prop('hex'),
  head,
  prop('colors')
);

export const fetchColor = () =>
  fetch(API + '/random')
    .then(resp => resp.json())
    .then(json => '#' + getColor(json));

export default fetchColor;
