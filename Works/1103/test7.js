'use strict'

function regexCheck(){
  // 정규표현식을 만든다.
  const regex1 = /atom/gm;   // 'atom' 이라는 문자열이 포함되어있다면 true, 없으면 false
  const regex2 = /mbc|kbs|sbs/g; // 정규식에서의 or 는 | 한개로 표현한다 자바에선 ||
  const regex3 = /홍길(동|순)/g; // 홍길 동 , 홍길 순이 있는지 찾는 정규식
  const regex4 = /[a-z]/g; // 영문 소문자를 포함하고있는지 찾는 정규식
  const regex5 = /[^a-z]/g;
  const regex6 = /[A-Z]/g; //영문 대문자를 포함하고있느냐?
  const regex7 = /[^A-Z]/g;  // 영문 대문자외에 다른 문자를 포함하고있는지
  const regex8 = /[0-9]/g;  // 숫자를 포함하고있느냐
  const regex9 = /[^0-9]/g;  // 숫자외 다른문자를 포함하고있느냐
  const regex10 = /[가-힣]/g;  // 한글을 포함하고있느냐?
  const regex11 = /[0-9a-z]/gi;  // 영문 '대/소문자'나 '숫자가 포함되어있느냐
  const regex12 = /[^0-9a-z]/gi;  // 영문 '대/소문자'나 '숫자'외에 다른문자가 포함되어있느냐
  // const regex13 = /[^0-9a-zA-Z]/gi;  // 영문 '대/소문자'와 '숫자'를 꼭 하나씩 포함하시오
  const regex14 = /\./g;  // 문자열 중에서 '.' 이 있는가?
  const regex15 = /\d/g;  // 숫자를 포함하고 있느냐?
  const regex16 = /\D/g;  // 숫자를 포함하고있지않느냐?
  const regex17 = /\w/g;  // 영문자/숫자/_를 포함하고있느냐?
  const regex18 = /\W/g;  // 영문자/숫자/_를 포함하고 있지 있느냐?
  const regex19 = /\s/g;  // 문장안에 공백 또는 탭을 포함하였느냐?

  // 와일드카드 : 1개글자에 대한 포함유무(?) , 복수개문자의 포함유무(+, *)
  const regex20 =/홍길동?안녕/g;// '홍길동'의 '동' 1개 글자의 포함여부(있어도 되고, 없어도 되고~)
  const regex21 =/홍길동+안녕/g;// '홍길동'의 '동' 1개이상 글자의 포함여부(있어도 되고, 없어도 되고~)
  const regex22 =/홍길동*안녕/g;// '홍길동'의 '동' 0개이상 글자의 포함여부(있어도 되고, 없어도 되고~)
  // d(2,3),       [a-z]{2,20};


  let content = document.getElementById("content").value; 

  if(content.trim() == ""){
    alert("문자열을 입력하세요")
    return;
  }
  // else if(!content.match(regex1)){
  //   alert("1.atom 문자열을 포함하고있지않습니다.")
  //   return;
  // }
  // else if(!content.match(regex2)){
  //     alert("2.atom 문자열을 포함하고있지않습니다.")
  //     return;
  // }
  // else if(!content.match(regex3)){
  //       alert("3.atom 문자열을 포함하고있지않습니다.")
  //       return;
  // }
  // else if(!regex4.test(content)){
  //       alert("4.영문 소문자를 포함하고있지않습니다.")
  //       return;
  // }
  // else if(regex5.test(content)){
  //       alert("5.영문 소문자외에 다른문자가 들어가있습니다.")
  //       return;
  // }
  // else if(!regex6.test(content)){
  //       alert("6.대문자가 안들어가있습니다.")
  //       return;
  // }
  // else if(regex7.test(content)){
  //       alert("7.영문 대문자외에 다른문자가 들어가있습니다.")
  //       return;
  // }
  // else if(!regex8.test(content)){
  //       alert("8.숫자가 들어가있지않습니다.")
  //       return;
  // }
  // else if(regex9.test(content)){
  //       alert("9.영문 소문자외에 다른문자가 들어가있습니다.")
  //       return;
  // }
  // else if(!regex10.test(content)){
  //       alert("10.한글을 포함하지않고있습니다.")
  //       return;
  // }
  // else if(regex11.test(content)){
  //       alert("11.영문 대/소문자와 숫자가 포함되어있지않습니다.")
  //       return;
  // }
  // else if(regex12.test(content)){
  //       alert("12.영문 대/소문자와 숫자외에 다른 문자가 포함되어있습니다.")
  //       return;
  // }
  // else if(regex13.test(content)){
  //       alert("12.영문 대/소문자와 숫자가 모두 포함되어있지않습니다.")
  //       return;
  // }
  else if(!regex14.test(content)){
        alert("14.'.'가 포함되어있지않습니다.")
        return;
  }


  alert("작업끝")
  document.getElementById("content").focus();
  
}