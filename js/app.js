
//jQuery is required to run this code
$( document ).ready(function() {
    //Custom methods of theme
    main_nav_items_click();
    menu_bar_fixed();
    request_access_portfolio();
    slick_gallery_technologies();
    show_menu_resize();
    validate_contact_form();
    submit_contact_form_ajax();
    validate_code_portfolio();
    video_in_header();
    wow_init();
    
    //Method scroll top events after load all the rest
    scroll_top_event();
});

function validate_contact_form() {

    $("#contact_form").validate({
        rules: {
            _name: {
                required: true,
            },
            _replyto: {
                required: true,
                email: true,
            },
            _message: {
                required: true,
            },
            "hiddenRecaptcha": {
                required: function() {
                    if(grecaptcha.getResponse() == '') {
                    var spanError = '<div class="recaptcha-error-message">Please verify that you are not a robot.</div>';

                    if($(".recaptcha-error-message").length == 0){
                        //Add error to recaptcha
                        $(".g-recaptcha > div").addClass("recaptcha-error");
                        $(".g-recaptcha > div").append(spanError);
                    }           

                        return true;
                    } else {

                        //Remove border and span
                        if($(".recaptcha-error-message").length > 0){
                            //Add error to recaptcha
                            $(".g-recaptcha > div").removeClass("recaptcha-error");
                            $(".g-recaptcha > div .recaptcha-error-message").remove();
                        }

                        return false;
                    }
                }
            }
        },
        messages: {
            _name: "Por favor ingresa tu nombre",
            _replyto: {
                required: "Por favor ingresa un e-mail",
                email: "Ingresa una dirección de correo válida",
            },
            _message: "Por favor ingresa tu mensaje.",
        }       
    });
}
function apply_carousel_info(){
    $(".owl-carousel").each(function(){
        var owl = $(this);
        var items = 4;
        var itemsDesktopSmall = 3;
        var itemsTablet = 2;

        if($(this).attr("id")== "owl-mangos" || $(this).attr("id")== "owl-arena" || $(this).attr("id")== "owl-handsonconnect" || $(this).attr("id")== "owl-live"){
            items = 2;
            itemsDesktopSmall = 2;
            itemsTablet = 1;
        }

        owl.owlCarousel({
          items : items, //10 items above 1000px browser width
          itemsDesktop : [1000,items], //5 items between 1000px and 901px
          itemsDesktopSmall : [900, itemsDesktopSmall], // betweem 900px and 601px
          itemsTablet: [800,itemsTablet], //2 items between 600 and 0
          itemsMobile : [500, 1] // itemsMobile disabled - inherit from itemsTablet option
      });
    });
 
  
 
  // Custom Navigation Events
  $(".next").click(function(){
    var carouselContainer = $(this).parent().parent();
    var owl = carouselContainer.find(".owl-carousel").first();
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    var carouselContainer = $(this).parent().parent();
    var owl = carouselContainer.find(".owl-carousel").first();
    owl.trigger('owl.prev');
  })
}
function main_nav_items_click(){
    $(".main-nav li a").click(function(event){
        if($("body").width() < 1009){
            $(".main-nav").hide();
            event.stopPropagation();

            return false;
        }
    });
}

function menu_bar_fixed(){
    $('#test').scrollToFixed();
    $('.res-nav_click').click(function(event){
        $('.main-nav').slideToggle();
        event.stopPropagation();

        return false; 
    });
}

function request_access_portfolio(){
    //Event to request access
    $(document).on('click', '.access-portfolio.request', function(){
        var contactLink = "#contact";
        var messageRequest = "Hola, por favor necesito acceso al portafolio de proyectos..."

        //Move to contact section
        $('html, body').stop().animate({
            scrollTop: $(contactLink).offset().top - 80
        }, 800,'easeInOutExpo');
        event.preventDefault();

        //Populate form with info to request access
        $('#contact textarea.text-area').val(messageRequest);
    });

    $(document).on('click', '.access-portfolio.code', function(){
        $('.code-portfolio-content').removeClass('is-hidden', 1000);

        return false;
    });
}

