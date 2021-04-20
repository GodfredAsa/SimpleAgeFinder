const button = document.querySelector('#ageBtn');
const displayValue = button.nextElementSibling.firstChild;
console.log(displayValue);

const input2 = document.querySelector('.input2');
const input1 = document.querySelector('.input1');



button.addEventListener('click', ()=>{
//	VALUES OF THE 1ST INPUT
	const year1  = Math.abs(input1.value.slice(0,4));
	const month1 = Math.abs(input1.value.slice(5,7));
	const day1   = Math.abs(input1.value.slice(8,10));

//	VALUES OF THE 2ND INPUT
	const year2  = Math.abs(input2.value.slice(0,4));
	const month2 = Math.abs(input2.value.slice(5,7));
	const day2   = Math.abs(input2.value.slice(8,10));
	
//	FIDNING THE DIFFERENCE
	const year = year2 - year1;
	const month = month2 - month1;
	const day = day2 - day1;
	
//	displayValue.textContent= 
	alert( year + 'years, ' + month + 'months, '  + 'and ' + day +  ' days');
});