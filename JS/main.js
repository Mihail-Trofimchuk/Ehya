$(document).ready(function () {
  // Выпадащее меню
  // мобильное меню
  var menuButton = document.querySelector('.header-menu-button');
  menuButton.addEventListener('click', function () {
    document
      .querySelector('.header-menu')
      .classList.toggle('navbar-button--visible');
  });
  var menuButton = document.querySelector('.header-menu-button');
  menuButton.addEventListener('click', function () {
    document.querySelector('.modal-close').classList.toggle('mobile-open');
  });
  //Слайдер
  var Button1 = document.querySelector('.dropbtn');
  Button1.addEventListener('click', function () {
    document.querySelector('.arrow-down-1').classList.toggle('arrow-up-1');
  });
  var Button2 = document.querySelector('.drop');
  Button2.addEventListener('click', function () {
    document.querySelector('.arrow-down-2').classList.toggle('arrow-up-2');
  });
  const swiper = new Swiper('.swiper-container', {
    // Optional parameters

    // If we need pagination
    // Navigation arrows
    navigation: {
      nextEl: '.projects__button-prev',
      prevEl: '.projects__button-next',
    },
    keyboard: true,
    slidesPerView: 3.1,
    spaceBetween: 30,
  });

  const swiperl = new Swiper('.review-swiper ', {
    // Optional parameters

    // If we need pagination

    // Navigation arrows
    navigation: {
      nextEl: '.reviews-button-next',
      prevEl: '.reviews-button-next-mobile',
    },
    loop: true,
    // And if we need scrollbar
    keyboard: true,

    slidesPerView: 'auto',

    spaceBetween: 30,
    breakpoints: {
      320: {
        slidesToShow: 1,
        spaceBetween: 30,
      },
      380: {
        slidesToShow: 1,
        spaceBetween: 30,
      },

      768: {
        slidesToShow: 1,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 'auto',
        spaceBetween: 30,
      },
    },
  });

  // Модальное окно
  var modalButton = $('[data-toggle=modal]');
  var closeModalButton = $('.modal__close');
  closeModalButton.on('click', closeModal);
  modalButton.on('click', openModal);
  function openModal() {
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    var modalBody = $('.modal-close');
    modalOverlay.addClass('modal__overlay--visible');
    modalDialog.addClass('modal__dialog--visible');
    modalBody.addClass('modal-open');
  }
  function closeModal(event) {
    event.preventDefault();
    var modalBody = $('.modal-close');
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
    modalBody.removeClass('modal-open');
  }
});

$(document).keyup(function (e) {
  if (e.keyCode == 27) {
    var modalBody = $('.modal-close');
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
    modalBody.removeClass('modal-open');
  }
});
function myFunction() {
  document.getElementById('myDropdown').classList.toggle('show');
}
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn') && !event.target.matches('.drop')) {
    var drop = document.getElementsByClassName('dropdown-content');
    var dropdowns = document.getElementsByClassName('content');
    let i;
    for (i = 0; i < drop.length && i < dropdowns.length; i++) {
      var openDropdown = drop[i];
      var Dropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
      if (Dropdown.classList.contains('sho')) {
        Dropdown.classList.remove('sho');
      }
    }
  }
};
function myFunc() {
  document.getElementById('Drop').classList.toggle('sho');
}
$(document).ready(function () {
  $('.phone').mask('+7 (000) 000-00-00');
});
$(document).mouseup(function (e) {
  var container = $('.modal__dialog--visible');
  if (container.has(e.target).length === 0) {
    var modalBody = $('.modal-close');
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
    modalBody.removeClass('modal-open');
  }
});

$(document).mouseup(function (e) {
  var container = $('.header-menu');
  if (container.has(e.target).length === 0) {
    var modalBody = $('.modal-close');
    modalBody.removeClass('modal-open');
  }
});
