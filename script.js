const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});



// review

const custTrack = document.querySelector('.cust-track');
const custSlides = [...document.querySelectorAll('.cust-slide')];
const custDotsWrap = document.querySelector('.cust-dots');

// Create 3 dots manually
custDotsWrap.innerHTML = `<span class="active"></span><span></span><span></span>`;
const custDots = [...custDotsWrap.children];

let i = 0;
function showCustSlide(n){
  i = (n + custSlides.length) % custSlides.length;
  custTrack.style.transform = `translateX(-${i*100}%)`;
  custDots.forEach((d, k) => d.classList.toggle('active', k===i));
}

// dot click
custDots.forEach((d, k) => d.addEventListener('click', () => showCustSlide(k)));

// auto slide
setInterval(() => showCustSlide(i+1), 5000);

showCustSlide(0);




