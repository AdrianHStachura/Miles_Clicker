
let total_num_of_cookies = 0;
let num_of_cookies = 0;
let multiplier = 1;
let cps = 0;
tickspeed = 500; // in ms
let num_of_cookies_manually = 0;
let total_clicks = 0;
let total_seconds = 0;
let total_minutes = 0;
let total_hours = 0;

// to access ex: bots.bot1 += 1;
let bots = {
    bot1: 0,
    bot2: 0,
    bot3: 0,
    bot4: 0,
    bot5: 0,
    bot6: 0,
    bot7: 0,
    bot8: 0,
    bot9: 0,
    bot10: 0,
  };

const prodratebots = {
    bot1: 0.2,
    bot2: 1,
    bot3: 5,
    bot4: 10,
    bot5: 25,
    bot6: 50,
    bot7: 100,
    bot8: 1000,
    bot9: 10000,
    bot10: 100000,
}

let botscost = {
    bot1: 0.2,
    bot2: 1,
    bot3: 5,
    bot4: 10,
    bot5: 25,
    bot6: 50,
    bot7: 100,
    bot8: 1000,
    bot9: 10000,
    bot10: 100000,
}
  



document.getElementById("num_of_cookies").textContent = num_of_cookies;
document.getElementById("total_num_of_cookies").textContent = total_num_of_cookies

function buttonbot1(){
    if (num_of_cookies >= 10){
        num_of_cookies -= 10;
        cps += 1;
        document.getElementById("num_of_cookies").textContent = num_of_cookies;
        document.getElementById("cps").textContent = cps;
    }
    
    
}





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
    
    num_of_cookies += cps;
    total_num_of_cookies += cps;
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

