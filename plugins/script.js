$(document).ready(function () {
    
    new Typed("#typewritter", {
        strings: [
            "i am a frontend developer",
            "i speak js fluently",
            "reach out now"
        ],
        loop: true,
        backSpeed: 100,
        typeSpeed: 100,
    })

    new PureCounter()

    AOS.init()

});