// Header Underline

let subMenuHeader = document.getElementsByClassName("subMenuHeader");
let headerUnderline = document.getElementsByClassName("headerUnderline")[0];
let header = document.getElementsByClassName("header")[0];
let headerPosition = document.getElementsByClassName("headerPosition")[0];

// 1024 px screen;

let mediaThousand = window.matchMedia("(max-width: 1024px)");

// 768 px screen;
let mediaMdScreen = window.matchMedia("(max-width: 768px)");
for (let i = 0; i < subMenuHeader.length; i++) {
  subMenuHeader[i].addEventListener("click", (event) => {
    let clickSubHeader = event.target;
    let underlineWidth = clickSubHeader.offsetWidth;
    headerUnderline.style.width = underlineWidth + "px";
    let underlineMarginLeft = clickSubHeader.offsetLeft;
    headerUnderline.style.marginLeft = underlineMarginLeft + "px";
    console.log(underlineMarginLeft)
    if(clickSubHeader.classList.contains("contact")) {
      if(mediaMdScreen.matches) {
        window.scrollTo(0,12671)
      }else if(mediaThousand.matches) {
        window.scrollTo(0,10652);
      }
      else {
        window.scrollTo(0,11650);
      }
      
    }else if(clickSubHeader.classList.contains("testimontial")) {
      if(mediaMdScreen.matches) {
        window.scrollTo(0,11446);
      } else if(mediaThousand.matches) {
        window.scrollTo(0,9645);
      }
      else {
      window.scrollTo(0,10464);
      }
    } else if(clickSubHeader.classList.contains("blogs")) {
      if(mediaMdScreen.matches) {
        window.scrollTo(0,10568);
      }else if(mediaThousand.matches) {
        window.scrollTo(0,8903)
      }
      else {
      window.scrollTo(0,9689);
      }
    }else if(clickSubHeader.classList.contains("services")) {
      if(mediaMdScreen.matches) {
        window.scrollTo(0,7608);
      }else if(mediaThousand.matches) {
        window.scrollTo(0,6465)
      }
      else {
      window.scrollTo(0,7358);
      }
    }else if(clickSubHeader.classList.contains("team")) {
      if(mediaMdScreen.matches) {
        window.scrollTo(0,6325);
      }else if(mediaThousand.matches) {
        window.scrollTo(0,5247);
      }
      else {
        window.scrollTo(0,5883);
      }
    }else if(clickSubHeader.classList.contains("ourWork")) {
      if(mediaMdScreen.matches) {
        window.scrollTo(0,5118);
      }else if(mediaThousand.matches) {
        window.scrollTo(0,4042);
      }
      else {
        window.scrollTo(0,4187); 
      }
    }else if(clickSubHeader.classList.contains("history")) {
      if(mediaMdScreen.matches) {
        window.scrollTo(0,3508);
      } else if(mediaThousand.matches) {
        window.scrollTo(0,2862);
      }
      else {
        window.scrollTo(0,2968); 
      }
    }else if(clickSubHeader.classList.contains("about")) {
      if(mediaMdScreen.matches) {
        window.scrollTo(0,508);
      }else if(mediaThousand.matches) {
        window.scrollTo (0,688);
      } else{
        window.scrollTo(0,900);
      }
    }else {
      window.scrollTo(0,0);
    }
  });
} 

// Header background change when scrolling
let headerScroll = () => {
  if (window.pageYOffset > 1) {
    headerPosition.classList.add("headerBackground");
  } else {
    headerPosition.classList.remove("headerBackground");
  }
  
};

// add image hide class function;

let imgHide = (idNumberHide) => {
  document.getElementById(idNumberHide).classList.add("imgShowHide");
  document.getElementById(idNumberHide).classList.remove("imgOpacity");
};

// add image show class function;

let imgShow = (idNumberShow) => {
  document.getElementById(idNumberShow).classList.remove("imgShowHide");
  document.getElementById(idNumberShow).classList.add("imgOpacity");
};

// Porfilio Auto Img Show & Hide

let portfilioImg = document.getElementsByClassName("imgContainer");
let nextButton = document.getElementsByClassName("nextButton")[0];
let i = 0;
let autoImgSliding = () => {
  let clearValue = setInterval(() => {
    if (i == 0) {
      if (portfilioImg[i].classList.contains("imgShowHide")) {
        document
          .getElementById(portfilioImg.length - 1)
          .classList.add("imgShowHide");
        document
          .getElementById(portfilioImg.length - 1)
          .classList.remove("imgOpacity");
        portfilioImg[i].classList.remove("imgShowHide");
        portfilioImg[i].classList.add("imgOpacity");
      } else {
        imgHide(i);
        i++;
        imgShow(i);
      }
    } else if (i == 1) {
      imgHide(i);
      i++;
      imgShow(i);
      i = 0;
    } else {
      imgHide(i);
      i = 0;
      imgShow(i);
    }
  }, 5000);
  return clearValue;
};

