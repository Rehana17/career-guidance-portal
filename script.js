// Wait for the DOM to be loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
    // Select the buttons for the career paths
    const btns = document.querySelectorAll(".btn-career");
  
    // Add event listeners to the buttons
    btns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        // Get the career path name from the data-career attribute of the button
        const career = e.target.dataset.career;
  
        // Select the articles for all career paths
        const articles = document.querySelectorAll("article");
  
        // Hide all articles except for the one corresponding to the selected career path
        articles.forEach((article) => {
          if (article.dataset.career !== career) {
            article.style.display = "none";
          } else {
            article.style.display = "block";
          }
        });
      });
    });
  });
  