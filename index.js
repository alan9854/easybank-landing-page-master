const burger = document.querySelector('.header_img');
const side_bar = document.querySelector('.mob_display');
let x = true;

burger.addEventListener('click',function(){
    if(x == true){
        side_bar.classList.remove("mob_display");     
        x = !x;
       
    }
     else{
        side_bar.classList.add("mob_display");
        x = !x;
     }
    
})