// catch current show img function for next & previous button control;

let catchCurrentShowImg = () => {
  clearInterval(autoImgSlidingReturnValue);
  currentShowingId = document.getElementsByClassName("imgOpacity")[0].id;
  let currentShowingImg = document.getElementById(currentShowingId);
  currentShowingImg.classList.remove("imgOpacity");
  currentShowingImg.classList.add("imgShowHide");
};

// image change when next & previous button click function;

let clickPreviousOrNextButton = () => {
  i = currentShowingId;
  let nextOrPreviousImg = document.getElementById(currentShowingId);
  nextOrPreviousImg.classList.remove("imgShowHide");
  nextOrPreviousImg.classList.add("imgOpacity");
};

// next button control portfilio images

let autoImgSlidingReturnValue = autoImgSliding();
let currentShowingId;
nextButton.addEventListener("click", () => {
  catchCurrentShowImg();
  currentShowingId++;
  if (currentShowingId > 2) {
    currentShowingId = 0;
    clickPreviousOrNextButton();
  } else {
    clickPreviousOrNextButton();
  }
  autoImgSlidingReturnValue = autoImgSliding();
});

// previous button control portfilio images

let previousButton = document.getElementsByClassName("previousButton")[0];
previousButton.addEventListener("click", () => {
  catchCurrentShowImg();
  currentShowingId--;
  if (currentShowingId < 0) {
    currentShowingId = 2;
    clickPreviousOrNextButton();
  } else {
    clickPreviousOrNextButton();
  }
  autoImgSlidingReturnValue = autoImgSliding();
});

// Our support menu clicking

let supportMenuAllControl = document.getElementsByClassName(
  "supportMenuAllControl"
);
for (let i = 0; i < supportMenuAllControl.length; i++) {
  supportMenuAllControl[i].addEventListener("click", (e) => {
    let getActiveDiv = document.getElementsByClassName("activeSupportMenu")[0];
    let clickDiv = e.target;
    if (clickDiv.classList.contains("supportMenuAllControl")) {
      getActiveDiv.classList.remove("activeSupportMenu");
      clickDiv.classList.add("activeSupportMenu");
    } else {
      getActiveDiv.classList.remove("activeSupportMenu");
      let parentsCatch = clickDiv.parentElement;
      parentsCatch.classList.add("activeSupportMenu");
    }
  });
}

// Our support responsive menu explain photo sliding auto

let imgSlidingMove = document.getElementsByClassName("imgSlidingMove")[0];
let slideImgPixel = 0;

let slidingImgAuto = () => {
  let clearValueSlidingImgAuto = setInterval(() => {
    slideImgPixel += -600;
    if (slideImgPixel < -1200) {
      slideImgPixel = 0;
      imgSlidingMove.style.transform = `translate(${slideImgPixel}px)`;
    } else {
      imgSlidingMove.style.transform = `translate(${slideImgPixel}px)`;
    }
  }, 4000);
  return clearValueSlidingImgAuto;
};

let returnValueFromSlidingImgAuto = slidingImgAuto();

// Our support responsive menu explain photo button control

let rightButton = document.getElementsByClassName("rightButton")[0];
let buttonImgSlidingControl = (imgMovePixel) => {
  imgSlidingMove.style.transform = `translate(${imgMovePixel}px)`;
};
rightButton.addEventListener("click", () => {
  clearInterval(returnValueFromSlidingImgAuto);
  if (slideImgPixel == -1200) {
    slideImgPixel = 0;
    buttonImgSlidingControl(slideImgPixel);
  } else {
    slideImgPixel += -600;
    buttonImgSlidingControl(slideImgPixel);
  }
  returnValueFromSlidingImgAuto = slidingImgAuto();
});

let leftButton = document.getElementsByClassName("leftButton")[0];
leftButton.addEventListener("click", () => {
  clearInterval(returnValueFromSlidingImgAuto);
  if (slideImgPixel == 0) {
    slideImgPixel = -1200;
    buttonImgSlidingControl(slideImgPixel);
  } else {
    slideImgPixel += 600;
    buttonImgSlidingControl(slideImgPixel);
  }
  returnValueFromSlidingImgAuto = slidingImgAuto();
});

// Our support and support explain div link

linkSuppportExplainDivShowHide = (idChangeClass) => {
  let explainClass = document.getElementsByClassName(`${idChangeClass}`)[0];
  if (explainClass.classList.contains("checkedShow")) {
    return;
  } else {
    let checkedShow = document.getElementsByClassName("checkedShow")[0];
    checkedShow.classList.add("linkedSupportMenu");
    checkedShow.classList.remove("checkedShow");
    explainClass.classList.remove("linkedSupportMenu");
    explainClass.classList.add("checkedShow");
  }
};

