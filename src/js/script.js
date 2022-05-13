$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/prevArrow.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/nextArrow.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  dots: true,
                  arrows: false,
                  
                } 
            
            }
                
        ]
      });

      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass
          ('catalog__content_active').eq($(this).index()).addClass
          ('catalog__content_active');
      });


     function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                 e.preventDefault();
                 $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                 $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
     };

     toggleSlide('.catalog-item__link')
     toggleSlide('.catalog-item__back')

    //  modal

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn();
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #order, #thanks').fadeOut('slow')
    });

    $('.button_mini').each(function(i){
        $(this).on('click', function(){
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text())
            $('.overlay, #order').fadeIn('slow');
        });
    });

    function validateForms(form){

        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                  },
                phone:"recuired",
                email:{
                    recuired: true,
                    email: true
                }
                },
                messages: {
                    name: {
                        required: " Wpisz tu swoje imie",
                        minlength: jQuery.validator.format("co najmniej {0} litery!")
                      },
                  
                    email: {
                      required: "We need your email address to contact you",
                      email: "Your email address must be in the format of name@domain.com"
                    
                }
            }
        });
    };

    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');
    $('input[name=phone]').mask("+7 (999) 999-99-99");
});