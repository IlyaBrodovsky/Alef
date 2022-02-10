// Header

$(function () {
  let header = $("#header");
  let headerH = header.innerHeight();
  let scrollPos = $(window).scrollTop();
  let nav = $(".item-list");
  let navToggle = $("#navToggle");

  checkScroll(scrollPos, headerH);

  $(window).on("scroll resize", function () {
    let headerH = header.innerHeight();

    scrollPos = $(this).scrollTop();

    checkScroll(scrollPos, headerH);
  });

  function checkScroll(scrollPos, headerH) {
    if (scrollPos > headerH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }
  // Menu
  navToggle.on("click", function (event) {
    event.preventDefault();

    nav.toggleClass("show");
  });
});

// Slider

$(document).ready(function () {
  $(".slider").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: ".sliderBig",
    centerMode: true,
    focusOnSelect: true,
  });

  $(".sliderBig").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider",
    adaptiveHeight: false,
    adaptiveWidth: true,
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
