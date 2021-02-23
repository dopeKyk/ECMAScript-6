"use strict";
// debugger;

var nodes = document.querySelector("ul");
for (var k = 0; k < nodes.children.length; k++){
  var el = nodes.children[k];
  // el.onclick = function(event){
  //   event.target.style.backgroundColor = "yellow";
  //   console.log(k);
  // }
  addClick(el, k);
};

function addClick(el, num) {
  el.onclick = function(event){
    event.target.style.backgroundColor = "yellow";
    console.log(num);
  }
}

let dummy;
