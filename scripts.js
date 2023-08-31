const image = document.querySelector('img');
const colorThief = new ColorThief();

image.onload = function() {
  const colors = colorThief.getPalette(image, 2); // Obter as duas cores predominantes da imagem
  const color1 = colors[0];
  const color2 = colors[1];
  const [R1, G1, B1] = color1;
  const [R2, G2, B2] = color2;


  const gradient = document.querySelector('.gradient')
  gradient.style.background = `radial-gradient(ellipse at top left, rgb(${R2}, ${G2}, ${B2}), rgb(${R1}, ${G1}, ${B1}), #1e1e1e 70%)`;
};


const ratingStars = [...document.getElementsByClassName("rating__star")];

function executeRating(stars) {
  const starClassActive = "rating__star fas fa-star";
  const starClassInactive = "rating__star far fa-star";
  const starsLength = stars.length;
  let i;
  stars.map((star) => {
    star.onclick = () => {
      i = stars.indexOf(star);

      if (star.className===starClassInactive) {
        for (i; i >= 0; --i) stars[i].className = starClassActive;
      } else {
        for (i; i < starsLength; ++i) stars[i].className = starClassInactive;
      }
    };
  });
}
executeRating(ratingStars);