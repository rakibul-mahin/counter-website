const number = document.querySelector(".value");
const decrease = document.querySelector("#dec");
const reset = document.querySelector("#res");
const increase = document.querySelector("#inc");
let count = 0;

decrease.addEventListener('click', function(){
    count -= 1;
    if(count < 0){
        number.style.color = "red";
    }else if(count == 0){
        number.style.color = "black";
    }else{
        number.style.color = "green";
    }

    number.textContent = count;
});

reset.addEventListener('click', function(){
    count = 0;
    if(count < 0){
        number.style.color = "red";
    }else if(count == 0){
        number.style.color = "black";
    }else{
        number.style.color = "green";
    }
    number.textContent = count
});

increase.addEventListener('click', function(){
    count += 1;
    if(count < 0){
        number.style.color = "red";
    }else if(count == 0){
        number.style.color = "black";
    }else{
        number.style.color = "green";
    }
    number.textContent = count;
})