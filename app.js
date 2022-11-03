'use strict'; 
 
const switcher = document.querySelector('.btn'); 
 
switcher.addEventListener('click', function() { 
    
    const className = document.body.className; 
    if(className == "light-theme") { 
        document.body.className = 'dark-theme';
        this.textContent = "Dark"; 
    } else { 
        document.body.className = 'light-theme';
        this.textContent = "Light"; 
    } 
 
    console.log('current class name: ') + className; 
 
});