let flexible = document.getElementById("flexibleClick");
flexible.addEventListener("click", () => {
  let idForExplain = flexible.id;
  linkSuppportExplainDivShowHide(idForExplain);
});

let responsive = document.getElementById("responsiveClick");
responsive.addEventListener("click", () => {
  let idForExplain = responsive.id;
  linkSuppportExplainDivShowHide(idForExplain);
});

let support = document.getElementById("supportClick");
support.addEventListener("click", () => {
  let idForExplain = support.id;
  linkSuppportExplainDivShowHide(idForExplain);
});

let cleanDesign = document.getElementById("cleanDesignClick");
cleanDesign.addEventListener("click", () => {
  let idForExplain = cleanDesign.id;
  linkSuppportExplainDivShowHide(idForExplain);
});

let easyToUse = document.getElementById("easyToUseClick");
easyToUse.addEventListener("click", () => {
  let idForExplain = easyToUse.id;
  linkSuppportExplainDivShowHide(idForExplain);
});

// Phto menu click

let menuAll = document.getElementsByClassName("menuAll");
for (let i = 0; i < menuAll.length; i++) {
  menuAll[i].addEventListener("click", (e) => {
    let activePhotoMenu = document.getElementsByClassName("activePhotoMenu")[0];
    activePhotoMenu.classList.remove("activePhotoMenu");
    let targetPhotoMenu = e.target;
    targetPhotoMenu.classList.add("activePhotoMenu");
  });
}

// photo menu click change photo show function

let photoHeight = document.getElementsByClassName("photoHeight")[0];
let imgTvContainer = document.getElementsByClassName("imgTvContainer");
let imgMoveMent = (imgNumber, x, y) => {
  imgTvContainer[imgNumber].style.transform = `translate(${x}px , ${y}px)`;
};


// Fashion photo menu click change photo show
// show img no. is 2 4 7

let fashion = document.getElementsByClassName("fashion")[0];
fashion.addEventListener("click", () => {
  if (mediaMdScreen.matches) {
    console.log("768");
    photoHeight.style.height = "133px";
    for (let i = 0; i < imgTvContainer.length; i++) {
      if (i == 0) {
        imgMoveMent(i, 2000, 2000);
      } else if (i == 1) {
        imgMoveMent(i, -1500, -1500);
      } else if (i == 2) {
        imgMoveMent(i, -383, 0);
      } else if (i == 3) {
        imgMoveMent(i, 1300, 1200);
      } else if (i == 4) {
        imgMoveMent(i, 194, -128);
      } else if (i == 5) {
        imgMoveMent(i, 0, 680);
      } else if (i == 6) {
        imgMoveMent(i, -1500, 0);
      } else if (i == 7) {
        imgMoveMent(i, -190, -128);
      } else if (i == 8) {
        imgMoveMent(i, 1200, -1100);
      } else if (i == 9) {
        imgMoveMent(i, 1300, 1200);
      } else if (i == 10) {
        imgMoveMent(i, 1000, 0);
      } else if (i == 11) {
        imgMoveMent(i, 1300, 0);
      }
    }
  }
 
  // 768 screen
  else
   // 1024 screen
   if (mediaThousand.matches) {
    console.log("1024");
    photoHeight.style.height = "175px";
    for (let i = 0; i < imgTvContainer.length; i++) {
      if (i == 0) {
        imgMoveMent(i, 2000, 2000);
      } else if (i == 1) {
        imgMoveMent(i, -1500, -1500);
      } else if (i == 2) {
        imgMoveMent(i, -510, 0);
      } else if (i == 3) {
        imgMoveMent(i, 1300, 1200);
      } else if (i == 4) {
        imgMoveMent(i, 258, -171);
      } else if (i == 5) {
        imgMoveMent(i, 0, 680);
      } else if (i == 6) {
        imgMoveMent(i, -1500, 0);
      } else if (i == 7) {
        imgMoveMent(i, -254, -171);
      } else if (i == 8) {
        imgMoveMent(i, 1200, -1100);
      } else if (i == 9) {
        imgMoveMent(i, 1300, 1200);
      } else if (i == 10) {
        imgMoveMent(i, 1000, 0);
      } else if (i == 11) {
        imgMoveMent(i, 1300, 0);
      }
    }
  }
  else {
    console.log("aa");
    photoHeight.style.height = "300px";
    for (let i = 0; i < imgTvContainer.length; i++) {
      if (i == 0) {
        imgMoveMent(i, 2000, 2000);
      } else if (i == 1) {
        imgMoveMent(i, -1500, -1500);
      } else if (i == 2) {
        imgMoveMent(i, -952, 0);
      } else if (i == 3) {
        imgMoveMent(i, 1300, 1200);
      } else if (i == 4) {
        imgMoveMent(i, 952, -319);
      } else if (i == 5) {
        imgMoveMent(i, 0, 680);
      } else if (i == 6) {
        imgMoveMent(i, -1500, 0);
      } else if (i == 7) {
        imgMoveMent(i, -952, -318);
      } else if (i == 8) {
        imgMoveMent(i, 1200, -1100);
      } else if (i == 9) {
        imgMoveMent(i, 1300, 1200);
      } else if (i == 10) {
        imgMoveMent(i, 1000, 0);
      } else if (i == 11) {
        imgMoveMent(i, 1300, 0);
      }
    }
  }
});

