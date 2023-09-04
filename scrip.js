const fanwing = document.getElementById('fanWings');

const buttons = document.querySelectorAll('.btn');

buttons.forEach((button)=>{
	button.addEventListener('click', function(e){
		const removeClasses = ()=>{
			fanwing.classList.remove('animation');
			fanwing.classList.remove('animation1X');
			fanwing.classList.remove('animation2X');
			fanwing.classList.remove('animation3X');
		}

		const removedisable = ()=>{
			for(let i = 1; i<4; i++ ){
				document.getElementById(`${i}X`).classList.remove('disable');
			}
		}
		const adddisable = ()=>{
			for(let i = 1; i<4; i++ ){
				document.getElementById(`${i}X`).classList.add('disable');
			}
		}

		if(e.target.dataset['btn'] === "start")
		{
			removeClasses();
			removedisable();
			fanwing.classList.add('animation');	
		}
		else if(e.target.dataset['btn'] === "1X")
		{
			removeClasses();
			fanwing.classList.add('animation1X');	
		}
		else if(e.target.dataset['btn'] === "2X")
		{
			removeClasses();
			fanwing.classList.add('animation2X');	
		}
		else if(e.target.dataset['btn'] === "3X")
		{
			removeClasses();
			fanwing.classList.add('animation3X');	
		}
		else {
			removeClasses();
			adddisable();
		}
	})
})
