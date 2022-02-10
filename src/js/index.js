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
