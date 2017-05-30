import {
  compose,
  head,
  prop
} from 'ramda';

const getColor = compose(
  prop('hex'),
  head,
  prop('colors')
);

const fetchColor = () =>
  fetch('http://www.colr.org/json/color/random')
    .then(resp => resp.json())
    .then(json => getColor(json));


export default fetchColor;