//  Events photo menu click change photo show
//  show img no. is 8 9 11

let events = document.getElementsByClassName("events")[0];
events.addEventListener("click", () => {
   //768 screen
  if (mediaMdScreen.matches) {
    photoHeight.style.height = "133px";
    for (let i = 0; i < imgTvContainer.length; i++) {
      if (i == 0) {
        imgMoveMent(i, 2000, 2000);
      } else if (i == 1) {
        imgMoveMent(i, -1500, -1500);
      } else if (i == 2) {
        imgMoveMent(i, -1400, 1400);
      } else if (i == 3) {
        imgMoveMent(i, 1300, 1200);
      } else if (i == 4) {
        imgMoveMent(i, 1200, 1100);
      } else if (i == 5) {
        imgMoveMent(i, 0, 680);
      } else if (i == 6) {
        imgMoveMent(i, -1500, 0);
      } else if (i == 7) {
        imgMoveMent(i, 1000, -1000);
      } else if (i == 8) {
        imgMoveMent(i, 193, -255);
      } else if (i == 9) {
        imgMoveMent(i, -191, -255);
      } else if (i == 10) {
        imgMoveMent(i, 1000, 0);
      } else if (i == 11) {
        imgMoveMent(i, -191, -255);
      }
    }
  }
 
  else 
  // 1024 screen
  if (mediaThousand.matches) {
    photoHeight.style.height = "175px";
    for (let i = 0; i < imgTvContainer.length; i++) {
      if (i == 0) {
        imgMoveMent(i, 2000, 2000);
      } else if (i == 1) {
        imgMoveMent(i, -1500, -1500);
      } else if (i == 2) {
        imgMoveMent(i, -1400, 1400);
      } else if (i == 3) {
        imgMoveMent(i, 1300, 1200);
      } else if (i == 4) {
        imgMoveMent(i, 1200, 1100);
      } else if (i == 5) {
        imgMoveMent(i, 0, 680);
      } else if (i == 6) {
        imgMoveMent(i, -1500, 0);
      } else if (i == 7) {
        imgMoveMent(i, 1000, -1000);
      } else if (i == 8) {
        imgMoveMent(i, 254, -340);
      } else if (i == 9) {
        imgMoveMent(i, -254, -340);
      } else if (i == 10) {
        imgMoveMent(i, 1000, 0);
      } else if (i == 11) {
        imgMoveMent(i, -258, -340);
      }
    }
  }
  else {
    photoHeight.style.height = "300px";
    for (let i = 0; i < imgTvContainer.length; i++) {
      if (i == 0) {
        imgMoveMent(i, 2000, 2000);
      } else if (i == 1) {
        imgMoveMent(i, -1500, -1500);
      } else if (i == 2) {
        imgMoveMent(i, -1400, 1400);
      } else if (i == 3) {
        imgMoveMent(i, 1300, 1200);
      } else if (i == 4) {
        imgMoveMent(i, 1200, 1100);
      } else if (i == 5) {
        imgMoveMent(i, 0, 680);
      } else if (i == 6) {
        imgMoveMent(i, -1500, 0);
      } else if (i == 7) {
        imgMoveMent(i, 1000, -1000);
      } else if (i == 8) {
        imgMoveMent(i, 474, -635);
      } else if (i == 9) {
        imgMoveMent(i, -474, -635);
      } else if (i == 10) {
        imgMoveMent(i, 1000, 0);
      } else if (i == 11) {
        imgMoveMent(i, -480, -635);
      }
    }
  }
});

// Wedding photo menu click change photo show
// show img no. is 4 7 8 1

