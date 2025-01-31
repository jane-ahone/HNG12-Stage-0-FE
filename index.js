let outputTime = document.querySelector(".current-time");

function updateCurrentTime() {
  const currentTimeMilliseconds = new Date().getTime();
  let currentTime = `${currentTimeMilliseconds}`;
  outputTime.innerText = currentTime;
}

updateCurrentTime();

// Update the current time every millisecond
// setInterval(updateCurrentTime, 100);
