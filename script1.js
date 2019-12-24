const HEROES_CONTAINER_ELEMENT = document.querySelector ('.heroes_container');

const getSuperHeroes = () => {
  return fetch('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json')
    .then (response => response.json())
    .then (heroesArray => {
      heroesArray.length = 10;
      return heroesArray;
    });
}

const createHeroeHTMLElement = ({ name, images: { lg:heroImg } }) => {
  
  const heroContainer = document.createElement('div')
  heroContainer.className = 'hero_container'

  const img = document.createElement('img');
  img.src = heroImg;

  const heroTitle = document.createElement('div');
  heroTitle.className = 'hero_title'
  heroTitle.innerHTML = name;

  heroContainer.appendChild(img);
  heroContainer.appendChild(heroTitle);

  HEROES_CONTAINER_ELEMENT.appendChild(heroContainer);

}

getSuperHeroes().then(superheroes => {
  superheroes.map(createHeroeHTMLElement);
})

function showHeroeHTMLElement() {
  const heroContainerAll = document.getElementsByClassName('hero_container');
  setInterval(function() {
    heroContainerAll.forEach(elem => {
      elem.setAttribute('show-block', 'show');
      console.log (elem)
    });
  }, 5000);
}

showHeroeHTMLElement();