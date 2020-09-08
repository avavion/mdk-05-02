console.log("JavaScript подключён...");

const dragAndDrop = () => {
  const card = document.querySelector(".js-card"),
    cells = document.querySelectorAll(".js-cell");

  const dragStart = function () {
    setTimeout(() => {
      this.classList.add("hide");
    }, 10);
  };

  card.addEventListener("dragstart", dragStart);
};

window.addEventListener("DOMContentLoaded", () => {
  dragAndDrop();
});
