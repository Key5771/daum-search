import { fetchUrl } from './fetch-url';

const { default: dataModel } = require('./data-model');

const $list = document.getElementById('list');

window.addEventListener('load', (event) => {
  fetchUrl('https://1boon.kakao.com/ch/trending.json').then((data) => {
    console.log(data.data);
  });
});
