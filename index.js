var w1:nl = document.getElementById("w1-nl");
var w2:nl = document.getElementById("w2-nl");
var w3:nl = document.getElementById("w3-nl");
var w4:nl = document.getElementById("w4-nl");
var w5:nl = document.getElementById("w5-nl");
var w6:nl = document.getElementById("w6-nl");
var w7:nl = document.getElementById("w7-nl");
var w8:nl = document.getElementById("w8-nl");
var w9:nl = document.getElementById("w9-nl");
var w10:nl = document.getElementById("w10-nl");
var w1:fa = document.getElementById("w1-fa");
var w2:fa = document.getElementById("w2-fa");
var w3:fa = document.getElementById("w3-fa");
var w4:fa = document.getElementById("w4-fa");
var w5:fa = document.getElementById("w5-fa");
var w6:fa = document.getElementById("w6-fa");
var w7:fa = document.getElementById("w7-fa");
var w8:fa = document.getElementById("w8-fa");
var w9:fa = document.getElementById("w9-fa");
var w10:fa = document.getElementById("w10-fa");
var val = 1;
function woordjes(){
  val++;
  var para = document.getElementById("para");
  if(val < 11){
  var woordjes = document.getElementById("woordjes");
  woordjes.innerHTML += '<input type="text" class="w-search" id="w'+val+'-nl" placeholder="franse woordjes..."/><input type="text" class="w-search" id="w'+val+'-fa" placeholder="nederlandse woordjes..."/><br/>';
  }else{
  para.style.color = "red";
  para.innerHTML = "U heeft het maximale aantal woorden bereikt!";
  }
  }
  function check(){
  }
  function vraag(){
  var vragen = document.getElementById("Vragen");
  vragen.innerTEXT = w1:nl.value;
  }
