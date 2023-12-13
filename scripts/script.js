//! ScrollReveal
const scrollReveal = ScrollReveal({
  origin:'top',
  distance:'60px',
  duration:1500,
  delay:200,
  reset:false,
})
scrollReveal.reveal('.intro-img',{origin:'right'});
scrollReveal.reveal('.intro-desc h1',{origin:'left'});
scrollReveal.reveal('.intro-desc h2',{origin:'left', delay:500});
scrollReveal.reveal('.intro-desc h1',{origin:'left',delay:600});
scrollReveal.reveal('.intro-desc .btn',{origin:'left',delay:700});
scrollReveal.reveal('.web-design-agency-desc',{origin:'left',delay:700});
scrollReveal.reveal('.web-design-agency-info',{origin:'right',delay:700});
scrollReveal.reveal('.team_members-box',{origin:'right',interval:700});
scrollReveal.reveal('.choose-us-box',{origin:'left',interval:400});
scrollReveal.reveal('.web-design-agency-info',{origin:'right',delay:700});


const logoImg = document.getElementById('logo');
const hamburger_bar_1 = document.querySelector('.line-one');
const hamburger_bar_2 = document.querySelector('.line-two');
const hamburger_bar_3 = document.querySelector('.line-three');
const mobile_ham_btn = document.querySelector('.mobile-hamburger');
const main_header = document.querySelector('.main-header');
const proposalBtn = document.querySelector('.proposal-btn');
const nav_desc = document.querySelector('.desc');
const menu_btn = document.querySelector('.hamburger');
const mobile_nav = document.querySelector('.mobile-nav');


const mobileNavContainerDescFlexItems = document.querySelectorAll('.mobile-nav-container-desc-flex ');


menu_btn.addEventListener('click', function () {
  menu_btn.classList.toggle("is-active");
  mobile_nav.classList.toggle("is-active");

});

mobile_ham_btn.addEventListener('click', function () {
  menu_btn.classList.toggle("is-active");
  
  mobile_nav.classList.toggle("is-active");
});


// menu_btn.addEventListener('click', function () {
//   menu_btn.classList.toggle("is-active");

//   mobile_nav.classList.toggle("is-active");

// });


// mobile_ham_btn.addEventListener('click', function(){
//     menu_btn.classList.toggle("is-active");
//     if(mobile_nav.classList.contains("is-active")){
//       scrollReveal.reveal('.mobile-nav-container-desc-flex',{origin:'left'}, {interval:600})
//     }
//     mobile_nav.classList.toggle("is-active");
// });

//!button animation
document.addEventListener('DOMContentLoaded', function () {
  var btns = document.querySelectorAll(".btn");
  btns.forEach(function (btn) {
      btn.addEventListener("mouseenter", function (e) {
          var parentOffset = this.getBoundingClientRect(),
              relX = e.pageX - parentOffset.left,
              relY = e.pageY - parentOffset.top;

          this.querySelector(".btn-overlay").style.top = relY + 'px';
          this.querySelector(".btn-overlay").style.left = relX + 'px';
      });
  });
}); 
//!timeline
$(".step").click( function() {
	$(this).addClass("active").prevAll().addClass("active");
	$(this).nextAll().removeClass("active");
});

$(".step-1").click( function() {
	$("#line-process").css("width", "3%");
	$(".discovery").addClass("active").siblings().removeClass("active");
});

$(".step-2").click( function() {
	$("#line-process").css("width", "25%");
	$(".strategy").addClass("active").siblings().removeClass("active");
});

$(".step-3").click( function() {
	$("#line-process").css("width", "50%");
	$(".creative").addClass("active").siblings().removeClass("active");
});

$(".step-4").click( function() {
	$("#line-process").css("width", "75%");
	$(".production").addClass("active").siblings().removeClass("active");
});

$(".step-5").click( function() {
	$("#line-process").css("width", "100%");
	$(".analysis").addClass("active").siblings().removeClass("active");
});

