let image_val = document.querySelector('img');
image_val.style.height = `${window.innerHeight}px`; //setting the height of image to the height of screen
image_val.style.width = `${window.innerWidth}px`;
let output_value = document.getElementById("intro-output");
let name_value = document.getElementById("name");
let label = document.querySelector("label");
document.querySelector('form').addEventListener('submit',(e)=>{
    e.preventDefault();
    output_value.textContent = `Hey there! ${name_value.value}, If you wanna know me- you gotta wait. The page is under construction......`
    label.textContent="";
    
});
