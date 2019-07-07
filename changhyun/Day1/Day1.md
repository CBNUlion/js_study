브라우저 작동원리
==================
프로그래밍 언어는 운영체제(Operating System, OS) 위에서 실행되지만 
웹 애플리케이션의 자바스크립트는 브라우저에서 HTML, CSS와 함께 실행된다.

브라우저의 핵심 기능은 사용자가 참조하고자 하는 웹페이지를 
서버에 요청(Request)하고 서버의 응답(Response)을 받아 브라우저에 표시하는 것이다.
HTML, CSS 파일은 렌더링 엔진의 HTML 파서와 CSS 파서에 의해 파싱(Parsing)되어 
DOM, CSSOM 트리로 변환되고 렌더 트리로 결합된다. 이렇게 생성된 렌더 트리를 기반으로 
브라우저는 웹페이지를 표시한다.
![Alt text](https://poiemaweb.com/img/client-server.png)

자바스크립트는 렌더링 엔진이 아닌 자바스크립트 엔진이 처리한다. HTML 파서는 script 태그를 만나면 자바스크립트 코드를 실행하기 위해 DOM 생성 프로세스를 중지하고 자바스크립트 엔진으로 제어 권한을 넘긴다. 제어 권한을 넘겨 받은 자바스크립트 엔진은 script 태그 내의 자바스크립트 코드 또는 script 태그의 src 어트리뷰트에 정의된 자바스크립트 파일을 로드하고 파싱하여 실행한다. 자바스크립트의 실행이 완료되면 다시 HTML 파서로 제어 권한을 넘겨서 브라우저가 중지했던 시점부터 DOM 생성을 재개한다.

이처럼 브라우저는 동기(Synchronous)적으로 HTML, CSS, Javascript을 처리한다. 이것은 script 태그의 위치에 따라 블로킹이 발생하여 DOM의 생성이 지연될 수 있다는 것을 의미한다. 
<br/>따라서 script 태그의 위치는 중요한 의미를 갖는다.

body 요소의 가장 아래에 자바스크립트를 위치시키는 것은 좋은 아이디어이다. 그 이유는 아래와 같다.

*HTML 요소들이 스크립트 로딩 지연으로 인해 렌더링에 지장 받는 일이 발생하지 않아 페이지 로딩 시간이 단축된다.

*DOM이 완성되지 않은 상태에서 자바스크립트가 DOM을 조작한다면 에러가 발생한다.


DOM이란 무엇일까?
-----------------
DOM(Document Object Model)은 <html>이나 <body>같은 html문서의 태그들을 javascript가 이용할 수 있는 객체로 만들면 그것을 문서 객체라고 한다.
![dom설명](https://t1.daumcdn.net/cfile/tistory/247BF84854F55CE42C)<br/>
각 태그들을 속성의 값으로 분류 하여 javascript에서 값을 불러오거나 변경할때 써먹을수 있는 값이라고 이해된다.<br/>
<br/>
예를 들면
    
    
```javascript
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset="UTF-8">
    <title> 문서객체 모델(DOM)</title >
    <script type= "text/javascript">
        window.onload = function(){
           //1. 문서 객체 생성
           var header = document.createElement('h2'); //h2 태그를 생성해주는 것
           var textNode = document.createTextNode('Hello DOM');
    
           //2. 노드(요소/텍스트)를 연결.
           header.appendChild(textNode);
    
           //3. body 문서 객체에 header 문서 객체를 추가.
           document.body.appendChild(header);
        };
    </script>
    </head>
    <body>
       <h1 id ="header_1" name= "" >HEADER-1 </h1 >
       <div >
          <h1 id = "header_2">HEADER-2</h1 >
       </div >
       <hr >
       <h1 id = "clock"></h1>
    </body>
    </html>
```
1. Hello DOM이라는 문자와 h2태그를 생성하는 것만으로는 실제 문서상의 변화는 없다.
2. Hell DOM이라는 문자를 H2태그에 상속시켜 Hello DOM을 H2태그로 감싸고
3. document.body.appendChild(header);를 이용하여 body안에 h2로 감싼 hello DOM을 추가하였다.

이런식으로 html과 css를 변경할수 있는 기능인것이다. ^____^
