const faqWrapper = document.querySelector(".q-wrapper");
const faqHeaders = faqWrapper.querySelectorAll(".q-header");
const faqContentElements = faqWrapper.querySelectorAll(".q-content");
const faqImages = faqWrapper.querySelectorAll(".q-image");

function openCoverElement() {
 
  faqContentElements[this.dataset.faq-1].classList.toggle('max-h-0');
  
  faqContentElements[this.dataset.faq-1].classList.toggle('max-h-[500px]');
  faqImages[this.dataset.faq-1].classList.toggle('rotate-0');
  faqImages[this.dataset.faq-1].classList.toggle('rotate-180');
  
}




faqHeaders.forEach((e) =>{
    e.addEventListener("click", openCoverElement);
  });
