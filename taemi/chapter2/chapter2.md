# chapter2 자바스크립트 개발도구

- 개발도구
    - 깃(Git)
        - 프로젝트가 커져도 쉽게 관리 가능
        - 협력 가능하도록 돕는 버전 컨트롤 도구
    - 노드(Node) 
        -  브라우저 밖에서 자바스크립트 사용 가능
        - 노드와 함께 설치되는 npm은 이 리스트의 다른 도구를 설치 할 때 필요
    - 걸프(Gulp)
        - 반복적인 개발 작업을 자동화하는 빌드 도구
        - 그런트 (Grunt)도 널리 쓰읨
    - 바벨 ( Babel) 
        - ES6 코드를 ES5코드로 변환하는 트랜스컴파일러
    - ES린트(ESLint) 
        - 자주 하는 실수를 피하고 더 나은 프로그래머가 되도록 돕는 린트 프로그램

## 2.1 ES6 사용하기

- ES5 -> ES6

(참고)에버그린 <br> 
    :  브라우저가 제대로 동작하려면 인터넷 연결이 필수, 따라서 사용자가 버전 선택을 하는 것이 아니라 항상 최신화


## 2.2 ES6 기능
새 기능이 너무 많다. <br>
현재 다 지원되는 곳이 없을 정도.

### 2.2.1 깃설치
### 2.2.2 터미널
- 터미널에 대해서 더 알고 싶다면 '트리하우스의 콘솔 기초 강의'를 들어볼 것
### 2.2.3 프로젝트 루트
### 2.2.4 깃과 버전 컨트롤
- .gitignore 파일에 쓸모 없는 파일 추가하기
    - .bak 파일을 만든다면 `*.bak` 추가

### 2.2.5 npm 패키지 관리
> npm이란 : npm 은 자바스크립트 프로그래밍 언어를 위한 패키지 관리자이다.

- `npm`은 `package.json` 파일을 통해 의존성을 관리한다.
    - 의존성 : 프로젝트에 설치하고 관리하는 모듈
        - 일반 의존성 
        - 개발 의존성 : 앱 실행 시에는 필요 x, 프로젝트를 개발할 때 필요하거나 도움이 되는 패키지
    - `package.json` 을 만들려면 : `npm init`
- `--save` 또는 `--save-dec` 
    - package는 설치되지만 package.json파일에는 등록되지 않는다.
- `npm install`만 쳤을 경우
    - `npm` 은 `package.json` 파일을 읽고 필요한 패키지를 자동으로 설치한다.

### 2.2.6 빌드 도구 : 걸프와 그런트
[컴파일, 빌드, 빌드도구에 대한 정의](https://galid1.tistory.com/194)

- 빌드 도구
    - 그런트
    - 걸프
        - 개발 의존성에 속함 ( 최종사용자에게는 필요 없지만, 개발 과정에서 도움이 되는 것)
        - [걸프란?](https://programmingsummaries.tistory.com/356)
### 2.2.7 프로젝트 구조
> 걸프와 바벨을 써서 ES6코드를 ES5로 바꾸기 전에 코드를 어디에 저장할지 생각해야 한다. (ES6디렉터리)
>ES6디렉터리에 만들게 되면 소스코드를 ES6로 만들었음을 명확히 알 수 있다.

**카테고리**
- 서버(노드)
    - 프로젝트 루트의 es6 디렉터리에 저장
- 클라이언트(브라우저)
    - public/es6 디렉터리에 저장
- ES5 코드 저장소
    - ES6코드와 ES5코드를 섞어서 쓸 수 없으므로
    - 보통 dist(distribution)

```python
.git            #Git
.gitignore

package.json           #npm
node_modules

es6                 #노드소스
dist

public/         #브라우저 소스
   es6/
  dist/
```

## 2.3 트랜스컴파일러

- 트레이서
- 바벨
    - 범용 트랜스컴파일러
        - ES5를 ES6로 바꿈
        - ES6, react, ES7 등 여러 가지 지원

### 2.3.1 바벨을 걸프와 함께 사용하기

- 걸프가 하는 일
    - ES6코드를 ES5코드로 바꾸기
    - es6와 public/es6에 있는 코드를 ES5코드로 변환해서 dist와 public/dist에 저장
    - 소스파일 이름과 디렉터리 구조를 그대로 유지

## 2.4 린트
- 코드 검토 후에 자주 일어나는 실수를 알려줌
- 사용 : 니콜라스 자카스의 ESLint
- Gulpfile의 기본 작업에 ESLint를 추가해서 걸프를 실행하기만 하면 된다.
- 에러 수정 실습
    1. 줄 끝 쉼표
    2. console.log

# Q
- 아직 자바스크립트 코드를 제대로 쓴 적이 없어서 그런가 걸프에 대해 감이 안 온다.

- 67p 에 `node es6/test.js`를 쳤더니 예제대로 안 나옴. 뒤에 있는 `node dist/test.js`예시대로 나옴

# 주의
1. `npm install --save-dev gulp-babel` 할 때 

```html
npm WARN gulp-babel@8.0.0 requires a peer of @babel/core@^7.0.0 but none is installed. You must install peer dependencies yourself.
```
이런 오류가 말이 뜨는데 이거 해결하려면
```html
npm install --save-dev @babel/core @babel/preset-env
```
해결.

2. `gulp` 명령어는 `gulpfile.js`가 있는 곳에서 실행



