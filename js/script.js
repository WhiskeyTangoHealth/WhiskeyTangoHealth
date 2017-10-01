function calcBmi () {
  var height = document.getElementById("height").value;
  var weight = document.getElementById("weight").value;
  //converting pounds to kilograms and inches to centemeters
  var kilograms = (weight * .45);
  var centemeters = (height * .025) * (height * .025);
  //calculating BMI
  var bmi = (kilograms / centemeters);

  alert("Your BMI is: " + bmi);
}

document.getElementById("button").
    addEventListener("click", calcBmi, false);


function submitInfo() {
  var name = document.getElementById("nameinput");
  var email = document.getElementById("emailinput");
  (name.value && email.value) ?
  alert("Thank you! You have signed up for our monthly newletter!") : alert("Please fill in all the fields to receive our newsletter.");
  }

  document.getElementById("submit").
  addEventListener("click", submitInfo, false);