let wedding = document.getElementsByClassName("wedding")[0];
wedding.addEventListener("click", () => {
 // 768 screen
  if (mediaMdScreen.matches) {
    photoHeight.style.height = "133px";
    for (let i = 0; i < imgTvContainer.length; i++) {
      if (i == 0) {
        imgMoveMent(i, 2000, 2000);
      } else if (i == 1) {
        imgMoveMent(i, 384, 0);
      } else if (i == 2) {
        imgMoveMent(i, -1400, 1400);
      } else if (i == 3) {
        imgMoveMent(i, 1300, 1200);
      } else if (i == 4) {
        imgMoveMent(i, 0, -128);
      } else if (i == 5) {
        imgMoveMent(i, 0, 680);
      } else if (i == 6) {
        imgMoveMent(i, -1500, 0);
      } else if (i == 7) {
        imgMoveMent(i, -384, -128);
      } else if (i == 8) {
        imgMoveMent(i, 384, -256);
      } else if (i == 9) {
        imgMoveMent(i, 1300, 1200);
      } else if (i == 10) {
        imgMoveMent(i, 1000, 0);
      } else if (i == 11) {
        imgMoveMent(i, 1300, 0);
      }
    }
  } 
 
  else   
  // 1024 screen
  if (mediaThousand.matches) {
    photoHeight.style.height = "175px";
    for (let i = 0; i < imgTvContainer.length; i++) {
      if (i == 0) {
        imgMoveMent(i, 2000, 2000);
      } else if (i == 1) {
        imgMoveMent(i, 507, 0);
      } else if (i == 2) {
        imgMoveMent(i, -1400, 1400);
      } else if (i == 3) {
        imgMoveMent(i, 1300, 1200);
      } else if (i == 4) {
        imgMoveMent(i, 0, -171);
      } else if (i == 5) {
        imgMoveMent(i, 0, 680);
      } else if (i == 6) {
        imgMoveMent(i, -1500, 0);
      } else if (i == 7) {
        imgMoveMent(i, -512, -171);
      } else if (i == 8) {
        imgMoveMent(i, 512, -342);
      } else if (i == 9) {
        imgMoveMent(i, 1300, 1200);
      } else if (i == 10) {
        imgMoveMent(i, 1000, 0);
      } else if (i == 11) {
        imgMoveMent(i, 1300, 0);
      }
    }
  } 
  else {
    photoHeight.style.height = "300px";
    for (let i = 0; i < imgTvContainer.length; i++) {
      if (i == 0) {
        imgMoveMent(i, 2000, 2000);
      } else if (i == 1) {
        imgMoveMent(i, 953, 0);
      } else if (i == 2) {
        imgMoveMent(i, -1400, 1400);
      } else if (i == 3) {
        imgMoveMent(i, 1300, 1200);
      } else if (i == 4) {
        imgMoveMent(i, 0, -318);
      } else if (i == 5) {
        imgMoveMent(i, 0, 680);
      } else if (i == 6) {
        imgMoveMent(i, -1500, 0);
      } else if (i == 7) {
        imgMoveMent(i, -952, -318);
      } else if (i == 8) {
        imgMoveMent(i, 953, -635);
      } else if (i == 9) {
        imgMoveMent(i, 1300, 1200);
      } else if (i == 10) {
        imgMoveMent(i, 1000, 0);
      } else if (i == 11) {
        imgMoveMent(i, 1300, 0);
      }
    }
  }
});

// cooperate photo menu click change photo show
// show img no. 0 5 6 10 3
let cooperate = document.getElementsByClassName("cooperate")[0];
cooperate.addEventListener("click", () => {
  // 768 screen
  if (mediaMdScreen.matches) {
    photoHeight.style.height = "258px";
    for (let i = 0; i < imgTvContainer.length; i++) {
      if (i == 0) {
        imgMoveMent(i, 0, 0);
      } else if (i == 1) {
        imgMoveMent(i, -1500, -1500);
      } else if (i == 2) {
        imgMoveMent(i, -1400, 1400);
      } else if (i == 3) {
        imgMoveMent(i, -576, 128);
      } else if (i == 4) {
        imgMoveMent(i, 1200, 1100);
      } else if (i == 5) {
        imgMoveMent(i, 0, -128);
      } else if (i == 6) {
        imgMoveMent(i, 0, -128);
      } else if (i == 7) {
        imgMoveMent(i, 1000, -1000);
      } else if (i == 8) {
        imgMoveMent(i, 1200, -1100);
      } else if (i == 9) {
        imgMoveMent(i, 1300, 1200);
      } else if (i == 10) {
        imgMoveMent(i, 192, -256);
      } else if (i == 11) {
        imgMoveMent(i, 1300, 0);
      }
    }
  }
  else 
   // 1024 screen
   if (mediaThousand.matches) {
    photoHeight.style.height = "353px";
    for (let i = 0; i < imgTvContainer.length; i++) {
      if (i == 0) {
        imgMoveMent(i, 0, 0);
      } else if (i == 1) {
        imgMoveMent(i, -1500, -1500);
      } else if (i == 2) {
        imgMoveMent(i, -1400, 1400);
      } else if (i == 3) {
        imgMoveMent(i, -768, 171);
      } else if (i == 4) {
        imgMoveMent(i, 1200, 1100);
      } else if (i == 5) {
        imgMoveMent(i, 0, -171);
      } else if (i == 6) {
        imgMoveMent(i, 0, -171);
      } else if (i == 7) {
        imgMoveMent(i, 1000, -1000);
      } else if (i == 8) {
        imgMoveMent(i, 1200, -1100);
      } else if (i == 9) {
        imgMoveMent(i, 1300, 1200);
      } else if (i == 10) {
        imgMoveMent(i, 256, -341);
      } else if (i == 11) {
        imgMoveMent(i, 1300, 0);
      }
    }
  }  
  else {
    photoHeight.style.height = "600px";
    for (let i = 0; i < imgTvContainer.length; i++) {
      if (i == 0) {
        imgMoveMent(i, 0, 0);
      } else if (i == 1) {
        imgMoveMent(i, -1500, -1500);
      } else if (i == 2) {
        imgMoveMent(i, -1400, 1400);
      } else if (i == 3) {
        imgMoveMent(i, -1429, 317);
      } else if (i == 4) {
        imgMoveMent(i, 1200, 1100);
      } else if (i == 5) {
        imgMoveMent(i, 0, -318);
      } else if (i == 6) {
        imgMoveMent(i, 0, -318);
      } else if (i == 7) {
        imgMoveMent(i, 1000, -1000);
      } else if (i == 8) {
        imgMoveMent(i, 1200, -1100);
      } else if (i == 9) {
        imgMoveMent(i, 1300, 1200);
      } else if (i == 10) {
        imgMoveMent(i, 476, -636);
      } else if (i == 11) {
        imgMoveMent(i, 1300, 0);
      }
    }
  }
});

