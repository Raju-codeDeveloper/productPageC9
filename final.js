let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = () =>{
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

var swiper = new Swiper(".home-slider", {
    grabCursor:true,
    loop:true,
    centeredSlides : true,
    autoplay:{
      delay:3500,
      disableOnInteraction:false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".fresh-slider", {
    grabCursor:true,
    loop:true,
    centeredSlides : true,
    spaceBetween: 20,
    // autoplay:{
    //   delay:2500,
    //   disableOnInteraction:false,
    // },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
    },
});

let previewContainer = document.querySelector('.freshVape-preview-container');
let previewBox = previewContainer.querySelectorAll('.freshVape-preview')

document.querySelectorAll('.slide').forEach(food =>{
    food.onclick = () =>{
      previewContainer.style.display = 'flex'
      let name = food.getAttribute('data-name');
      previewBox.forEach(preview =>{
        let target = preview.getAttribute('data-target');
        if (target == name) {
            preview.classList.add('active');
        }
      });
    };
});

previewContainer.querySelector('#close-preview').onclick = () =>{
  previewContainer.style.display = 'none';
  previewBox.forEach(close => {
    close.classList.remove('active');
  })
}

// lightGallery(document.querySelector('.gallery .gallery-container'));

var swiper = new Swiper(".menu-slider",{
  grabCursor:true,
  loop:true,
  autoHeight:true,
  centeredSlides:true,
  spaceBetween: 20,
  autoplay:{
    delay:2500,
    disableOnInteraction:false,
  },
  pagination:{
    el:".swiper-pagination",
    clickable: true,
  }
})

var swiper = new Swiper(".blogs-slider",{
  grabCursor:true,
  loop:true,
  autoHeight:true,
  centeredSlides:true,
  spaceBetween: 20,
  pagination:{
    el:".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
})


