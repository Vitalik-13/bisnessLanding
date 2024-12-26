let swiper = new Swiper(".mySwiper", {
  loop: true, // Увімкнути безкінечний режим
  slidesPerView: 1, // Показувати 1 слайд
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let whiteCircle = document.querySelectorAll(".white-circle");
let hideParagraph = document.querySelectorAll(".nine-section-item");
let nextHideParagraph = document.querySelectorAll(".hide-paragraph");

whiteCircle.forEach((item, index) => {
  item.addEventListener("click", () => {
    // Закрити всі параграфи, крім того, на який натиснули
    hideParagraph.forEach((paragraph, i) => {
      if (i !== index) {
        paragraph.classList.remove("active");
        nextHideParagraph[i].classList.remove("transform");
        whiteCircle[i].classList.remove("none-rotate");
      }
    });

    // Тогл для натиснутого параграфа
    hideParagraph[index].classList.toggle("active");
    nextHideParagraph[index].classList.toggle("transform");
    whiteCircle[index].classList.toggle("none-rotate");
  });
});
