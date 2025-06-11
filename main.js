
let total_num_of_cookies = 0;
let num_of_cookies = 100000;
let multiplier = 1;
let cps = 0;
tickspeed = 500; // in ms
let num_of_cookies_manually = 0;
let total_clicks = 0;
let total_seconds = 0;
let total_minutes = 0;
let total_hours = 0;
let total_structures = 0;



// to access ex: bots[i].cost = set number

let bots = [
  { name: "bot1", count: 0, cost: 10, rate: 0.2 },
  { name: "bot2", count: 0, cost: 100, rate: 1 },
  { name: "bot3", count: 0, cost: 500, rate: 5 },
  { name: "bot4", count: 0, cost: 1000, rate: 10 },
  { name: "bot5", count: 0, cost: 10000, rate: 25 },
]




function upgradebutton(index){
    if (num_of_cookies >= bots[index].cost){
        num_of_cookies -= bots[index].cost;
        total_structures += 1;
        cps = Math.round((cps + bots[index].rate) * 10) / 10;
        bots[index].cost = Math.round(bots[index].cost * 1.5);
        
        document.getElementById("num_of_cookies").textContent = num_of_cookies;
        document.getElementById("cps").textContent = cps;
        document.getElementById("total_structures").textContent = total_structures;
        document.getElementById(`cost-${index}`).textContent = bots[index].cost;
        
    }
    
    
}



document.getElementById("num_of_cookies").textContent = num_of_cookies;
document.getElementById("total_num_of_cookies").textContent = total_num_of_cookies


function handleClick(){
    num_of_cookies = num_of_cookies + (1 * multiplier);
    total_num_of_cookies = total_num_of_cookies + (1 * multiplier);
    num_of_cookies_manually += (1 * multiplier);
    total_clicks += 1;
    document.getElementById("num_of_cookies_manually").textContent = num_of_cookies_manually;
    document.getElementById("total_clicks").textContent = total_clicks;
    document.getElementById("num_of_cookies").textContent = num_of_cookies;
    document.getElementById("total_num_of_cookies").textContent = total_num_of_cookies
    const image = document.querySelector(".cookie img");
    image.classList.remove('animate'); void image.offsetWidth; image.classList.add('animate');
}

function interval(){
    
    num_of_cookies = Math.round((num_of_cookies + cps) * 10) / 10;
    total_num_of_cookies = Math.round((total_num_of_cookies + cps) * 10) / 10;
    total_seconds += (tickspeed / 1000);
    if (total_seconds == 60){
        total_seconds = 0;
        total_minutes += 1;
        document.getElementById("total_minutes").textContent = total_minutes;
        if (total_minutes == 60){
            total_hours += 1;
            document.getElementById("total_hours").textContent = total_hours;
        }
    }
    if (Number.isInteger(total_seconds)){
        
        document.getElementById("total_seconds").textContent = total_seconds;
        
    }
    
    document.getElementById("num_of_cookies").textContent = num_of_cookies;
    document.getElementById("total_num_of_cookies").textContent = total_num_of_cookies
    setTimeout(tickspeed)

}

setInterval(interval, tickspeed);

