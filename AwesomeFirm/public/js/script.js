// This is the script file

let static = 'public/images/'
let images = ['drucker.png','jim.png','jrd.png','kaku.png','kalam.png','murty.png','ratan.png','vinton.png','warren.png'];
let names = ['Prof. Peter Drucker', 'Jim Collins','JRD Tata','Dr. Michio Kaku','Dr. APJ Abdul Kalam','N.R Narayana Murthy','Ratan Tata','Dr. Vinton Cerf','Warren Buffett'];
let designations = ['World Class Professor','Thought Leader','Visionary & Pioneer','Futurist','World Leader','Distinguished Enterpreneuer','Global Business Leader','Innovator','Business Legend'];

let counter = 0;
let limit = images.length;
let image = document.getElementById('img');
let name = document.getElementById('name');
let designation = document.getElementById('designation');

// Setting Initial Value :- 
	image.src = static+images[counter];
	name.innerText = names[counter];
	designation.innerText = designations[counter];



function prev(){
	if(counter == 0){
		counter = limit - 1;
	}
	else{
		counter -= 1;
	}
	image.src = static+images[counter];
	name.innerText = names[counter];
	designation.innerText = designations[counter];
}

function next(){
	if(counter == limit - 1){
		counter = 0;
	}
	else{
		counter += 1;
	}
	image.src = static+images[counter];
	name.innerText = names[counter];
	designation.innerText = designations[counter];
}
