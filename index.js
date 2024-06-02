$(document).ready(function () {
  $("#contactUsBtn").click(function () {
    $("#formOverlay").fadeIn();
  });

  $("#closeBtn").click(function () {
    $("#formOverlay").fadeOut();
  });

  $("#formOverlay").click(function (e) {
    if (e.target === this) {
      $(this).fadeOut();
    }
  });
});
const form = document.getElementById("form");
form.addEventListener("submit", formSubmit);

function formSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);

  fetch("https://getform.io/f/zbzkjwxa", {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
}
function showImage(imageNumber) {
  var imageContainer = document.getElementById("imageContainer");
  var image = document.getElementById("image" + imageNumber);
  var text = document.getElementById("text" + imageNumber);
  if (image) {
    // Hide all images
    var images = imageContainer.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
      images[i].style.display = "none";
    }
    // Show selected image
    image.style.display = "block";

    // Reset background color for all list items
    var items = document.querySelectorAll(".list-group-item");
    items.forEach(function (item) {
      item.style.backgroundColor = "#f1f1f1";
      item.style.color = "black";
    });

    // Change background color of selected item
    text.style.backgroundColor = "#ff3147";
    text.style.color = "white";
  }
}
