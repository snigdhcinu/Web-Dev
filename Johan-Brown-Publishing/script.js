alert("Press on the right corner of the picture for next story");
alert("press on the left corner of the picture for the previous story");
let story=["This is a story about a boy","who was very obedient","he lived with his grandmother",
"one day he went into the forest to gather woods","while gathering woods, he lost track of time",
"by the time he realized it, it was too dark to see","and eventually he realized he had lost his way",
"with roaring of wild animals and hooting of owls, he was scared","however he did not give up and kept on walking",
"he walked till he could walk no more and when his legs gave up, he froze and saw something",
"it was something that he was seeing for the first time, something which was beyond his imagination",
"it was.....","The stars in the clear sky with several constellations each telling a different story",
"Thank you."];
let limit=story.length;
let offset=0;
document.getElementById('story-line').innerText=story[offset];
// console.log(limit); // 14 
function prev(){
	let index=Math.floor(Math.random()*5);
	if(offset==0)
		return 
	else
		offset-=1;
	document.getElementById('container').style.backgroundImage="url('photos/"+index+".jpg')"
	document.getElementById('story-line').innerText=story[offset];
}

function next(){
	let index=Math.floor(Math.random()*5);
	if(offset==13)
		return
	else
		offset+=1;
	if(offset==12)
		document.getElementById('container').style.backgroundImage="url('photos/6.jpg')"
	else
		document.getElementById('container').style.backgroundImage="url('photos/"+index+".jpg')"
	document.getElementById('story-line').innerText=story[offset];

}
