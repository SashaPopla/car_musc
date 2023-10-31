"use strict";
window.addEventListener('DOMContentLoaded', ()=>{
    
    function getSliderImg(nodes){
        nodes.forEach(function (element, i){
            element.style.background = `url(../img/slider/Rectangle_${++i}.png) center center/cover no-repeat`;
        });
    }

    const parentsSliderBlock = document.querySelector('.slider_block'),
        sliderBlockForImg = document.querySelectorAll('.slider_content-img');

    getSliderImg(sliderBlockForImg);
});