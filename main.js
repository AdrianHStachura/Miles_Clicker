

let num_of_cookies = 0;
document.getElementById("num_of_cookies").textContent = num_of_cookies;



function handleClick(){
    num_of_cookies ++;
    document.getElementById("num_of_cookies").textContent = num_of_cookies;
    const image = document.querySelector(".cookie img");
    image.classList.remove('animate'); void image.offsetWidth; image.classList.add('animate');
}