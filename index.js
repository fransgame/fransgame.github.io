var val = 1;
function woordjes(){
  val++;
  var para = document.getElementById("para");
  if(val < 12){
  var woordjes = document.getElementById("woordjes");
  woordjes.innerHTML += '<input type="text" class="w-search" id="w'+val+'-nl" placeholder="franse woordjes..."/><input type="text" class="w-search" id="w'+val+'-fa" placeholder="nederlandse woordjes..."/><br/>';
  }else{
  para.style.color = "red";
  para.innerHTML = "U heeft het maximale aantal woorden bereikt!";
  }
  }
