log()
function log(){
  //getFirstSelector(selector)
  //nestedTarget()
  //increaseRankBy(n)
  //deepestChild()
  console.log(document.querySelectorAll('.ranked-list li'))
}
function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  var x = document.querySelectorAll('.ranked-list li')
  for(var i=0;i<x.length;i++){
    x[i].innerHTML = parseInt(x[i].innerHTML)+n
  }
}

function deepestChild(){
  var x = document.querySelector('div#grand-node')
  while(x.childElementCount>0){
    x=x.children[0]
  }
  return x
}