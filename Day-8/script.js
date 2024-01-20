// script for navigation bar toggle and search bar toggle start
let navbar = document.querySelector("nav");
let searchbar = document.querySelector(".search-input");

navbar.style.display="none";
searchbar.style.display="none";

function openNavbar(){
  if(navbar.style.display === "none"){
    navbar.style.display="flex";
  } else {
    navbar.style.display="none";
  }
}

function openSearchbar(){
  if(searchbar.style.display === "none"){
    searchbar.style.display="initial";
  } else {
    searchbar.style.display="none";
  }
}
// script for navigation bar toggle and search bar toggle end

// script for showing user action container start
let foodApp = document.getElementById("food-app");
let restaurants = document.querySelectorAll(".restaurants");
let userActionContainer = document.querySelectorAll(".user-action-container");

let openIndex = -1;

// Add a click event listener to the main container
foodApp.addEventListener('click', function (event) {
  var clickedRestaurant = event.target.closest('.restaurants');

  if (clickedRestaurant) {
    var clickedIndex = Array.from(restaurants).indexOf(clickedRestaurant);

    if (clickedIndex !== -1) {
      if (clickedIndex === openIndex) {
        closeRestaurant(clickedIndex);
      } else {
        if (openIndex !== -1) {
          closeRestaurant(openIndex);
        }

        openRestaurant(clickedIndex);
      }
    }
  }
});
function closeRestaurant(index) {
  restaurants[index].style.position = "";
  userActionContainer[index].style.display = "none";
  openIndex = -1; 

}
function openRestaurant(index) {
  restaurants[index].style.position = "absolute";
  userActionContainer[index].style.display = "flex";
  openIndex = index;
}

// script for showing user action container end
