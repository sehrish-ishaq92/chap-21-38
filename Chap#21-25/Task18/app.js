document.write("<h1>Chap#35-38  Task18</h1>","<br>");
var text="The quick brown fox jumps over the lazy dog";

lowercase=text.toLowerCase();
occur=lowercase.match(/the/g).length

document.write("TEXT:", text);
document.write("<br>The occurence is: " ,occur + " times");

