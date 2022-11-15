let input=document.querySelector('input');
let p = document.querySelector('p');
input.addEventListener("keydown" , (event)=>{
    if (event.code=="KeyA" && event.ctrlKey) {
        document.body.style.backgroundColor='red';
    }
});