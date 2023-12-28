// ========================================
// Responsive navigation
// ========================================
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
    // alert("hi");
    nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());

// ========================================
// sticky navigation
// ========================================
const sectionHero = document.querySelector(".main-section");

// const observer = new IntersectionObserver(
//     (entries) => {
//         const ent = entries[0];
//         console.log(ent);
//         !ent.isIntersecting ?
//             document.body.classList.add("sticky") :
//             document.body.classList.remove("sticky");
//     }, {
//         // viewport
//         root: null,
//         threshold: 0,
//         rootMargin: "-100px",
//     }
// );
// when the hero section end part reached then we need to show the sticky navigation
// observer.observe(sectionHero);

// ========================================
//  how to add media queries in JS
// ========================================
function myFunction(widthSize) {
    if (widthSize.matches) {
        // If media query matches
        const swiper = new Swiper(".swiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },

            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    } else {
        const swiper = new Swiper(".swiper", {
            slidesPerView: 2,
            spaceBetween: 30,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    }
}

const widthSize = window.matchMedia("(max-width: 780px)");
// Call listener function at run time
myFunction(widthSize);
// Attach listener function on state changes
widthSize.addListener(myFunction);

// ========================================
//  scroll to top
// ========================================
const footerElm = document.querySelector(".section-footer");

const scrollElement = document.createElement("div");
scrollElement.classList.add("scrollTop-style");

// I am adding the button element inside the div element
scrollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

// add to the bottom of the page
footerElm.after(scrollElement);

// deleting the dom element
const scrollTop = () => {
    console.log('getting scroll function');
    sectionHero.scrollIntoView({ behavior: "smooth" });
};

document.querySelector(".scroll-top").addEventListener("click", scrollTop);

// get the data attributes

// ========================================
//  smooth scrolling
// ========================================

const portfolioSection = document.querySelector(".section-portfolio");
const contactSection = document.querySelector(".section-contact");

// document.querySelector(".portfolio-link").addEventListener("click", (e) => {
//     e.preventDefault();
//     portfolioSection.scrollIntoView({ behavior: "smooth" });
// });
const hiremeBtn = document.querySelector(".hireme-btn");
if(hiremeBtn){
hiremeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    contactSection.scrollIntoView({ behavior: "smooth" });
});
}

// ========================================
// creating a portfolio tabbed component
// ========================================

const port_btn = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const img_div = document.querySelectorAll(".img-ovelay");

// port_btn.addEventListener("click", (e) => {
//     // console.log(e.target);

//     // we will get which child element was clicked
//     const p_btn_clicked = e.target;
//     console.log(p_btn_clicked);

//     if (!p_btn_clicked.classList.contains("p-btn")) return;
//     // always remove the classList first then add the class
//     p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));
//     // img_div.forEach((curElem) =>
//     //   curElem.classList.remove("portfolio-image-active")
//     // );

//     p_btn_clicked.classList.add("p-btn-active");

//     // to find the p-img class number of the images using the btn data attribute number

//     const btn_num = p_btn_clicked.dataset.btnNum;
//     // console.log(btn_num);

//     const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
//     // console.log(img_active);

//     img_div.forEach((curElem) =>
//         curElem.classList.add("portfolio-image-not-active")
//     );

//     img_active.forEach((curElem) =>
//         curElem.classList.remove(`portfolio-image-not-active`)
//     );
// });

// ========================================
//  lazy loading section
// ========================================
// const imgRef = document.querySelector("img[data-src]");
// console.log(imgRef);

// const lazyImg = (entries) => {
//     const [entry] = entries;
//     if (!entry.isIntersecting) return;
//     entry.target.src = imgRef.dataset.src;
// };

// const imgObserver = new IntersectionObserver(lazyImg, {
//     root: null,
//     threshold: 0,
//     // rootMargin: "100px",
// });

// imgObserver.observe(imgRef);

// ========================================
//  animated counter number
// ========================================

// const workSection = document.querySelector(".section-work-data");

// const workSectionObserve = (entries) => {
//     const [entry] = entries;
//     if (!entry.isIntersecting) return;
//     console.log(entries);


//     const counterNum = document.querySelectorAll(".counter-numbers");
//     // console.log(counterNum);
//     const speed = 10;

//     counterNum.forEach((curNumber) => {
//         const updateNumber = () => {
//             const targetNumber = parseInt(curNumber.dataset.number);
//             // console.log(targetNumber);
//             const initialNumber = parseInt(curNumber.innerText);
//             // console.log(initialNumber);
//             const incrementNumber = Math.trunc(targetNumber / speed);
//             // i am adding the value to the main number
//             // console.log(incrementNumber);

//             if (initialNumber < targetNumber) {
//                 curNumber.innerText = `${initialNumber + incrementNumber}+`;
//                 setTimeout(updateNumber, 120);
//             } else {
//                 curNumber.innerText = `${targetNumber}+`;
//             }

//         };
//         updateNumber();
//     });
// };

// const workSecObserver = new IntersectionObserver(workSectionObserve, {
//     root: null,
//     threshold: 0,
// });

// workSecObserver.observe(workSection);

var i = 0;
var j = 0;
var txt1 = 'Ali Furqan';
var txt2 = 'A Freelancer';
var txt3 = 'A Developer';
var txt4 = 'A Youtuber';
var mainText = ['Ali Furqan', 'A Freelancer', 'A ', 'A Youtuber'];
var speed = 70;

const textChange = document.getElementById("heading-txt-change");

if(textChange){
        typeWriter();
}

// if (textChange) {
//     for (let i = 0; i < 4; i++) {
//         setTimeout(() => {
         
//             switch (true) {
//                 case i == 0:
//                     textChange.innerHTML = '';
//                     mainText = txt1;
//                     typeWriter();
//                     break;
//                 case i == 1:
//                     textChange.innerHTML = '';
//                     mainText = txt2;
//                     typeWriter();
//                     break;
//                 case i == 2:
//                     textChange.innerHTML = '';
//                     mainText = txt3;
//                     typeWriter();
//                     break;
//                 case i == 3:
//                     textChange.innerHTML = '';
//                     mainText = txt4;
//                     typeWriter();
//                     break;
//             }
//         }, 2000);
//     }
// }



function typeWriter() {
    if (mainText[j]) {
        console.log(mainText[j], 'getting main texrt');
        if (i < mainText[j].length) {
            textChange.innerHTML += mainText[j].charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            // textChange.innerHTML = '';
            // if(j <= mainText.length){
            //     j = 0;
            // }else{
            //     j++;
            // }
        }
    }
}

// function typeWriter() {
//     for (let i = 0; i < 5; i++) {
//         switch (true) {
//             case i == 1:
//                 document.getElementById("heading-txt-change").innerHTML = '';
//                 mainText = txt1;
//                 break;

//             case i == 2:
//                 document.getElementById("heading-txt-change").innerHTML = '';
//                 mainText = txt2;
//                 break;

//             case i == 3:
//                 document.getElementById("heading-txt-change").innerHTML = '';
//                 mainText = txt3;
//                 break;

//             case i == 4:
//                 document.getElementById("heading-txt-change").innerHTML = '';
//                 mainText = txt4;
//                 break;
//         }

//         for (let j = 0; j < mainText.length; j++) {
//             setTimeout(() => {
//                 document.getElementById("heading-txt-change").innerHTML += mainText.charAt(j);
//             }, speed);
//         }
//     }
// }

function validate() {
    var username = document.getElementById('username').value;
    if (username.length < 3) {
        alert("Please enter valid Name. Name should contains atleast 3 characters.");
      return false; 
    }

    var subject = document.getElementById('subject').value;
    if (subject.length < 10) {
        alert("Please enter valid Subject. Subject should contains atleast 10 characters.");
      return false; 
    }

    var message = document.getElementById('text-message').value;
    if (message.length < 20) {
        alert("Please enter valid Message. Message should contains atleast 20 characters.");
      return false; 
    }
    
    return true;
}