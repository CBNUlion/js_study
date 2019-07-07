# 4. 제어문
변경과 선택에 관한 내용
반복 작업을 효율적으로 자동화하고 변화하는 조건에 대응하기 위해 배우는 내용

## 4.1 제어문의 기초
- 순서도  
	- 제어문을 시각적으로 나타내는 방법 
		> 예제  " [크라운 앤 앵커 게임 묘사] 시뮬레이션"
		   p 109  참고 > 간단하게 하는 과정 필요
		   p 111  참고 >  사용할 수 있는 범위를 제한한 허용된 행동  

## 제어문 종류
> 조건문과 반복문 2가지 범주로 나누어 볼 수 있음

## > 조건문 <
#### 4.1.5 if else 문 + 4.2.2 if else 문 체인 연결 
- 구문 
```javaScript	
   if( 제한조건1 ){
   
   }else if( 제한조건2 ){
   
   }else{ 

   };
```
- if else 체인문 실행  	
	- 반복 기능 없음 , 조건에 따라 판단하고 움직임.
	- if / else 는 2가지 조건만 설정 가능 , if else 체인은 3가지 조건 설정 가능 
	- else 는 선택적으로 사용 가능 

#### 4.1.8 if 문 
- 구문 
```javaScript
  if( );
```

#### 4.2.5 Switch 문
- 구문
```javaScript
switch(expression){
	case value1 :
	[break;]

	case valueN :
	[break;]

	default : // 특별한 경우에 사용, 일치하는 case 절이 없을 떄 실행
	[break;]	
		
}
```
- swithch 실행
	- if else 는 2가지 조건만 설정 가능 하지만 , <br>여러조건 중 하나로 설정 가능하여 다양하게 나뉘는 조건을 사용할 수 있음
	-  조건은 값으로 평가할 수 있는 표현식임 
	



## > 반복문 < 

#### 4.1.7 for 루프  + 4.2.4  for 루프의 다른 패턴
- 구문 
```javaScript
//4.1.7
for( 제한조건[ 초기화 ; 조건 ; 마지막 표현식 ] ) {
 
}
//4.2.4 쉼표연산자( , )를 통해 초기화와 마지막 표현식에 여러문을 결합할 수 있음
for( let temp, i=0 , j=1 ; j < 30; temp = i, i=j , j = i+temp )
	console.log(j);
```
- for 실행 
	- 루프를 제어하는 모든 요소가 한 곳에 있어서 편리 
	- while문과 동일 

- 종류	
	-  for ... in 루프 : 객체 프로퍼티에 루프를 실행하도록 설계된 루프 <Strong>**9장 참고
	```
	 for(variable in object)
		statement 
	```
	
	- for ... of 루프 :  es6 용 새로 생긴 반복문 , 컬렉션 요소에 루프를 실행하는 방법 
	```
	 for(variable in object)
		statement 
	```
		-  iterable 객체에 모두 사용할 수 있는 객체 
		- 배열에 적용 , 각 요소의 인덱스를 알 필요 없을 때 사용 

#### 4.1.1 while 루프 
- 구문
> ```javaScript
> let  변수 = ~~ ; //시작 조건 
> while( 제어조건 ) {       
>          
>            "블록문"
> };

- do while 루프 실행
	- [ 1) do 조건 블록문 전체 실행 ->  2)  while 문 실행 ]  >> 완료 
   
#### 4.1.6 do while 루프 X
 구문
> ```javaScript
> let  변수 = ~~ ; //시작 조건 
> do {
>         "블록문"
>         
> }while( 제어조건 ) ;
> ```
- do while 루프 실행
	- 제한 조건에 따라 반복이 가능함.
	- [ 1) 블록문 전체 실행 ->  2) 조건 다시 테스트 ] -> [     ]  >> 완료 





## > 제어문구성요소 <


####  4.1.2 블록문 [ block [statement](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/block) ]  
- 구문
```javascript
{ "블록문" }
```
- == <Strong>복합문[compound statement], 제어문 바디 
   -  여러 실행문을 작성 중괄호 { }에 담아 하나의 단위로 실행하기 위한 문법   
   -  제어문 없어도 유효한 문법하지만 , 조건이 없다면 무의미함 
   -  제어문과 일반적으로 사용하지만<br> 한 문장을 실행할 경우에는 꼭 사용하지 않아도 작동됨 >> 쓰는 것 추천

- <p><Strong>블록 범위 규칙 <h6>** 7장 scope , statement 링크 참고</p>
 ```javaScript 
 - let , const   > 블록 범위를 가짐 
			 블록 안과 밖에서 지칭되는 주소값이 다름  
-  var  > 블록 범위를 갖지 않음 
             블록 안과 밖에서 지칭되는 주소값이 같음 
- function  > 블록 범위를 갖음 
```

####  4.1.3 공백
- 구문 
```javaScript
  ;
```
- <Strong> <-> 복합문
	- 제어문이 필요한 곳에 아무것도 제공하지 않는다는 의미 
	- 들여쓰기의 경우 의미가 명확하게 드러나도록 작성해야함 
	- 줄바꿈 문자, 추가 공백 상관없음

#### 4.1.4 보조 함수[ [ helper function ](https://vanillajstoolkit.com/helpers/) ] 
- 6장 함수 참고 
	- 내장함수가 아닐까?!


#### 4.2.3 메타 문법 
- 구문 
```javaScript
   - [ "옵션" ]    // 옵셥
   - (...)        // 설명할 내용이 더 있음 
   - 단어         // 문맥에서 해석 가능, 
                 // 블록문, key , value , obj , condition(참,거짓)
``` 
 - 특성
	 - 다른 문법을 설명하는 문법 
	 - '베커스-나우르 표기법 확장'
	 - 단순하고, 비공식적 
		 
#### 4.2.1 제어문의 예외
- <Strong>== 조커 , 동작 방식을 벗어나도록 도와주는 문 
	- break :  루프 중간에 빠져나가기 
	- continue :  루프에서 다음단계로 건너 뛰기
	- return : 제어문 무시하고 다음단계 ㄱ <Strong>**6장 함수 참고 
	- throw : 예외 핸들러에서 반드시 처리해야할 예외를 일으킴 <Strong>**11장 예외와 에러처리 참고







	
















 




		   


   
		
		

















