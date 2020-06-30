const $result = document.getElementById('list');

function render(data) {
  const html = data.map((list, index) => {
    return `<li data-index="${index}">
          <h2>${list.title}</h2><br>
          <img src=${list.coverImage}><br>
          <h4><a href=https://1boon.kakao.com/${list.path}>https://1boon.kakao.com/${list.path}</a></h4><br>
          <h4>조회수 : ${list.totalView}</h4><br>
          <br>
        </li>`;
  });

  $result.innerHTML += `<ul>${html.join('')}</ul>`;
}

export { render };
