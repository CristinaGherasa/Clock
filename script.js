function updateTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    hours = formatTime(hours);
    minutes = formatTime(minutes);
    seconds = formatTime(seconds);

    var timeString = hours + ":" + minutes + ":" + seconds;
    document.getElementById("time").innerText = timeString;

    setTimeout(updateTime, 1000); 
}

function formatTime(time) {
    if (time < 10) {
        time = "0" + time; 
    }
    return time;
}

updateTime(); 