import "./css/style.css"; //importing css

const displayModal = () => {
    // Get the modal
    const modal = document.getElementById("myModal");
  
    // Show the modal
    modal.style.display = "block";
  
    // Get the close button
    const closeBtn = document.querySelector(".close");
  
    // Close the modal when the close button is clicked
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    // Close the modal when the user clicks outside of it
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  };
  
  const delay = new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 60000);
  });
  
  delay.then(displayModal);
  