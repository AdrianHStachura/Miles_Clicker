

let num_of_cookies = 0;
let multipler = 1;
document.getElementById("num_of_cookies").textContent = num_of_cookies;



function handleClick(){
    num_of_cookies = num_of_cookies + (1 * multipler);
    document.getElementById("num_of_cookies").textContent = num_of_cookies;
    const image = document.querySelector(".cookie img");
    image.classList.remove('animate'); void image.offsetWidth; image.classList.add('animate');
}
