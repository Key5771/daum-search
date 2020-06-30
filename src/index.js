import { fetchUrl } from './fetch-url';

const { default: dataModel } = require('./data-model');

const $trending = document.getElementById('trending');
const $issue = document.getElementById('issue');
const $enter = document.getElementById('enter');

window.addEventListener('load', (event) => {
  fetchUrl('https://1boon.kakao.com/ch/trending.json').then((data) => {
    console.log(data.data);
  });
});

$trending.addEventListener('click', function () {
  fetchUrl('https://1boon.kakao.com/ch/trending.json').then((response) =>
    console.log(response.data),
  );
  $trending.className = 'active';
  $issue.className = '';
  $enter.className = '';
});

$issue.addEventListener('click', function () {
  fetchUrl('https://1boon.kakao.com/ch/issue.json').then((response) =>
    console.log(response.data),
  );
  $trending.className = '';
  $issue.className = 'active';
  $enter.className = '';
});

$enter.addEventListener('click', function () {
  fetchUrl('https://1boon.kakao.com/ch/enter.json').then((response) =>
    console.log(response.data),
  );
  $trending.className = '';
  $issue.className = '';
  $enter.className = 'active';
});
