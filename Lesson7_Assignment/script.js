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
