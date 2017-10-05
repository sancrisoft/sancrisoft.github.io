//Detect language browser and redirect to correct index.html
detect_browser_language();

//jQuery is required to run this code
$( document ).ready(function() {
    //Method to load language of website (Text)
    load_language_page();

    //Custom methods of theme
    menu_bar_fixed();
    request_access_portfolio();
    slick_gallery_technologies();
    show_menu_resize();
    submit_contact_form_ajax();
    validate_code_portfolio();
    validate_contact_form();
    video_in_header();
    wow_init();

    //Method scroll top events after load all the rest
    scroll_top_event();
});

function apply_carousel_info(){
    $(".owl-carousel").each(function(){
        var owl = $(this);
        var items = 4;
        var itemsDesktopSmall = 3;
        var itemsTablet = 2;

        if($(this).attr("id")== "owl-mangos" || $(this).attr("id")== "owl-arena" || $(this).attr("id")== "owl-handsonconnect" || $(this).attr("id")== "owl-live" || $(this).attr("id")== "owl-bralinmoca" || $(this).attr("id")== "owl-oneoc"){
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

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function detect_browser_language() {
    var pathname = window.location.pathname;
    var userLang = navigator.language || navigator.userLanguage;
    var force = getParameterByName('force');

    if(userLang.indexOf('es') !== -1 && pathname !== '/index-es.html' && !force) {
        window.location = './index-es.html';
    }
}

function load_language_page () {
    var language_page = $('input[name="language-page"]').val();

    if(language_page === 'ES') {
        var languages = {
            your_not_robot: 'Por favor verifica que no eres un robot.',
            please_enter_name: 'Por favor ingresa tu nombre',
            please_enter_email: 'Por favor ingresa un e-mail',
            enter_email_valid: 'Ingresa una dirección de correo válida',
            please_enter_message: 'Por favor ingresa tu mensaje.',
            please_need_access_portfolio: 'Hola, por favor enviarme un código de acceso para revisar sus proyectos.',
            thanks: '¡Gracias!',
            we_have_received_your_message: 'Hemos recibido tu mensaje y nos comunicaremos contigo a la brevedad posible.',
            something_happen: '¡Algo ocurrió!',
            something_happen_sending_message : '¡Algo occurrió enviando tu mensaje, por favor intenta otra vez!',
            app_mobile_android_ios : 'Aplicación Móvil para iOS y Android',
            web_system : 'Solución Web',
            code_invalid : 'El código que ingresaste no es válido. Contáctanos para obtener uno válido.',
            url_content_portfolio : '/js/portfolio-content/content'
        };

        window.translation = languages;
    }
    else {
        var languages = {
            your_not_robot : 'Please verify you are not a robot.',
            please_enter_name : 'Please enter your name',
            please_enter_email : 'Please enter your email',
            enter_email_valid : 'Enter a valid email',
            please_enter_message : 'Please enter your message.',
            please_need_access_portfolio : 'Hi, please send me an access code to check your portfolio.',
            thanks : 'Thank you!',
            we_have_received_your_message : 'We have received your message and will back to you shortly!',
            something_happen : 'Something happened!',
            something_happen_sending_message : 'Something happened sending your message, please try again!',
            app_mobile_android_ios : 'Mobile App for iOS and Android',
            web_system : 'Web Solution',
            code_invalid : 'The code you entered is not valid. Please contact us to get a good one.',
            url_content_portfolio : '/js/portfolio-content/content-en'
        };

        window.translation = languages;
    }
}

function menu_bar_fixed(){
    $('#test').scrollToFixed();
    $('.res-nav_click').click(function(event){
        $('.main-nav').slideToggle();
        event.stopPropagation();

        //Add class selected
        if($('.res-nav_click').hasClass('selected')){
            $('.res-nav_click').removeClass('selected');
        }
        else{
            $('.res-nav_click').addClass('selected');
        }

        return false;
    });
}

function request_access_portfolio(){
    //Event to request access
    $(document).on('click', '.access-portfolio.request', function(){
        var contactLink = "#contact";
        var messageRequest = window.translation.please_need_access_portfolio;

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
    $('body').on('click', '.main-nav li a, a.scroll-top-event', function(){
        var $anchor = $(this);
        var addtop = 0;

        if($("body").width() <= 1024){
            $(".main-nav").css('display', 'none');

            if($('.res-nav_click').hasClass('selected')){
                $('.res-nav_click').removeClass('selected');
            }
        }

        if($anchor.attr('href') == "#technologies"){
            addtop = 30;
        }

        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 80 - addtop
        }, 800,'easeInOutExpo');
    });
}

function submit_contact_form_ajax(){
    var contactForm = $('#contact_form');

    $("#contact_form").attr('action', '//formspree.io/' + 'info' + '@' + 'sancrisoft' + '.' + 'com');

        contactForm.submit(function(e) {
            e.preventDefault();
            if($("#contact_form").valid()){
                $.ajax({
                    url: "https://formspree.io/info@sancrisoft.com",
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

                        swal(window.translation.thanks, window.translation.we_have_received_your_message, "success");
                    },
                    error: function(err) {
                        $('#contact_form .wrapper_button img').css("display", "none");
                        $('#contact_form .wrapper_button input.input-btn').removeAttr("disabled");
                        $('#contact_form .wrapper_button input.input-btn').removeClass("disabled");

                        swal(window.translation.something_happen, window.translation.something_happen_sending_message, "error");
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

        if($("body").width() > 1024){
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
                                    '<p>'+ window.translation.app_mobile_android_ios +'</p></div>'+
                            '<div class="Portfolio-box webdesign">'+
                                '<a class="portfolio-item" data-toggle="modal" data-target=".modal-viajanet" href="#"><img src="img/viajanet/home.png"  alt="Viajanet Hotels App"></a><h3>Viajanet Hotels App</h3>'+
                                '<p>'+ window.translation.app_mobile_android_ios +'</p></div>'+
                            '<div class=" Portfolio-box branding">'+
                                '<a href="#"><img src="img/tribe/img1.png" alt="Tribe App" data-toggle="modal" data-target=".modal-tribe"></a><h3>Tribe App</h3>'+
                                '<p>'+ window.translation.app_mobile_android_ios +'</p></div>'+
                            '<div class=" Portfolio-box photography" >'+
                                '<a href="#"><img src="img/handsonconnect/img1.png" alt="Hands on Connect - Public Site" data-toggle="modal" data-target=".modal-handsonconnect"></a><h3>Hands on Connect - Public Site</h3>'+
                                '<p>' + window.translation.web_system + '</p></div>'+
                            '<div class=" Portfolio-box branding">'+
                                '<a href="#"  data-toggle="modal" data-target=".modal-arena" ><img src="img/arena/img1.jpg" alt=""></a><h3>Arena Bursatil</h3>'+
                                '<p>' + window.translation.web_system + '</p></div>'+
                            '<div class=" Portfolio-box photography">'+
                                '<a href="#" data-toggle="modal" data-target=".modal-mangos" >'+
                                '<img src="img/mangos/home-miami.jpg" alt=""></a><h3>Mango’s Reservations System</h3>' +
                                '<p>' + window.translation.web_system + '</p>' +
                            '</div>'+
                            '<div class=" Portfolio-box photography">'+
                                '<a href="#" data-toggle="modal" data-target=".modal-meattogo" >'+
                                '<img src="img/MeatToGo/gallery.PNG" alt=""></a><h3>Meat To Go</h3>' +
                                '<p>'+ window.translation.app_mobile_android_ios +'</p>'+
                            '</div>'+
                            '<div class=" Portfolio-box photography">'+
                                '<a href="#" data-toggle="modal" data-target=".modal-bralinmoca" >'+
                                '<img src="img/Bralinmoca/homepage-map.jpg" alt=""></a><h3>Bralinmoca</h3>' +
                                '<p>' + window.translation.web_system + '</p>'+
                            '</div>'+
                            '<div class=" Portfolio-box photography">'+
                                '<a href="#" data-toggle="modal" data-target=".modal-oneoc" >'+
                                '<img src="img/OneOC/homepage.jpg" alt=""></a><h3>OneOC</h3>' +
                                '<p>' + window.translation.web_system + '</p>'+
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
                    url: window.translation.url_content_portfolio,
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
                    var spanError = '<div class="recaptcha-error-message">' + window.translation.your_not_robot + '</div>';

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
            _name: window.translation.please_enter_name,
            _replyto: {
                required: window.translation.please_enter_email,
                email: window.translation.enter_email_valid,
            },
            _message: window.translation.please_enter_message,
        }
    });
}

function validate_code_portfolio_function(){
    var codeValidation = "400ce31e08fc6759c8db912258065cf8fbde41398b27413aeab9f8fcf9c6de04";
    var divPortfolio = '<div class="portfolioContainer wow fadeInUp delay-04s">'+
                            '<div class=" Portfolio-box printdesign">'+
                                '<a class="portfolio-item" data-toggle="modal" data-target=".modal-lives" href="#">'+
                                    '<img src="img/lives/home-app.jpg" alt="I Save Lives"></a><h3>I Save Lives</h3>'+
                                    '<p>'+ window.translation.app_mobile_android_ios +'</p></div>'+
                            '<div class="Portfolio-box webdesign">'+
                                '<a class="portfolio-item" data-toggle="modal" data-target=".modal-viajanet" href="#"><img src="img/viajanet/home.png"  alt="Viajanet Hotels App"></a><h3>Viajanet Hotels App</h3>'+
                                '<p>'+ window.translation.app_mobile_android_ios +'</p></div>'+
                            '<div class=" Portfolio-box branding">'+
                                '<a href="#"><img src="img/tribe/img1.png" alt="Tribe App" data-toggle="modal" data-target=".modal-tribe"></a><h3>Tribe App</h3>'+
                                '<p>'+ window.translation.app_mobile_android_ios +'</p></div>'+
                            '<div class=" Portfolio-box photography" >'+
                                '<a href="#"><img src="img/handsonconnect/img1.png" alt="Hands on Connect - Public Site" data-toggle="modal" data-target=".modal-handsonconnect"></a><h3>Hands on Connect - Public Site</h3>'+
                                '<p>' + window.translation.web_system + '</p></div>'+
                            '<div class=" Portfolio-box branding">'+
                                '<a href="#"  data-toggle="modal" data-target=".modal-arena" ><img src="img/arena/img1.jpg" alt=""></a><h3>Arena Bursatil</h3>'+
                                '<p>' + window.translation.web_system + '</p></div>'+
                            '<div class=" Portfolio-box photography">'+
                                '<a href="#" data-toggle="modal" data-target=".modal-mangos" >'+
                                '<img src="img/mangos/home-miami.jpg" alt=""></a><h3>Mango’s Reservations System</h3>'+
                                '<p>' + window.translation.web_system + '</p>'+
                            '</div>'+
                            '<div class=" Portfolio-box photography">'+
                                '<a href="#" data-toggle="modal" data-target=".modal-meattogo" >'+
                                '<img src="img/MeatToGo/gallery.PNG" alt=""></a><h3>Meat To Go</h3>'+
                                '<p>'+ window.translation.app_mobile_android_ios +'</p>'+
                            '</div>'+
                            '<div class=" Portfolio-box photography">'+
                                '<a href="#" data-toggle="modal" data-target=".modal-bralinmoca" >'+
                                '<img src="img/Bralinmoca/homepage-map.jpg" alt=""></a><h3>Bralinmoca</h3>'+
                                '<p>' + window.translation.web_system + '</p>'+
                            '</div>'+
                            '<div class=" Portfolio-box photography">'+
                                '<a href="#" data-toggle="modal" data-target=".modal-oneoc" >'+
                                '<img src="img/OneOC/homepage.jpg" alt=""></a><h3>OneOC</h3>' +
                                '<p>' + window.translation.web_system + '</p>'+
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

            /*
                Steps to encrypt content:
                1 - Change in HTML all " by '
                2 - Minify all HTML using 'http://www.willpeavy.com/minifier/'
                3 - Assing all HTML content to variable 'data'
                4 - Using following code to encrypt:

                    var key = CryptoJS.enc.Base64.parse("#base64Key#");
                    var iv  = CryptoJS.enc.Base64.parse("#base64IV#");
                    var dataDecrypted = CryptoJS.AES.encrypt(data, key, {iv: iv});
                    dataDecrypted.toString()

                NOTE: After decrypt if you want change HTML use: https://dirtymarkup.com/ and remove body and html tags created by default
            */

            //Get info of modals
            $.ajax({
                url: window.translation.url_content_portfolio,
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
                text: window.translation.code_invalid,
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
