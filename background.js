const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];

const bgImg = document.getElementById("imageRandom");
const chosenImage = images[Math.floor(Math.random() * images.length)];
bgImg.src = `img/${chosenImage}`;

document.body.appendChild(bgImg);

function callDate() {
  const currentDate = new Date();
  let hours = currentDate.getHours();
  let mintues = currentDate.getMinutes();
  let seconds = currentDate.getSeconds();

  document.getElementById(
    "time"
  ).innerText = `${hours}시${mintues}분${seconds}초`;
}
callDate();
setInterval(callDate, 1000);
