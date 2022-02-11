// header 
let lastScroll = 0;

const header = document.querySelector('.header');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('header__hide');

window.addEventListener('scroll', () => {

  if (scrollPosition() > lastScroll && !containHide()) {
    header.classList.add('header__hide')
  }
  else if (scrollPosition() < lastScroll && containHide()) {
    header.classList.remove('header__hide')
  }

  lastScroll = scrollPosition()
})
// burger 
const burger = document.querySelector('[data-burger]');
const navList = document.querySelector('[data-nav]');

burger.addEventListener('click', () => {
  burger.classList.toggle('burger-active');
  
  navList.classList.toggle('nav-visible')
  navList.classList.toggle('nav-active')
})




// slider 
const swiper = new Swiper(".slider__block", {
  slidesPerView: 1,
});

const sliderNavItems = document.querySelectorAll('.slider__nav-item')

sliderNavItems.forEach((el, index) => {
  el.setAttribute('data-index', index)

  el.addEventListener('click', (e) => {
      const index = parseInt(e.currentTarget.dataset.index);
      swiper.slideTo(index)
  })

})

// Select
let select = function () {
  let selectHeader = document.querySelectorAll(".select__header");
  let selectItem = document.querySelectorAll(".select__item");

  selectHeader.forEach((item) => {
    item.addEventListener("click", selectToggle);
  });

  selectItem.forEach((item) => {
    item.addEventListener("click", selectChoose);
  });

  function selectToggle() {
    this.parentElement.classList.toggle("is-active");
  }

  function selectChoose() {
    let text = this.innerText,
      select = this.closest(".select"),
      currentText = select.querySelector(".select__current");
    currentText.innerText = text;
    select.classList.remove("is-active");
  }
};

select();