function scroll_top_event(){
    $(window).load(function(){
        $('.main-nav li a, a.scroll-top-event').bind('click',function(event){
            var $anchor = $(this);
            var addtop = 0;
            if($anchor.attr('href') == "#technologies"){
                addtop = 30;
            }
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 80 - addtop
            }, 800,'easeInOutExpo');
            event.preventDefault();
        });
    });
}

function submit_contact_form_ajax(){
    var contactForm = $('#contact_form');

    $("#contact_form").attr('action', '//formspree.io/' + 'contacto' + '@' + 'sancrisoft' + '.' + 'com');
    
        contactForm.submit(function(e) {
            e.preventDefault();
            if($("#contact_form").valid()){
                $.ajax({
                    url: "https://formspree.io/contacto@sancrisoft.com", 
                    method: 'POST',
                    data: $(this).serialize(),
                    dataType: 'json',
                    beforeSend: function() {
                        $('#contact_form .wrapper_button img').css("display", "inline-block");
                        $('#contact_form .wrapper_button input.input-btn').addClass("disabled");
                        $('#contact_form .wrapper_button input.input-btn').attr("disabled", "disabled");
                    },
                    success: function(data) {
                        //Reset form
                        contactForm[0].reset();

                        $('#contact_form .wrapper_button img').css("display", "none");
                        $('#contact_form .wrapper_button input.input-btn').removeAttr("disabled");
                        $('#contact_form .wrapper_button input.input-btn').removeClass("disabled");

                        swal("¡Gracias!", "¡Hemos recibido tu mensaje y nos comunicaremos contigo tan pronto como sea posible!", "success");  
                    },
                    error: function(err) {
                        $('#contact_form .wrapper_button img').css("display", "none");
                        $('#contact_form .wrapper_button input.input-btn').removeAttr("disabled");
                        $('#contact_form .wrapper_button input.input-btn').removeClass("disabled");

                        swal("¡Algo ocurrió!", "¡Algo occurrió enviando tu mensaje, por favor intenta otra vez!", "error");
                    }
                });
            }
            return false;
        });    
    
    
}

function slick_gallery_technologies(){
    var drag = !($(window.top).width() > 1024);
    var countItems = 5;
    var recreateGallery = true;

    //Initialize the gallery
    if($(window.top).width() > 640 && $(window.top).width() < 1023){
        countItems = 3;
        recreateGallery = true;
    }
    else if($(window.top).width() <= 640){
        countItems = 1;
        recreateGallery = true;
    }

    if($('.c-logo-part').length > 0 && recreateGallery === true){
        $('.c-logo-part').slick({
            infinite: true,
            slidesToShow: countItems,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            cssEase: 'linear'
        });
    }

    //Event resize
    $(window).resize(function(){
        countItems = 5;
        recreateGallery = false;

        //Initialize the gallery
        if($(window.top).width() >= 1023 && $("#items-technologies").val() != "5"){
            countItems = 5;
            $("#items-technologies").val("5");
            recreateGallery = true;
        }
        else if($(window.top).width() > 640 && $(window.top).width() < 1023 && $("#items-technologies").val() != "3"){
            countItems = 3;
            $("#items-technologies").val("3");
            recreateGallery = true;
        }
        else if($(window.top).width() <= 640 && $("#items-technologies").val() != "1"){
            countItems = 1;
            $("#items-technologies").val("1");
            recreateGallery = true;
        }

        if($('.c-logo-part').length > 0 && recreateGallery === true){
            $('.c-logo-part').slick('unslick');
            $('.c-logo-part').slick({
                infinite: true,
                slidesToShow: countItems,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                cssEase: 'linear'
            });
        }
    });
}

function smart_resize(){
    var $container = $('.portfolioContainer'),
      $body = $('body'),
      colW = 375,
      columns = null;

    $container.isotope({
        // disable window resizing
        resizable: true,
        masonry: {
            columnWidth: colW
        }
    });
  
    $(window).smartresize(function(){
        // check if columns has changed
        var currentColumns = Math.floor( ( $body.width() -30 ) / colW );
        if ( currentColumns !== columns ) {
            // set new column count
            columns = currentColumns;
            // apply width to container manually, then trigger relayout
            $container.width( columns * colW )
            .isotope('reLayout');
        }
    }).smartresize(); // trigger resize to set container width

    $('.portfolioFilter a').click(function(){
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            
            filter: selector,
        });
        return false;
    });
}

