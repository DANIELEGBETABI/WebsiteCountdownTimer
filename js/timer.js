function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24) % 7);
  var weeks = Math.floor(t /  (1000 * 60 * 60 * 24 * 7) % 4)
  return {
    'total': t,
    'weeks': weeks,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var weeksSpan = clock.querySelector('.weeks')
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    weeksSpan.innerHTML = t.weeks;
    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = t.hours;
    minutesSpan.innerHTML = t.minutes;
    secondsSpan.innerHTML = t.seconds;

    if(t.weeks == 1){document.getElementById("week").innerHTML = "Week"} else{document.getElementById("week").innerHTML = "Weeks"}
    if(t.days == 1){document.getElementById("day").innerHTML = "Day"} else{document.getElementById("day").innerHTML = "Days"}
    if(t.hours == 1){document.getElementById("hour").innerHTML = "Hour"} else{document.getElementById("hour").innerHTML = "Hours"}
    if(t.minutes == 1){document.getElementById("minute").innerHTML = "Minute"} else{document.getElementById("minute").innerHTML = "Minutes"}
    if(t.seconds == 1){document.getElementById("second").innerHTML = "Second"} else{document.getElementById("second").innerHTML = "Seconds"}

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = "2016-12-10"
initializeClock('clockdiv', deadline);
