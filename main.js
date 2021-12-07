var dev = document.querySelector("dev");
var cercle = document.querySelector("#cercle");

var pointerX = -1;
var pointerY = -1;
setInterval(()=>{
    document.onmousemove = function(event) {
        pointerX = event.pageX;
        pointerY = event.pageY;
    }
    var x=5+(pointerX/ $( document ).width() * 100);
    var y=5+(pointerY/ $( document ).height() * 100);
    cercle.style=`top:${y}%;left: ${x}%`;

    console.log("x ="+x+"y"+y);
    // console.log(x)
},1000)