const hambragerBtn = document.querySelector('.hambrager-btn');
const headerMenu = document.querySelector('.header__menu');
const closeBtn = document.querySelector('.header__btn--close');

console.log(hambragerBtn,headerMenu,closeBtn);

function hambrgerActive() {
    hambragerBtn.classList.toggle('is-active');
    headerMenu.classList.toggle('is-show');

    if(hambragerBtn.classList.contains('is-active') && headerMenu.classList.contains('is-show')) {
        hambragerBtn.setAttribute('aria-expanded', 'true');
        headerMenu.setAttribute('aria-hidden', 'false');
    } else {
        hambragerBtn.setAttribute('aria-expanded', 'false');
        headerMenu.setAttribute('aria-hidden', 'true');
    }
};

function headerMenuClose() {
    hambragerBtn.classList.remove('is-active');
    headerMenu.classList.remove('is-show');
    hambragerBtn.setAttribute('aria-expanded', 'false');
    headerMenu.setAttribute('aria-hidden', 'true');
};

hambragerBtn.addEventListener('click', () => {
    hambrgerActive();
});

closeBtn.addEventListener('click', () => {
    headerMenuClose();
});

/*ハンバーガーボタン要素かつハンバーガーメニュー要素が含まれていないか*/
document.body.addEventListener('click', (event) => {
    if(
        !hambragerBtn.contains(event.target) && 
        !headerMenu.contains(event.target)
    ){
        headerMenuClose();
    }
});