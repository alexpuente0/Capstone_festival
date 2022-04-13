// hamburger

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// speakers

const album1 = {
  name: "The Getaway",
  release: "2016",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  featuredImage: "./assets/Images/album10.jpg",
};

const album2 = {
  name: "Im With You",
  release: "2011",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  featuredImage: "./assets/Images/album9.jpg",
};

const album3 = {
  name: "Stadium Arcadium",
  release: "2006",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  featuredImage: "./assets/Images/album8.jpg",
};

const album4 = {
  name: "By the Way",
  release: "2002",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  featuredImage: "./assets/Images/album7.jpg",
};

const album5 = {
  name: "Californication",
  release: "1999",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  featuredImage: "./assets/Images/album6.jpg",
};

const album6 = {
  name: "One Hot Minute",
  release: "1995",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  featuredImage: "./assets/Images/album5.jpg",
};

const album7 = {
  name: "Blood Sugar Sex Magik",
  release: "1991",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  featuredImage: "./assets/Images/album4.jpg",
};

const album8 = {
  name: "Mother's Milk",
  release: "1989",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  featuredImage: "./assets/Images/albumX.jpg",
};

const album9 = {
  name: "The Uplift Mofo Party Plan",
  release: "1987",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  featuredImage: "./assets/Images/album3.jpg",
};

const album10 = {
  name: "Freaky Styley",
  release: "1985",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  featuredImage: "./assets/Images/album2.jpg",
};

const album11 = {
  name: "The Red Hot Chili Peppers",
  release: "1984",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  featuredImage: "./assets/Images/album1.jpg",
};

const albumArray = [
  album1,
  album2,
  album3,
  album4,
  album5,
  album6,
  album7,
  album8,
  album9,
  album10,
  album11,
];

const generateTeam = () => {
  const placeTeam = document.querySelector(".cardscontainer");
  albumArray.forEach((cd) => {
    placeTeam.insertAdjacentHTML(
      "beforeend",
      `<li>
        <div>
        <img class="cdfront" src="${cd.featuredImage}" alt="${cd.name}">
        </div>
        <div class="description">
          <h3>${cd.name}</h3>
          <h4>${cd.release} </h4>
          <hr>
          <p>${cd.description}</p>
        </div>
    </li>`
    );
  });
};
document.addEventListener("DOMContentLoaded", () => {
  generateTeam();
});

// show more or less

const content = document.querySelector(".content");
const buttonMore = document.querySelector(".button .show-more");
const buttonLess = document.querySelector(".button .show-less");
const button = document.querySelector(".button");
const arrowIcon = document.querySelector(".button .fas");

const initial = {
  showAllContent: true,
};

button.addEventListener("click", () => {
  const defaultValue = {
    element: arrowIcon,
    currentIcon: "fa-chevron-down",
    newIcon: "fa-chevron-up",
  };

  if (initial.showAllContent) {
    showButton(buttonLess);
    showButton(buttonMore, false);
    content.classList.remove("gradient", "maxHeight");
  } else {
    showButton(buttonLess, false);
    showButton(buttonMore);

    defaultValue.currentIcon = "fa-chevron-up";
    defaultValue.newIcon = "fa-chevron-down";

    content.classList.add("gradient", "maxHeight");
  }

  changeIcon(defaultValue);
  initial.showAllContent = !initial.showAllContent;
});

function changeIcon(value) {
  const { element, currentIcon, newIcon } = value;

  element.classList.add(newIcon);
  element.classList.remove(currentIcon);
}

function showButton(button, visible = true) {
  !visible ? button.classList.add("d-none") : button.classList.remove("d-none");
}
