/* eslint-disable no-param-reassign */
import { render } from './html-render';
import { contents, TabStatus } from './status';

import './index.css';

const $list = document.getElementById('list');
const $trending = document.getElementById('trending');
const $issue = document.getElementById('issue');
const $enter = document.getElementById('enter');
const $button = document.querySelector('.btn.btn-default');
const $loading = document.getElementById('loading');

// tab 상태를 관리하는 객체
let tabStatus = new TabStatus(contents.TRENDING);

function changeClass(tabName) {
  Array.from([$trending, $issue, $enter]).forEach((element) => {
    element.className = '';
  });
  switch (tabName) {
    case contents.TRENDING:
      $trending.className = 'active';
      break;
    case contents.ISSUE:
      $issue.className = 'active';
      break;
    case contents.ENTER:
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

function loadPage() {
  showElement($loading);
  tabStatus.nextPage().then((response) => {
    render(response);
    hideElement($loading);
  });
}

function makeChangeNewTabListener(tabName) {
  return () => {
    clearListElement($list);
    tabStatus = new TabStatus(tabName);
    changeClass(tabName);
    loadPage();
  };
}

window.addEventListener('load', () => {
  loadPage();
});

$trending.addEventListener(
  'click',
  makeChangeNewTabListener(contents.TRENDING),
);
$issue.addEventListener('click', makeChangeNewTabListener(contents.ISSUE));
$enter.addEventListener('click', makeChangeNewTabListener(contents.ENTER));

$button.addEventListener('click', () => {
  if (tabStatus.hasNext) {
    loadPage();
  }
});
