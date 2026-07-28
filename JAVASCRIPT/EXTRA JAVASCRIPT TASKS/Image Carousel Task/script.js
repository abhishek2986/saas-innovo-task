// const display_img=document.getElementById("display_img");
// const forward_button=document.getElementById("next");
// const previous_button=document.getElementById("previous");

// const img = {
//     images: [

//         "../HTML PRACTICE/images/photo-1471899236350-e3016bf1e69e.avif",
//         "../HTML PRACTICE/images/photo-1449824913935-59a10b8d2000.avif",
//          "../HTML PRACTICE/images/download.jpg",

//     ]
// };

// const images = img.images;
// let index = 0;
// function Showimage(){
//     const timer=setInterval(() => {
//         // const div = document.createElement("div");
//         // div.innerHTML = `<img src="${images[index]}">`;
//         // display_img.append(div);
//         display_img.innerHTML = `
//         <img src="${images[index]}"
//         style="width:100%; height:500px; object-fit: contain; border-radius:10px;">
//         `;
//         index++;

// if (index === images.length) {
//     index = 0;
// }
// }, 2000);
// forward_button.onclick=function(){
//      clearInterval(timer);

//     index++;
//     if (index === images.length) {
//     index = 0;
//     Showimage();
// }
// }
// previous_button.onclick=function(){
//      clearInterval(timer);

//     index--;
//      if (index === images.length) {
//     index = 0;
//     Showimage();
// }
// }
// }
// Showimage();

const display_img = document.getElementById("display_img");
const forward_button = document.getElementById("next");
const previous_button = document.getElementById("previous");

const images = [
  "../../../HTML and CSS/HTML Practical Tasks/images/photo-1471899236350-e3016bf1e69e.avif",
  "../../../HTML and CSS/HTML Practical Tasks/images/photo-1449824913935-59a10b8d2000.avif",
  "../../../HTML and CSS/HTML Practical Tasks/images/download.jpg",
];

// Track the currently displayed image
let index = 0;

// Function to display the current image
function showImage() {
  display_img.innerHTML = `
        <img src="${images[index]}" 
        style="width:100%; height:500px; object-fit:contain; border-radius:10px;">
    `;
}

// Display the first image when the page loads
showImage();

// Automatically change the image every 5 seconds
let timer = setInterval(() => {
  index++;

  if (index === images.length) {
    index = 0;
  }

  showImage();
}, 5000);

// Next button click event
forward_button.onclick = function () {
  clearInterval(timer);
  index++;

  // If the last image is reached, start again from the first image
  if (index === images.length) {
    index = 0;
  }

  showImage();

  // Restart the auto-slide timer
  timer = setInterval(() => {
    index++;

    if (index === images.length) {
      index = 0;
    }

    showImage();
  }, 5000);
};

// Previous button click event
previous_button.onclick = function () {
  clearInterval(timer);

  index--;

  if (index < 0) {
    index = images.length - 1;
  }

  // Update the displayed image
  showImage();

  // Restart the auto-slide timer
  timer = setInterval(() => {
    index++;

    if (index === images.length) {
      index = 0;
    }

    showImage();
  }, 5000);
};
