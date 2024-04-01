//your JS code here. If required.
let counter=0;
let counterBtn=document.getElementById("incrementBtn");
let count=document.getElementById("counter");
counterBtn.addEventListener("click",()=>{
	alert(counter)
	count.innerText=++counter;
	
})
