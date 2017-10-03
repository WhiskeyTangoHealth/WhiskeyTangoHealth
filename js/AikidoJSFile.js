// JavaScript for AikidoPage
// Written by: Sam Morrison

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ JS for class schedueler
  var displayId = ['Beginner Classes \n  M W F Evenings 6:00 P.M. - 7:00 P.M.',
                   'Advanced Classes M W F Evenings \n  7:00 P.M. – 8:00 P.M.',
                   'Chuck Norris has now been notified of your claim.\n    Don\'t bother running, you\'ll just die tired.',
                   'Please make a selection first']

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


//                  *** sensei's corner/zen sayings ***
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ set a timer
   var mySuperAwesomeTimer = setInterval(zenSaying, 7000);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ grab div heWho and set that equal to mrMiyagi
   var mrMiyagi = document.getElementById('heWho');
   var zenDisplay = ['img/AikidoImg/hoshiKenZenImages/zenOne.png', 'img/AikidoImg/hoshiKenZenImages/zenOneSaying.png', 'img/AikidoImg/hoshiKenZenImages/zenTwoSaying1.png', 'img/AikidoImg/hoshiKenZenImages/zenThreeYodaBlur.png', 'img/AikidoImg/hoshiKenZenImages/ZenFourLee.png', 'img/AikidoImg/hoshiKenZenImages/BaconBread.png'];

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ create zenSaying()
  var i =1;
  function zenSaying(){
    if (i == (zenDisplay.length - 1)){
      document.getElementById('heWho').src = zenDisplay[i];
      i = 0;
    } else {
      document.getElementById('heWho').src = zenDisplay[i];
      ++i;
      }
  }
//                      ^^^ END SENSEI CORNER ^^^
