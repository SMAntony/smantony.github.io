function setThemePreference() {
    var d = new Date();
    /*
    * The getHours() method returns the hour (from 0 to 23) of the specified date and time.
    * Day = 0 - 11
    * Night = 12 - 23
    */
    var currentHour = d.getHours();
  
    /*
    * The dark theme load early morning and night
    * The light theme load morning and evening
    */
  
    if (!(currentHour >= 19 || currentHour <= 6)) {
    //   document.body.setAttribute("data-theme", "light-mode") 
      document.body.classList.toggle("light-mode") 
    }
  }
  
  window.onload = setThemePreference;

(function () {
  // Cycle between button and move the class name 'active-btn'
  [...document.querySelectorAll(".control")].forEach(button => {
      button.addEventListener("click", function() {
          document.querySelector(".active-btn").classList.remove("active-btn");
          this.classList.add("active-btn");
          document.querySelector(".active").classList.remove("active");
          document.getElementById(button.dataset.id).classList.add("active");
      })
  });
  document.querySelector(".theme-btn").addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
  })
})();

// function setZoom() {
//     if (ddocument.body.style.zoom == undefined) {
//         document.body.style.zoom = "70%"
//     }
//     // if (window.matchMedia('(min-width: 780px) and (max-width: 1280px)').matches) {
//     //   document.body.style.zoom = "70%";
//     // } else {
//     //   document.body.style.zoom = "100%";
//     // }
//   }
 
// // Call the function to set the zoom on page load
// setZoom();

// // Handle the window resize event
// window.addEventListener('resize', setZoom);  