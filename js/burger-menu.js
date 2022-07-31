
const burger = document.querySelector('.burger-menu');
const menuList = document.querySelector('.menu__list');
console.log(menuList);
burger.addEventListener('click', () => {
    menuList.classList.toggle('active');
})

