var elements = document.getElementsByClassName("column");
var currentImages = null;

var oneImages = [
    "img/1.jpg",
    "img/3.jpg",
    "img/4.jpg",
    "img/5.jpg",
    "img/10.jpg",
    "img/14.jpg",
    "img/16.jpg",
    "img/17.webp",
];

var twoImages = [
"onepiece/OP30.jpg",
"onepiece/OP2.jpg",
"onepiece/OP3.jpg",
"onepiece/OP4.jpg",
"onepiece/OP5.jpg",
"onepiece/OP6.jpg",
"onepiece/OP7.jpg",
"onepiece/OP8.jpg",
"onepiece/OP9.jpg",
"onepiece/OP10.jpg",
"onepiece/OP11.jpg",
"onepiece/OP13.jpg",
"onepiece/OP14.jpg",
"onepiece/OP15.jpg",
"onepiece/OP16.jpg",
"onepiece/OP17.jpg",
"onepiece/OP18.jpg",
"onepiece/OP19.jpg",
"onepiece/OP20.jpg",
"onepiece/OP21.jpg",
"onepiece/OP22.jpg",
"onepiece/OP23.jpg",
"onepiece/OP24.jpg",
"onepiece/OP25.jpg",
"onepiece/OP26.jpg",
"onepiece/OP27.jpg",
"onepiece/OP28.jpg",
"onepiece/OP29.jpg",
"onepiece/OP1.jpg",

];

var threeImages = [
"jujutso/j14.webp",
"jujutso/j1.webp",
"jujutso/j2.webp",
"jujutso/j4.webp",
"jujutso/j5.webp",
"jujutso/j6.webp",
"jujutso/j7.webp",
"jujutso/j8.webp",
"jujutso/j9.webp",
"jujutso/j10.webp",
"jujutso/j11.webp",
"jujutso/j12.webp",
"jujutso/j13.webp",
"jujutso/j.webp",
"jujutso/j15.webp",
"jujutso/j16.webp",
"jujutso/j17.webp",
"jujutso/j18.webp",
"jujutso/j19.webp",
"jujutso/j20.webp",
"jujutso/j21.webp",
"jujutso/j22.webp",
"jujutso/j23.webp",
"jujutso/j24.webp",
"jujutso/j25.webp",
"jujutso/j26.webp",
"jujutso/j27.webp",
"jujutso/j28.webp",
"jujutso/j29.webp",



];

var fourImages = [
  "bleach/B4.jpg",
  "bleach/B2.jpg",
  "bleach/B3.jpg",
  "bleach/B1.jpg",
  "bleach/B5.jpg",
  "bleach/B6.jpg",
  "bleach/B7.jpg",
  "bleach/B8.jpg",
  "bleach/B9.jpg",
  "bleach/B10.jpg",
  "bleach/B11.webp",
  "bleach/B12.webp",
  "bleach/B13.webp",
  "bleach/B14.webp",
  "bleach/B15.webp",
  "bleach/B16.webp",
  "bleach/B17.webp",
  "bleach/B18.webp",
  "bleach/B19.webp",
  "bleach/B20.webp",
  "bleach/B21.webp",
  "bleach/B22.webp",
  

];



function changeImages(images) {
  currentImages = images;
  updateImageGrid();
}

function changeImagesAndBackground(images) {
  changeImages(images);

}

function updateImageGrid() {
  for (var i = 0; i < elements.length; i++) {
    elements[i].innerHTML = "";
    for (var j = 0; j < currentImages.length; j++) {
      var img = document.createElement("img");
      img.src = currentImages[j];
      img.style.width = "100%";
      elements[i].appendChild(img);
    }
  }
}


changeImages(oneImages);
