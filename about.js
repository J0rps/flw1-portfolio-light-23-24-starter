const preview = document.querySelector('.preview');
const whole = document.querySelectorAll(".gallery img");
const original = document.querySelector(".full-img");
const caption = document.querySelector(".caption");
// array of images, check if clicked, if clicked it selects the class preview in html and the class open in css.
whole.forEach((whole) => {
  whole.addEventListener("click", () => {
    preview.classList.add("open");
    original.classList.add("open");
    // image selector/text, no hard code :)))
    const originalSrc = whole.getAttribute("data-original");
    original.src = `${originalSrc}`;
    const altText = whole.alt;
    caption.textContet = altText;
  })
});
//Checks the img for preview (which is the dark area around img) if so it removes class open and goes back to orginal state.
preview.addEventListener('click', (e)=> {
 if(e.target.classList.contains("preview")){
   preview.classList.remove("open");
   original.classList.remove("open");
 }
});