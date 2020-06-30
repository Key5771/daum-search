const $result = document.getElementById('list');

function render(data) {
  const html = data.map((list, index) => {
    return `<li data-index="${index}">
          <h1>${list.title}</h1><br>
          <img src=${list.coverImage}><br>
          <h3><a href=https://1boon.kakao.com/${list.path}>${list.path}</a></h3><br>
          <h3>${list.totalView}</h3><br>
          <br>
        </li>`;
  });

  $result.innerHTML = `<ul>${html.join('')}</ul>`;
}

export { render };
