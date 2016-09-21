var val = 1;
function woordjes(){
  val++;
  if(val < 11){
  var woordjes = document.getElementById("woordjes");
  var para = document.getElementById("para");
  woordjes.innerHTML += '<input type="text" class="w-search" id="w'+val+'-nl" placeholder="franse woordjes..."/><input type="text" class="w-search" id="w'+val+'-fa" placeholder="nederlandse woordjes..."/><br/>';
  }
  }
