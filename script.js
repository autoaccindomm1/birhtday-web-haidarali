// Birthday Countdown Script
const birthdayDate = new Date("November 22, 2024 00:00:00").getTime();

const countdown = setInterval(function() {
  const now = new Date().getTime();
  const distance = birthdayDate - now;

  // Time calculations for days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the respective elements
  document.getElementById("days").innerHTML = `${days} Days`;
  document.getElementById("hours").innerHTML = `${hours} Hours`;
  document.getElementById("minutes").innerHTML = `${minutes} Minutes`;
  document.getElementById("seconds").innerHTML = `${seconds} Seconds`;

  // If the countdown is finished, display a message
  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "<h2>Happy Birthday, Haidar!</h2>";
  }
}, 1000);