function show_menu_resize(){
    $(window ).resize(function() {
            var initialize = $('input[name="nav-initialize"]').val();

            console.log(initialize);

            if($("body").width() > 1009){
                if(initialize === false){
                    $('input[name="nav-initialize"]').val("true");
                    $(".main-nav").show();
                }
            }else{
                if(initialize === false){
                    $('input[name="nav-initialize"]').val("true");
                    $(".main-nav").hide();
                }
            }
    });
}

function validate_code_portfolio(){
    var divPortfolio = '<div class="portfolioContainer wow fadeInUp delay-04s">'+
        '<div class=" Portfolio-box printdesign">'+
            '<a class="portfolio-item" data-toggle="modal" data-target=".modal-lives" href="#">'+
                '<img src="img/lives/home-app.jpg" alt="I Save Lives"></a><h3>I Save Lives</h3>'+
                '<p>Aplicación Móvil para iOS y Android</p></div>'+
        '<div class="Portfolio-box webdesign">'+
            '<a class="portfolio-item" data-toggle="modal" data-target=".modal-viajanet" href="#"><img src="img/viajanet/home.png"  alt="Viajanet Hotels App"></a><h3>Viajanet Hotels App</h3>'+
            '<p>Aplicación Móvil para iOS y Android</p></div>'+
        '<div class=" Portfolio-box branding">'+
            '<a href="#"><img src="img/tribe/img1.png" alt="Tribe App" data-toggle="modal" data-target=".modal-tribe"></a><h3>Tribe App</h3>'+
            '<p>Aplicación Móvil para iOS y Android</p></div>'+
        '<div class=" Portfolio-box photography" >'+
            '<a href="#"><img src="img/handsonconnect/img1.png" alt="Hands on Connect - Public Site" data-toggle="modal" data-target=".modal-handsonconnect"></a><h3>Hands on Connect - Public Site</h3>'+
            '<p>Sistema Web</p></div>'+
        '<div class=" Portfolio-box branding">'+
            '<a href="#"  data-toggle="modal" data-target=".modal-arena" ><img src="img/arena/ipad-home.jpg" alt=""></a><h3>Arena Bursatil</h3>'+
            '<p>Sistema Web</p></div>'+
        '<div class=" Portfolio-box photography">'+
            '<a href="#" data-toggle="modal" data-target=".modal-mangos" >'+
            '<img src="img/mangos/home-miami.jpg" alt=""></a><h3>Mangos Reservation’s System</h3><p>Sistema Web</p>'+
        '</div>'+
    '</div>';

    $(document).on('click', '.access-portfolio.validate', validate_code_portfolio_function);
    $('input[name="code_portfolio"]').keyup(function(e){
        if(e.keyCode == 13)
        {
            validate_code_portfolio_function();
        }
    });

    //Validate if the user is already valid
    if(localStorage.getItem("portfolioValid")){
        if(localStorage.getItem("portfolioValid") === "isValid"){
            var hrefSite = window.location.origin + window.location.pathname;

            //Portfolio valid!, hide buttons to request portfolio and open portfolio
            if($('.portfolioContainer').length === 0){
               $('#Portfolio').append(divPortfolio);
                smart_resize();

                //Get info of modals
                $.ajax({
                    url: hrefSite + '/js/portfolio-content/content', 
                    method: 'GET',
                    success: function(data) {
                        var key = CryptoJS.enc.Base64.parse("#base64Key#");
                        var iv  = CryptoJS.enc.Base64.parse("#base64IV#");
                        var dataDecrypted = CryptoJS.AES.decrypt(data, key, {iv: iv});

                        if($('.modal').length === 0){
                            $('body').append(dataDecrypted.toString(CryptoJS.enc.Utf8));
                            apply_carousel_info();
                        }
                    }
                });
            }

            $('.request-access').hide();
        }
    }
}

