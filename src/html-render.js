const $result = document.getElementById('list');

function render(data) {
  const html = data.map((list, index) => {
    return `<li data-index="${index}">
          <span class="title">${list.title}</span>
          <span class="coverImage">${list.coverImage}</span>
          <span class="path">${list.path}</span>
          <span class="totalView">${list.totalView}</span>
        </li>`;
  });

  $result.innerHTML = `<ul>${html.join('')}</ul>`;
}

export { render };
