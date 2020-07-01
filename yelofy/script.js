let i=0;	// Implies checkbox not selected
function savePassword(){
	if(i==0){
		// console.log('checkbox selected')
	i=1; 	// Implies checkbox selected
	let password=localStorage.getItem('pin');
	let password_input=document.getElementsByTagName('input')[1].value;
	let email_input=document.getElementsByTagName('input')[0].value;
	console.log(password_input);
	if(password==undefined){
		// if(password_input!=""&&email_input!=""){
		localStorage.setItem('pin',password_input);
		localStorage.setItem('id',email_input);
		alert('credentials for this page is saved');
	// 	}
	// 	else{
	// 		alert('Input a value in order to save it!!')
	// 	}
	}
	else{
		// if(password_input==localStorage.getItem('pin'))
		 if(password_input!=localStorage.getItem('pin')){
			localStorage.setItem('pin',password_input);
			localStorage.setItem('id',email_input);
			alert('new credentials updated');
		}
	}
}
else if(i==1){
	i=0;	// Implies checkbox has again be unchecked
	// console.log(`checkbox unselected`);
}
}