// All photo menu click photo change
// show img no. All

let all = document.getElementsByClassName("all")[0];
all.addEventListener("click", () => {
  photoHeight.style.height = "auto";
  for (let i = 0; i < imgTvContainer.length; i++) {
    if (i == 0) {
      imgMoveMent(i, 0, 0);
    } else if (i == 1) {
      imgMoveMent(i, 0, 0);
    } else if (i == 2) {
      imgMoveMent(i, 0, 0);
    } else if (i == 3) {
      imgMoveMent(i, 0, 0);
    } else if (i == 4) {
      imgMoveMent(i, 0, 0);
    } else if (i == 5) {
      imgMoveMent(i, 0, 0);
    } else if (i == 6) {
      imgMoveMent(i, 0, 0);
    } else if (i == 7) {
      imgMoveMent(i, 0, 0);
    } else if (i == 8) {
      imgMoveMent(i, 0, 0);
    } else if (i == 9) {
      imgMoveMent(i, 0, 0);
    } else if (i == 10) {
      imgMoveMent(i, 0, 0);
    } else if (i == 11) {
      imgMoveMent(i, 0, 0);
    }
  }
});

// Team slide show

let ourTeamSlideShow = document.getElementsByClassName("ourTeamSlideShow")[0];
let ourTeamSlidePixel = 0;
let showOne = document.getElementsByClassName("showOne")[0];
let showTwo = document.getElementsByClassName("showTwo")[0];

ourTeamPhotoSlideShowInterval = () => {
  let dataForClearInterTeam = setInterval(() => {
    // 786 media screen movement start;
    if (mediaMdScreen.matches) {
      if (ourTeamSlidePixel == -666) {
        ourTeamSlidePixel = 0;
        ourTeamSlideShow.style.transform = `translate(${ourTeamSlidePixel}px)`;
        showTwo.style.opacity = "0.4";
        showOne.style.opacity = "1";
      } else {
        ourTeamSlidePixel += -222;
        ourTeamSlideShow.style.transform = `translate(${ourTeamSlidePixel}px)`;
        if (ourTeamSlidePixel == -666) {
          showOne.style.opacity = "0.4";
          showTwo.style.opacity = "1";
        }
      }
    }
    else  
     // 1024 media screen movement start
     if (mediaThousand.matches) {
      if (ourTeamSlidePixel == -900) {
        ourTeamSlidePixel = 0;
        ourTeamSlideShow.style.transform = `translate(${ourTeamSlidePixel}px)`;
        showTwo.style.opacity = "0.4";
        showOne.style.opacity = "1";
      } else {
        ourTeamSlidePixel += -300;
        ourTeamSlideShow.style.transform = `translate(${ourTeamSlidePixel}px)`;
        if (ourTeamSlidePixel == -900) {
          showOne.style.opacity = "0.4";
          showTwo.style.opacity = "1";
        }
      }
    }
    else {
      if (ourTeamSlidePixel == -1296) {
        ourTeamSlidePixel = 0;
        ourTeamSlideShow.style.transform = `translate(${ourTeamSlidePixel}px)`;
        showTwo.style.opacity = "0.4";
        showOne.style.opacity = "1";
      } else {
        ourTeamSlidePixel += -432;
        ourTeamSlideShow.style.transform = `translate(${ourTeamSlidePixel}px)`;
        if (ourTeamSlidePixel == -1296) {
          showOne.style.opacity = "0.4";
          showTwo.style.opacity = "1";
        }
      }
    }
  }, 4000);
  return dataForClearInterTeam;
};

