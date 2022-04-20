function ImageTags(url, alt, visible, description) {
  this.url = url;
  this.alt = alt;
  this.description = description;
  this.isVisible = visible;
  this.classList = "";

  this.setTags = function () {
    if (this.isVisible) {
      this.classList = "carousel-item-visible";
    } else {
      this.classList = "";
    }

    return `
      <div class="carousel-item ${this.classList}">
        <img src="${this.url}" alt="${this.alt}" />
        <p class="carousel-description">Capture date: ${this.description}</p>
      </div>
    `;
  };
}

function imagesHTML() {
  console.log("loading images");
  img = [];
  img.push(
    new ImageTags(
      "/images/Carondelet.jpeg",
      "Carondelet palace in Quito",
      true,
      "July 5, 2019"
    )
  );
  img.push(
    new ImageTags(
      "/images/EyeOfLondon.jpeg",
      "Eye of London",
      false,
      "May 17, 2014"
    )
  );
  img.push(
    new ImageTags(
      "/images/TowerBridge.jpeg",
      "Tower Bridge at dusk",
      false,
      "May 19, 2014"
    )
  );
  img.push(
    new ImageTags("/images/Gulfoss.jpeg", "Gulfoss", false, "Sep 29, 2019")
  );

  return img
    .map((item) => {
      return item.setTags();
    })
    .join("");
}

document.getElementById("js-carousel").innerHTML = imagesHTML();

const slides = document.getElementsByClassName("carousel-item");

console.log(slides);
let slidePosition = 0;
const totalSlides = slides.length;

document
  .getElementById("carousel-button-next")
  .addEventListener("click", moveToNextSlide);
document
  .getElementById("carousel-button-prev")
  .addEventListener("click", moveToPrevSlide);

function hideAllSlides() {
  for (let slide of slides) {
    slide.classList.remove("carousel-item-visible");
  }
}

function moveToNextSlide() {
  hideAllSlides();

  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  slides[slidePosition].classList.add("carousel-item-visible");
}

function moveToPrevSlide() {
  hideAllSlides();

  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }

  slides[slidePosition].classList.add("carousel-item-visible");
}
