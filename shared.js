var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var modalNoButton = document.querySelector(".modal__action--negative");
var selectPlanButtons = document.querySelectorAll(".plan button");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");
var ctaButton = document.querySelector(".main-nav__item--cta");
var ctaButton = document.querySelector(".main-nav__item--cta");
var upScrl = document.querySelector(".upScroll");

// console.dir(backdrop.style['background-image']);

// console.dir(backdrop);
for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", function() {
    // modal.style.display = "block";
    // backdrop.style.display = "block";
    // modal.className = 'open'; // This will actually overwrite the complete class list
    modal.classList.add("open");
    backdrop.style.display = "block";
    setTimeout(function() {
      backdrop.classList.add("open");
    }, 10);
  });
}

backdrop.addEventListener("click", function() {
  // mobileNav.style.display = 'none';
  mobileNav.classList.remove("open");
  closeModal();
});

if (modalNoButton) {
  modalNoButton.addEventListener("click", closeModal);
}

function closeModal() {
  //   backdrop.style.display = "none";
  //   modal.style.display = "none";
  if (modal) {
    modal.classList.remove("open");
  }
  backdrop.classList.remove("open");
  setTimeout(function() {
    backdrop.style.display = "none";
  }, 200);
}

toggleButton.addEventListener("click", function() {
  // mobileNav.style.display = 'block';
  // backdrop.style.display = 'block';
  mobileNav.classList.add("open");
  backdrop.style.display = "block";
  setTimeout(function() {
    backdrop.classList.add("open");
  }, 10);
});

/* ctaButton.addEventListener('animationstart', (event)=>{
  console.log('Animation started',event);
});

ctaButton.addEventListener('animationend', (event)=>{
  console.log('Animation ended',event);
});

ctaButton.addEventListener('animationiteration', (event)=>{
  console.log('Animation iteration',event);
}); */


const smoothScroll = (target, duration)=>{
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null;

  const animation = (currentTime)=>{
    if(startTime ===null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if(timeElapsed < duration) requestAnimationFrame(animation);
  }

  const ease = (t, b, c, d) =>{
    t /= d / 2;
    if(t<1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b
  }

  requestAnimationFrame(animation);
}



upScrl.addEventListener('click',()=>{
  smoothScroll('.main-header',1000);
  upScrl.style.display = 'none';
})

window.addEventListener('wheel', (event)=>{
  var target = document.querySelector('.main-header');
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  console.log(startPosition);
  if(startPosition>0){
    upScrl.style.display = 'block';
  }
  else{
    upScrl.style.display = 'none';
  }
  
})
