const clock = document.querySelector('.clock');



function runClock(){
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var mins = currentTime.getMinutes();
    var secs = currentTime.getSeconds();
    if (hours>12){
        var time = 'PM';
        hours-=12;
    }
    else if(hours==0){
        time = 'AM';
        hours = 12;
        
    }
    else{
        time = 'AM';
    }
    hours=hours<10?'0'+hours:hours;
    mins=mins<10?'0'+mins:mins;
    secs=secs<10?'0'+secs:secs;

    clock.innerHTML= `${hours} : ${mins} : ${secs} ${time} `;

}
//runClock();

setInterval(runClock, 1000);