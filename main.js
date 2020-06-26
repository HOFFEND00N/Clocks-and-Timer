function CalculateClock() {
    let curDate = new Date();
    let tmp = curDate.getFullYear();
    for (let i = 1; i < 5; i++) {
        document.querySelector(".year" + i).textContent = tmp.toString()[i - 1];
    }
    tmp = (curDate.getMonth() + 1).toString();
    document.querySelector(".month1").textContent = tmp.length > 1 ? tmp[0] : 0;
    document.querySelector(".month2").textContent = tmp.length > 1 ? tmp[1] : tmp[0];

    tmp = curDate.getDate().toString();
    document.querySelector(".day1").textContent = tmp.length > 1 ? tmp[0] : 0;
    document.querySelector(".day2").textContent = tmp.length > 1 ? tmp[1] : tmp[0];

    tmp = curDate.getHours().toString();
    document.querySelector(".hour1").textContent = tmp.length > 1 ? tmp[0] : 0;
    document.querySelector(".hour2").textContent = tmp.length > 1 ? tmp[1] : tmp[0];

    tmp = curDate.getMinutes().toString();
    document.querySelector(".minute1").textContent = tmp.length > 1 ? tmp[0] : 0;
    document.querySelector(".minute2").textContent = tmp.length > 1 ? tmp[1] : tmp[0];

    tmp = curDate.getSeconds().toString();
    document.querySelector(".second1").textContent = tmp.length > 1 ? tmp[0] : 0;
    document.querySelector(".second2").textContent = tmp.length > 1 ? tmp[1] : tmp[0];

    console.log(curDate.getFullYear() + ":" + (curDate.getMonth() + 1) + ":" + curDate.getDate()
        + "\\" + curDate.getHours() + ":" + curDate.getMinutes() + ":" + curDate.getSeconds());
}

function StartClock() {
    CalculateClock();
    setInterval(CalculateClock, 1000);
}

function SetTimer() {
    let hours = document.querySelector(".inputHour1").value;
    hours = hours * 10 + document.querySelector(".inputHour2").value;
    let minutes = document.querySelector(".inputMinute1").value;
    minutes = minutes * 10 + document.querySelector(".inputMinute2").value;
    let seconds = document.querySelector(".inputSecond1").value;
    seconds = seconds * 10 + document.querySelector(".inputSecond2").value;
    hours = hours == "" ? 0 : hours;
    minutes = minutes == "" ? 0 : minutes;
    seconds = seconds == "" ? 0 : seconds;
    let id = setInterval(() => {
        seconds--;
        if (seconds <= 0 && minutes != 0) {
            seconds = 59;
            minutes--;
        }
        else if (minutes == 0 && hours != 0) {
            minutes = 59;
            seconds = 59;
            hours--;
        }
        else if (hours == 0 && minutes == 0 && seconds == 0)
            clearInterval(id);
        document.querySelector(".inputHour1").value = hours.toString().length > 1 ? hours.toString()[0] : 0;
        document.querySelector(".inputHour2").value = hours.toString().length > 1 ? hours.toString()[1] : hours.toString()[0];
        document.querySelector(".inputMinute1").value = minutes.toString().length > 1 ? minutes.toString()[0] : 0;
        document.querySelector(".inputMinute2").value = minutes.toString().length > 1 ? minutes.toString()[1] : minutes.toString()[0];
        document.querySelector(".inputSecond1").value = seconds.toString().length > 1 ? seconds.toString()[0] : 0;
        document.querySelector(".inputSecond2").value = seconds.toString().length > 1 ? seconds.toString()[1] : seconds.toString()[0];
    }, 1000);

}

StartClock();