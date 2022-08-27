const menuBtn = document.querySelector('.menu-btn');
const meunItems = document.querySelector('.menu-items')

menuBtn.addEventListener('click', OpenMenu);

function OpenMenu() {
  menuBtn.classList.toggle('open')
  meunItems.classList.toggle('open')
}