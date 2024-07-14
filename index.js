const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
function changeText(){
const d = new Date();
let day=d.getDate();
let month=d.getMonth()+1;
let year=d.getFullYear();
let Hours=d.getHours();
let Minutes=d.getMinutes();
let Seconds=d.getSeconds();
document.getElementById("hour").innerHTML=Hours;
document.getElementById("minute").innerHTML=Minutes;
document.getElementById("second").innerHTML=Seconds;
document.getElementById("day").innerHTML=day;
document.getElementById("month").innerHTML=month;
document.getElementById("year").innerHTML=year;
document.getElementById("weekday").innerHTML=days[d.getDay()];
}

setInterval(changeText, 1000);