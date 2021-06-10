
var slide_shopnow = document.querySelector('#slide-shopnow');
var slide_shopnow_active = document.querySelector('#slide-shopnow-active');
slide_shopnow.addEventListener('click', function () {
  a = slide_shopnow_active.className;
  if (a == "slide-shopnow") {
    slide_shopnow_active.classList.remove(a);
    slide_shopnow_active.classList.add('slide-shopnow-active');
  } else if (a == "slide-shopnow-active") {
    slide_shopnow_active.classList.remove(a);
    slide_shopnow_active.classList.add('slide-shopnow');
  }
});


var navigation = document.querySelector('.navigation');
navigation.addEventListener('click', function () {
  var menu_mobile = document.getElementById('menu-mobile');
  if (menu_mobile.style.display === "none") {
    menu_mobile.style.display = "block";
  } else {
    menu_mobile.style.display = "none";
  }
});
