// get my DOM nodes from the page
const thumbnailsContainer = document.getElementById("thumbnail-container");
const displayImage = document.getElementById("display-image");

let imageIndex = 0;
// an array to store our images and information about them
const images = [
  {
    src: "./assets/headgehog.jpg",
    alt: "A cute hedgehog",
  },
  {
    src: "./assets/koala.jpg",
    alt: "A cute little koala",
  },
  {
    src: "./assets/cat.jpg",
    alt: "A sleeping cat",
  },
  {
    src: "./assets/hamster.jpg",
    alt: "A little hamster",
  },
  {
    src: "./assets/fox.jpg",
    alt: "A beautiful snow fox",
  },
  {
    src: "./assets/squirrel.jpg",
    alt: "A lazy squirrel lie on a tree",
  },
  {
    src: "./assets/bird.jpg",
    alt: "A little bird",
  },
];

// loop through our images array and put our thumbnails onto the page
for (let i = 0; i < images.length; i++) {
  // create a new DOM Node img
  const img = document.createElement("img");

  // add the src and alt to the img
  img.src = images[i].src;
  img.alt = images[i].alt;

  // add a click event listener to the image
  img.addEventListener("click", function () {
    displayImage.src = images[i].src;
    displayImage.alt = images[i].alt;
  });

  // put the image on the page
  thumbnailsContainer.appendChild(img);
}
document.addEventListener("keydown", function (event) {
  //   console.log(event);
  if (event.key === "ArrowRight") {
    imageIndex++;
    if (imageIndex === images.length) {
      imageIndex = 0;
    }

    displayImage.src = images[imageIndex].src;
    displayImage.alt = images[imageIndex].alt;
  }

  if (event.key === "ArrowLeft") {
    imageIndex--;
    if (imageIndex === -1) {
      imageIndex = images.length - 1;
    }
    displayImage.src = images[imageIndex].src;
    displayImage.alt = images[imageIndex].alt;
  }
});

// set this so the first image appear when reload the page
thumbnailsContainer.firstElementChild.click();
