const articles = [
  {
    id: 1,
    image: './img/art2.jpg',
    name: '2013',
    description: 'Lorem ipsum dolor sit amet, consectetur',
  },
  {
    id: 2,
    image: './img/artbgbb.jpg',
    name: '2013',
    description: 'Lorem ipsum dolor sit amet, consectetur',
  },
];

const renderArtical = (article) => {
  const {
    id,
    image,
    name,
    description,
  } = article;

  const container = document.createElement('div');
  container.classList.add('row', 'd-md-flex', 'justify-content-center');
  container.setAttribute('data-id', id);

  container.innerHTML = `
  <div data-id class="test01 fts col-md-6 m-3" style="background: linear-gradient(0deg, rgba(255, 23, 23, 0.6), rgba(255, 0, 0, 0.589)), url('${image}');">
    <h3 style="font-family: 'cocogoose', sans-serif;">${name}</h3>
    <p style="color: white;">${description}</p>
  </div>
  `;

  return container;
};

const renderArticals = () => {
  const container = document.querySelector('.production-container');
  container.classList.add('d-md-flex', 'justify-content-center', 'flex-wrap');

  articles.forEach((article) => {
    container.appendChild(renderArtical(article));
  });
};

renderArticals();