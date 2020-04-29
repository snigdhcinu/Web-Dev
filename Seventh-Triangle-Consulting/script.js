var text=document.getElementById('header');
var price=document.getElementById('price');
var price1=document.getElementById('price-1');
var price2=document.getElementById('price-2');
var input=document.getElementById('qty-val');
var totalPrice=document.getElementById('total-amt');
function highlight1()
	{
		price1.style.backgroundColor="green";
		price1.style.color="white";
		price2.style.backgroundColor="white";
		price2.style.color="black";
		header.innerText="Aashirwad Atta- Whole Wheat, 10kg Pouch";
		price.innerText='Rs 399';
	}
function highlight2()
	{
		price2.style.backgroundColor="green";
		price2.style.color="white";
		price1.style.backgroundColor="white";
		price1.style.color="black";
		header.innerText="Aashirwad Atta- Whole Wheat, 5kg Pouch";
		price.innerText='Rs 209';
	}
function eval()
	{	
		if(input.value==="")
			{
				alert('Enter the quantity details.')
			}
		if(price.innerText==='Rs 399');
			{
				let res=input.value*399;
				totalPrice.innerText='= Rs'+res;
			}
		if(price.innerText==='Rs 209');
			{
				let res=input.value*209;
				totalPrice.innerText='= Rs'+res;
			}
	}