/*
program name: recipe display application
author: alexandra jimenez
date: april 6, 2016
filename: script.js
*/

//displays the next element after the current target 
function display(event) {
    
   $(event.currentTarget) .next() .fadeIn("slow");
     
}//end of display

//attach event listener to h3 elements to invoke display funciton when clicked 

   $("h3") .click(display);
   
 //*************Extras***********************//  
   
//perform at least one DOM traversal -->

$("h1").append("<center>* Vegan Betty Crocker *</center>")


//perform at least one CSS change -->

//change the background color h3 element when mouse hovers over it
$("h3").hover(function() {
   $(this).css("background-color", "red");
}, function() {
      $(this).css("background-color", "gold");
});
   
   
//perform at least one animation/event -->
function display2(event) {
   
   $(event.currentTarget) .next().animate( {height: 'toggle'}, "fast");
   
}//end of display2


//attach event listener to h3 elements to invoke display funciton when clicked

$("h3") .click(display2);


   //hover() will trigger display2 method each time mouse hovers over header
   
   $("h3").hover(display2);
   



