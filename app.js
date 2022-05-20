const cardContainer = document.querySelector(".card-container");

// const album = {
//     albumTitle: "Age of Aquarius",
//     artist: "Villagers of Ioannina City",
//     year: "2019",
//     genre: "folk rock, psychedelic rock",
//     art: "age-of-aquarius.jpg",
//     rating: 9,
// }

const albums = [
    {
        albumTitle: "Age of Aquarius",
        artist: "Villagers of Ioannina City",
        year: "2019",
        genre: "folk rock, psychedelic rock",
        art: "age-of-aquarius.jpg",
        rating: 10,
    },
    {
        albumTitle: "Ritual",
        artist: "In This Moment",
        year: "2018",
        genre: "alt-metal",
        art: "ritual.png",
        rating: 10,
    },
    {
        albumTitle: "Metal Galaxy",
        artist: "Babymetal",
        year: "2019",
        genre: "kawaii metal",
        art: "metal-galaxy.png",
        rating: 10,
    }
]

const createHTML = (card) => {
    return(
        `<div class="card">
          <div class="card__header-section">
            <img class="card__image" src="./assets/${card.art}" />
            <div class="card__rating">${card.rating}</div>
          </div>
          <div class="card__content">
            <h2 class="card__heading">${card.albumTitle}</h2>
            <div class="card__description">
              <p class="card__description-text">${card.artist}</p>
              <p class="card__description-text">${card.year}</p>
            </div>
            <hr class="card__line" />
            <p class="card__genres">Genres:</p>
            <p class="card__genre-values">${card.genre}</p>
          </div>
        </div>`
    )
}

// cardContainer.innerHTML = createHTML(album);

albums.forEach((card) => {
    cardContainer.innerHTML += createHTML(card);
})
