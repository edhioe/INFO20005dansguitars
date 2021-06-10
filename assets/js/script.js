var slideleft = document.querySelector('.slide-left');
var slideright = document.querySelector('.slide-right');
var imageslide = document.querySelector('#slide-image');
slideleft.addEventListener('click', function () {
  a = imageslide.className;
  if (a == "slide-image2") {
    imageslide.classList.remove(a);
    imageslide.classList.add('slide-image1');
  } else if (a == "slide-image3") {
    imageslide.classList.remove(a);
    imageslide.classList.add('slide-image2');
  } else if (a == "slide-image1") {
    imageslide.classList.remove(a);
    imageslide.classList.add('slide-image3');
  }
});
slideright.addEventListener('click', function () {
  a = imageslide.className;
  if (a == "slide-image2") {
    imageslide.classList.remove(a);
    imageslide.classList.add('slide-image3');
  } else if (a == "slide-image3") {
    imageslide.classList.remove(a);
    imageslide.classList.add('slide-image1');
  } else if (a == "slide-image1") {
    imageslide.classList.remove(a);
    imageslide.classList.add('slide-image2');
  }
});

