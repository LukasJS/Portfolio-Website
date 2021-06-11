
//Smooth scroll animation function.
function smoothScroll(target, duration){
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var startTime = null;

    console.log(startPosition);
    console.log(targetPosition);

    function animation(currentTime){
        if(startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed,startPosition,targetPosition,duration);
        window,scrollTo(0,run);
        if(timeElapsed < duration) requestAnimationFrame(animation);
    }

    //Easing equation to smooth out animation.
    function ease (t, b, c, d) {
        return c*t/d + b;
    };

    requestAnimationFrame(animation);
    
}

//Event listener for About link
var aboutLink = document.querySelector('.aboutLink');
aboutLink.addEventListener('click',function(){
    smoothScroll('.section2', 1000);
});

//Event listerer for Gallary link
var gallaryLink = document.querySelector('.gallaryLink');
gallaryLink.addEventListener('click',function(){
    smoothScroll('.section3', 1500);
});
