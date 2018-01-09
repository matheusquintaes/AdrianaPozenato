import $ from 'jquery';
import slick from 'slick-carousel';
import './index.html'
import './css/style.css';
import './css/responsive.css';

import './css/vendor/slick.css';
import './css/vendor/slick-theme.css';
import './css/responsive.css';

(function(win, doc){

    initNav();
    showMoreServices();
    initCarousels();
    scrollTo();
    
    function initNav(){

        var nav = {
            minWidth: 992,
            closeClass: "navigation-closed",
            hideClass: "navigation-hidden",
            startClass: "navigation-start",
            downClass: "navigation-down",
            itemActiveClass: "is-active"
        }
    
        doc.addEventListener("DOMContentLoaded", function() {
            var $btnToogle = doc.querySelector('[data-js="toggle-navigation"]');
            closeOnSmallScreens();
            doc.body.classList.add("navigation-initialised");
            $btnToogle.addEventListener("click", handleToggle);
        });
    
        function handleToggle(){
            document.body.classList.toggle(nav.closeClass);
            var navClosed = document.body.classList.contains(nav.closeClass);
            // toggleNavItems(navClosed)
        }
    
        function toggleNavItems( navClosed ) {
            console.log(navClosed);
        }
        
        function closeOnSmallScreens() {
            if( win.innerWidth < nav.minWidth ) {
                close();
            }
        }
    
        function close(){
            doc.body.classList.add(nav.closeClass);
        }
    }

    function showMoreServices() {

        var $buttonShowMore = doc.querySelectorAll('[data-js="show-more"]');
    
        Array.prototype.forEach.call($buttonShowMore, function(button){
            button.addEventListener('click', handleButtonShowMore);
        })
    
        function handleButtonShowMore(e){
            e.preventDefault();
    
            var $pHide = this.previousElementSibling;
            var $pIsHide = this.previousElementSibling.classList.contains("service__item__description--hide");
    
            if($pIsHide) {
                $pHide.classList.remove("service__item__description--hide");
                this.innerText = "Ver menos..."
            } else {
                $pHide.classList.add("service__item__description--hide");
                this.innerText = "Ver Mais..."
            }
    
        }
    }

    function initCarousels() {
        doc.addEventListener("DOMContentLoaded", function() {
            $('.brands__carousel').not('.slick-initialized').slick({
                dots: false,
                infinite: true,
                speed: 300,
                slidesToShow: 4,
                slidesToScroll: 4,
                responsive: [
                    {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                    },
                    {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2
                    }
                    },
                    {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                        
                    }
                    }
                ]
            });
    
            $('.testimonials__carousel').not('.slick-initialized').slick({
                dots: true,
                infinite: true,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1
            });
    
        });        
    }

    function scrollTo(){
        $('.navigation__item, .top__link').on('click', function(e){
            e.preventDefault();
            var target = $( $(this).attr('data-navigation-link'))
    
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 800);
        });
    }


})(window, document);