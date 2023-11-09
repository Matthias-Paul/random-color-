let btn = document.querySelector("#btn")
let body = document.querySelector("body")
let col = document.querySelector("#col")
let color = ["red","blue","green","yellow","black","pink","purple","orange","lightblue","darkblue","magenta","lightgreen","brown","gold","silver","gray","lightgray","maroon","cyan","violet","chocolate","aqua","teal","coral","crimson","khaki","plum",]


btn.addEventListener("click", function(){
  
  let random = Math.floor(Math.random()* color.length)
  body.style.backgroundColor = color[random]
  
  if(body.style.backgroundColor == color[random] ){
    col.innerHTML = color[random]
  }

if(body.style.backgroundColor == color[random] ){
    col.style.color = color[random]
    btn.style.color = color[random]
  }
  
})





