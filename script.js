//DOM loaded event and variables
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("recommendation-form");
    const list = document.getElementById("recommendation-list");

    //click event on form
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("recommender-name").value.trim();
      const text = document.getElementById("recommendation-text").value.trim();

      //empty comment alert
      if (name === "" || text === "") {
        alert("Please write something first");
        return;
      }

      function showAlert() {
        alert("Thank you for leaving a recommendation!");
    }

      //create comment
      const recommendation = document.createElement("div");
      recommendation.classList.add("recommendation");
      recommendation.innerHTML = `
        <p id="userComment" ><i class="fa-solid fa-user"></i><strong>${name}</strong></p>
        <p>"${text}"</p>
        `;  

      list.appendChild(recommendation);

      //sended message alert
      showAlert();

      //clean form
      form.reset();
    });

  });


