

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

    if (t.days == 0){
      document.getElementById("weekObject").style.display = 'none';
      document.getElementById("dayObject").style.display = 'none';

      if(t.seconds == 1){document.getElementById("second").innerHTML = "Second!"} else{document.getElementById("second").innerHTML = "Seconds!"}

    }
    if (t.total <= 0) {
      clearInterval(timeinterval);

      document.getElementById("weekObject").innerHTML = "NYC! WE MADE IT";
      document.getElementById("weekObject").style.color = 'green';
      document.getElementById("footerObject").innerHTML = "What are you doing looking at this, go hug me already"
      document.getElementById("footerObject2").innerHTML = "but actually"
      document.getElementById("footerObject3").innerHTML = "Love you so much Kelsey"

      $(document).ready(function(){
        $('#weekObject').css({'opacity':0});
        $('#footerObject').css({'opacity':0});
        $('#footerObject2').css({'opacity':0});
        $('#footerObject3').css({'opacity':0});
        setTimeout(function() {
          $('#weekObject').css({'opacity':0}).animate({'opacity':1});
      }, 500);

      setTimeout(function() {
        $('#footerObject').css({'opacity':0}).animate({'opacity':1});
    }, 2000);

    setTimeout(function() {
      $('#footerObject2').css({'opacity':0}).animate({'opacity':1});
  }, 3000);

  setTimeout(function() {
    $('#footerObject3').css({'opacity':0}).animate({'opacity':1});
}, 4000);
      });


      document.getElementById("dayObject").style.display = 'none';
      document.getElementById("hourObject").style.display = 'none';
      document.getElementById("minuteObject").style.display = 'none';
      document.getElementById("secondObject").style.display = 'none';
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = "2016-12-10 23:59"
initializeClock('clockdiv', deadline);
