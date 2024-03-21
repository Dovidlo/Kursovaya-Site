var sortByNameBtnA = document.getElementById('sortByNameA');
var sortByNameBtnD = document.getElementById('sortByNameD');
var sortByPriceBtnA = document.getElementById('sortByPriceA');
var sortByPriceBtnD = document.getElementById('sortByPriceD');

function sortingByNameA() {
  var items = document.querySelectorAll('.car');

  Array.from(items).sort(function (a, b) {

    a = a.querySelector('.car-name').innerText.toLowerCase()
    b = b.querySelector('.car-name').innerText.toLowerCase()
    return (a > b) - (a < b)
  }).forEach(function (n, i) {
    n.style.order = i
  })
}

function sortingByNameD() {
  var items = document.querySelectorAll('.car');

  Array.from(items).sort(function (a, b) {

    a = a.querySelector('.car-name').innerText.toLowerCase()
    b = b.querySelector('.car-name').innerText.toLowerCase()
    return (a < b) - (a > b)
  }).forEach(function (n, i) {
    n.style.order = i
  })
}

function sortingByPriceA() {
  var items = document.querySelectorAll('.car')

  Array.from(items).sort(function (a, b) {

    a = ~~a.querySelector('.car-price').innerText
    b = ~~b.querySelector('.car-price').innerText
    return a - b
  }).forEach(function (n, i) {
    n.style.order = i
  })
}

function sortingByPriceD() {
  var items = document.querySelectorAll('.car')

  Array.from(items).sort(function (a, b) {

    a = ~~a.querySelector('.car-price').innerText
    b = ~~b.querySelector('.car-price').innerText
    return b - a
  }).forEach(function (n, i) {
    n.style.order = i
  })
}

sortByNameBtnA.addEventListener('click', sortingByNameA);
sortByNameBtnD.addEventListener('click', sortingByNameD);
sortByPriceBtnA.addEventListener('click', sortingByPriceA);
sortByPriceBtnD.addEventListener('click', sortingByPriceD);



// модальное окно
function openModal() {
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}



// слайдер
let slideIndex = 0;

function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = 2;
  }
  showSlides();
}

function nextSlide() {
  slideIndex++;
  if (slideIndex > 2) {
    slideIndex = 0;
  }
  showSlides();
}

function showSlides() {
  let slides = document.querySelectorAll(".slides img");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}




function openCabModal() {
  document.getElementById("modalCab").style.display = "block";
}

function closeCabModal() {
  document.getElementById("modalCab").style.display = "none";
}


function GO(){
  document.location.href = 'DataBase.html';
}