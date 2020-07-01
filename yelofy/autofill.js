
if(localStorage.getItem('pin')!=undefined){
let response=confirm('want to use credentials saved for this page ?')
if(response=='true'){

document.getElementsByTagName('input')[0].value=localStorage.getItem('id');
document.getElementsByTagName('input')[1].value=localStorage.getItem('pin');
}
// localStorage.clear();	// To clear local storage
}
// localStorage.clear();	// To clear local storage