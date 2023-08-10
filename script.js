// An array of image objects

var images = [
  {
    imageUrl: "/images/MicrosoftTeams-image1.png",
    price: "$10",
    size: "Large",
    type: "Nature",
  },
  {
    imageUrl: "/images/MicrosoftTeams-image2.png",
    price: "$15",
    size: "Medium",
    type: "City",
  },
  {
    imageUrl: "/images/MicrosoftTeams-image3.png",
    price: "$20",
    size: "Small",
    type: "Abstract",
  },
  {
    imageUrl: "/images/MicrosoftTeams-image4.png",
    price: "$40",
    size: "Small",
    type: "Abstract",
  },
  // Add more image objects here
];

// Function to generate the HTML code for image details
function getImageDetailsHTML(image) {
  var detailsText =
    "Price: " +
    image.price +
    "<br>" +
    "Size: " +
    image.size +
    "<br>" +
    "Type: " +
    image.type;
  return detailsText;
}


function displayImages() {
  var container = document.querySelector(".image-container");

  //Check if the container element exists before proceeding
  if (!container) {
    console.error("Container element not found.");
    return;
  }

  // Loop through the images array

  for (var i = 0; i < images.length; i++) {
    var image = images[i];

    // Create a container for each image with additional information
    var imageCard = document.createElement("div");
    imageCard.classList.add("image-card");
    imageCard.setAttribute("id", i);

    // Create an image element
    var imageElement = document.createElement("img");
    imageElement.src = image.imageUrl;

    // Create a new tab and display the respective image array details when clicked
    // Add click event listener to the image card
    imageCard.addEventListener("click", function () {
      var imageIndex = parseInt(this.getAttribute("id"));
      // Redirect to the product_details.html page with the selected image index as a parameter
      window.location.href = "./product_details.html?selectedImageIndex=" + imageIndex;
    });
    

    // Generate the HTML for image details and append it to the image card
    var detailsHTML = getImageDetailsHTML(image);
    var detailsElement = document.createElement("p");
    detailsElement.innerHTML = detailsHTML;
    imageCard.appendChild(detailsElement);

    // Append the image element to the container
    imageCard.appendChild(imageElement);

    // Append the image card to the container
    container.appendChild(imageCard);
  }
}

window.onload = () => {
  //write your code here

  // Call the displayImages function
  displayImages();
};
