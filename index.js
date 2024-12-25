let swiper = new Swiper(".mySwiper", {
  loop: true, // Увімкнути безкінечний режим
  slidesPerView: 1, // Показувати 1 слайд
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
