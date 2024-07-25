let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>
{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () =>
{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () =>
{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>
{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>
{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
    
}



var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 10,
   
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });


  var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 10,
   
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });

 // add to cart js //

  var noti = document.querySelector('.header .icons');
  var select = document.querySelector('.select');
  var a = document.getElementsByClassName('.btn');
  for(but of a)
  {
    but.addEventListener('click', (e)=>{
      var add = Number(noti.getAttribute('data-count')|| 0);
      noti.setAttribute('data-count', add + 1);
      noti.classList.add('zero');

      //copy and paste element//
      var parent = e.target.parentNode;
      var clone = parent.cloneNode(true);
      select.appendChild.innerText = "Buy-now";
      if (clone) {
        select.classList.toggle('display');
      }
      // image animation to cart //
      var image = e.target.parentNode.querySelector('img');
      var span = e.target.parentNode.querySelector('span');
      var s_image = image.cloneNode(false);
      span.appendChild(s_image);
      span.classList.add('active');
      setTimeout(()=>{
        span.removeChild(s_image);
        span.classList.remove('active');
      }, 500)
    })
  }

 // add to cart js //
