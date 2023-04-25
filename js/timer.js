	var timeLeft = 60;
      var countdown = null;

      function startTimer() {
        countdown = setInterval(function() {
          timeLeft--;
          document.getElementById("timer").textContent = timeLeft;
          if (timeLeft <= 0) {
            clearInterval(countdown);
            alert("Time's up!");
          }
        }, 1000);
      }