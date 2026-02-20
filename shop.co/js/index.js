const closeBarBtn = document.querySelector('.top-bar__btn-cross');
const topBar = document.querySelector('.top-bar');

if (closeBarBtn && topBar) {
  closeBarBtn.addEventListener('click', () => {
    // Это просто скроет блок визуально до следующей перезагрузки
    topBar.style.display = 'none'; 
  });
}

// const burgerBtn = document.querySelector('.header__burger');
// const menu = document.querySelector('.header__nav');

// if (burgerBtn && menu) {
//   burgerBtn.addEventListener('click', () => {
//     // Переключаем активные классы
//     burgerBtn.classList.toggle('is-active');
//     menu.classList.toggle('is-open');

//     // Меняем атрибут aria-expanded (true/false)
//     const expanded = burgerBtn.getAttribute('aria-expanded') === 'true';
//     burgerBtn.setAttribute('aria-expanded', !expanded);

//     // Блокируем скролл страницы при открытом меню
//     document.body.classList.toggle('no-scroll');
//   });
// }

const burgerBtn = document.querySelector('.header__burger');
const menu = document.querySelector('.header__nav');

if (burgerBtn && menu) {
  // Функция для закрытия меню
  const closeMenu = () => {
    burgerBtn.classList.remove('is-active');
    menu.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
    burgerBtn.setAttribute('aria-expanded', 'false');
  };

  // Клик по кнопке (открыть/закрыть)
  burgerBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Чтобы клик не "улетал" сразу в document
    burgerBtn.classList.toggle('is-active');
    menu.classList.toggle('is-open');
    document.body.classList.toggle('no-scroll');
    
    const expanded = burgerBtn.getAttribute('aria-expanded') === 'true';
    burgerBtn.setAttribute('aria-expanded', !expanded);
  });

  // Закрытие при клике ВНЕ меню
  document.addEventListener('click', (e) => {
    const target = e.target;
    const its_menu = target === menu || menu.contains(target);
    const its_btn = target === burgerBtn || burgerBtn.contains(target);
    const menu_is_active = menu.classList.contains('is-open');

    if (!its_menu && !its_btn && menu_is_active) {
      closeMenu();
    }
  });

  // Закрытие при клике на ссылки внутри меню (якоря)
  const menuLinks = menu.querySelectorAll('.header__nav-link');
  menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

// Ждем загрузки документа
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".news__button");

  buttons.forEach((btn) => {
    btn.addEventListener("click", function () {
      // 1. Находим ближайшую секцию для этой конкретной кнопки
      const currentSection = this.closest("section") || this.closest(".news");

      // 2. Внутри этой секции находим все карточки
      const cards = currentSection.querySelectorAll(".news__clothes-item");

      cards.forEach((card) => {
        // Убираем класс скрытия (для ПК)
        card.classList.remove("is-hidden");
        // Добавляем класс принудительного показа (для мобилок)
        card.classList.add("is-visible");
      });

      // 3. Скрываем кнопку после нажатия
      this.style.display = "none";
    });
  });
});

new Swiper(".reviews__slider", {
  slidesPerView: 1,       // На маленьких экранах
  spaceBetween: 20,
  centeredSlides: true,     // Центрируем
  
  navigation: {
    nextEl: '.reviews__next',
    prevEl: '.reviews__prev',
  },


  

});


