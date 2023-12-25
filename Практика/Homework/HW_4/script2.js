"use strict";

// Необязательная задача

// Необходимо реализовать отрисовку 10 картинок собак из API
// https://dog.ceo/dog-api/ с интервалом в 3 секунды.

function fetchDogImage() {
  return fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => data.message);
}

function downloadAndDisplayImages(numImages = 10, interval = 3000) {
  function displayImage(imageUrl) {
    const img = new Image();
    img.src = imageUrl;
    document.body.appendChild(img);
  }

  function fetchAndDisplayImage() {
    fetchDogImage().then((imageUrl) => {
      displayImage(imageUrl);
      numImages--;

      if (numImages > 0) {
        setTimeout(fetchAndDisplayImage, interval);
      }
    });
  }

  fetchAndDisplayImage();
}

downloadAndDisplayImages();
