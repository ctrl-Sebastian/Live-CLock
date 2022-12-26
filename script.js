function displayTime(){
    var dateTime = new Date();
    var hours = dateTime.getHours();
    var min = dateTime.getMinutes();
    var secs = dateTime.getSeconds();
    var session = document.getElementById('session');
    
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = secs;
}

function changeFormat()
{
    if(hours > 12){
        hours = hours - 12;
    }
    if (hours >= 12)
    {
        session.innerHTML= "PM";
    } else {
        session.innerHTML= "AM";
    }
}
setInterval(displayTime, 10);