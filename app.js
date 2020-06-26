const body = document.body;
const theCursor = document.querySelector("#cursor");
const all = document.querySelectorAll(".all");
const titletabs = document.querySelectorAll(".tab");
const mode = document.querySelector(".mode");
const mode1 = document.querySelector(".mode1");
const mode2 = document.querySelector(".mode2");
const tabs = document.getElementsByClassName("tab");
const stuffs = document.getElementsByClassName("stuffs");
const presantation = document.querySelector("#pres_invi");
const turbulence = document.querySelector("#turbulence");
// #####################
const pres_title = document.querySelector("#pres_title");
const workNavbar = document.querySelector("#work_navbar");
const web_work = document.querySelector(".web_work");
const mobile_work = document.querySelector(".mobile_work");
const perso_work = document.querySelector(".preso_work");
const work_tabs = document.querySelectorAll(".work_tabs");
const sckils = document.querySelectorAll(".sckils");
const stuffsImgInternes = document.querySelectorAll(".stuffs_img_interne");
const presantation_child = document.querySelector(".presantation");
// #####################
const technoPresantation = document.querySelector(".techno_presantation");
const technoExperienc = document.querySelector(".techno_experienc");
const technoLogo = document.querySelector(".techno_logo");
const contact = document.querySelector("#contact");
/*################################################################################*/
/*
  !#############################      CLASS     ################################
*/
/*################################################################################*/

class Carousel {
  constructor(container, options = {}) {
    this.container = container.children[0];
    this.options = Object.assign(
      {},
      {
        slidesToScroll: 1,
        slidesVisible: 1,
      },
      options
    );
    this.currentItem = 0;
    this.newContainer = document.querySelector(".presantation_img");
    this.moovingContainer = this.creatDivWithClassName("moovingContainer");
    this.creationSuit();
    this.dimantions();
    this.creatNavigation();
  }
  // ###########################
  creatDivWithClassName(className) {
    const newdiv = document.createElement("div");
    newdiv.setAttribute("class", className);
    return newdiv;
  }
  // ###########################
  creationSuit() {
    let childs = [].slice.call(this.container.children);
    this.items = childs.map((child) => {
      const childClone = child.cloneNode(true);
      const envelop = this.creatDivWithClassName("envelop");
      envelop.appendChild(childClone);
      this.moovingContainer.appendChild(envelop);
      return envelop;
    });
    this.newContainer.appendChild(this.moovingContainer);
  }

  dimantions() {
    this.ratio = (100 * this.items.length) / this.options.slidesVisible;
    this.moovingContainer.style.width = this.ratio + "%";
    this.items.forEach((item) => {
      item.style.width = this.ratio / this.items.length + "%";
    });
  }

  creatNavigation() {
    this.nextBtn = document.querySelector(".next");
    this.prevBtn = document.querySelector(".prev");
    this.prevBtn.classList.add("invisibel");

    const close = document.querySelector("#close_pres");
    close.addEventListener("click", this.close.bind(this));

    this.nextBtn.addEventListener("click", this.next.bind(this));
    this.prevBtn.addEventListener("click", this.prev.bind(this));
  }

  next() {
    this.gotoItem(this.currentItem + this.options.slidesToScroll);
    this.prevBtn.classList.remove("invisibel");
  }

  prev() {
    this.gotoItem(this.currentItem - this.options.slidesToScroll);
    this.nextBtn.classList.remove("invisibel");
  }

  close() {
    this.currentItem = 0;
    this.newContainer.innerHTML = "";
    presantation.style.display = "none";
    body.style.setProperty("--stufs_opacity", "");
    body.style.setProperty("--stufs_dimensions", "");
    this.nextBtn.classList.remove("invisibel");
  }

  gotoItem(index) {
    if (index <= 0) {
      this.prevBtn.classList.add("invisibel");
    } else if (
      index >= this.items.length - this.options.slidesVisible ||
      (this.items[this.currentItem + this.options.slidesVisible] ===
        undefined &&
        index > this.currentItem)
    ) {
      this.nextBtn.classList.add("invisibel");
    }
    let translateX = (index * -100) / this.items.length;
    this.moovingContainer.style.transform =
      "translate3d(" + translateX + "%,0, 0)";
    this.currentItem = index;
  }
}

/*########################################################################*/
/*
  !###########################   FUNCTIOS   #############################
*/
/*#########################################################################*/

// ?                                      MODE-TRANSITION

const darckmode = (
  a = "",
  b = "",
  c = "",
  d = "",
  e = "",
  f = "",
  g = "",
  h = ""
) => {
  mode1.style.display = a;
  mode2.style.display = b;
  mode_check.style.left = c;
  body.style.setProperty("--color_worck_navbar", d);
  body.style.setProperty("--color0", e);
  body.style.setProperty("--colorX", f);
  body.style.setProperty("--color_bak", g);
  body.style.setProperty("--color_tab_hover", h);
};