function validate_code_portfolio_function(){
    var codeValidation = "400ce31e08fc6759c8db912258065cf8fbde41398b27413aeab9f8fcf9c6de04";
    var divPortfolio = '<div class="portfolioContainer wow fadeInUp delay-04s">'+
        '<div class=" Portfolio-box printdesign">'+
            '<a class="portfolio-item" data-toggle="modal" data-target=".modal-lives" href="#">'+
                '<img src="img/lives/home-app.jpg" alt="I Save Lives"></a><h3>I Save Lives</h3>'+
                '<p>Aplicación Móvil para iOS y Android</p></div>'+
        '<div class="Portfolio-box webdesign">'+
            '<a class="portfolio-item" data-toggle="modal" data-target=".modal-viajanet" href="#"><img src="img/viajanet/home.png"  alt="Viajanet Hotels App"></a><h3>Viajanet Hotels App</h3>'+
            '<p>Aplicación Móvil para iOS y Android</p></div>'+
        '<div class=" Portfolio-box branding">'+
            '<a href="#"><img src="img/tribe/img1.png" alt="Tribe App" data-toggle="modal" data-target=".modal-tribe"></a><h3>Tribe App</h3>'+
            '<p>Aplicación Móvil para iOS y Android</p></div>'+
        '<div class=" Portfolio-box photography" >'+
            '<a href="#"><img src="img/handsonconnect/img1.png" alt="Hands on Connect - Public Site" data-toggle="modal" data-target=".modal-handsonconnect"></a><h3>Hands on Connect - Public Site</h3>'+
            '<p>Sistema Web</p></div>'+
        '<div class=" Portfolio-box branding">'+
            '<a href="#"  data-toggle="modal" data-target=".modal-arena" ><img src="img/arena/ipad-home.jpg" alt=""></a><h3>Arena Bursatil</h3>'+
            '<p>Sistema Web</p></div>'+
        '<div class=" Portfolio-box photography">'+
            '<a href="#" data-toggle="modal" data-target=".modal-mangos" >'+
            '<img src="img/mangos/home-miami.jpg" alt=""></a><h3>Mangos Reservation’s System</h3><p>Sistema Web</p>'+
        '</div>'+
    '</div>';
    
    var valueInput = $('input[name="code_portfolio"]').val();
    var encrypted = CryptoJS.SHA256(valueInput).toString();
    var hrefSite = window.location.origin + window.location.pathname;
    
    if(codeValidation === encrypted){
        if($('.portfolioContainer').length === 0){
            $('#Portfolio').append(divPortfolio);
            smart_resize();

            //Save in localStorage
            localStorage.setItem("portfolioValid", "isValid");

            //Get info of modals
            $.ajax({
                url: hrefSite + '/js/portfolio-content/content', 
                method: 'GET',
                success: function(data) {
                    var key = CryptoJS.enc.Base64.parse("#base64Key#");
                    var iv  = CryptoJS.enc.Base64.parse("#base64IV#");
                    var dataDecrypted = CryptoJS.AES.decrypt(data, key, {iv: iv});

                    if($('.modal').length === 0){
                        $('body').append(dataDecrypted.toString(CryptoJS.enc.Utf8));
                        apply_carousel_info();
                    }
                }
            });
        }
    }
    else{
        swal({
                title: 'Oops...',
                text: "El código que ingresaste no es válido. Contáctanos para obtener uno válido.",
                confirmButtonColor: "#f48600",
            });
    }

    return false;
}

function video_in_header(){
    if($('.video-container').length > 0){
        if($(window.top).width() <= 640){
            $('video').addClass('hidden');
            $('.poster').removeClass('hidden');
        }
        else{
            $('video').removeClass('hidden');
            $('.poster').addClass('hidden');
        }
    }

    //Event resize
    $(window).resize(function(){
        if($(window.top).width() <= 640){
            $('video').addClass('hidden');
            $('.poster').removeClass('hidden');
        }
        else{
            $('video').removeClass('hidden');
            $('.poster').addClass('hidden');
        }
    });
}

function wow_init(){
    wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100
      }
    );
    wow.init();
}

