// console.log('main.js load');  log확인 하는 거. 디버깅 할 때 좋다

$(document).ready(function(){
    'use strict';                           // 자바스크립트 인터프리터에서 코드를 더 엄격하게 제어하라는 뜻
    paper.install(window);                  //paper.js 전역 스코프에 설치
    paper.setup(document.getElementById('mainCanvas'));     //paper.js를 캔버스에 연결

//  녹색 원 그리기 
/*  
    var c= Shape.Circle(200,200,50);            //원 객체 생성 , 매개변수 : x,y 좌표, 원의 반지름
    c.fillColor = 'green';                      //채울 색상 지정
*/

// 자동화하기
/*
    var c;
    for(var x=25; x< 400; x +=50){
        for(var y = 25; y< 400; y +=50){
            c = Shape.Circle(x,y,20);
            c.fillColor = 'green';
        }
    }
*/

//hello world 출력하기
var c = Shape.Circle(200, 200, 80);
c.fillColor = 'black';
var text = new PointText(200, 200);
text.justification = 'center';
text.fillColor = 'white';
text.fontSize = 20;
text.content = 'hello world';


// 사용자 입력 처리하기
var tool = new Tool();          // tool 객체 만들고, 객체 만들면 거기에 이벤트 핸들러 연결 가능

tool.onMouseDown = function(event){            // onMouseDown 이벤트 헨들러를 연결         
    var c = Shape.Circle(event.point.x, event.point.y, 20);
    // 위랑 같은 코드
    // var c = Shape.Circle(event.point, 20);
    c.fillColor = 'green';
};

    paper.view.draw();                       //그림을 그려라
    console.log('main.js loaded');
})