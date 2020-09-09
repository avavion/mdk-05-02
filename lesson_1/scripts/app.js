// Drag And Drop функция для карточек

const dragAndDrop = () => {
  // Получаем карточку и все ячейки
  const card = document.querySelector(".js-card"),
    cells = document.querySelectorAll(".js-cell");

  // Функция начала перемещения карточки
  const dragStart = function () {
    setTimeout(() => {
      this.classList.add("hide");
    }, 0);
  };

  // Функция при отпускание карточки
  const dragEnd = function () {
    this.classList.remove("hide");
  };

  // Просто перемещение по ячейки
  const dragOver = function (event) {
    event.preventDefault();
  };

  // Функция захода в границы ячейки
  const dragEnter = function (event) {
    event.preventDefault();
    this.classList.add("hovered");
  };

  // Функция покидания границ ячейки
  const dragLeave = function () {
    this.classList.remove("hovered");
  };

  // Сброс карточки в ячейку
  const dragDrop = function () {
    this.append(card);
    this.classList.remove("hovered");
  };

  // Взаимодействие с карточкой
  card.addEventListener("dragstart", dragStart);
  card.addEventListener("dragend", dragEnd);

  // Взаимодействие с каждой из ячеек
  cells.forEach((cell) => {
    cell.addEventListener("dragover", dragOver);
    cell.addEventListener("dragenter", dragEnter);
    cell.addEventListener("dragleave", dragLeave);
    cell.addEventListener("drop", dragDrop);
  });
};

// Обработчик страницы, когда DOM прогрузится, то начать иницилизацию функций
window.addEventListener("DOMContentLoaded", () => {
  dragAndDrop();
});
