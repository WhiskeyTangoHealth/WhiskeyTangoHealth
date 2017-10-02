// JavaScript for AikidoPage
// Written by: Sam Morrison

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ JS for class schedueler
  var displayId = ['Beginner Classes M W F Evenings 6:00 P.M. - 7:00 P.M.','Advanced Classes M W F Evenings 7:00 P.M. – 8:00 P.M.','Chuck Norris has now been notified of your claim. Don\'t bother running, you\'ll just die tired.','Please make a selection first']

  function displayCheck(){
     if (document.getElementById('1').checked) {
         alert(displayId[0]);
     } else if(document.getElementById('2').checked) {
         alert(displayId[1]);
     } else if(document.getElementById('3').checked){
         alert(displayId[2]);
     } else {
         alert(displayId[3]);
     }
   }

   var thing = document.getElementById('submitButton2');
   thing.addEventListener("click", displayCheck, false);
