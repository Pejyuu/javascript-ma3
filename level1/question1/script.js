//Use RegEx to validate form

//Blatantly "copied" from tutorial-video. I did type it out myself tho. No copy/paste.
document.getElementById("submit").addEventListener("click", function()
{
  var inputFields = document.getElementsByTagName("input");

  for(var i=0; i < inputFields.length; i++ ){
    var theInput = inputFields[i].value;
    console.log(theInput);

    var thePattern = new RegExp(inputFields[i].pattern);
    var theTest = thePattern.test(theInput);
    console.log(theTest);
  }
})
