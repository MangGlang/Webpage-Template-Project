function openMenu() {
  document.body.classList += " menu--open";
  // add a class to the body that notifies that the
  // menu is open. Targets the body, which targets the class,
  // which adds the identifier
}

function closeMenu() {
  document.body.classList.remove("menu--open");
}

//
// const btn__menu = document.querySelector(".btn__menu");
// const menu__backdrop = document.querySelector(".menu__backdrop");

// btn__menu.addEventListener("click", function () {
//   menu__backdrop.classList.toggle("is-active");
// });
