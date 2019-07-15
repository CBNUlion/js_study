# 첫번 째 애프리케이션

## 1.1 시작은 브라우저에서
## 1.2 사용할 프로그램
- 텍스트모드 에디터 
    - vi/vim
- 창모드 에디터
    - 아톰
    - 서브라임 텍스트
    - 코다
    - 비주얼 스튜디오
    - 노트패드++
    - 텍스트패드
    - Xcode

### 에디터의 기능들

1. 문법 하이라이트
    - 문법적 요소를 색깔로 구별
2. 괄호 맞추기
3. 코드 접기
4. 자동완성

## 1.3 주석에 관해

> //,  /**/

## 1.4 시작하기
- css
    - `<link rel="stylesheet" href="main.css">`
    - `header`에 포함
- js
    - `<script src="main.js"></script>`
    - `body` 마지막에 포함
## 1.5 자바스크립트 콘솔
- 콘솔 : 프로그램을 진단할 때 사용하는 텍스트 전용 도구
    - 윈도우, 리눅스용 파이어폭스 단축키 :  `ctrl`-`Shift`-`k`
    - 크롬 : `ctrl`-`Shift`-`K` 
         - [나는 크롬으로 사용하는데 크롬에서 어떻게 하지? + 디버깅 방법](https://subicura.com/2018/02/14/javascript-debugging.html)
    
- `console.log`  : 메서드
    - 원하는 내용을 콘솔에 출력할 때 사용
    - 디버깅이나 언어 학습에 유용
## 1.6 제이쿼리
> 클라이언트 스크립트 라이브러리
    > jQuery는 HTML의 클라이언트 사이드 조작을 단순화 하도록 설계된 크로스 플랫폼의 자바스크립트 라이브러리다. - 위키백과-
- [jQuery 더 알아보기](http://tcpschool.com/jquery/jq_intro_basic)
- 제이쿼리 링크 : `<script src = "https://code.jquery.com/jquery-2.1.1.min.js"></script>`
- JS 링크 앞에 삽입


```js
$(document).ready(function(){
    'use strict';                   //자바스크립트 인터프리터에서 코드를 더 엄격하게 처리하라는 뜻
    console.log('main.js loaded');
})
```
- 여기서 제이쿼리가 하는 일은 html을 전부 불러왔는지 확인

## 1.7 단순한 그래픽 그리기
- 그래픽 라이브러리 : Paper.js, KineticJS, EaselJS
- 템플릿 또는 보일러플레이트 : 어떤 일을 하기 전에 먼저 시작해야 하는 코드


## 1.8 반복적인 작업 자동화하기 
> for문 이용
## 1.9 사용자 입력 처리하기
> 비동기적 : 이벤트가 언제 일어날지 프로그래머가 전혀 알 수 없음
- Paper.js 의 사용자 입력 처리 : 툴 
- `onMouseDown` 역할
    1. 마우스 클릭 시 코드실행
    2. 어디를 클릭했는지 보고
        - 마우스로 클릭한 위치는 event.point 프로퍼티에 저장
## 1.10 hello ,world
