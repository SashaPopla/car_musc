"use strict";
window.addEventListener('DOMContentLoaded', ()=>{
    
    function getSliderImg(nodes){
        nodes.forEach(function (element, i){
            element.style.background = `url(../img/slider/Rectangle_${++i}.png) center center/cover no-repeat`;
        });

        hideSliderBlock(slideBlockContent);
    }

    function hideSliderBlock(nodes){
        nodes.forEach((element, i) => {
            if(i > 2)
                element.style.display = "none";
        });
    }

    let parentsSliderBlock = document.querySelector('.slider_block'),
        slideBlockContent = document.querySelectorAll('.slider_content-rectangle'),
        sliderBlockForImg = document.querySelectorAll('.slider_content-img');
   
    getSliderImg(sliderBlockForImg);

    
});