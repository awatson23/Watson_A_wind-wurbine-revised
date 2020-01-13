//button One

var button = document.getElementById("S2btn-1"),
    S2details = document.getElementById("S2info-1");

button.addEventListener("click", function(){
    S2details.style.display = 'block';
}, false);

//button two

var button2 = document.getElementById("S2btn-2"),
    S22details = document.getElementById("S2info-2");

button2.addEventListener("click", function(){
    S22details.style.display = 'block';
}, false);

//button three

var button3 = document.getElementById("S2btn-3"),
    S23details = document.getElementById("S2info-3");

button3.addEventListener("click", function(){
    S23details.style.display = 'block';
}, false);

//button four

var button4 = document.getElementById("S2btn-4"),
    S24details = document.getElementById("S2info-4");

button4.addEventListener("click", function(){
    S24details.style.display = 'block';
}, false);

//button five

var button5 = document.getElementById("S2btn-5"),
    S25details = document.getElementById("S2info-5");

button5.addEventListener("click", function(){
    S25details.style.display = 'block';
}, false);

//exit button

S2welcome = document.getElementById("S2welcome");

exits = document.querySelectorAll(".exits");

function closeBox() {
    S2details.style.display ='none';
    S22details.style.display = 'none';
    S23details.style.display = 'none';
    S24details.style.display = 'none';
    S25details.style.display = 'none';
    S2welcome.style.display = 'none';
  }
  
  for(var i = 0; i < exits.length; i++) {
    exits[i].addEventListener('click', closeBox, false);
  }  