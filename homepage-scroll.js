	let btnDownArrows = document.getElementsByClassName('scroll-down-arrows');
	
window.onload = function(){
	let titleService = document.getElementById('service-title');
	let servicesAreaContainer = document.getElementById('services-area-container');
	
	//logica dos botoes de scroll
	btnDownArrows[0].addEventListener("click", function(){
		document.getElementById('services-area').scrollIntoView({
			behavior: 'smooth'
		});
		setTimeout(fadeScrollElements,300);
	});
	
	setTimeout(incrementOpacity,500);

	let	flag = true;
	window.addEventListener("scroll",function(){
		if(window.pageYOffset > 680){							
			if (flag) {
				flag = false;				
				fadeScrollElements();
			}
			
		}
	});

let iFade = 0;
	function fadeScrollElements(){						
		
		if(iFade < 10){
			setInterval(fadeScrollElements,150);
		}else{
			clearInterval();
			return false;
		}
		titleService.style.opacity = '0.'+iFade;
		servicesAreaContainer.style.opacity = '0.'+iFade;
		iFade++;
		
		
	}
	
}
	
	
	/*
		funcao efeito transition no botao de scroll do header quando a pagina carrega
	*/
	let iOpacity = 0;
	function incrementOpacity(){		
		if (iOpacity < 10 ) {			
			setInterval(incrementOpacity,150);			
		}else{			
			clearInterval();			
			return false;
		}
		
		btnDownArrows[0].style.opacity = '0.'+iOpacity;
		iOpacity++;
		
	}

	