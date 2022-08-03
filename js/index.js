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

const container = document.getElementById('container');

const featuredSection = document.createElement('section');
featuredSection.classList.add('featured');

container.appendChild(featuredSection);
container.insertBefore(featuredSection, container.children[1]);

const btn = document.createElement('button');
const span = document.createElement('span');
const span2 = document.createElement('span');
const icon = document.createElement('i');

span2.classList.add('chevron');
icon.classList.add('fas', 'fa-chevron-down');
span2.appendChild(icon);

btn.appendChild(span);
btn.appendChild(span2);

const Artists = [
  {
    idG: 1,
    imageG: './img/artist3.jpg',
    nameG: 'Ntoya Jeremie',
    titleG: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos praesentium adipisci saepe asp',
    descriptionG: 'Ntoya Jeremie was an Italian polymath of the High Renaissance who was active as a painter, draughtsman, engineer, scientist, theorist, sculptor, and architect.[3] While his fame initially rested on his achievements as a painter, he also became known for his notebooks, in which he made drawings and notes on a variety of subjects, including anatomy, astronomy, botany, cartography, painting, and paleontology. ',
  },
  {
    idG: 2,
    imageG: './img/artist3.jpg',
    nameG: 'Jean fontaine',
    titleG: '',
    descriptionG: 'Jean fontaine is widely regarded to have been a genius who epitomized the Renaissance humanist ideal,and his collective works compose a contribution to later generations of artists matched only by that of his younger contemporary.',
  },
  {
    idG: 3,
    imageG: './img/artist3.jpg',
    nameG: 'Mwafrika Josue',
    titleG: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos praesentium adipisci saepe asp',
    descriptionG: 'Born out of wedlock to a successful notary and a lower-class woman in, or near, Vinci, he was educated in Florence by the Italian painter and sculptor Andrea del Verrocchio.',
  },
  {
    idG: 4,
    imageG: './img/artist3.jpg',
    nameG: 'Mufungizi Ansima',
    titleG: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos praesentium adipisci saepe asp',
    descriptionG: 'He began his career in the city, but then spent much time in the service of Ludovico Sforza in Milan. Later, he worked in Florence and Milan again, as well as briefly in Rome, all while attracting a large following of imitators and students',
  },
  {
    idG: 5,
    imageG: './img/artist3.jpg',
    nameG: 'Mupenzi Benito',
    titleG: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos praesentium adipisci saepe asp',
    descriptionG: 'Upon the invitation of Francis I, he spent his last three years in France, where he died in 1519. Since his death, there has not been a time where his achievements, diverse interests, personal life, and empirical thinking have failed to incite interest and admiration,[3][4] making him a frequent namesake and subject in culture.',
  },
  {
    idG: 6,
    imageG: './img/artist3.jpg',
    nameG: 'Glory Legrand',
    titleG: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos praesentium adipisci saepe asp',
    descriptionG: 'Glory Legrand is identified as one of the greatest painters in the history of art and is often credited as the founder of the High Renaissance',
  },
];

const renderArtist = (arts) => {
  const {
    idG,
    imageG,
    nameG,
    titleG,
    descriptionG,
  } = arts;

  const container = document.createElement('div');
  container.classList.add('speakers-section', 'col-md-6', 'd-flex', 'justify-content-center');
  container.setAttribute('data-id', idG);

  container.innerHTML = `
  <div col-md-6>
  <img class="img-rounded"
    src="${imageG}"
    alt="profile picture" height="100" width="100">
  </div>
  <div class="text-speakers col-md-6 m-2">
    <h4 class="pt-5" style="color:black; font-weight:900">${nameG}</h4>
    <span class="pt-4" style="font-style: italic; color: #EC5242;">${titleG}</span>
    <p class="pt-4">${descriptionG}</p>
  `;
  return container;
};

const renderArtists = () => {
  const container = document.querySelector('.ranking-section');
  const containerDiv = document.createElement('div');
  containerDiv.classList.add('row', 'd-flex', 'justify-content-center');

  Artists.forEach((arts) => {
    containerDiv.appendChild(renderArtist(arts));
    container.appendChild(containerDiv);
  });
};

renderArtists();
