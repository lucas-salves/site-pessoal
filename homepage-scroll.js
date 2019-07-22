window.onload = function(){
    let servicesAreaContainer = document.getElementById('services-area-container');
    let serviceTitle = document.getElementById('service-title');
    let btnDownArrows = document.getElementsByClassName('scroll-down-arrows');
    btnDownArrows[0].addEventListener("click", function(){
        document.getElementById('services-area').scrollIntoView({behavior: 'smooth'});
        
    });
    
    let flag = true;
    window.addEventListener("scroll",scrollFadeElements);
    function scrollFadeElements(){
        if(window.pageYOffset > 680){
           if(flag){
                flag = false;               
               serviceTitle.style.animation = 'services 1s';
                servicesAreaContainer.style.animation = 'services 3s';
               serviceTitle.style.opacity = '1';
               servicesAreaContainer.style.opacity = '1';
            }
        }
    }
}