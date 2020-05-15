const tabItems = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');


function selectItem(e) {
    removeBorder();
    removeShow();
    this.classList.add('tab-border');
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    tabContentItem.classList.add('show');
}

function removeBorder() {
    tabItems.forEach(item => {
        item.classList.remove('tab-border');
    });
}

function removeShow() {
    tabContents.forEach(item => {
        item.classList.remove('show');
    });
}

tabItems.forEach(item => {
    item.addEventListener('click', selectItem);
});



// BURGER MENU

const burgerMenu = document.getElementById('menu');
const burgerContentOverlay = document.querySelector('.burger-and-overlay');
const slideIn = document.querySelector('.burger-open');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.js-close');
const openMenu = document.querySelector('.js-menu-open');

burgerMenu.addEventListener('click', () => {
    burgerContentOverlay.classList.toggle('change');
    overlay.classList.toggle('change');
    openMenu.classList.toggle('display-none');
    closeBtn.classList.toggle('display-none');
});

closeBtn.addEventListener('click', () => {
    burgerContentOverlay.classList.toggle('change');
    overlay.classList.toggle('change');
    openMenu.classList.toggle('display-none');
    closeBtn.classList.toggle('display-none');
})

overlay.addEventListener('click', () => {
    overlay.classList.remove('change');
});
