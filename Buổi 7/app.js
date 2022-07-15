// bài 1
function student(){
    return Me
}
const Me = {
    name: "Phúc",
    age: 15,
    address: "Hà Nội"
};
console.log(student())
// Bài 2
var smartPhones = [ 
    { name: 'iphone', price: 649 }, 
    { name: 'Galaxy S6', price: 576 }, 
    { name: 'Galaxy Note 5', price: 489 } 
];
let txt = "";

for(let i = 0; i < smartPhones.length; i++ ){
    txt = txt + smartPhones[i].name + ": " + smartPhones[i].price + "<br>";
}

document.getElementById("bai2").innerHTML = txt;

// Bài 3: em tra mạng arrow function
const foo = (x,y,z) => {
    console.log(x,y,z);
};
foo(1,2,3)
const fo = () => alert("Hello")
fo()
const fooo = (a,b) => {
    let m = a+b*100;
    return m
}
document.getElementById("bai3").innerHTML = fooo(1,2);
// Bài 4: em tra mạng dạng ES6
// b1
const findeven = (number) => {
    if(number >= 4 && number <= 20){
        for(let i=0; i <= number; i += 2){
            console.log(i)
        }
    }
}
findeven(16);
// b2: Không biết chuyển sang ES6
// B3
const numberOneTriangle = () => {
    for (let i = 1; i <= 5; i++) {
      text = "";  
      for (let j = 1; j <= i; j++) {
        text += "1"
      }
      text += "<br>";
      document.getElementById("bai4 3").innerHTML += text;
    }
  }
numberOneTriangle()
// B4:
const getRealTime = () => {
    let hour = new Date();
    let day = new Date()
    let minute = new Date();
    let second = new Date();
    document.getElementById("bai4").innerHTML=hour.getHours() + ":" + minute.getMinutes() + ":" + second.getSeconds();
  }
setInterval(getRealTime,1000)
// Nâng cao 
// Bài 1
let a = ["avengers", "captain america", "ironman", "black Panther"];
let b = []
for(x of a){
    let m = x[0].toUpperCase() + x.slice(1,x.length);
    b.push(m);
}
document.getElementById("bai1nc").innerHTML = b;
// Bài 2: bài này em tra mạng
const getLength = (arr) => {
    let a = arr.flat();
    return a.length;
};
document.write(getLength([1,2,3,[4,5]]))