let clearFromOurTeamInterval = ourTeamPhotoSlideShowInterval();

// show one show two click photo slide show change

showOne.addEventListener("click", () => {
  clearInterval(clearFromOurTeamInterval);
  ourTeamSlidePixel = 0;
  ourTeamSlideShow.style.transform = `translate(${ourTeamSlidePixel}px)`;
  showTwo.style.opacity = "0.4";
  showOne.style.opacity = "1";
  clearFromOurTeamInterval = ourTeamPhotoSlideShowInterval();
});

showTwo.addEventListener("click", () => {
  clearInterval(clearFromOurTeamInterval);
  // 786 media screen movement;
  if (mediaMdScreen.matches) {
    ourTeamSlidePixel = -666;
    ourTeamSlideShow.style.transform = `translate(${ourTeamSlidePixel}px)`;
    showOne.style.opacity = "0.4";
    showTwo.style.opacity = "1";
  }
   else
   // 1024 media screen movement
   if (mediaThousand.matches) {
    ourTeamSlidePixel = -900;
    ourTeamSlideShow.style.transform = `translate(${ourTeamSlidePixel}px)`;
    showOne.style.opacity = "0.4";
    showTwo.style.opacity = "1";
  }
  else {
    ourTeamSlidePixel = -1296;
    ourTeamSlideShow.style.transform = `translate(${ourTeamSlidePixel}px)`;
    showOne.style.opacity = "0.4";
    showTwo.style.opacity = "1";
  }
  clearFromOurTeamInterval = ourTeamPhotoSlideShowInterval();
});

// Sliding what client say photo

let slidingWhatSay = document.getElementsByClassName("slidingWhatSay")[0];
let whatSayMovePixel = 0;
let circleOne = document.getElementsByClassName("circleOne")[0];
let circleTwo = document.getElementsByClassName("circleTwo")[0];
let circleThree = document.getElementsByClassName("circleThree")[0];

// Sliding photo move
let slidingWhatSayMove = () => {
  // 768 px media screen what say photo movement start;
  if (mediaMdScreen.matches) {
    if (whatSayMovePixel == -1390) {
      whatSayMovePixel = 0;
      slidingWhatSay.style.transform = `translate(${whatSayMovePixel}px)`;
    } else {
      whatSayMovePixel += -695;
      slidingWhatSay.style.transform = `translate(${whatSayMovePixel}px)`;
    }
  }
  else 
    // 1024 px media screen what say photo movement
    if (mediaThousand.matches) {
      if (whatSayMovePixel == -1880) {
        whatSayMovePixel = 0;
        slidingWhatSay.style.transform = `translate(${whatSayMovePixel}px)`;
      } else {
        whatSayMovePixel += -940;
        slidingWhatSay.style.transform = `translate(${whatSayMovePixel}px)`;
      }
    }
  else {
    if (whatSayMovePixel == -2588) {
      whatSayMovePixel = 0;
      slidingWhatSay.style.transform = `translate(${whatSayMovePixel}px)`;
    } else {
      whatSayMovePixel += -1294;
      slidingWhatSay.style.transform = `translate(${whatSayMovePixel}px)`;
    }
  }
};

// Photo sliding reach place show by measurement circle
let moveCircleActive = () => {
  // 786 px media start;
  if (mediaMdScreen.matches) {
    if (whatSayMovePixel == 0) {
      if (circleThree.classList.contains("circleThree")) {
        circleThree.classList.remove("activeWhatSay");
        circleOne.classList.add("activeWhatSay");
      }
    } else if (whatSayMovePixel == -695) {
      circleOne.classList.remove("activeWhatSay");
      circleTwo.classList.add("activeWhatSay");
    } else if (whatSayMovePixel == -1390) {
      circleTwo.classList.remove("activeWhatSay");
      circleThree.classList.add("activeWhatSay");
    }
  } 
  else 
   // 1024 px media screen
   if (mediaThousand.matches) {
    if (whatSayMovePixel == 0) {
      if (circleThree.classList.contains("circleThree")) {
        circleThree.classList.remove("activeWhatSay");
        circleOne.classList.add("activeWhatSay");
      }
    } else if (whatSayMovePixel == -940) {
      circleOne.classList.remove("activeWhatSay");
      circleTwo.classList.add("activeWhatSay");
    } else if (whatSayMovePixel == -1880) {
      circleTwo.classList.remove("activeWhatSay");
      circleThree.classList.add("activeWhatSay");
    }
  }
  else {
    if (whatSayMovePixel == 0) {
      if (circleThree.classList.contains("circleThree")) {
        circleThree.classList.remove("activeWhatSay");
        circleOne.classList.add("activeWhatSay");
      }
    } else if (whatSayMovePixel == -1294) {
      circleOne.classList.remove("activeWhatSay");
      circleTwo.classList.add("activeWhatSay");
    } else if (whatSayMovePixel == -2588) {
      circleTwo.classList.remove("activeWhatSay");
      circleThree.classList.add("activeWhatSay");
    }
  }
};

