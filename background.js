const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
  "13.jpg",
  "14.jpg",
  "15.jpg",
  "16.jpg",
  "17.jpg",
  "18.jpg",
  "19.jpg",
];

const quotes = [
  "당신이 할 수 있는 가장 큰 모험은 당신이 꿈꾸는 삶을 사는 것이다\n-오프라 원프리",
  "언제까지고 계속되는 불행은 없다.\n가만히 견디고 참든지, 용기로 내쫓아 버리든지둘 중에 하나를 택해야 한다.\n-로망 롤랑",
  "실패를 받아들일 수 없다면\n그 어떤 성공도 이룰 수 없다.-조지 쿠코",
  "세상에서 보고 싶은 변화가 있다면\n직접 그 변화가 되어라\n-마하트마 간디",
  "우리의 인생은\n우리가 노력한  만큼 가치가 있다\n-프랑수아 모리아크",
  "의욕적인 목표가 인생을 즐겁게 한다\n-로버트 슐러",
  "자신을 내보여라.\n그러면 재능이 드러날 것이다.\n-발 타시르 그라시안",
  "이 세상에 위대한 사람은 없다.\n단지 평범한 사람들이 일어나 맞서는 위대한 도전이 있을 뿐이다\n-윌리엄 프레데릭 홀시",
  "긍정적인 생각으로 하루를 시작하라\n평화롭고 만족스러우며 행복한 마음가짐으로 하루를 시작하라.\n그러면 즐겁고 성공적인 날들이 전개될 것이다.\n-노먼 빈 센트 필",
  "긍정적인 감정은 능력을 부여하고,\n부정적인 감정은 능력을 앗아간다.\n-게리 주커브",
  "수백 번의 이상적인 생각보다\n한 번의 실행이 변화의 시작이다.\n-셰릴 샌드버그",
  "생각을 많이 하는 모든 것들은 문제가 된다\n-프리드리히 니체",
  "위대한 사람은 기회가 없다고 원망하지 않는다.\n-랄프 왈도 에머슨",
  "용기란 죽을 만큼 두려워도 일단 한 번 해보는 것이다\n-존 웨인",
  "세상은 고통으로 가득하지만 그것을 극복하는 사람들도 가득하다\n-헬렌 켈러",
  "시작부터 훌륭할 필요는 없지만 훌륭해지기 위해서는 시작해야 한다.\n-지그 지글러",
  "멈추지 않는 이상 얼마나 천천히 가는지는 문제가 되지 않는다\n-공자",
  "오래 살기를 바라기보다 잘 살기를 바라라\n-벤자민 플랭클린",
  "수많은 사람들이 인생에서 성공하는지 못하는 이유는\n기회가 문을 두드릴 때,\n뒤뜰에 나가 네 잎 클로버를 찾기 때문이다.\n-윌터 크라이슬러",
  "한 인간에게는 작은 발걸음이지만 인류에게는 위대한 도약이다.\n-닐 암스트롱",
  "당신이 되고 싶었던 어떤 존재가 되기에는 지금도 결코 늦지 않았다.\n-조지 엘리엇",
  "시도한 모든 것이 다 잘 될 거라고 기대하는 것은 곧 실망의 지름길이다.\n완벽은 적이다\n-셰릴 샌드버그",
  "가장 오래 산 사람\n나이가 많은 사람이 아니라 \n많은 경험을 한 사람이다.\n-루소",
  "그저 첫 발걸음을 떼면 된다.\n계단 전체를 올려다볼 필요도 없다.\n그저 첫 발걸음만 떼면 된다.\n-마틴 루터 킹",
  "세상에서 가장 두려운 불신은\n자신을 믿지 못하는 것이다\n-토마스 칼라일",
  "타인 말고 자신에게 자신을 송두리째 던져라\n-몽테뉴",
  "항상 최선을 다하라,\n설령 승산이 없을지라도\n-아널드 파머",
];
//시간
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

//글귀
document.getElementById("showQuote").addEventListener("click", function () {
  const quoteText = document.getElementById("quoteText");
  if (quoteText.style.display === "none" || quoteText.style.display === "") {
    // 숨겨진 상태일 때
    quoteText.style.display = "block"; // 보이도록 설정
  } else {
    quoteText.style.display = "none"; // 보이는 상태일 때 숨김
  }
});

const bgImg = document.getElementById("imageRandom");
const chosenImage = images[Math.floor(Math.random() * images.length)];
bgImg.src = `img/${chosenImage}`;
document.body.appendChild(bgImg);

quoteText.innerText = quotes[Math.floor(Math.random() * quotes.length)];
