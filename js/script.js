function textChange(){
  document.getElementById('h2').innerHTML= "Hello There!";
}
function showDate(){
  document.getElementById('dh2').innerHTML= Date();
}
function dataRepeat(){
  var message= "Welcome to Mirpur";
  document.getElementById('dr').innerHTML=message.repeat(3);
}
function bulbOn(){
  document.getElementById('bulb').src='images/on.gif';
}
function bulbOff(){
  document.getElementById('bulb').src='images/off.gif';
} 
function fontChange(){
  document.getElementById('cf').style.fontSize= "50px";
}
function fontColor(){
  document.getElementById('fc').style.color= "red";
}
function textShow(){
  document.getElementById('tsh').style.display="block"
}
function textHide(){
  document.getElementById('tsh').style.display="none"
}
function documentWrite(){
  document.write('document.write');
}
//window alert
function windowAlert(){
  window.alert('error');
}
function variable(){
  let x = 5; y = 6; z = x + y;
  document.getElementById('vr').innerHTML= "The value of z is: " + z;
}
