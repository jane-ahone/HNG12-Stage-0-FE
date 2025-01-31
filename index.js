let outputTime = document.querySelector(".current-time");

function updateCurrentTime() {
  const currentTimeUTC = new Date().toISOString().split("T")[1];
  console.log(currentTimeUTC);

  let currentTime = `${currentTimeUTC}`;
  outputTime.innerText = currentTime;
}

updateCurrentTime();

// Update the current time every millisecond
// setInterval(updateCurrentTime, 100);
