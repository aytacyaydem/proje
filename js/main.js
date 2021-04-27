var exampleProduct = {}

$(function(){
    const swiper = new Swiper('#carousel .swiper-container', { 
    slidesPerView:5.3,
      spaceBetween: 10,
      loop:true,
      initialSlide:2,
      centeredSlides: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
    });

  

    $.getJSON("../data/bestSeller.json", function(data){
        let row1 = $(".featured-products-body:eq(0)")
        let row2 = $(".featured-products-body:eq(1)")
        
        data.forEach((element,index) => {
            console.log(element);
           let x = `<div class="col m-0 p-0 d-flex">
            <div class="product-widget d-flex flex-column justify-content-center text-center" data-id="${element.attr1}">
                <div class="image-container">
                    <img src="${element.img}" height="150" width="50%" alt ="Product Image" />
                </div>
                <div class="rating-container d-flex align-items-center justify-content-center">
                    <span class="star-icon">
                        <i class="bi bi-star-fill"></i>
                    </span>
                    <span class="star-text">${element.rating}</span>
                    <span class="comment-count">(${element.comment} yorum)</span>
                </div>
                <div class="product-code-container mt-3">
                    <h6>${element.code}</h6>
                </div>
                <div class="product-title-container mt-1">
                    <h5 >${element.title}</h5>
                </div>
                <div class="price-container mt-3">
                    <h2>₺ ${element.price}</h2>
                </div>
                <div class="count-warning mt-3">
                    <h6>YALNIZCA 2 ÜRÜN KALDI</h6>
                </div>
                <div class="ship-today-container mt-3 col-md-12 d-flex justify-content-center">
                    <h6>BUGÜN KARGODA</h6>
                </div>
                <div class="cart-container mt-3 col-md-12 d-none justify-content-center">
                <button type="button" class="btn btn-outline-primary add-cart-btn">Sepete Ekle</button>
                </div>
                
            </div>
        </div>`
        let y= `<div class="swiper-slide">
        ${x}
        </div>`
        if(index < 5) {
            row1.append(x)
        }else {
            row2.append(x);
        }
        $("#best-sellers .swiper-wrapper").append(y);
        const swiper2 = new Swiper('#best-sellers .swiper-container', { 
            slidesPerView:"5",
             spaceBetween: 0,
               navigation: {
                   nextEl: '.swiper-button-next-uniq',
                   prevEl: '.swiper-button-prev-uniq',
                 },
           });
        $(`.product-widget:eq(${index})`).on("mouseenter",function(){
           $(this).find(":nth-child(7)").removeClass("d-flex").addClass("d-none");
           $(this).find(":nth-child(8)").removeClass("d-none")
           $(this).css({
               "transform":"scaleY(1.1)",
               "margin":"1rem .2rem"
           })
        })

        $(`.product-widget:eq(${index})`).on("mouseleave",function(){
            $(this).find(":nth-child(7)").removeClass("d-none").addClass("d-flex");
            $(this).find(":nth-child(8)").addClass("d-none")
            $(this).css({
                "transform":"scaleX(1) ",
                "margin":"0"
                
            })
         })


        });
        
    }).fail(function(e){
        console.log("An error has occurred.",e);
    });
})



//#region Search Input Tıklandığında Iconun Görünür Olup Olmaması & Metin Renkleri
$("#headerSearchInput").on("focus",function() {
    $(".bi-search").hide();
    $(this).css({
        "color":"black"
    })
})
$("#headerSearchInput").on("focusout",function() {
    if(!$(this).val()){
    $(".bi-search").show();
    }else {
        $(this).css({
            "color":"white"
        })
    }
})
//#endregion Search Input Tıklandığında Iconun Görünür Olup Olmaması Olayını Ayarlar