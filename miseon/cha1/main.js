$(document).ready(function(){ // 제이쿼리에 사용되는 구문, 브라우저가 HTML을 전부 불러왔는 지 확인 데에 사용
    'use strict'; // js 인터프리터에서 코드를 더 엄격하게 처리하라는 명령문  > 자주 발생하는 어려운 문제 확인 가능
    // 라이브러리를 활용하기 위해 설정 작업 공간 => 실행해야 하는 코드를 템플릿, 보일러플레이트 
    paper.install(window); // paper.js 를 전역 스코프에 설치 
    paper.setup(document.getElementById('mainCanvas')); // paper.js를 캔버스에 연결하고 , 그림을 그릴 수 있도록 준비 
    
    //TODO
    //1. paper.view.draw(); // 실제로 화면에 그림을 그리라는 명령 
    
    //2. 바둑판 모양으로 점찍기 
    // var c;
    // // for( 초기값, 제한 조건 , 증가분 )
    // for(var x =25; x<400; x+=50){ 
    //     for(var y=25; y<400; y+=50){
    //         c = Shape.Circle(x,y,20);
    //         c.fillColor ='green';
    //     }
    // };

    //3. 사용자 입력 예시 적용하기
    var tool = new Tool();
    var c = Shape.Circle(200, 200, 80);
    c.fillColor = 'black';
    var text = new PointText(200, 200);
    text.justification = 'center';
    text.fillColor = 'white';
    text.fontSize = 20;
    text.content = 'hello world';

    tool.onMouseDown = function(event){
        var c = Shape.Circle(event.point, 20); // var c = Shape.Circle(event.point.x, event.point.y, 20);
        c.fillColor = 'green';
    };

    console.log('main.js load') // 프로그램을 진단하기 위한 간단한 텍스트 도구, 필수요건 X

    // function rand(m,n){
    //     return m + Math.floor((n-m+1)*Math.random());
    // }

    // function randFace(){
    //     return     }

    let i = 1;
    for(i=1; i < 11; i++){
    
        if ((i%2)==1) continue;
        console.log(i);
    } 

});


function sayHello(){
    console.log("Hello world");
    console.log("Hallo wereld!");
}