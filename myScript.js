function myFunction() {

  var ar = ['one','two','three'];
  var txt = "";
  for(var i = 0; i<ar.length - 1;i++){
    txt += ar[i] + "<br>";
  }
  txt += ar[i];
  document.getElementById("demo").innerHTML = txt;
}
