/* --------- start menu ------ */
let iconClick = document.querySelector(".settings-box .icon");
let containerShift = document.querySelector(".settings-box");
iconClick.addEventListener("click", () => {
  if (containerShift.classList.contains("open")) {
    hideAndHide();
  } else {
    showAndHide();
  }
});

function showAndHide() {
  containerShift.classList.add("open");
}
function hideAndHide() {
  containerShift.classList.remove("open");
}

/* --------- end menu ------ */
/* ---------- start setting ------- */

let mainColor = localStorage.getItem("color");

if (mainColor) {
  document.documentElement.style.setProperty("--main--color", mainColor);

  document.querySelectorAll(".colors-list li").forEach((element) => {
    element.classList.remove("active");

    if (element.dataset.color === mainColor) {
      element.classList.add("active");
    }
  });
}

let colorLi = document.querySelectorAll(".colors-list li");

colorLi.forEach((e) => {
  e.addEventListener("click", (ele) => {
    document.documentElement.style.setProperty(
      "--main--color",
      ele.target.dataset.color
    );

    localStorage.setItem("color", ele.target.dataset.color);

    handleActive(ele);
  });
});

/* ------------------- span option ------------ */

let BulletsLocalStorage = localStorage.getItem("log");

let BulletsOption = document.querySelectorAll(".Bullets-option span");

let navBullets = document.querySelector(".nav-bullets");

if (BulletsLocalStorage !== null) {
  document.querySelectorAll(".Bullets-option span").forEach((e) => {
    e.classList.remove("active");
  });

  if (BulletsLocalStorage === "show") {
    navBullets.style.display = "block";

    document.querySelector(".Bullets-option .yes").classList.add("active");
  } else {
    navBullets.style.display = "none";

    document.querySelector(".Bullets-option .no").classList.add("active");
  }
}

BulletsOption.forEach((span) => {
  span.addEventListener("click", (ele) => {
    if (ele.target.dataset.display === "show") {
      navBullets.style.display = "block";

      localStorage.setItem("log", "show");
    } else {
      navBullets.style.display = "none";

      localStorage.setItem("log", "none");
    }

    handleActive(ele);
  });
});

/* ---------- reset option ---------------- */

let resetOption = document.querySelector(".Reset-option span");

resetOption.addEventListener("click", () => {
  localStorage.removeItem("color");
  localStorage.removeItem("option");
  localStorage.removeItem("random");
  localStorage.removeItem("log");

  window.location.reload();
});

/* -------- random background Color ---------- */

let backGroundOption = true;

let theBackgroundInterval;

let randomData = localStorage.getItem("random");

if (randomData !== null) {
  document.querySelectorAll(".random-Background span").forEach((element) => {
    element.classList.remove("active");
  });

  if (randomData === "true") {
    backGroundOption = true;
    document.querySelector(".random-Background .yes").classList.add("active");
  } else {
    backGroundOption = false;
    document.querySelector(".random-Background .no").classList.add("active");
  }
}

let backgroundSpan = document.querySelectorAll(".random-Background span");

backgroundSpan.forEach((e) => {
  e.addEventListener("click", (ele) => {
    handleActive(ele);

    if (ele.target.dataset.background === "yes") {
      backGroundOption = true;
      randomizeImgs();
      localStorage.setItem("random", true);
    } else {
      backGroundOption = false;
      clearInterval(theBackgroundInterval);
      localStorage.setItem("random", false);
    }

    document.querySelectorAll(".random-Background span").forEach((e) => {
      e.classList.remove("active");
    });

    if (backGroundOption === true) {
      document.querySelector(".random-Background .yes").classList.add("active");
    } else {
      document.querySelector(".random-Background .no").classList.add("active");
    }
  });
});

/* ---------- end setting --------- */

/* ---------- start landing ----------- */

let landingPage = document.querySelector(".landing-page");

let imgArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

