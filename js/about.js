const closeBtn = document.querySelector('.close');
const hambuger = document.querySelector('.menuIcon');
const btnContainer = document.querySelector('.mobile');
const menuItemList = document.querySelector('.menu-list');
const item = document.querySelectorAll('.navbar-menu-item');

function toggleHamburger() {
  if (menuItemList.classList.contains('showMenu')) {
    menuItemList.classList.remove('showMenu');
    closeBtn.style.display = 'none';
    hambuger.style.display = 'block';
    document.body.style.overflow = 'hidden';
  } else {
    menuItemList.classList.add('showMenu');
    closeBtn.style.display = 'block';
    hambuger.style.display = 'none';
  }
}

btnContainer.addEventListener('click', toggleHamburger);

item.forEach((item) => {
  item.addEventListener('click', toggleHamburger);
});

const articles = [
  {
    id: 1,
    image: './img/art2.jpg',
    name: '2019',
    description: 'Art exhibit in Rwanda 2019',
  },
  {
    id: 2,
    image: './img/artbgbb.jpg',
    name: '2018',
    description: 'Art exhibit in Congo 2018',
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
  <div data-id class="test01 fts col-md-6 m-3" style="background: linear-gradient(0deg, rgb(255 23 23 / 63%), rgb(255 0 0 / 27%)), url('${image}');">
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