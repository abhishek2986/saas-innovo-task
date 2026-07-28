const input = document.getElementById("urllink");
const addbutton = document.getElementById("addbutton");
const gallery = document.getElementById("gallery");

// Store all image URLs
const images = [];

// Add Image button click event
addbutton.onclick = function () {
  let url = input.value;
  images.push(url);
  console.log(images);
  Displayimages();
};

// Function to display all images in the gallery
function Displayimages() {
  // Clear the gallery before displaying updated images
  gallery.innerHTML = "";

  // Loop through all stored image URLs
  images.forEach((element, index) => {
    // Create a container for each image
    const span = document.createElement("span");

    // Create View button
    const view_button = document.createElement("button");
    view_button.textContent = "View";

    // Create Delete button
    const delete_button = document.createElement("button");
    delete_button.textContent = "Delete";

    // Add CSS class to the image container
    span.classList.add("image");

    // ---------------- View Button ----------------
    view_button.onclick = function () {
      window.open(element, "_blank");
    };

    // ---------------- Delete Button ----------------

    delete_button.onclick = function () {
      images.splice(index, 1);
      Displayimages();
    };

    // Display the image
    span.innerHTML = `<img src="${element}"  id="${index}" height="200px ; width="100%"; object-fit=contain ;/>`;
    span.append(view_button);
    span.append(delete_button);

    // Add the image container to the gallery
    gallery.append(span);

    // Clear the input field
    input.value = "";
  });
}

// Display images when the page loads
Displayimages();
