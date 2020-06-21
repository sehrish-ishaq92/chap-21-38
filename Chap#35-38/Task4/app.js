 document.write("<h1>Chap#35-38  Task4</h1>","<br>");
 
 var input1=parseInt(prompt("Enter value 1"));
var input2=parseInt(prompt("Enter value 2"));

 function name(){
 	 var func=parseInt(prompt("enter functionality you want to perform","Press1 for add,Press2 for Subtract ,Press3 for Multiply,Press4 for Divison"));

if (func==1){
	result1=(input1 + input2)
	return result1;
}
if (func==2){
	result1=(input1 - input2)
	return result1;
}
if (func==3){
	result1=(input1 * input2)
	return result1;
}
if (func==4){
	result1=(input1 / input2)
	return result1;
}
}

name();
document.write("By adding two Numbers: " , input1 + "+" +input2 + "=" + result1);