//! scrolling down function
function scrollingDown(){
    if(window.scrollY > 0){
        logoImg.src = "./imgs/cribbleLogoWhite.png";
        logoImg.classList.add("size-change");
        proposalBtn.classList.add("size-change");
        nav_desc.classList.add("size-change");
        main_header.classList.add("active");
        hamburger_bar_1.classList.add("active");
        hamburger_bar_2.classList.add("active");
        hamburger_bar_3.classList.add("active");
    }
    else if(window.scrollY >= 0){   
        logoImg.src = "./imgs/cribbleLogo.png";
        logoImg.classList.remove("size-change");
        proposalBtn.classList.remove("size-change");
        nav_desc.classList.remove("size-change");
        main_header.classList.remove("active");
        hamburger_bar_1.classList.remove("active");
        hamburger_bar_2.classList.remove("active");
        hamburger_bar_3.classList.remove("active");
    }
    
}
window.addEventListener('scroll', scrollingDown);
//!Testimonial Slider

const swiperCards = new Swiper(".mySwiper", {
    spaceBetween: 30,
    grabCursor: true,
    loop:true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints:{
      770: {
        slidesPerView: 1,
      },
      968: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 2,
      },
      1170: {
        slidesPerView: 2,
      },
    },
  });

  const swiperCard = new Swiper(".timeline-inner", {
    spaceBetween: 30,
    grabCursor: true,
    loop:true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints:{
      1200: {
        slidesPerView: 2,
      },
    },
  });
const chatInput = document.querySelector('.chat-input textarea');
const sendChatBtn = document.querySelector('.chat-input span');
const chatBox = document.querySelector('.chatbox');
const chatBotToggler = document.querySelector('.chatbot-toggler');
const showChatBot = document.querySelector('.show');
const closeChatBot = document.querySelector('.close-btn');
let userMessage = null;
const API_KEY = "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";

const createChatLi = (message, className) => {
    //Create a chat <li> element with passed message and className
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing" ? `<p>${message}</p>`: `<span><i class="fa-solid fa-robot"></i></span><p>${message}</p>`;
    chatLi.innerHTML = chatContent;
    return chatLi;
}
const generateResponse = (chatElement) => {
  const API_URL = "https://api.openai.com/v1/chat/completions";
  const messageElement = chatElement.querySelector("incoming-text");
  // Define the properties and message for the API request
  const requestOptions = {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{role: "user", content: userMessage}],
      })
  }
  // Send POST request to API, get response and set the reponse as paragraph text
  fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
      messageElement.textContent = data.choices[0].message.content.trim();
  }).catch(() => {
      messageElement.classList.add("error");
      messageElement.textContent = "Oops! Something went wrong. Please try again.";
  }).finally(() => chatBox.scrollTo(0, chatBox.scrollHeight));
}

  const handleChat = () =>{
    userMessage = chatInput.value.trim();
    if(!userMessage)return;
    //Append the user's message to the chatbox
    chatBox.appendChild(createChatLi(userMessage,"outgoing"));

    chatInput.value = '';
    setTimeout(()=>{
        chatBox.appendChild(createChatLi("Thinking...","incoming"));
        generateResponse();
    },600)
  }
  chatBotToggler.addEventListener("click",() =>{ 
  const getProposal = document.querySelector(".get-proposal");
  showChatBot.classList.toggle("show-chatbot");
    getProposal.style.opacity = "0";
  });
  closeChatBot.addEventListener("click",() =>{ 
    const getProposal = document.querySelector(".get-proposal");
  showChatBot.classList.remove("show-chatbot");
  getProposal.style.opacity = "1";

  });
  sendChatBtn.addEventListener("click",handleChat);

//! Pop up
document.querySelectorAll('.portfolio-link').forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const imgSrc = this.querySelector('img').getAttribute('src');
    openPopup(imgSrc);
  });
});

function openPopup(imgSrc) {
  const popup = document.getElementById('portfolio-popup');
  const popupImage = document.getElementById('popup-image');

  popupImage.src = imgSrc;
  popup.style.display = 'block';
}

function closePopup() {
  const popup = document.getElementById('portfolio-popup');
  popup.style.display = 'none';
} 
//! Intro Animation
gsap.fromTo(
  ".loading-page", 
  { 
    opacity: 1 
  },
  {
    opacity:0,
    duration:0.8,
    delay: 2,
    zIndex: -1,
  }
);
gsap.fromTo(
  '.logo-name-intro',
  {
    x:50,
    opacity:0,
  },
  {
    x:0,
    opacity:1,
    duration:0.5,
    delay:0.5,
  }

);
gsap.fromTo(
  '.intro-logo',
  {
    x:50,
    opacity:0,
  },
  {
    x:0,
    opacity:1,
    duration:0.7,
    delay:0.5,
  }

);












