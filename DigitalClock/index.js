const elHour = document.getElementById("hour");
const elMinute = document.getElementById("minute");
const elSecond = document.getElementById("second");
const elAmpm = document.getElementById("ampm");

function updateClock(){
    let hour= new Date().getHours();
    let minute= new Date().getMinutes();
    let second=new Date().getSeconds();
    let ampm= "AM";
        
    if(hour>12){
        hour-=12;
        ampm="PM";
    }else{
        ampm="AM";
    }
    hour=(hour<10)? "0"+hour:hour; 
    minute=(minute<10)? "0"+minute:minute; 
    second=(second<10)? "0"+second:second; 
    
    elHour.innerHTML=hour;
    elMinute.innerText=minute;
    elSecond.innerHTML=second;
    elAmpm.innerText=ampm;

    setTimeout(()=>{
        updateClock();
    },1000);

}
updateClock();