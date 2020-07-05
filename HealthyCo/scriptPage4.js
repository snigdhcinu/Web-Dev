 // script file

 // Implement carausel logic.
 // Set object for each person's photo, name, profession, review.
 // Implement the next and prev buttons.
 // Implement the random person's review generator.

let _1={
	name:'Stinger John',
	title:'Industrialist',
	review:"I love to start my day with a box of their fruit boxes, it keeps me full up until afternoon "
};
let _2={
	name:'Smith Jones',
	title:'Enterpreneur',
	review:'I am impressed by the innovation they are bringing to the industry '
};
let _3 ={
	name:'Alam Khan', 
	title: 'Engineer', 
	review:'It is difficult for me to pick vegetables daily, thanks to Healthy Company, I don\'t have to worry anymore '
};
let _4={
	name:'Peter Kings', 
	title: 'Singer', 
	review:'For me its important that I eat only what is good for my body, and the variety of organic vegetables offered by Healthy Company is astonishing'
};
let _5 ={
	name:'Momduda Yamiza', 
	title: 'Actress', 
	review:'It is important that I stay fit, thanks to the healthy foods provided by Healthy Company, all I need to worry about is cooking'
};
let _6 ={
	name:'Selina Khan', 
	title: 'Student', 
	review:'I barely have time to cook properly, however because of the veggies from Healthy Company I don\'t need to worry about cleaning properly'
};
let _7 ={
	name:'Wilson Smith', 
	title: 'Athelete', 
	review:'Being an athlete, it is important for me to eat only the best, my choice Healthy Company'
};
let _8 ={
	name:'Will Smith', 
	title: 'Actor', 
	review:'minim veniam, quis jdkf eruei aod fdfe fdasd fdfj fjdfjie  afiajf jf eif nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
};
let _9 ={
	name:'Abraham Lincon', 
	title: 'Politician', 
	review:' Duis aute irure dolor in reprehenderit adfse in voluptate velit esse cillum dolore eu fugiat'
};
let _10 ={
	name:'Tony Stark', 
	title: 'Industrialist', 
	review:'uis nostrud exercitation ullamco laboris nisi ufs fad dfdt aliquip ex ea proident, sunt in culpa qui officia deserunt mollit anim id est la'
};
let reviews=[];
reviews.push(_1);
reviews.push(_2);
reviews.push(_3);
reviews.push(_4);
reviews.push(_5);
reviews.push(_6);
reviews.push(_7);
reviews.push(_8);
reviews.push(_9);
reviews.push(_10);
// console.log(reviews[0].name);	// John Snow
let index=0;
 	document.getElementById('pic').src=`photos/${index}.jpg`;
document.getElementById('name').innerText=reviews[index].name;
document.getElementById('designation').innerText=reviews[index].title;
document.getElementById('description').innerText=reviews[index].review;
 function prev(){
 	index-=1;
 	if(index==-1)
 		index=9;
 	document.getElementById('pic').src=`photos/${index}.jpg`;
 	document.getElementById('name').innerText=reviews[index].name;
	document.getElementById('designation').innerText=reviews[index].title;
	document.getElementById('description').innerText=reviews[index].review;
 }
 function next(){
 	index+=1
 	if(index==10)
 		index=0;
 	document.getElementById('pic').src=`photos/${index}.jpg`;
 	document.getElementById('name').innerText=reviews[index].name;
	document.getElementById('designation').innerText=reviews[index].title;
	document.getElementById('description').innerText=reviews[index].review;
 }