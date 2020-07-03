import { fetchUrl } from './fetch-url';

const contents = {
  TRENDING: 'TRENDING',
  ISSUE: 'ISSUE',
  ENTER: 'ENTER',
};

const URLMap = {
  TRENDING: 'https://1boon.kakao.com/ch/trending.json',
  ISSUE: 'https://1boon.kakao.com/ch/issue.json',
  ENTER: 'https://1boon.kakao.com/ch/enter.json',
};

function TabStatus(tabName) {
  this.url = URLMap[tabName];
  this.page = 0;
  this.hasNext = true;
  this.nextPage = async () => {
    if (this.hasNext) {
      const result = await fetchUrl(this.url, { page: this.page + 1 });
      this.hasNext = result.pagingInfo.hasNext;
      this.page += 1;
      return result.data;
    }
    return Promise.reject(new Error('no more next page'));
  };
}

export { contents, TabStatus };
