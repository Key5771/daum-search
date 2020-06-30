/* eslint-disable no-param-reassign */
import { fetchUrl } from './fetch-url';
import { render } from './html-render';

import './index.css';

const $list = document.getElementById('list');
const $trending = document.getElementById('trending');
const $issue = document.getElementById('issue');
const $enter = document.getElementById('enter');
const $button = document.querySelector('.btn.btn-default');
const $loading = document.getElementById('loading');

const TRENDING = 'TRENDING';
const ISSUE = 'ISSUE';
const ENTER = 'ENTER';
const URLMap = {
  TRENDING: 'https://1boon.kakao.com/ch/trending.json',
  ISSUE: 'https://1boon.kakao.com/ch/issue.json',
  ENTER: 'https://1boon.kakao.com/ch/enter.json',
};

let tab = TRENDING;
let page = 1;
let hasNext = true;

function changeToNewTab(tabName) {
  tab = tabName;
  page = 1;
  hasNext = true;
}

function changeClass(tabName) {
  Array.from([$trending, $issue, $enter]).forEach((element) => {
    element.className = '';
  });
  switch (tabName) {
    case TRENDING:
      $trending.className = 'active';
      break;
    case ISSUE:
      $issue.className = 'active';
      break;
    case ENTER:
      $enter.className = 'active';
      break;
    default:
  }
}

function clearListElement(element) {
  element.innerHTML = '';
}

function showElement(element) {
  element.style.display = 'block';
}

function hideElement(element) {
  element.style.display = 'none';
}

function makeChangeNewTabListener(tabName) {
  return () => {
    clearListElement($list);
    changeToNewTab(tabName);
    changeClass(tabName);
    showElement($loading);
    fetchUrl(URLMap[tab], { page }).then((response) => {
      render(response.data);
      hideElement($loading);
    });
  };
}

window.addEventListener('load', () => {
  showElement($loading);
  fetchUrl(URLMap[tab], { page }).then((response) => {
    render(response.data);
    hideElement($loading);
  });
});

$trending.addEventListener('click', makeChangeNewTabListener(TRENDING));
$issue.addEventListener('click', makeChangeNewTabListener(ISSUE));
$enter.addEventListener('click', makeChangeNewTabListener(ENTER));

$button.addEventListener('click', () => {
  if (hasNext) {
    showElement($loading);
    fetchUrl(URLMap[tab], { page: page + 1 }).then((result) => {
      hasNext = result.pagingInfo.hasNext;
      page += 1;
      render(result.data);
      hideElement($loading);
    });
  }
});
