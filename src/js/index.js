// header
let lastScroll = 0;

const header = document.querySelector(".header");

const scrollPosition = () =>
  window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains("header__hide");

window.addEventListener("scroll", () => {
  if (scrollPosition() > lastScroll && !containHide()) {
    header.classList.add("header__hide");
  } else if (scrollPosition() < lastScroll && containHide()) {
    header.classList.remove("header__hide");
  }

  lastScroll = scrollPosition();
});
// burger
const burger = document.querySelector("[data-burger]");
const navList = document.querySelector("[data-nav]");

burger.addEventListener("click", () => {
  burger.classList.toggle("burger-active");

  navList.classList.toggle("nav-visible");
  navList.classList.toggle("nav-active");
});

// slider
const swiper = new Swiper(".slider__block", {
  slidesPerView: 1,
});

const sliderNavItems = document.querySelectorAll(".slider__nav-item");

sliderNavItems.forEach((el, index) => {
  el.setAttribute("data-index", index);

  el.addEventListener("click", (e) => {
    const index = parseInt(e.currentTarget.dataset.index);
    swiper.slideTo(index);
  });
});

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

// bag and favorite

let plusBtn = document.querySelector(".plus-btn");
let minusBtn = document.querySelector(".minus-btn");
let current = document.querySelector(".current");
let addBtn = document.querySelector(".add-btn");
let blockGoods = document.querySelector(".block-goods");
let favorite = document.querySelector(".favorite-btn");
let snackbar = document.getElementById("snackbar");

document.onclick = (event) => {
  console.log(event.target);
  if (event.target.classList.contains("plus-btn")) {
    plusCurrent(event.target.dataset.id);
  }
  if (event.target.classList.contains("minus-btn")) {
    minusCurrent(event.target.dataset.id);
  }
  if (event.target.classList.contains("favorite-btn")) {
    favoriteMessage(event.target.dataset.id);
  }
  if (event.target.classList.contains("add-btn")) {
    renderCart(event.target.dataset.id);
  }
};

function plusCurrent() {
  current.innerHTML = current.value++;
}

function minusCurrent() {
  if (current.value <= 0) {
    current = 0;
  }
  current.innerHTML = current.value--;
}

function favoriteMessage() {
  blockGoods.innerHTML =
    "товар артикул 213456 в количестве " +
    current.value +
    " добавлен в избранное";
  myFunction();
}
function renderCart() {
  blockGoods.innerHTML =
    "товар артикул 213456 в количестве " +
    current.value +
    " добавлен в корзину";
  myFunction();
}

function myFunction() {
  snackbar.className = "show";
  setTimeout(function () {
    snackbar.className = snackbar.className.replace("show", "");
  }, 3000);
}
addBtn.onclick = myFunction;

//validate email

function ValidMail() {
  let re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
  let myMail = document.querySelector(".footer__input").value;
  let valid = re.test(myMail);
  if (valid) output = "Адрес эл. почты введен правильно!";
  else output = "Адрес электронной почты введен неправильно!";
  document.getElementById("message").innerHTML = output;
  return valid;
}
