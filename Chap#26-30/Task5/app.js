document.write("<h1>Chap#26-30  Task5</h1>");
var head=prompt("Enter heads username");
var tail=prompt("Enter tails username");;

var toss=Math.random()*2;
var value=Math.floor(toss);

if (value==0){
	alert("Heads " + head + " win the toss")
}
else{
	alert("Tails " + tail + " win the toss")
}
