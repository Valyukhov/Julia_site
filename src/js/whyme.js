const whymeWrapper = document.querySelector(".q-wrapper");
const whymeHeaders = whymeWrapper.querySelectorAll(".q-header");
const whymeContentElements = whymeWrapper.querySelectorAll(".q-content");
const whymeImages = whymeWrapper.querySelectorAll(".q-image");

function openCoverElement() {
 
  whymeContentElements[this.dataset.whyme-1].classList.toggle('max-h-0');
  
  whymeContentElements[this.dataset.whyme-1].classList.toggle('max-h-[500px]');
  whymeImages[this.dataset.whyme-1].classList.toggle('rotate-0');
  whymeImages[this.dataset.whyme-1].classList.toggle('rotate-180');
  
}




whymeHeaders.forEach((e) =>{
    e.addEventListener("click", openCoverElement);
  });
