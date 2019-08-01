window.onload = function(){
    let servicesAreaContainer = document.getElementById('services-area-container');
    let serviceTitle = document.getElementById('service-title');
    let btnDownArrows = document.getElementsByClassName('scroll-down-arrows');
    
    let siteTitle = document.getElementById('site-title');
    let siteDescription = document.getElementById('site-description');
    let avatarImage = document.getElementById('avatar-image');
    let aboutText = document.getElementById('about-text');
    let headerSliderButtons = document.getElementById('header-slider-buttons');
    
    btnDownArrows[0].addEventListener("click", function(){
        document.getElementById('services-area').scrollIntoView({behavior: 'smooth'});
        
    });
    
    let flag = true;
   

    setTimeout( function(){selectElementToFade(siteTitle,1);},300 );
    setTimeout( function(){selectElementToFade(siteDescription,1);},375 );
    setTimeout( function(){selectElementToFade(avatarImage,1);},400 );
    setTimeout( function(){selectElementToFade(aboutText,1);},440 );
    setTimeout( function(){selectElementToFade(btnDownArrows[0],1);},600 );
    setTimeout( function(){selectElementToFade(headerSliderButtons,1);},640  );

       function selectElementToFade(element, duration){     
       console.log('oi');
       element.style.animation = 'lazyLoadFade '+duration+"s";
    element.style.opacity = '1';
   }
   
    window.addEventListener("scroll", scrollFadeElements);
    function scrollFadeElements(){
        if(window.pageYOffset > 640){
           if(flag){
                flag = false;               
               serviceTitle.style.animation = 'lazyLoadFade 1s';
                servicesAreaContainer.style.animation = 'lazyLoadFade 3s';
               serviceTitle.style.opacity = '1';
               servicesAreaContainer.style.opacity = '1';
            }
        }
    }
}