whatSayPhotoSlidingFunction = () => {
  let clearForWhatSayMove = setInterval(() => {
    slidingWhatSayMove();
    moveCircleActive();
  }, 4000);
  return clearForWhatSayMove;
};

let dataFromWhatSayFunction = whatSayPhotoSlidingFunction();

// Click show photo sliding measurement circle

let circleWhatSay = document.getElementsByClassName("circleWhatSay");
let clickCircleControlSlide = (clickCircleName) => {
  clearInterval(dataFromWhatSayFunction);
  let activeWhatSay = document.getElementsByClassName("activeWhatSay")[0];
  activeWhatSay.classList.remove("activeWhatSay");
  clickCircleName.classList.add("activeWhatSay");
  slidingWhatSay.style.transform = `translate(${whatSayMovePixel}px)`;
  dataFromWhatSayFunction = whatSayPhotoSlidingFunction();
};

for (let i = 0; i < circleWhatSay.length; i++) {
  circleWhatSay[i].addEventListener("click", (e) => {
    // 768 px media screen start
    if (mediaMdScreen.matches) {
      if (e.target.classList.contains("circleOne")) {
        clearInterval(dataFromWhatSayFunction);
        whatSayMovePixel = 0;
        clickCircleControlSlide(circleOne);
      } else if (e.target.classList.contains("circleTwo")) {
        whatSayMovePixel = -695;
        clickCircleControlSlide(circleTwo);
      } else if (e.target.classList.contains("circleThree")) {
        whatSayMovePixel = -1390;
        clickCircleControlSlide(circleThree);
      }
    }
    else  
     // 1024 px media screen
     if (mediaThousand.matches) {
      if (e.target.classList.contains("circleOne")) {
        clearInterval(dataFromWhatSayFunction);
        whatSayMovePixel = 0;
        clickCircleControlSlide(circleOne);
      } else if (e.target.classList.contains("circleTwo")) {
        whatSayMovePixel = -940;
        clickCircleControlSlide(circleTwo);
      } else if (e.target.classList.contains("circleThree")) {
        whatSayMovePixel = -1880;
        clickCircleControlSlide(circleThree);
      }
    }
    else {
      if (e.target.classList.contains("circleOne")) {
        clearInterval(dataFromWhatSayFunction);
        whatSayMovePixel = 0;
        clickCircleControlSlide(circleOne);
      } else if (e.target.classList.contains("circleTwo")) {
        whatSayMovePixel = -1294;
        clickCircleControlSlide(circleTwo);
      } else if (e.target.classList.contains("circleThree")) {
        whatSayMovePixel = -2588;
        clickCircleControlSlide(circleThree);
      }
    }
  });
}

// Our client logo slide show

let clientLogoSlideShow = document.getElementsByClassName(
  "clientLogoSlideShow"
)[0];

let clientLogoSlidePixel = 0;

let clearFromCleintLogoInterval = setInterval(() => {
  // 768 px media screen
  if (mediaMdScreen.matches) {
    if (clientLogoSlidePixel == -228) {
      clientLogoSlidePixel = 0;
      clientLogoSlideShow.style.transform = `translate(${clientLogoSlidePixel}px)`;
    } else {
      clientLogoSlidePixel += -114;
      clientLogoSlideShow.style.transform = `translate(${clientLogoSlidePixel}px)`;
    }
  }
  else 
    // 1024 px media screen
    if (mediaThousand.matches) {
      if (clientLogoSlidePixel == -308) {
        clientLogoSlidePixel = 0;
        clientLogoSlideShow.style.transform = `translate(${clientLogoSlidePixel}px)`;
      } else {
        clientLogoSlidePixel += -154;
        clientLogoSlideShow.style.transform = `translate(${clientLogoSlidePixel}px)`;
      }
    }
  else {
    if (clientLogoSlidePixel == -430) {
      clientLogoSlidePixel = 0;
      clientLogoSlideShow.style.transform = `translate(${clientLogoSlidePixel}px)`;
    } else {
      clientLogoSlidePixel += -215;
      clientLogoSlideShow.style.transform = `translate(${clientLogoSlidePixel}px)`;
    }
  }
}, 2000);


