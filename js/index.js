const programs = [
  {
    id: 1,
    picture: './img/bookart.jpg',
    name: 'LECTURER',
    description: 'A modern and contemporary art collection with local presence in “Villa Lakeside”, affiliated locations and Depot Boijmans van Beuningen.',
  },
  {
    id: 2,
    picture: './img/art1.jpg',
    name: 'Exhibition',
    description: 'A modern and contemporary art collection with local presence in “Villa Lakeside”, affiliated locations and Depot Boijmans van Beuningen.',
  },
  {
    id: 3,
    picture: './img/artevent.png',
    name: 'Art Forum',
    description: 'A modern and contemporary art collection with local presence in “Villa Lakeside”, affiliated locations and Depot Boijmans van Beuningen.',
  },
  {
    id: 4,
    picture: './img/art9.jpg',
    name: 'Art Workshop',
    description: 'A modern and contemporary art collection with local presence in “Villa Lakeside”, affiliated locations and Depot Boijmans van Beuningen..',
  },
  {
    id: 5,
    picture: './img/art3.jpg',
    name: 'Art Teaching',
    description: 'A modern and contemporary art collection with local presence in “Villa Lakeside”, affiliated locations and Depot Boijmans van Beuningen.',
  },
];

const Artists = [
  {
    idG: 1,
    imageG: './img/artist1.jpg',
    nameG: 'Ntoya Jeremie',
    titleG: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos praesentium adipisci saepe asp',
    descriptionG: 'Ntoya Jeremie was an Italian polymath of the High Renaissance who was active as a painter, draughtsman, engineer, scientist, theorist, sculptor, and architect.[3] While his fame initially rested on his achievements as a painter, he also became known for his notebooks, in which he made drawings and notes on a variety of subjects, including anatomy, astronomy, botany, cartography, painting, and paleontology. ',
  },
  {
    idG: 2,
    imageG: './img/artis2.jpg',
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
    imageG: './img/artist4.jpeg',
    nameG: 'Mufungizi Ansima',
    titleG: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos praesentium adipisci saepe asp',
    descriptionG: 'He began his career in the city, but then spent much time in the service of Ludovico Sforza in Milan. Later, he worked in Florence and Milan again, as well as briefly in Rome, all while attracting a large following of imitators and students',
  },
  {
    idG: 5,
    imageG: './img/artis2.jpg',
    nameG: 'Mupenzi Benito',
    titleG: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos praesentium adipisci saepe asp',
    descriptionG: 'Upon the invitation of Francis I, he spent his last three years in France, where he died in 1519. Since his death, there has not been a time where his achievements, diverse interests, personal life, and empirical thinking have failed to incite interest and admiration,[3][4] making him a frequent namesake and subject in culture.',
  },
  {
    idG: 6,
    imageG: './img/artist1.jpg',
    nameG: 'Glory Legrand',
    titleG: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos praesentium adipisci saepe asp',
    descriptionG: 'Glory Legrand is identified as one of the greatest painters in the history of art and is often credited as the founder of the High Renaissance',
  },
];

const renderProgram = (program) => {
  const {
    id,
    picture,
    name,
    description,
  } = program;

  const container = document.createElement('div');
  container.classList.add('section-project', 'col-md-2', 'text-light', 'm-1', 'p-3', 'text-center', 'progra-section');
  container.setAttribute('data-id', id);

  container.innerHTML = `
    <div class="pic-lect mt">
        <img class="img-section" src="${picture}" alt="">
        <h4 class="">${name}</h4>
    </div>
    <p class="params">${description}</p>
  `;

  return container;
};

const renderPrograms = () => {
  const container = document.querySelector('.main-program-container');
  const containerDisplay = document.createElement('div');
  containerDisplay.classList.add('row', 'd-flex', 'justify-content-center', 'full-divcontainer');

  programs.forEach((program) => {
    containerDisplay.appendChild(renderProgram(program));
    container.appendChild(containerDisplay);
  });
};

renderPrograms();

const renderGame = (arts) => {
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
  <img class="m-2 img-games"
    src="${imageG}"
    alt="profile picture">
  </div>
  <div class="text-speakers col-md-6 m-2">
    <h4 class="pt-5" style="color:black; font-weight:900">${nameG}</h4>
    <span class="pt-4" style="font-style: italic; color: #EC5242;">${titleG}</span>
    <p class="pt-4">${descriptionG}</p>
  `;
  return container;
};

const renderGames = () => {
  const container = document.querySelector('.ranking-section');
  const containerDiv = document.createElement('div');
  containerDiv.classList.add('row', 'd-flex', 'justify-content-center');

  Artists.forEach((arts) => {
    containerDiv.appendChild(renderGame(arts));
    container.appendChild(containerDiv);
  });
};

renderGames();