const elCart = document.querySelector('.cart');
const elCartDropdown = document.querySelector('.cart-dropdown');

const elHeroImgsLink = document.querySelector('.hero-imgs__link');
const elsHeroImgsImg = document.querySelectorAll('.hero-imgs__img');

let beforeSelectedImg = null;

elCart.addEventListener('click',  function() {

  elCartDropdown.classList.toggle('cart-dropdown--active');

});


/* elHeroImgsLink.addEventListener('click', function(evt) {
  evt.preventDefault();

  elHeroImgsImg.classList.add('hero-imgs__img--active')
}); */


elsHeroImgsImg.forEach(elHeroImgsImg => {
  elHeroImgsImg.addEventListener('click', function() {
    // Agar oldingi tanlangan rasm bo'lsa, uning uslubini olib tashlaymiz
    if (beforeSelectedImg) {
      beforeSelectedImg.classList.remove('hero-imgs__img--active');
    }

    // Hozirgi bosilgan rasmga 'selected' klassini qo'shamiz
    this.classList.add('hero-imgs__img--active');

    // Hozirgi tanlangan rasmni eslab qolamiz
    beforeSelectedImg = this;

  });
});