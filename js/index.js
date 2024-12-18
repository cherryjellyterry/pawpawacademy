window.addEventListener("load",function(){
    
    const swiper = new Swiper('.station_hero', {
        direction: "vertical",
        slidesPerView: 1,
        spaceBetween: 18,
        mousewheel: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        loop:true,
        speed:1000,
    });



})