function theme(e) {
  const item = e.target;
  if (item.classList[0] === "mode1") {
    darckmode(
      "none",
      "block",
      "55%",
      "",
      "#a3795e",
      "#4D1720",
      "rgba(0,0,0,.1)",
      "#4D1720"
    );
  }
  if (item.classList[0] === "mode2") {
    darckmode("block", "none");
  }
}
// ?                                      PARAM HOVER

const paramHover = (a = "", b = "", c = "", d = "") => {
  param_extra.style.zIndex = a;
  param_extra.style.transitionDelay = b;
  param.style.width = c;
  param.style.borderLeft = d;
};

// ?                                      LEFT_BAR HOVER

const leftBarHover = (a = "", b = "", c = "", e) => {
  left_bar.style.width = a;
  tab1.style.left = b;
  tab1.style.transitionDelay = c;
};

// ?                                      TABS

function tabClick(e) {
  const item = e.target;
  for (tab of tabs) {
    tab.id = "";
    tab.style.left = "";
    tab.style.transitionDelay = "";
  }
  this.id = "tab1";
  this.style.background = "";
  this.style.left = "65%";
  if (item == titletabs[0]) {
    for (let i = 0; i < all.length; i++) {
      all[i].style.display = "none";
    }
    all[0].style.display = "block";
  }
  if (item == titletabs[1]) {
    for (let i = 0; i < all.length; i++) {
      all[i].style.display = "none";
    }
    all[1].style.display = "block";
  }
  if (item == titletabs[3]) {
    for (let i = 0; i < all.length; i++) {
      all[i].style.display = "none";
    }
    all[2].style.display = "block";
  }
  if (item == titletabs[4]) {
    for (let i = 0; i < all.length; i++) {
      all[i].style.display = "none";
    }
    all[3].style.display = "block";
  }
  // ##################################

  let btntop = item.getBoundingClientRect().y;
  let btnwidht = item.getBoundingClientRect().width;
  let btnheight = item.getBoundingClientRect().height;

  let left = (e.clientX / btnwidht) * 100 + "%";
  let top = ((e.clientY - btntop) / btnheight) * 100 + "%";

  document.documentElement.style.setProperty("--left", left);
  document.documentElement.style.setProperty("--top", top);
}
function tabOver(e) {
  const item = e.target;
  for (tab of tabs) {
    tab.style.left = "";
    tab.style.background = "";
    tab.style.color = "";
  }
  this.style.left = "65%";
  this.style.background = "var(--color_tab_hover)";
  this.style.color = "var(--color0)";
  if (item.innerText === "DESIGNE" || item.innerText === "CONTACT") {
    this.style.left = "65%";
  }
}
function tabOut() {
  this.style.left = "";
  this.style.background = "";
  this.style.color = "";
}

// ?                                      STUFFS

function stuffClick(e) {
  var stuffY = this.parentNode.parentNode.getBoundingClientRect().y;
  var stuffX = this.parentNode.parentNode.getBoundingClientRect().x;
  var stuffW = this.parentNode.parentNode.getBoundingClientRect().width;
  var stuffH = this.parentNode.parentNode.getBoundingClientRect().height;
  var theTop = ((e.clientY - stuffY) / stuffH) * 100 + "%";
  var theLeft = ((e.clientX - stuffX) / stuffW) * 100 + "%";

  body.style.setProperty("--stufs_top", theTop);
  body.style.setProperty("--stufs_left", theLeft);
  body.style.setProperty("--stufs_opacity", ".4");
  body.style.setProperty("--stufs_dimensions", "130");

  stuffsImgInternes.forEach((stuffsImgInterne) => {
    stuffsImgInterne.style.display = "block";
  });
  presantation.style.display = "block";
  new Carousel(this);

  var presH = presantation_child.getBoundingClientRect().height;
  var allpresH = presantation.getBoundingClientRect().height;
  var presTop = (((allpresH - presH) / 2) * 100) / allpresH + "%";

  var presW = presantation_child.getBoundingClientRect().width;
  var allpresW = presantation.getBoundingClientRect().width;
  var presLeft = (((allpresW - presW) / 2) * 100) / allpresW + "%";

  presantation_child.style.top = presTop;
  presantation_child.style.left = presLeft;

  var title = this.children[1].innerText;
  pres_title.innerText = title;
}

// ?                                      WORK
const work = (e) => {
  var item = e.target;
  if (item.innerText === "Web") {
    web_work.classList.add("web_work_visible");
    mobile_work.classList.remove("mobile_work_visible");
    perso_work.classList.remove("preso_work_visible");
    work_tabs.forEach((tabs) => {
      tabs.classList.remove("activ_tab");
    });
    item.classList.add("activ_tab");
  } else if (item.innerText === "Mobile") {
    web_work.classList.remove("web_work_visible");
    mobile_work.classList.add("mobile_work_visible");
    perso_work.classList.remove("preso_work_visible");
    work_tabs.forEach((tabs) => {
      tabs.classList.remove("activ_tab");
    });
    item.classList.add("activ_tab");
  } else if (item.innerText === "Perso") {
    web_work.classList.remove("web_work_visible");
    mobile_work.classList.remove("mobile_work_visible");
    perso_work.classList.add("preso_work_visible");
    work_tabs.forEach((tabs) => {
      tabs.classList.remove("activ_tab");
    });
    item.classList.add("activ_tab");
  }
};
// ?                                      SCKILS

