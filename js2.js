function clock(){
	let clock_space = document.getElementById('clock')

	let date = new Date()
	let hours = date.getHours()
	let minutes = date.getMinutes()
	let second = date.getSeconds()

	if(hours<10) {hours = '0' + hours}
	if(minutes<10) {minutes = '0' + minutes}
	if(second<10) {second = '0' + second}

	clock_space.innerHTML = hours + ':' + minutes + ':' + second
}
setInterval(()=>clock(),100)