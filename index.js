var val = 1;
function woordjes(){
  val++;
  var para = document.getElementById("para");
  if(val < 11){
  var woordjes = document.getElementById("woordjes");
  woordjes.innerHTML += '<input type="text" class="w-search" id="w'+val+'-nl" placeholder="nederlandse woordjes..."/><input type="text" class="w-search" id="w'+val+'-fa" placeholder="franse woordjes..."/><br/>';
  }else{
  para.style.color = "red";
  para.innerHTML = "U heeft het maximale aantal woorden bereikt!";
  }
  }
  function hide(){
  var vragen = document.getElementById("Vragen");
  var ans = document.getElementById("ans");
  var play_btn = document.getElementById("play-btn");
  var check_btn = document.getElementById("check-btn");
  var next_btn = document.getElementById("next-btn");
  next_btn.style.display = "none";
  check_btn.style.display = "none";
  play_btn.style.display = "block";
  vragen.style.display = "none";
  ans.style.display = "none";
  }
  function check(){
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
    var vragen = document.getElementById("Vragen");
    var ans = document.getElementById("ans");
    var check_btn = document.getElementById("check-btn");
    var next_btn = document.getElementById("next-btn");
    if(vragen.innerHTML = "Wat betekent: "+w1_nl.value){
     if(ans.value == w1_fa.value){
       vragen.innerHTML = "Thats true!";
       check_btn.style.display = "none";
       next_btn.style.display = "inline-block";
      }
    }
    if(vragen.innerHTML = "Wat betekent: "+w2_nl.value){
     if(ans.value == w2_fa.value){
       vragen.innerHTML = "Thats true!";
       check_btn.style.display = "none";
       next_btn.style.display = "inline-block";
      }
    }
  }
  function next(){
    var w2_nl = document.getElementById("w2-nl");
    var w2_fa = document.getElementById("w2-fa");
    var vragen = document.getElementById("Vragen");
    var ans = document.getElementById("ans");
    var next_btn = document.getElementById("next-btn");
    var check_btn = document.getElementById("check-btn");
    check_btn.style.display = "inline-block";
    next_btn.style.display = "none";
    vragen.innerHTML = "Wat betekent: "+w2_nl.value;
  }
  function vragen(){
var w1_nl = document.getElementById("w1-nl");
var w1_fa = document.getElementById("w1-fa");
var vragen = document.getElementById("Vragen");
var ans = document.getElementById("ans");
var play_btn = document.getElementById("play-btn");
var check_btn = document.getElementById("check-btn");
check_btn.style.display = "inline-block";
play_btn.style.display = "none";
vragen.style.display = "block";
ans.style.display = "inline-block";
vragen.innerHTML = "Wat betekent: "+w1_nl.value;
}
