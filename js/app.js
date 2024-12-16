const colorItems = document.querySelectorAll(".brand-color");

colorItems.forEach((item) => {
  item.addEventListener("click", () => {
    console.log(item);
    // Remove "selected" style from all items
    colorItems.forEach((el) => el.classList.remove("border"));

    // Add "selected" style to the clicked item
    item.classList.add("ring-2", "ring-offset-2", "ring-offset-white");
  });
});
