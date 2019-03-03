
// Форма обратной связи

var writeUs = document.querySelector(".btn-write-us");
var popup = document.querySelector(".write-us");
var close = document.querySelector(".modal-close");
if (popup) {
  var form = popup.querySelector("form");
  var username = popup.querySelector("[name=username]");
  var email = popup.querySelector("[type=email]");
  var letter = popup.querySelector("textarea");

  form.addEventListener("submit", function (evt) {
    if (!username.value || !email.value || !letter.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    }
  });

  writeUs.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("show-me");
    username.focus();
  })
}


close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("show-me");
  popup.classList.remove("modal-error");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("show-me")) {
      popup.classList.remove("show-me");
      popup.classList.remove("modal-error");
    }
  }
});



// Карта

var mapPreview = document.querySelector(".show-map");
var mapPopup = document.querySelector(".modal-map");
if (mapPopup) {
  var mapClose = mapPopup.querySelector(".modal-close");

  mapPreview.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("show-me");
  });

  mapClose.addEventListener("click", function (evt) {
    mapPopup.classList.remove("show-me");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (mapPopup.classList.contains("show-me")) {
        mapPopup.classList.remove("show-me");
        mapPopup.classList.remove("modal-error");
      }
    }
  });
};
// Слайдер сервисы

var buttonDelivery = document.querySelector(".btn-delivery");
var serviceDelivery = document.querySelector(".service-item-delivery");
var buttonWarranty = document.querySelector(".btn-warranty");
var serviceWarranty = document.querySelector(".service-item-warranty");
var buttonCredit = document.querySelector(".btn-credit");
var serviceCredit = document.querySelector(".service-item-credit");

if (buttonDelivery && buttonWarranty && buttonCredit) {
  buttonDelivery.addEventListener("click", function (evt) {
    evt.preventDefault();
    buttonDelivery.classList.add("btn-services-current");
    serviceDelivery.classList.add("service-item-current");
    buttonWarranty.classList.remove("btn-services-current")
    serviceWarranty.classList.remove("service-item-current");
    buttonCredit.classList.remove("btn-services-current");
    serviceCredit.classList.remove("service-item-current");
  });

  buttonWarranty.addEventListener("click", function (evt) {
    evt.preventDefault();
    buttonWarranty.classList.add("btn-services-current");
    serviceWarranty.classList.add("service-item-current");
    buttonDelivery.classList.remove("btn-services-current");
    serviceDelivery.classList.remove("service-item-current");
    buttonCredit.classList.remove("btn-services-current");
    serviceCredit.classList.remove("service-item-current");
  })

  buttonCredit.addEventListener("click", function (evt) {
    evt.preventDefault();
    buttonCredit.classList.add("btn-services-current");
    serviceCredit.classList.add("service-item-current");
    buttonDelivery.classList.remove("btn-services-current");
    serviceDelivery.classList.remove("service-item-current");
    buttonWarranty.classList.remove("btn-services-current")
    serviceWarranty.classList.remove("service-item-current");
  });
};

// Корзина

var buyButtons = document.querySelectorAll(".btn-buy");
var cartPopup = document.querySelector(".modal-cart");
var cartClose = document.querySelector(".modal-close");

if (buyButtons) {
  buyButtons.forEach(function (item) {

    item.addEventListener("click", function (evt) {
      evt.preventDefault();
      cartPopup.classList.add("cart-show-me");
    });

    cartClose.addEventListener("click", function (evt) {
      cartPopup.classList.remove("cart-show-me");
    });
  });
};