function randomizeImgs() {
  if (backGroundOption === true) {
    theBackgroundInterval = setInterval(() => {
      let randomImage = Math.floor(Math.random() * imgArray.length);
      landingPage.style.backgroundImage = `url(/imgs/${imgArray[randomImage]})`;
    }, 1000);
  }
}

randomizeImgs();

/* ---------- end landing ----------- */
/* ---------- Start about us -------------- */

let ourSkills = document.querySelector(".our-skills");

window.onscroll = function () {
  //skills Offest Top
  let skillsOffsetTop = ourSkills.offsetTop;

  //Skills Outer Height
  let skillsOuterHeight = ourSkills.offsetHeight;

  //window Height
  let windowHeight = window.innerHeight;

  //window Scroll Top
  let windowScrollTop = window.pageYOffset;

  if (windowScrollTop > skillsOffsetTop + skillsOuterHeight - windowHeight) {
    let AllSkills = document.querySelectorAll(
      ".skill-box .skills-progress span"
    );

    AllSkills.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
    });
  } else {
    let AllSkills = document.querySelectorAll(
      ".skill-box .skills-progress span"
    );

    AllSkills.forEach((skill) => {
      skill.style.width = 0;
    });
  }
};

/* ---------- End about us -------------- */

/* ----------- Start Gallery -------------*/

/* let ourGallery = Array.from(
  document.querySelectorAll(".gallery .images-box img")
);

ourGallery.forEach((img) => {
  img.addEventListener("click", (img) => {
    //create overLay Element
    let overLay = document.createElement("div");

    overLay.className = "pop-overlay";

    document.body.appendChild(overLay);

    let popupBpx = document.createElement("div");

    popupBpx.className = "popup-box";

    let popupImage = document.createElement("img");

    popupImage.src = img.target.src;

    popupBpx.appendChild(popupImage);

    document.body.appendChild(popupBpx);

    if (img.target.alt !== null) {
      let headingText = document.createElement("h3");
      headingText.appendChild(document.createTextNode(img.target.alt));
      popupBpx.appendChild(headingText);
    }

    let spanCreate = document.createElement("span");
    spanCreate.appendChild(document.createTextNode("X"));

    spanCreate.classList.add("close-button");

    popupBpx.appendChild(spanCreate);

    spanCreate.onclick = () => {
      overLay.remove();
      popupBpx.remove();
    };
  });
}); */

/* ----------- end Gallery -------------*/

/* ----------- Start Bullets ----------- */
let bulletsAll = document.querySelectorAll(".nav-bullets .bullet");

scrollIntoViewP(bulletsAll);

/* ----------- End Bullets ------------- */

/* ------------ start ul li -------------------- */
let allLinks = document.querySelectorAll(".header-area ul li a");

scrollIntoViewP(allLinks);

function scrollIntoViewP(element) {
  element.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}
/* ------------ end ul li -------------------- */

/* ------------- handle active ------------- */

function handleActive(ele) {
  /* the most active use the lines codes */
  ele.target.parentElement.querySelectorAll(".active").forEach((item) => {
    item.classList.remove("active");
  });
  ele.target.classList.add("active");
}

/* ------------ menu-toggle ------------- */

let menuToggle = document.querySelector(".links-container .toggle-menu");
let tLinks = document.querySelector(".landing-page .header-area ul");

menuToggle.onclick = function (e) {
  e.stopPropagation();

  menuToggle.classList.toggle("menu-active");

  tLinks.classList.toggle("open");
};

/* ---------- click any where outside menu andtoogle ------------- */
document.onclick = function (e) {
  if (e.target !== menuToggle && e.target !== tLinks) {
    if (tLinks.classList.contains("open")) {
      menuToggle.classList.toggle("menu-active");

      tLinks.classList.toggle("open");
    } else {
    }
  } else {
    console.log("this is the button");
  }
};

// stop propagation on menu
tLinks.onclick = function (e) {
  e.stopPropagation();
};
