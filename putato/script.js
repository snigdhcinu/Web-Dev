function makeRequest(){
if (window.XMLHttpRequest) { // Browsers like Mozilla, Safari, IE7+ ...
    httpRequest = new XMLHttpRequest();
} else if (window.ActiveXObject) { // Browsers like IE 6 and older
    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
}
httpRequest.onreadystatechange = function(){
	if (httpRequest.readyState === XMLHttpRequest.DONE) {
    // The response was received
    	if (httpRequest.status === 200) {
    	// Response was a success
    	let response=httpRequest.responseText;
    	// console.log(response);
    	// parsing response to json
    	response=JSON.parse(response);
    	// console.log(response.place);
        document.getElementById('card-body').style.borderStyle='solid';
        document.getElementById('place_url').style.display='block';
        document.getElementById('place').style.display='block';
        document.getElementById('place_url').href=`${response.place.place_url}`
        document.getElementById('card').style.display='block';
        document.getElementById('greeting').innerHTML=`Best time to visit ${response.place.name}`;
        document.getElementById('card-image').innerHTML=`<img src='${response.place.image}'>`;
        document.getElementById('address').innerHTML=`${response.place.name}   ${response.place.location}`;
        document.getElementById('details').innerHTML=`${response.place.detail}`;
        document.getElementById('last_hit_on').innerHTML=`Last updated on:- ${response.place.last_hit_on.slice(0,10)}`;
        document.getElementById('place_url').innerHTML=` ${response.place.name}`;
    	// document.getElementById('result').innerHTML=response

	} else {
		console.log('There was a problem with the request');
	}
} else {
    console.log('Not ready yet');
}
}
httpRequest.open('GET', 'http://node.uttarakhandtraveller.com/places/1', true);
console.log('the request is :'+httpRequest);
httpRequest.send();
}
