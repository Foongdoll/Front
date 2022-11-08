'use strict';

// 오늘날짜를 전역변수로 생성...
const today = new Date();
const year = today.getFullYear();  // 연도 4자리
const month = today.getMonth() + 1;   // 월(기존월보다 1자리 작다)
const date = today.getDate();   // 일
const hour = today.getHours();  // 시
const minute = today.getMinutes(); // 분
const second = today.getSeconds(); // 초
const yymmdd = year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;

// 표준날짜 출력함수
function fCheck1() {
  let date1 = new Date();
  console.log("date1 : ", date1);
  document.getElementById("demo").innerHTML = date1;
}

// 편집날짜 함수
function fCheck2() {
  let strDate = yymmdd;
  demo.innerHTML = strDate;
}

// 쉬운날짜 함수
function fCheck3() {
  let str = "";
  str += year + "년 ";
  str += month + "월 ";
  str += date + "일 ";
  // 요일 : 0(일), 1(월), 2(화), 3(수), 4(목), 5(금), 6(토)
  //str += today.getDay() + "요일";    // 요일 : getDat()
  let week = ["일","월","화","수","목","금","토"];
  str += week[today.getDay()] + "요일 ";
  str += hour + "시 ";
  str += minute + "분 ";
  str += second + "초";

  let strDate = str;
  demo.innerHTML = strDate;
}

// 시간출력 함수(elapsed Time:경과시간)
function fCheck4() {
  // let strTime = today.getMilliseconds();

  // let startDate = new Date(2022, 11, 4);
  // let lastDate = new Date(2022, 11, 5);
  // let elapsedTime  = lastDate.getTime() - startDate;

  let startDate = today.getTime();
  let lastDate = new Date();
  let elapsedTime  = lastDate.getTime() - today.getTime();
  let strDate = elapsedTime / (60*60*24*1000);
  demo.innerHTML = strDate;
}

// 해당월의 마지막일자꺼내기 함수
function fCheck5() {
  let year = document.getElementById("year").value;
  let month = document.getElementById("month").value;

  let str = new Date(year,month,0);   // new Date(년,월,일,시,분,초);
  let strDate = str.getFullYear() + "-";
  strDate += (str.getMonth() + 1) + "-";
  strDate += str.getDate();
  strDate = "해당월의 마지막 일자는? " + strDate;
  demo.innerHTML = strDate;
}

// 오늘날짜형식에 맞춰서 출력(yyyy-mm-dd)
function fCheck6() {
  let strDate = year + "-" + month + "-" + date;
  let fmtDate = strDate.split("-");
  let yy = fmtDate[0];
  let mm = ('0' + fmtDate[1]).slice(-2);    // 2월 --> 02월 : 02 --> 002
  let dd = ('0' + fmtDate[2]).slice(-2)
  strDate = yy + "-" + mm + "-" + dd;

  demo.innerHTML = strDate;
}

// 선택된 년/월의 마지막 일짜를 날짜 형식에 맞춰서 출력(yyyy-mm-dd)
function fCheck7() {
  let strDate = year + "-" + month + "-" + date;

  demo.innerHTML = strDate;
}