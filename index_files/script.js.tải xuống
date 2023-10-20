(function($){
    "use strict"; // Start of use strict
    /* ---------------------------------------------
     Owl carousel
     --------------------------------------------- */
     function menu_responsive(){
        if($(window).width()<768){
            if($('.btn-toggle-mobile-menu').length>0){
                return false;
            }
            else $('.nav li.menu-item-has-children,.nav li.has-mega-menu').append('<span class="btn-toggle-mobile-menu"></span>');
        }
        else{
            $('.btn-toggle-mobile-menu').remove();
            $('.nav .sub-menu').slideDown('fast');
        }
        $('.nav').on('click','.btn-toggle-mobile-menu',function(event){
            $(this).toggleClass('active');
            $(this).prev().stop(true,false).slideToggle('fast');
            return false;
        });
        $('.nav').on('click','.btn-toggle-mobile-menu,li.menu-item-has-children>a[href="#"]',function(event){
            $(this).next().stop(true,false).slideToggle('fast');
            return false;
        });
     }
     function fixed_header(){
        var menu_element;
        menu_element = $('.main-menu:not(.menu-fixed-content)').closest('.vc_row');
        if($('.menu-fixed-enable').length > 0 && $(window).width()>1024){           
            var menu_class = $('.main-menu').attr('class');
            var header_height = $("#header").height()+100;
            var ht = header_height + 150;
            var st = $(window).scrollTop();

            if(!menu_element.hasClass('header-fixed') && menu_element.attr('data-vc-full-width') == 'true') menu_element.addClass('header-fixed');
            if(st>header_height){               
                if(menu_element.attr('data-vc-full-width') == 'true'){
                    if(st > ht) menu_element.addClass('active');
                    else menu_element.removeClass('active');
                    menu_element.addClass('fixed-header');
                }
                else{
                    if(st > ht) menu_element.parent().parent().addClass('active');
                    else menu_element.parent().parent().removeClass('active');
                    if(!menu_element.parent().parent().hasClass('fixed-header')){
                        menu_element.wrap( "<div class='menu-fixed-content fixed-header "+menu_class+"'><div class='container'></div></div>" );
                    }
                }
            }else{
                menu_element.removeClass('active');
                if(menu_element.attr('data-vc-full-width') == 'true') menu_element.removeClass('fixed-header');
                else{
                    if(menu_element.parent().parent().hasClass('fixed-header')){
                        menu_element.unwrap();
                        menu_element.unwrap();
                    }
                }
            }
        }
        else{
            menu_element.removeClass('active');
            if(menu_element.attr('data-vc-full-width') == 'true') menu_element.removeClass('fixed-header');
            else{
                if(menu_element.parent().parent().hasClass('fixed-header')){
                    menu_element.unwrap();
                    menu_element.unwrap();
                }
            }
        }
    }
    // fixed menu phone pendaica
    function fixed_header_phone(){
        if($(window).width()<767){
            var offsetMenu = $("#main-menu").offset();
            $(window).bind('scroll', function () {
                if ($(window).scrollTop() > offsetMenu.top) {
                    $('.menu-fixed-phone-enable #main-menu').addClass('fixedPhone');
                } else {
                    $('.menu-fixed-phone-enable #main-menu').removeClass('fixedPhone');
                }
            });
        }
    }
    function init_carousel(){
        $('.kt-owl-carousel').each(function(){
            if($(this).find('> div').length > 1 || $(this).find('> ul').length > 1 || $(this).find('> *').length > 1 || $(this).find('> li').length > 1 || $(this).find('> a').length > 1){
                var config = $(this).data();
                //config.navText = ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'];
                var animateOut = $(this).data('animateout');
                var animateIn = $(this).data('animatein');

                if(typeof animateOut != 'undefined' ){
                    config.animateOut = animateOut;
                }
                if(typeof animateIn != 'undefined' ){
                    config.animateIn = animateIn;
                }
                config.autoplayHoverPause = true;
                // config.autoHeight = true;
                var owl = $(this);
                owl.owlCarousel(config);
                $(this).find('.owl-item').removeClass('last-item');
                $(this).find('.owl-item.active').last().addClass('last-item');

                var t = $(this);
                owl.on('changed.owl.carousel', function(event) {
                    var item      = event.item.index;
                    t.find('.owl-item').removeClass('last-item');
                    setTimeout(function(){
                        t.find('.owl-item.active').last().addClass('last-item');
                    }, 100);
                
                })
            }
            else $(this).addClass('owl-notrun');
        });
    }

    /* Top menu*/
    function scrollCompensate(){
        var inner = document.createElement('p');
        inner.style.width = "100%";
        inner.style.height = "200px";
        var outer = document.createElement('div');
        outer.style.position = "absolute";
        outer.style.top = "0px";
        outer.style.left = "0px";
        outer.style.visibility = "hidden";
        outer.style.width = "200px";
        outer.style.height = "150px";
        outer.style.overflow = "hidden";
        outer.appendChild(inner);
        document.body.appendChild(outer);
        var w1 = parseInt(inner.offsetWidth);
        outer.style.overflow = 'scroll';
        var w2 = parseInt(inner.offsetWidth);
        if (w1 == w2) w2 = outer.clientWidth;
        document.body.removeChild(outer);
        return (w1 - w2);
    }

    function resizeTopmenu(){
        if($(window).width() + scrollCompensate() >= 768){
            var main_menu_w = $('#main-menu').innerWidth();
            $("#main-menu ul.mega_dropdown").each(function(){
                var menu_width = $(this).innerWidth();
                var offset_left = $(this).position().left;
                if(menu_width > main_menu_w){
                    $(this).css('width',main_menu_w+'px');
                    $(this).css('left','0');
                }else{
                    if((menu_width + offset_left) > main_menu_w){
                        var t = main_menu_w-menu_width;
                        var left = parseInt((t/2));
                        $(this).css('left',left);
                    }
                }
            });
        }

        if($(window).width()+scrollCompensate() < 1025){
            $("#main-menu li.dropdown:not(.active) >a").attr('data-toggle','dropdown');
        }else{
            $("#main-menu li.dropdown >a").removeAttr('data-toggle');
        }
    }
    /* ---------------------------------------------
     Stick menu
     --------------------------------------------- */
     function stick_menu(){
        if($('#header .main-menu').length >0){
            var offset = $('#header .main-menu').offset();
            var header_height = offset.top;
            var h = $(window).scrollTop();
            var width = $(window).width();
            if(width > 767){
                if(header_height==0){
                    $('#header .main-menu').removeClass('main-menu-ontop');
                    return;
                }
                if(h >= header_height){
                    $('#header .main-menu').addClass('main-menu-ontop');
                }else{
                    $('#header .main-menu').removeClass('main-menu-ontop');
                }
            }else{
                $('#header .main-menu').removeClass('main-menu-ontop');
            }
        }
        
     }

     function kt_bxslider(){
        $('.kt-bxslider').each(function(){
            var auto = true;
            if($(this).parents('.banner-single-image').length > 0) auto = false;
            var slider = $(this).bxSlider(
                {
                    nextText:'<i class="fa fa-angle-right"></i>',
                    prevText:'<i class="fa fa-angle-left"></i>',
                    auto: auto,
                    onSlideAfter: function(currentSlide, totalSlides, currentSlideHtmlObject){
                        $('.bx-viewport li').removeClass('active-slide');   
                         $(currentSlideHtmlObject).addClass('active-slide');
                 //     $('#sddf').html('<p class="check">Slide index ' + currentSlide + ' of ' + totalSlides + ' total slides has completed.');
                    }
                }
            );
            slider.reloadSlider();
        })
        
     }

    /**==============================
    ***  Auto width megamenu
    ===============================**/
    function auto_width_megamenu(){
        var full_width = parseInt($('.container').innerWidth());
        //full_width = $( document ).width();
        var menu_width = parseInt($('.vertical-menu-content').actual('width'));
        $('.vertical-menu-content').find('.vertical-dropdown-menu').each(function(){
            $(this).width((full_width - menu_width)-32);
        });
    }
    function set_pos_megamenu(){
        if($('#main-menu').length > 0){
            if($('.rtl-enable').length > 0){
                var menu_pos = $(window).width() - ($('#main-menu').offset().left + $('#main-menu').outerWidth());
                $('li.has-mega-menu').each(function(){
                    var sub_pos = $(window).width() - ($(this).offset().left + $(this).outerWidth());
                    $(this).find('.sub-menu').css('right',menu_pos-sub_pos);
                })
            }
            else{
                var menu_pos = $('#main-menu').offset().left;
                $('li.has-mega-menu').each(function(){
                    var sub_pos = $(this).offset().left;
                    $(this).find('.sub-menu').css('left',menu_pos-sub_pos);
                })
            }
        }
    }
    function fix_height_footer_item(){
        $('.footer-list-link .block-link-wapper').css('height','');
        if($(window).width() >= 568){
            var item_height = $('.footer-list-link .block-link-wapper').first().outerHeight();
            $('.footer-list-link .block-link-wapper').each(function(){
                var item_height2 = $(this).outerHeight();
                if(item_height2 > item_height) item_height = item_height2;
            })
            $('.footer-list-link .block-link-wapper').css('height',item_height);
        }
    }

    /* ---------------------------------------------
     Scripts ready
     --------------------------------------------- */
    $(document).ready(function() {
        menu_responsive();
        $('a[role="tab"]').on('click',function(){
            var id = $(this).attr('href');
            $(this).parent().parent().find('*[role="presentation"]').removeClass('active');
            $(this).parent().addClass('active');
            $(id).parent().find('*[role="tabpanel"]').removeClass('active');
            $(id).addClass('active');
            return false;
        })
        $('.image-lightbox').on('click',function(event){
            event.preventDefault();
            var gallerys = $(this).attr('data-gallery');
            var gallerys_array = gallerys.split(',');
            var data = [];
            if(gallerys != ''){
                for (var i = 0; i < gallerys_array.length; i++) {
                    if(gallerys_array[i] != ''){
                        data[i] = {};
                        data[i].href = gallerys_array[i];
                    }
                };
            }
            $.fancybox.open(data);
        })
        $('.navbar-toggle').on('click',function(event){
            event.preventDefault();
            $(this).parents('nav').find('.navbar-collapse').toggleClass('collapse');
        })
        $('.navbar-brand').on('click',function(event){
            event.preventDefault();
            $('.navbar-toggle').trigger('click');
        })
        //Home 5
        $('.inner-header5 .close-top-adv').on('click',function(event){
            event.preventDefault();
            $('.top-header5').slideUp();
        });
        fix_height_footer_item();
        set_pos_megamenu();
        $('.filter-item-top').each(function(){
            if($(window).width() >= 768) $(this).find('.col-md-2 .filter-label').css('height',$(this).find('.col-md-10').outerHeight());
        })
        //Fix product variable thumb
        $('body input[name="variation_id"]').on('change',function(){
            var id = $(this).val();
            var data = $('.variations_form').attr('data-product_variations');
            var curent_data = {};
            data = $.parseJSON(data);
            if(id){
                for (var i = data.length - 1; i >= 0; i--) {
                    if(data[i].variation_id == id) curent_data = data[i];
                };
                if('image_id' in curent_data){
                    $('.product-list-thumb .thumbnails').find('a[data-image_id="'+curent_data.image_id+'"]').trigger( 'click' );
                }
            }          
        })
        // variable product
        if($('.wrap-attr-product.special').length > 0){
            $('.attr-filter ul li a').live('click',function(event){
                event.preventDefault();
                $(this).parents('ul').find('li a').removeClass('active');
                $(this).addClass('active');
                var attribute = $(this).parent().attr('data-attribute');
                var id = $(this).parents('ul').attr('data-attribute-id');
                $('#'+id).val(attribute);
                $('#'+id).trigger( 'change' );
                $('#'+id).trigger( 'focusin' );
                return false;
            })
            $('.attr-hover-box').hover(function(){
                var seff = $(this);
                var old_html = $(this).find('ul').html();
                var current_val = $(this).find('ul li.active').attr('data-attribute');
                $(this).next().find('select').trigger( 'focusin' );
                var content = '';
                $(this).next().find('select').find('option').each(function(){
                    var val = $(this).attr('value');
                    var title = $(this).html();
                    var el_class = '';
                    if(current_val == val) el_class = ' class="active"';
                    if(val != ''){
                        if(seff.hasClass('attr-color')) content += '<li'+el_class+' data-attribute="'+val+'"><a href="#"><span class="color-'+val+'"></span></a></li>';
                        else content += '<li'+el_class+' data-attribute="'+val+'"><a href="#">'+title+'</a></li>';
                    }
                })
                if(old_html != content) $(this).find('ul').html(content);
            })
            $('body .reset_variations').live('click',function(){
                $('.attr-hover-box').each(function(){
                    var seff = $(this);
                    var old_html = $(this).find('ul').html();
                    var current_val = $(this).find('ul li.active').attr('data-attribute');
                    $(this).next().find('select').trigger( 'focusin' );
                    var content = '';
                    $(this).next().find('select').find('option').each(function(){
                        var val = $(this).attr('value');
                        var title = $(this).html();
                        var el_class = '';
                        if(current_val == val) el_class = ' class="active"';
                        if(val != ''){
                            if(seff.hasClass('attr-color')) content += '<li'+el_class+' data-attribute="'+val+'"><a href="#"><span class="color-'+val+'"></span></a></li>';
                            else content += '<li'+el_class+' data-attribute="'+val+'"><a href="#">'+title+'</a></li>';
                        }
                    })
                    if(old_html != content) $(this).find('ul').html(content);
                    $(this).find('ul li').removeClass('active');
                })
            })        
        }
        //end
        //Product Gallery
        $('.pro-gal a').on('click',function(event){
            event.preventDefault();
            var src = $(this).find('img').attr('src');
            var srcset = $(this).find('img').attr('srcset');
            var title = $(this).find('img').attr('src');
            var alt = $(this).find('img').attr('alt');
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            $(this).parents('.product-thumb').find('.product-img img').attr('src',src);
            $(this).parents('.product-thumb').find('.product-img img').attr('srcset',srcset);
            $(this).parents('.product-thumb').find('.product-img img').attr('title',title);
            $(this).parents('.product-thumb').find('.product-img img').attr('alt',alt);
        });
        //Count item cart
        if($("#count-cart-item").length){
            var count_cart_item = $("#count-cart-item").val();
            $(".cart-item-count").html(count_cart_item);
        }
        //QUANTITY CLICK
        $("body").on("click",".quantity .qty-up",function(){
            var min = $(this).prev().attr("data-min");
            var max = $(this).prev().attr("data-max");
            var step = $(this).prev().attr("data-step");
            if(step === undefined) step = 1;
            if(max !==undefined && Number($(this).prev().val())< Number(max) || max === undefined){ 
                if(step!='') $(this).prev().val(Number($(this).prev().val())+Number(step));
            }
            $( 'div.woocommerce > form .button[name="update_cart"]' ).prop( 'disabled', false );
            return false;
        })
        $("body").on("click",".quantity .qty-down",function(){
            var min = $(this).next().attr("data-min");
            var max = $(this).next().attr("data-max");
            var step = $(this).next().attr("data-step");
            if(step === undefined) step = 1;
            if(Number($(this).next().val()) > 1){
                if(min !==undefined && $(this).next().val()>min || min === undefined){
                    if(step!='') $(this).next().val(Number($(this).next().val())-Number(step));
                }
            }
            $( 'div.woocommerce > form .button[name="update_cart"]' ).prop( 'disabled', false );
            return false;
        })
        $("body").on("keyup change","input.qty-val",function(){
            var max = $(this).attr('data-max');
            if( Number($(this).val()) > Number(max) ) $(this).val(max);
            $( 'div.woocommerce > form .button[name="update_cart"]' ).prop( 'disabled', false );
        })
        //Mini cart
            //Count item cart
            if($("#count-cart-item").length){
                var count_cart_item = $("#count-cart-item").val();
                $(".cart-item-count").html(count_cart_item);
            }
        //End mini cart        
        
        // resizeTopmenu();
        // auto_width_megamenu();
        // fixed_header();        

        // CATEGORY FILTER PRICE 
        $('.slider-range-price').each(function(){
            var min             = $(this).data('min');
            var max             = $(this).data('max');
            var unit            = $(this).data('unit');
            var value_min       = $(this).data('value-min');
            var value_max       = $(this).data('value-max');
            var label_reasult   = $(this).data('label-reasult');
            var t               = $(this);
            $( this ).slider({
              range: true,
              min: min,
              max: max,
              values: [ value_min, value_max ],
              slide: function( event, ui ) {
                var result = label_reasult +" "+ unit + ui.values[ 0 ] +' - '+ unit +ui.values[ 1 ];
                $('.price-min-filter').val(ui.values[ 0 ]);
                $('.price-max-filter').val(ui.values[ 1 ]);
                t.closest('.block-filter-inner').find('.amount-range-price').html(result);
              }
            });
        })
        /// tre menu category
        $(document).on('click','.tree-menu li',function(){
            $(this).toggleClass('active');
            $(this).children('ul').slideToggle();
            
            return false;
        })
        // Zoom
        var api1 = api2 = false;
        if($('.easyzoom').length >0 && $(window).width()>767){
            // Instantiate EasyZoom instances
            var $easyzoom = $('.easyzoom').easyZoom();
            // Get an instance API
            var api1 = $easyzoom.filter('.easyzoom--with-thumbnails').data('easyZoom');
            // Setup toggles example
            var api2 = $easyzoom.filter('.easyzoom--with-toggle').data('easyZoom');            
        }
        $('.single-product-content .block-product-image .product-image >a').on('click',function(){
            return false;
        })
        // Setup thumbnails example
        $('.thumbnails').on('click', 'a', function(e) {
            $(this).closest('.product-list-thumb').find('a').each(function(){
                $(this).removeClass('selected');
            })
            
            $(this).addClass('selected');

            var $this = $(this);
            e.preventDefault();
            // Use EasyZoom's `swap` method
            if(api1) api1.swap($this.data('standard'), $this.attr('href'));
            var thumb = $(this).parents('.block-product-image').find('.product-image a');
            thumb.attr('href',$(this).attr('href'));
            thumb.find('img').attr('src',$(this).find('img').attr('src'));
            thumb.find('img').attr('srcset',$(this).find('img').attr('srcset'));
            thumb.find('img').attr('title',$(this).find('img').attr('title'));
            return false;
        });
        $('.toggle').on('click', function() {
            var $this = $(this);
            if ($this.data("active") === true) {
                $this.text("Switch on").data("active", false);
                if(api2) api2.teardown();
            } else {
                $this.text("Switch off").data("active", true);
                if(api2) api2._init();
            }
        });
        /* Send conttact*/
        $(document).on('click','#btn-send-contact',function(){
            var subject = $('#subject').val(),
                email   = $('#email').val(),
                order_reference = $('#order_reference').val(),
                message = $('#message').val();
            var data = {
                subject:subject,
                email:email,
                order_reference:order_reference,
                message:message
            }
            $.post('ajax_contact.php',data,function(result){
                if(result.trim()=="done"){
                    $('#email').val('');
                    $('#order_reference').val('');
                    $('#message').val('');
                    $('#message-box-conact').html('<div class="alert alert-info">Your message was sent successfully. Thanks</div>');
                }else{
                    $('#message-box-conact').html(result);
                }
            })
        })

        /** TOP review**/
        $(document).on('click','.block-top-review .product-name',function(){
            $(this).closest('.list-product').find('.product').each(function(){
                $(this).removeClass('active');
            })
            $(this).closest('.product').addClass('active');
            return false;
        })
        /* scroll top */ 
        $(document).on('click','.scroll_top',function(){
            $('body,html').animate({scrollTop:0},400);
            return false;
        })
        // Top menu vetical
        if($('.shop-menu').length >0){
            $(document).on('click','.shop-menu .icon',function(){
                $(this).closest('.shop-menu').find('.block-vertical-menu').slideToggle();
            })
            /* Close vertical */
            $(document).on('click','*',function(e){
                var container = $(".shop-menu");
                if (!container.is(e.target) && container.has(e.target).length === 0){
                    container.find('.block-vertical-menu').hide();
                }
            })
        }
        
    });
    /* ---------------------------------------------
     Scripts initialization
     --------------------------------------------- */
    $(window).load(function() {        
        // Select menu
        // $( "#category-select" ).unbind('click hover mouseover mouseout onhover on');
        $( "#category-select" ).selectmenu();

        //Fix mailchimp
        $('.sv-mailchimp-form').each(function(){
            var placeholder = $(this).attr('data-placeholder');
            var submit = $(this).attr('data-submit');
            if(placeholder) $(this).find('input[name="EMAIL"]').attr('placeholder',placeholder);
            if(submit) $(this).find('input[type="submit"]').val(submit);
        })
        //Bx Slider
        if($('.bxslider-home6').length>0){
            $('.bxslider').each(function(){
                $(this).bxSlider({
                    nextText: 'next',
                    prevText: 'prev',
                    auto: true,
                });
            });
        }
        //Time Count Down Circle
        if($('.count-down-circle').length>0){
            $('.count-down-circle').TimeCircles({
                fg_width: 0.03,
                bg_width: 1.2,
                text_size: 0.07,
                circle_bg_color: "#5f6062",
                time: {
                    Days: {
                        show: false,
                        text: "Days",
                        color: "#000"
                    },
                    Hours: {
                        show: true,
                        text: "Hours",
                        color: "#000"
                    },
                    Minutes: {
                        show: true,
                        text: "Mins",
                        color: "#000"
                    },
                    Seconds: {
                        show: true,
                        text: "Seconds",
                        color: "#000"
                    }
                }
            }); 
        }
        init_carousel();
        resizeTopmenu();
        kt_bxslider();
        auto_width_megamenu();

        // Fix price html
        $('.price-box').each(function(){
            var sale_price = $(this).find('del').html();
            if(sale_price){
                $(this).find('del').remove();
                $(this).append('<del>'+sale_price+'</del>');
            }
        })

        // count downt
        if($('.countdown-lastest').length >0){
            var labels = ['Y', 'M', 'W', 'D', 'H', 'M', 'S'];            
            var layout = '<span class="box-count day"><span class="number">{dnn}</span> <span class="text">D</span></span><span class="dot">:</span><span class="box-count hrs"><span class="number">{hnn}</span> <span class="text">H</span></span><span class="dot">:</span><span class="box-count min"><span class="number">{mnn}</span> <span class="text">M</span></span><span class="dot">:</span><span class="box-count secs"><span class="number">{snn}</span> <span class="text">S</span></span>';
            $('.countdown-lastest').each(function() {
                // var austDay = new Date($(this).data('y'),$(this).data('m') - 1,$(this).data('d'),$(this).data('h'),$(this).data('i'),$(this).data('s'));
                var austDay = new Date($(this).data('date'));
                $(this).countdown({
                    until: austDay,
                    labels: labels, 
                    layout: layout
                });
            });
        }

        // Slidder home 4
        if($('#bxslider-home4').length >0){
            var slider = $('#bxslider-home4').bxSlider({
                nextText:'<i class="fa fa-angle-right"></i>',
                prevText:'<i class="fa fa-angle-left"></i>',
                auto: true,
                onSliderLoad:function(currentIndex){
                    $('#bxslider-home4 li').find('.caption').each(function(i){
                        $(this).show().addClass('animated fadeInRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                            $(this).removeClass('fadeInRight animated');
                        });
                    })                      
                },
                onSlideBefore:function(slideElement, oldIndex, newIndex){
                    slideElement.find('.sl-description').hide();
                    slideElement.find('.caption').each(function(){                    
                       $(this).hide().removeClass('animated fadeInRight'); 
                    });                
                },
                onSlideAfter: function(slideElement, oldIndex, newIndex){  
                    //slideElement.find('.sl-description').show();
                    slideElement.parents('.block-slider').find('.caption-group .caption').hide();
                    setTimeout(function(){
                        slideElement.find('.caption').each(function(){                    
                           $(this).show().addClass('animated fadeInRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                                $(this).removeClass('fadeInRight animated');
                            }); 
                        });
                    }, 500);                                
                }
            });
            //slider.reloadSlider();
        }
        if($('.mini-cart-list').length > 0){
            if($('.mini-cart-list').height() >= 260) $('.mini-cart-list').mCustomScrollbar();
        }
        $('.search-category').live('click',function(){
            if(!$(this).hasClass('mCustomScrollbar')) $('#category-select-menu').mCustomScrollbar();
        })
        /* Show hide scrolltop button */
        if( $(window).scrollTop() == 0 ) {
            $('.scroll_top').stop(false,true).fadeOut(600);
        }else{
            $('.scroll_top').stop(false,true).fadeIn(600);
        }
        $("#header").css('min-height','');
        if($(window).width()>1024){
            $("#header").css('min-height',$("#header").height());
            fixed_header();
        }
        else{
            $("#header").css('min-height','');
        }
        if($('.rtl-enable').length > 0){
            $('.block3.block-new-arrivals').each(function(){
                var w_title = $(this).find('h3.block-title').outerWidth();
                $(this).find('.owl-controls').css('right',w_title - 21);
                $(this).find('.owl-controls').css('left','inherit');
            })
            $('.block3.block-hotdeals').each(function(){
                var w_title = $(this).find('h3.block-title').outerWidth();
                $(this).find('.owl-controls').css('right',w_title - 21);
                $(this).find('.owl-controls').css('left','inherit');
            })
        }
        else{
            $('.block3.block-new-arrivals').each(function(){
                var w_title = $(this).find('h3.block-title').outerWidth();
                $(this).find('.owl-controls').css('left',w_title - 21);
            })
            $('.block3.block-hotdeals').each(function(){
                var w_title = $(this).find('h3.block-title').outerWidth();
                $(this).find('.owl-controls').css('left',w_title - 21);
            })
        }
        if($('.rtl-enable').length > 0){
            $('.block-vertical-menu').each(function(){
                var pos_left = $(this).offset().left;
                if(pos_left > $(window).width()/2){
                    $(this).find('.vertical-dropdown-menu').css('left','inherit');
                    $(this).find('.vertical-dropdown-menu').css('right','100%');
                }
            })
        }
    });
    /* ---------------------------------------------
     Scripts resize
     --------------------------------------------- */
    var w_width = $(window).width();
    $(window).resize(function(){
        resizeTopmenu();
        auto_width_megamenu();
        if($(window).width()<768){
            if($('.btn-toggle-mobile-menu').length>0){
                return false;
            }
            else $('.nav li.menu-item-has-children,.nav li.has-mega-menu').append('<span class="btn-toggle-mobile-menu"></span>');
        }
        else{
            $('.btn-toggle-mobile-menu').remove();
            $('.nav .sub-menu').slideDown('fast');
        }
        $('.filter-item-top').each(function(){
            if($(window).width() >= 768) $(this).find('.col-md-2 .filter-label').css('height',$(this).find('.col-md-10').outerHeight());
        })
        $("#header").css('min-height','');
        fix_height_footer_item();
        
    });
    /* ---------------------------------------------
     Scripts scroll
     --------------------------------------------- */
    $(window).scroll(function(){
        // stick_menu();
        auto_width_megamenu();
        fixed_header();
        set_pos_megamenu();
        if($(window).width()>1024){
            var min_height = $("#header").css('min-height');
            if(min_height == '0px') $("#header").css('min-height',$("#header").height());
        }
        else{
            $("#header").css('min-height','');
        }
        /* Show hide scrolltop button */
        if( $(window).scrollTop() == 0 ) {
            $('.scroll_top').stop(false,true).fadeOut(600);
        }else{
            $('.scroll_top').stop(false,true).fadeIn(600);
        }
    });
})(jQuery); // End of use strict