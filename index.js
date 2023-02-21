const hourEl = document.getElementById("hours");
const minuteEl= document.getElementById("minutes");
const secondsEl= document.getElementById("seconds");
const ampmEl= document.getElementById("ampm");

function updateClock() {
	let h = new Date().getHours();
	let m = new Date().getMinutes();
	let s = new Date().getSeconds();
	let a= "AM";

	if (h>=12) {
		 a= "PM";
	}else{
		a= "AM";
	}
	h= h < 10 ? "0" + h : h;
	m= m < 10 ? "0" + m : m;
	s= s < 10 ? "0" + s : s;
	

	
	hourEl.innerText=h;
	minuteEl.innerText=m;
	secondsEl.innerText=s;
	ampmEl.innerText=a;
	setTimeout(()=>{
		updateClock();

	},1000);
}
updateClock();