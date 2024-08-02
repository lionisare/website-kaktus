/* ==========Show  Menu========== */
const navMenu = document.getElementById("navbar-menu"),
  btnMenu = document.getElementById("btn-menu"),
  btnClose = document.getElementById("btn-close");

/* show menu */
if (btnMenu) {
  btnMenu.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
/* hide menu */
if (btnClose) {
  btnClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== Remove Menu Mobile ===============*/
const navItem = document.querySelectorAll(".navbar__item");

const linkAction = () => {
  const navMenu = document.getElementById("navbar-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navItem.forEach((n) => n.addEventListener("click", linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
const stickyHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("sticky-header")
    : header.classList.remove("sticky-header");
};
window.addEventListener("scroll", stickyHeader);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".navbar__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== scrool up===============*/
function scrollUp() {
  const scrollUp = document.getElementById("scroolUP");
  if (this.scrollY >= 350) scrollUp.classList.add("active-scroll");
  else scrollUp.classList.remove("active-scroll");
}
window.addEventListener("scroll", scrollUp);

/*=============== scroll animation===============*/
const SR = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2500,
  delay: 300,
  reset: true,
});
SR.reveal(
  `.home__img, .section__title, .section__description, .perawatan__img, .varian__content, .toko__content, .kontak__data, .footer, .copyright`
);
SR.reveal(`.home__data, .info__gps, .perawatan__item`, { delay: 500 });
SR.reveal(`.varian__card,`, { delay: 500, interval: 100 });
SR.reveal(`.toko__card,`, { interval: 100 });

/* ========== login ========== */
const login = document.getElementById("login"),
  btnLogin = document.getElementById("btn-user"),
  btnLoginCls = document.getElementById("btn__login-close");

/*   show login */
btnLogin.addEventListener("click", () => {
  login.classList.add("show-login");
});
/*   hide login */
btnLoginCls.addEventListener("click", () => {
  login.classList.remove("show-login");
});

/* ==========Show  Menu========== */
const menuCart = document.getElementById("menu-cart"),
  btnCart = document.getElementById("btn-cart"),
  btnClosecart = document.getElementById("btn-closeCart");

/* show menu */
if (btnCart) {
  btnCart.addEventListener("click", () => {
    menuCart.classList.add("show-cart");
  });
}
/* hide menu */
if (btnClosecart) {
  btnClosecart.addEventListener("click", () => {
    menuCart.classList.remove("show-cart");
  });
}
