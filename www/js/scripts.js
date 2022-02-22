/*!
* Start Bootstrap - Agency v7.0.10 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
//

const LOADING_SCREEN = true;
const DEBUG_LOADING_SCREEN = false;
const LOADING_SCREEN_LANGUAGE = 'en';

function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

window.addEventListener('DOMContentLoaded', async event => {
    if (LOADING_SCREEN) {
        const loadingDetailsContainer = document.getElementById(`loading-details-${LOADING_SCREEN_LANGUAGE}`);
        const loadingDetails = loadingDetailsContainer.querySelectorAll(".loading-detail");

        async function showLoadingDetails(detail) {
            let text = detail.textContent.split("");
            detail.textContent = "";
            detail.style.display = "inline-block";
            if (detail.getBoundingClientRect().bottom > (window.innerHeight || document.documentElement.clientHeight)) {
                loadingDetailsContainer.removeChild(loadingDetailsContainer.querySelector(".loading-detail"));
            }
            for (const letter of text) {
                detail.textContent = detail.textContent + letter;
                await waitForMs(6);
            }
            await waitForMs(getRandomInteger(0, 600));
            if (loadingDetails[loadingDetails.length - 1] !== detail) detail.style.display = "block";
        }

        for (let detail of loadingDetails) {
            await showLoadingDetails(detail);
        }
    }

    if (!DEBUG_LOADING_SCREEN) {
        await waitForMs(700);
        document.getElementById('content').style.display = "block";
        document.getElementById('loadingScreen').style.display = "none";
    }






    /*****************************
     * debut js bootstrap
     */

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    /*
     * fin js bootstrap
     *****************************/





    const _2b = document.getElementById("2b");
    const img_2b = _2b.querySelector("img");
    const longName_2b = _2b.querySelector(".longName");
    img_2b.addEventListener("click", realName2b);

    let name2bChanged = false;

    function realName2b() {
        longName_2b.textContent = name2bChanged ? "YoRHa No.2 Type B (Battle)" : "YoRHa No.2 Type E (Executioner)";
        name2bChanged = !name2bChanged;
    }


    const switchVideo = document.getElementById("video-switch");
    const trailer = document.getElementById("nier-automata-trailer");
    const videoDescription = document.getElementById("video-description");
    switchVideo.addEventListener("click", changeVideo);
    
    let videoHistoireChanged = false;
    
    function changeVideo() {
        videoDescription.textContent = videoHistoireChanged ? "Vidéo d'annonce : BECOME AS GODS Edition" : "Vidéo d'annonce : Sortie du jeu";
        trailer.src = videoHistoireChanged ? "//www.youtube.com/embed/rtktcZOz_mA?autoplay=0" : "//www.youtube.com/embed/oM5Q43OmLTk?autoplay=0";
        videoHistoireChanged = !videoHistoireChanged;
    }
});