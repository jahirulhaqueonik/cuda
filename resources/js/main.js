$(document).ready(function(){

    //STICKY Menu

    $(".js--services-section").waypoint(function(direction){
        if(direction == "down"){
            $("nav").addClass("sticky");
        }else{
            $("nav").removeClass("sticky")
 
        } 

    } );

     // SMOOTH SCROLL FOR IE/ EDGE /SAFARI
     
    $("a").on('click', function (event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }

    });

    //mixitup(portfolio-section)
    var mixer = mixitup('.container');




    //Active Link
    $("nav ul li a").click(function () {
        $("nav ul li a").removeClass("active");
        $(this).addClass("active");
    });
    $("nav a img.logo").clcik(function () {
        $("nav ul li a").removeClass("active");
        $("nav ul li:first-child a").addClass("active")
    });


});

function openNav(){
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

