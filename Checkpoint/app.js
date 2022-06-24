// bài 1
alert("Hello")
function findeven(x){
    if(x>=4 && x<=20){var i = 0
    while(i <= x && i%2 == 0){
        console.log(i);i+=2
    }
}
}
findeven(17)
// bài 4
function currentTime() {
    let date = new Date(); 
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = "AM";
  
    if(h === 0){
        h = 12;
    }
    if(h > 12){
        h = h - 12;
        session = "PM";
     }
  
     h = (h < 10) ? "0" + h : h;
     m = (m < 10) ? "0" + m : m;
     s = (s < 10) ? "0" + s : s;
      
     let time = h + ":" + m + ":" + s + " " + session;
  
    document.getElementById("clock").innerText = time; 
    let t = setTimeout(function(){ currentTime() }, 1000);
  }
  
  currentTime();
  // bài 3
  function numberOnetriangle(){

    
       s = 0;
       for(let m = 0;m <= 4;m++){
        s += Math.pow(10, m)
        console.log(s)
       }
    
}
numberOnetriangle()