const technoInfo = (i) => {
  for (let x = 0; x < sckils.length; x++) {
    sckils[x].classList.remove("sckils_selected");
  }
  sckils[i].classList.add("sckils_selected");
  const descriptionContainer = technoPresantation.children[1];
  const titleContainer = technoPresantation.children[0];
  const experContainer = technoExperienc.children[1];
  const logoContainer = technoLogo.children[0];
  let theDescription = sckils[i].children[2].textContent;
  let title = sckils[i].children[1].textContent;
  let expe = sckils[i].children[3].cloneNode(true);
  let logo = sckils[i].children[0].cloneNode(true);
  // #####################
  descriptionContainer.textContent = theDescription;
  titleContainer.innerHTML = title;
  experContainer.innerHTML = "";
  experContainer.appendChild(expe);
  logoContainer.innerHTML = "";
  logoContainer.appendChild(logo);
};
/*################################################################################*/
/*
!#############################      EVENTS      ##############################
*/
/*################################################################################*/
param.addEventListener(
  "mouseover",
  paramHover.bind(null, "2", "", "2.5em", "0em var(--color0) solid")
);
param.addEventListener("mouseout", paramHover.bind(null, "", ".5s", "", ""));
param.addEventListener("click", theme);
// ################################################################
left_bar.addEventListener(
  "mouseover",
  leftBarHover.bind(null, "7em", "65%", ".3s")
);
left_bar.addEventListener("mouseout", leftBarHover.bind(null, "", "", ""));
//#########
for (tab of tabs) {
  tab.addEventListener("click", tabClick);
  tab.addEventListener("mouseover", tabOver);
  tab.addEventListener("mouseout", tabOut);
}
// ################################################################
for (stuff of stuffs) {
  stuff.addEventListener("click", stuffClick);
}
// ################################################################
workNavbar.addEventListener("click", (e) => {
  work(e);
});
// ################################################################
for (let i = 0; i < sckils.length; i++) {
  sckils[i].addEventListener("click", () => {
    technoInfo(i);
  });
}
// ##############################################################
const networkContainer = document.querySelector(".network_container");
networkContainer.addEventListener("mouseover", () => {
  tl = new TimelineMax({ paused: true });
  tl.to(turbulence, 1.5, { attr: { baseFrequency: "0.02 0.02" } }, 0);
  tl.to(turbulence, 1.5, { attr: { baseFrequency: "0 0" } }, 0.4);
  tl.play();
});

const contactCarts = document.querySelectorAll(".contact_cart");
for (let i = 0; i < contactCarts.length; i++) {
  contactCarts[i].addEventListener("mouseover", () => {
    contactCarts.forEach((contactCart) => {
      contactCart.style.filter = "url(#shad)";
      contactCarts[i].style.top = "";
    });
    contactCarts[i].style.filter = "url(#noise)";
    contactCarts[i].style.top = "-35%";
    tl = new TimelineMax({ paused: true });
    tl.to(turbulence, 0.5, { attr: { baseFrequency: "0.01 0.01" } }, 0);
    tl.to(turbulence, 0.5, { attr: { baseFrequency: "0 0" } }, 0.3);
    tl.play();
    positionOfContacteInfo(i);
  });
}

const contactContainer = document.querySelector(".contact_container");
contactContainer.addEventListener("mouseout", () => {
  for (let i = 0; i < contactCarts.length; i++) {
    contactCarts[i].style.filter = " url(#shad)";
    contactCarts[i].style.top = "";
    contactCartInfos[i].style.top = "";
    contactCartInfos[i].style.left = "";
    contactCartInfos[i].style.opacity = "";
    contactCartInfos[i].style.zIndex = "";
  }
});

// ########################

const contactCartInfos = document.querySelectorAll(".contact_cart_info");
const positionOfContacteInfo = (index) => {
  contactCartInfos.forEach((contactCartInfo) => {
    contactCartInfo.style.top = "";
    contactCartInfo.style.left = "";
    contactCartInfo.style.opacity = "";
    contactCartInfo.style.zIndex = "";
  });

  let cartY = contactCarts[index].getBoundingClientRect().y;
  let cartH = contactCarts[index].getBoundingClientRect().height;

  let cartX = contactCarts[index].getBoundingClientRect().x;
  let cartW = contactCarts[index].getBoundingClientRect().width;

  contactCartInfos[index].style.top = cartY + cartH + "px";
  contactCartInfos[index].style.left = cartX + cartW + "px";
  contactCartInfos[index].style.opacity = "1";
  contactCartInfos[index].style.zIndex = "14";
};
