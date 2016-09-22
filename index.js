var w1_nl = document.getElementById("w1-nl");
var w2_nl = document.getElementById("w2-nl");
var w3_nl = document.getElementById("w3-nl");
var w4_nl = document.getElementById("w4-nl");
var w5_nl = document.getElementById("w5-nl");
var w6_nl = document.getElementById("w6-nl");
var w7_nl = document.getElementById("w7-nl");
var w8_nl = document.getElementById("w8-nl");
var w9_nl = document.getElementById("w9-nl");
var w10_nl = document.getElementById("w10-nl");
var w1_fa = document.getElementById("w1-fa");
var w2_fa = document.getElementById("w2-fa");
var w3_fa = document.getElementById("w3-fa");
var w4_fa = document.getElementById("w4-fa");
var w5_fa = document.getElementById("w5-fa");
var w6_fa = document.getElementById("w6-fa");
var w7_fa = document.getElementById("w7-fa");
var w8_fa = document.getElementById("w8-fa");
var w9_fa = document.getElementById("w9-fa");
var w10_fa = document.getElementById("w10-fa");
var val = 1;
function woordjes(){
  val++;
  var para = document.getElementById("para");
  if(val < 11){
  var woordjes = document.getElementById("woordjes");
  woordjes.innerHTML += '<input type="text" class="w-search" id="w'+val+'-nl" oninput="vraag();" placeholder="franse woordjes..."/><input type="text" class="w-search" id="w'+val+'-fa" oninput="vraag();" placeholder="nederlandse woordjes..."/><br/>';
  }else{
  para.style.color = "red";
  para.innerHTML = "U heeft het maximale aantal woorden bereikt!";
  }
  }
  function check(){
  }
  function vragen(){
  var vragen = document.getElementById("Vragen");
  vragen.innerText = w1_nl.value;
  }
