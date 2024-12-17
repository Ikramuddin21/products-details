const colorItems = document.querySelectorAll(".brand-color");
const openModalButton = document.getElementById("openModalButton");
const closeModalButton = document.getElementById("closeModalButton");
const modal = document.getElementById("myModal");

colorItems.forEach((item) => {
  item.addEventListener("click", () => {
    console.log(item);
    // Remove "selected" style from all items
    colorItems.forEach((el) => el.classList.remove("border"));

    // Add "selected" style to the clicked item
    item.classList.add("ring-2", "ring-offset-2", "ring-offset-white");
  });
});

// open modal
openModalButton.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

// close modal
closeModalButton.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// close modal when clicking outside the modal content
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.add("hidden");
  }
});
