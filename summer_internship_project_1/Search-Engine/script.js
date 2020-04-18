let bgImg=["bg1.jpg","bg2.jpg","bg3.jpg","bg4.jpg","bg5.jpg","bg6.jpg","bg7.jpg","bg8.jpg","bg9.jpg"];
let img=document.getElementById('main-body');
var i=Math.random()*bgImg.length;
i=Math.floor(i);
console.log(i);
console.log(img.style.backgroundImage)
img.style.backgroundImage='url("'+bgImg[i]+'")';