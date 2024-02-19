const quizs = [
  "타이타닉의 구명보트는 몇 명이 탈수 있을까?",
  "초등학생이 가장 좋아하는 동네는?",
  "진짜 문제투성이인 것은?",
  "폭력배가 많은 나라는?",
  "세상에서 가장 빠른 닭은 ?",
  "많이 맞을수록 좋은 것은 ?",
  "한국에서 가장 급하게 만든 떡은 ?",
  "새 중에서 가장 빠른 새는 ?",
  "미소의 반대말은 ?",
  "친구들과 술집에 가서 술값 안내려고 추는 춤은 ?",
  "노인들이 가장 좋아하는 폭포는 ?",
  "여자만 갖는 권리는 ?",
  "학생들이 싫어하는 피자는 ?",
  "개가 사람을 가르친다를 4자로 줄이면 ?",
  "광부가 가장 많은 나라는 ?",
  "울다가 다시 웃는 사람을 다섯 글자로 ?",
  "세상에서 가장 뜨거운 과일은 ?",
  "정말 어렵게 지운 절 이름은?",
  "반성문을 영어로 하면 ?",
  "베를린 음식을 먹으면 안 되는 이유는 ?",
  "영희는 오빠만 5명이다. 첫째는 일남 둘째는 이남 셋째는 삼남 넷째는 사남, 그렇다면 막내의 이름은?",
  "왕에게 공을 던질 때 하는 말은?",
  "깨뜨리고 칭찬받는 것은 ?",
  "전주비빔밥보다 늦게 나온 비빔밥은?",
  "똥싸고 나온 물고기는?",
  "사람들이 사는 동안 가장 많이 하는 소리는?",
  "형제가 싸울 때 동생 편만 드는 곳은?",
  "60명이 정원인 잠수함에 남자 30명 여자29명이 탑승했는데 갑자기가라 앉은 이유는?",
  "할아버지가 가장 좋아하는 돈은?",
  " '어른은 알겠다'를 다르게 표현 하면? ",
  "바람이 귀엽게 부는 동네는?",
  "소변과 대변중 먼저 나오는 것은?",
];
const quizAnswer = [
  "9명",
  "방학동",
  "시험지",
  "칠레",
  "후다닥",
  "시험문제",
  "헐레벌떡",
  "눈깜작할 새",
  "당기소",
  "주춤주춤",
  "나이아가라 폭포",
  "여권",
  "책 피자",
  "개인지도",
  "케냐",
  "아까운사람",
  "천도복숭아",
  "우여곡절",
  "글로벌",
  "독일 수도",
  "영희",
  "송구하옵니다",
  "신기록",
  "이번주비빔밥",
  "일본어",
  "숨소리",
  "형편없는 세상",
  "잠수함이니깐",
  "할머니",
  "에라 모르겠다",
  "분당",
  "급한것",
];

let nowQuizNum = 1;
let allQuizNum = 32;
let correctNum = 0;
const quizbox = document.getElementById("quiz");

let setQuizNum = document.getElementById("numberQuiz");
setQuizNum.innerText = `Q.${nowQuizNum}/${allQuizNum}`;

const beforeButton = document.getElementById("before");
beforeButton.addEventListener("click", beforeButtonClickHandler);

const nextButton = document.getElementById("next");
nextButton.addEventListener("click", nextButtonClickHandler);

const hintButton = document.getElementById("hintButton");
const hintText = document.getElementById("hintText");

const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", submitButtonClickHandler);

function submitButtonClickHandler(event) {
  // 입력 버튼 눌렀을때
  event.preventDefault();
  // 정답인지 비교
  if (document.getElementById("answerInput").value === answer) {
    alert("정답입니다!");
    document.getElementById("answerInput").value = "";
    correctNum = correctNum + 1;
    nowQuizNum = nowQuizNum + 1;
    setQuizNum.innerText = `Q.${nowQuizNum}/${allQuizNum}`;
    nextquiz();
  } else {
    document.getElementById("answerInput").value = "";
    alert("오답입니다ㅠㅠ");
  }
}

function nextquiz() {
  //다음 퀴즈로 넘어감

  console.log("nextquiz로 넘어옴");
  if (correctNum == 32) {
    alert("축하드립니다! 모든 퀴즈를 맞추셨습니다!!");
  } else {
    if (num >= 31) {
      num = 0;
      makeQuiz();
    } else {
      num = num + 1;
      makeQuiz();
    }
  }
}

function makeQuiz() {
  //퀴즈와 정답을 수정하고 새롭게 내는 기능

  console.log("makeQuiz로 넘어옴");
  answer = quizAnswer[num];
  quizbox.innerText = quizs[num];
}

function beforeButtonClickHandler(event) {
  // 이전 버튼 기능
  event.preventDefault();
  if (nowQuizNum > 1) {
    nowQuizNum = nowQuizNum - 1;
    setQuizNum.innerText = `Q.${nowQuizNum}/${allQuizNum}`;
    num = num - 1;
    if (num <= -1) {
      num = 31;
    }
    makeQuiz();
  } else {
    alert("이미 첫번째 문제입니다.");
  }
}
function nextButtonClickHandler(event) {
  // 다음 버튼 기능
  event.preventDefault();
  if (nowQuizNum < 32) {
    if (num < 31) {
      num = num + 1;
      nowQuizNum = nowQuizNum + 1;
      setQuizNum.innerText = `Q.${nowQuizNum}/${allQuizNum}`;
      makeQuiz();
    } else {
      num = 0;
      nowQuizNum = nowQuizNum + 1;
      setQuizNum.innerText = `Q.${nowQuizNum}/${allQuizNum}`;
      makeQuiz();
    }
  } else {
    alert("더 이상 퀴즈가 없습니다.");
  }
}

hintButton.addEventListener("click", function () {
  hintButton.style.display = "none"; // 힌트 버튼 숨기기
  hintText.style.display = "block"; // 힌트 텍스트 보이기
});

// 시작 지점
let num = Math.floor(Math.random() * quizs.length);
let chosenResult = quizs[num]; //num은 최소0 최대 31
let answer = quizAnswer[num];

quizbox.innerText = chosenResult;
