document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);
let flag = 0;
var xDown = null;
var yDown = null;

function handleTouchStart(evt) {
    xDown = evt.touches[0].clientX;
    yDown = evt.touches[0].clientY;
};

function handleTouchMove(evt) {
    if (!xDown || !yDown) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) { /*most significant*/
        if (xDiff > 0) {
            console.log("Swiped left");
            if (document.querySelector(".sidenav").classList.contains("open")) {
                document.querySelector(".sidenav").classList.remove("open");
            }
        } else {
            console.log("Swiped right");
            document.querySelector(".sidenav").classList.add("open");
            flag += 1;
            if (flag > 0) {
                goForward();
            }
            if (document.querySelector(".first__box--desc").classList.contains("animationText")) {
                document.querySelector(".first__box--desc").classList.remove("animationText");
            }
            if (document.querySelector(".first__box--animationLine").classList.contains("animation")) {
                document.querySelector(".first__box--animationLine").classList.remove("animation");
            }

        }
    } else {
        if (yDiff > 0) {
            /* up swipe */
        } else {
            /* down swipe */
        }
    }
    /* reset values */
    xDown = null;
    yDown = null;
};

function controlItems() {
    //counting 
    setTimeout(function() {

        document.querySelector(".first__box--animationLine").classList.add("animation");
        document.querySelector(".first__box--desc").classList.add("animationText");
    }, 1900);

    setTimeout(function() {

        document.querySelector(".first__box--animationLine").classList.remove("animation");
    }, 8200);



}
controlItems();

function goForward() {

    setTimeout(function() {

        console.log("idz na dol");
        document.querySelector(".first__bottomArrow").classList.add("arrowAnim");
        document.querySelector(".sidenav").classList.remove("open");
    }, 2500);

}