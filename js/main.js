'use strict';


  /*=================================================
フェードイン
===================================================*/
const targetElement = document.querySelectorAll('.animationTarget');

console.log(targetElement);
document.addEventListener("scroll", function () {
  for (let i = 0; i < targetElement.length; i++) {
    const getElementDistance = targetElement[i].getBoundingClientRect().top + targetElement[i].clientHeight * .6;
    if (window.innerHeight > getElementDistance) {
      targetElement[i].classList.add('show');
    }
  }
})

const headerButton = document.querySelector('.header-toggle');
const toggleMenu = document.querySelector('.toggle-menu');

headerButton.addEventListener('click',function(){
  headerButton.classList.toggle('show');
  toggleMenu.classList.toggle('show');
});