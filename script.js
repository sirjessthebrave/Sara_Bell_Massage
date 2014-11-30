// sticky nav for home page

$(function() {
 
    // grab the initial top offset of the navigation 
    var sticky_navigation_offset_top = $('.sticky_navigation').offset().top;
     
    // our function that decides weather the navigation bar should have "fixed" css position or not.
    var sticky_navigation = function(){
        var scroll_top = $(window).scrollTop(); 
        // our current vertical position from the top
       
        // if we've scrolled more than the navigation, change its position to fixed to stick to top,
        // otherwise change it back to relative
        if (scroll_top > sticky_navigation_offset_top) { 
            $('.sticky_navigation').addClass('is-sticky');
            $('.social').addClass('is-sticky');
            $('.contact_top').addClass('is-sticky');
        } 

        else {
            $('.sticky_navigation').removeClass('is-sticky');
            $('.social').removeClass('is-sticky');
            $('.contact_top').removeClass('is-sticky');
        }   
    };
     
    // run our function on load
    sticky_navigation();
     
    // and run it again every time you scroll
    $(window).scroll(function() {
         sticky_navigation();
    });
 
});

//end of sticky nav for home page

// nav current page fuction
$(function(){
    // this will get the full URL at the address bar
    var url = window.location.href; 

    // passes on every "a" tag 
    $(".nav_button a").each(function() {
            // checks if its the same on the address bar
        if(url == (this.href)) { 
            $(this).closest(".nav_button").addClass("active");
        }
    });
});
// end of nav current page function

// image rotator for studio pics

var howOften = 2; //number often in seconds to rotate
var current = 0; //start the counter at 0
var ns6 = document.getElementById&&!document.all; //detect netscape 6

// place your images, text, etc in the array elements here
var items = new Array();
    items[0]= document.getElementById('0').innerHTML;
    items[1]= document.getElementById('1').innerHTML;
    items[2]= document.getElementById('2').innerHTML;
    items[3]= document.getElementById('3').innerHTML;
    items[4]= document.getElementById('3').innerHTML;
    
function rotater() {
    document.getElementById("placeholder").innerHTML = items[current];
    current = (current==items.length-1) ? 0 : current + 1;
    setTimeout("rotater()",howOften*1000);
}

function rotater() {
    if(document.layers) {
        document.placeholderlayer.document.write(items[current]);
        document.placeholderlayer.document.close();
    }
    if(ns6)document.getElementById("placeholderdiv").innerHTML=items[current]
        if(document.all)
            placeholderdiv.innerHTML=items[current];

    current = (current==items.length-1) ? 0 : current + 1; //increment or reset
    setTimeout("rotater()",howOften*1000);
}
window.onload=rotater;
//-->
// end image rotator for studio pics
