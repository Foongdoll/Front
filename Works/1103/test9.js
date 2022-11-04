'use strict'

// 표준날짜 출력함수

  let fCheck1 = () => {
    let date1 = new Date();

    document.getElementById("demo").innerHTML = date1
  }

// 편집날짜 함수
  const today = new Date();
  const year  = today.getFullYear(); // 년도 4자리
  const month = today.getMonth()+1;  // 월(기존월보다 1자리 적게온다)
  const date  = today.getDate();
  const hour  = today.getHours();
  const minute= today.getMinutes();
  const second= today.getSeconds();


  const yymmdd = year+"-"+month+"-"+date + " " + hour + ":" + minute + ":" + second;

  let fCheck2 = () => {
    let strDate = yymmdd;

    demo.innerHTML = strDate;
  }

  let fCheck3 = () => {
    let str = "";

    str += year + "년 "
    str += month + "월 "
    str += date + "일 "
    // 요일 : 0부터 나온다 0부터 1 = 일요일 ~ 6 = 토요일 
    let week = ["일","월","화","수","목","금","토"]
    str += week[today.getDay()] + "요일 "; // 요일 : getDay();
    str += hour + "시 "
    str += minute + "분 "
    str += second + "초"
    

    let strDate = str;
    demo.innerHTML = strDate;
  }

  // 시간출력 함수

  let fCheck4 = () => {
    // let strDate = today.getTime();
    // let strTime = today.getMilliseconds();
    let startDate = today.getTime();
    let lastDate  = new Date();
    let elapsedTime  = lastDate.getTime() - starDate.getTime();
    let strDate   = elapsedTime / (60*60*1000);
    demo.innerHTML = strDate;

  }


  // 해당월의 마지막일자꺼내기 함수
  let fCheck5 = () => {
    let year2 = document.getElementById("year").value;
    let month2 = document.getElementById("month").value;

    let strDate = new Date(year2,month2,0); // new Date(년,월,일,시,분,초);
    let strDate2 = "";
    strDate2 += year2+"년 ";
    strDate2 += month2+"월 ";
    strDate2 += "해당월의 마지막 날짜는 "+strDate.getDate()+"일";

    demo.innerHTML = strDate2;

  }


    let fCheck6 = () => {
      let year2 = document.getElementById("year").value;
      let month2 = document.getElementById("month").value;
  
      let strDate = new Date(year2,month2,0); // new Date(년,월,일,시,분,초);
      let strDate2 = "";
      strDate2 += year2+"년 ";
      if(month2 < 10){
        month2 = "0"+month2;
      }
      else month2
      strDate2 += month2+"월 ";
      strDate2 += "해당월의 마지막 날짜는 "+strDate.getDate()+"일";
  
      demo.innerHTML = strDate2;
    }


    let fCheck7 = () => {
      let strDate;
      let  month2;
      let  date2;
      if(month < 10){
      month2 = "0"+month;
      }

      if(date < 10){
        date2 = "0"+date;
      }

      strDate = year+"-"+month2+"-"+date2
      demo.innerHTML = strDate; 

    }