function CalculateClock() {
    let curDate = new Date();
    let tmp = curDate.getFullYear();
    for (let i = 1; i < 5; i++) {
        document.querySelector(".year" + i).textContent = tmp.toString()[i - 1];
    }
    UpdateClock(".month", curDate.getMonth() + 1);
    UpdateClock(".day", curDate.getDate());
    UpdateClock(".hour", curDate.getHours());
    UpdateClock(".minute", curDate.getMinutes());
    UpdateClock(".second", curDate.getSeconds());
}

function StartClock() {
    CalculateClock();
    setInterval(CalculateClock, 1000);
}

function SetTimer() {
    let timerTime = GetDate();

    let id = setInterval(() => {
        timerTime.second--;
        if (timerTime.second <= 0 && timerTime.minute != 0) {
            timerTime.second = 59;
            timerTime.minute--;
        }
        else if (timerTime.minute == 0 && timerTime.hour != 0) {
            timerTime.minute = 59;
            timerTime.second = 59;
            timerTime.hour--;
        }
        else if (timerTime.hour == 0 && timerTime.minute == 0 && timerTime.second == 0)
            clearInterval(id);
        UpdateTimer(".inputHour", timerTime.hour);
        UpdateTimer(".inputMinute", timerTime.minute);
        UpdateTimer(".inputSecond", timerTime.second);
    }, 1000);
}

function GetDate() {
    let hours = document.querySelector(".inputHour1").value;
    hours = hours * 10 + document.querySelector(".inputHour2").value;
    let minutes = document.querySelector(".inputMinute1").value;
    minutes = minutes * 10 + document.querySelector(".inputMinute2").value;
    let seconds = document.querySelector(".inputSecond1").value;
    seconds = seconds * 10 + document.querySelector(".inputSecond2").value;
    hours = hours == "" ? 0 : hours;
    minutes = minutes == "" ? 0 : minutes;
    seconds = seconds == "" ? 0 : seconds;
    return new DateTime(0, 0, 0, hours, minutes, seconds);
}

function UpdateTimer(target, data) {
    document.querySelector(target + "1").value = data.toString().length > 1 ? data.toString()[0] : 0;
    document.querySelector(target + "2").value = data.toString().length > 1 ? data.toString()[1] : data.toString()[0];
}

function UpdateClock(target, data) {
    document.querySelector(target + "1").textContent = data.toString().length > 1 ? data.toString()[0] : 0;
    document.querySelector(target + "2").textContent = data.toString().length > 1 ? data.toString()[1] : data.toString()[0];
}

class DateTime {
    constructor(year, month, day, hour, minute, second) {
        this.year = year;
        this.month = month;
        this.day = day;
        this.hour = hour;
        this.minute = minute;
        this.second = second;
    }
}

StartClock();