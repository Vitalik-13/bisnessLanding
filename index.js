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
    hideParagraph.forEach((paragraph, i) => {
      if (i !== index) {
        paragraph.classList.remove("active");
        nextHideParagraph[i].classList.remove("transform");
        whiteCircle[i].classList.remove("none-rotate");
      }
    });

    hideParagraph[index].classList.toggle("active");
    nextHideParagraph[index].classList.toggle("transform");
    whiteCircle[index].classList.toggle("none-rotate");
  });
});
function startSharedTimer(durationInSeconds) {
  const timerElements = document.querySelectorAll(".timer");

  let remainingTime = durationInSeconds;

  function updateTimer() {
    const hours = Math.floor(remainingTime / 3600);
    const minutes = Math.floor((remainingTime % 3600) / 60);
    const seconds = remainingTime % 60;

    timerElements.forEach((timer, index) => {
      if (index % 3 === 0) {
        timer.textContent = String(hours).padStart(2, "0");
      } else if (index % 3 === 1) {
        timer.textContent = String(minutes).padStart(2, "0");
      } else if (index % 3 === 2) {
        timer.textContent = String(seconds).padStart(2, "0");
      }
    });

    if (remainingTime > 0) {
      remainingTime--;
    } else {
      clearInterval(timerInterval);
      alert("Таймер завершився!");
    }
  }

  updateTimer();
  const timerInterval = setInterval(updateTimer, 1000);
}

startSharedTimer(25 * 3600);
