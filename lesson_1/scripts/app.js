console.log("JavaScript подключён...");

const dragAndDrop = () => {
  const card = document.querySelector(".js-card"),
    cells = document.querySelectorAll(".js-cell");

  const dragStart = function () {
    setTimeout(() => {
      this.classList.add("hide");
    }, 500);
  };

  const dragEnd = function () {
    this.classList.remove("hide");
  };

  card.addEventListener("dragstart", dragStart);
  card.addEventListener("dragend", dragEnd);
};

window.addEventListener("DOMContentLoaded", () => {
  dragAndDrop();
});
