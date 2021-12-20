var closeIt = document.getElementById('close');
var mobileHeader = document.getElementsByClassName('mobile-nav');
var hamburger = document.getElementsByClassName('hamburger');

closeIt.onclick = function(){
    mobileHeader[0].style.display='none';
    };

hamburger[0].onclick = function(){
    mobileHeader[0].style.display='block';
};