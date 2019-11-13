const heading = document.getElementById('counter');
const heartButton = document.getElementById("heart");
let i = 0;
let c;
let likes = []


let paused = false; //clock is started
document.addEventListener("DOMContentLoaded", counter()); //counter function call immedicatly but could add it to body.onload

function counterAdv(){
  i++;
  heading.innerText = i ;
}

function counterSub(){
  i--;
  heading.innerText = i ;
}


function counter(){
 c = setInterval(counterAdv, 1000);
}


function counterPause(event){
  if (!paused) {
    paused = true;
    clearInterval(c);
    event.target.innerText = "resume";
  }
  else counterResume();
}

function counterResume(){
  paused = false;
  counter();
  event.target.innerText = "pause";
// i should be something else now so can run counterAdv again
 }

function likey(){ //when it was called function heart() it was getting confused with button id and not working
    if (likes[i]) { //does array have something in the position for counter value? the var i alwaus ref;ects va;ue of counter as it was declared globally
    likes[i]++;
    } else {
     likes[i] = 1; // this will store a like in the likes array at index position that corresponds to the counter value like [empty,empty,1,empty, empty,2. empty]
   }
  displayHearts();
}

 function displayHearts(){
   let ul = document.getElementsByClassName("likes")[0]; //this returns an array because could me many elements in that class so you have to specificy which position in aray has info - stupid!
   let rows = '';
    likes.forEach(function(item, index) {
    rows += '<li>'+ index + ' liked ' + item + ' times</li>'
    });
    ul.innerHTML = rows; // you're rerendering it every time - easier
 }
