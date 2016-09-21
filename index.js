var val = 1;
function woordjes(){
  val++;
  var woordjes = document.getElementById("woordjes");
  woordjes.innerHTML += '<input type="text" class="w-search" id="w'+val+'-nl" placeholder="franse woordjes..."/><input type="text" class="w-search" id="w'+val+'-fa" placeholder="nederlandse woordjes..."/><br/>';
}
