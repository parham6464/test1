var name = window.prompt("Enter your number: ");
var num2 = window.prompt("enter your number : ");

var amaliat = window.prompt ("chose zarb , taghsim , jam , menha");
var sum=0;

if (amaliat === "zarb")  {

	sum = number(num1) * number (num2);
	alert (sum);

}
else if (amaliat === "tagshim"){

		sum = number(num1) / number (num2);
		alert (sum);


}
else if (amaliat ==="jam"){
			sum = number(num1) / number (num2);
			alert(sum);


}



else if (amaliat === "menha"){

			sum = number(num1) / number (num2);
			alert (sum);


}

else {
	alert("meghdare monaseb vared konid");
}