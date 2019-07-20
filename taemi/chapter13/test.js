// 272p예제
// 서브루틴을 사용하지 않음
const year = new Date().getFullYear();
if(year %4 !==0) console.log(`${year}is NOT a leap year.`)
else if(year % 100 !=0) console.log(`${year}IS a leap year.`)
else if(year % 400 !=0) console.log(`${year}is NOT a leap year.`)
else console.log(`${year} IS a leap year`);


// 위의 예제에서 서브루틴 사용함 = 함수로 덮어줌
// 따라서 사용하고 싶을 때 여러번 간단하게 사용할 수 있으며, 
// 안에 year의 내용을 간단하게 바꿔서 지속적으로 사용가능
function printLeapYearStatus(){
    const year = new Date().getFullYear();
    if(year %4 !==0) console.log(`${year}is NOT a leap year.`)
    else if(year % 100 !=0) console.log(`${year}IS a leap year.`)
    else if(year % 400 !=0) console.log(`${year}is NOT a leap year.`)
    else console.log(`${year} IS a leap year`);
}

// 위의 예제에서 return 추가
function printLeapYearStatus(){
    const year = new Date().getFullYear();
    if(year %4 !==0) console.log(`${year}is NOT a leap year.`)
    else if(year % 100 !=0) console.log(`${year}IS a leap year.`)
    else if(year % 400 !=0) console.log(`${year}is NOT a leap year.`)
    else return true;
}

//위의 예제 활용

const daysInMonth = [
    31, isCurrnetYearLeapYear()? 29:28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
];

if(isCurrentYearLeapYear()) console.log('It is a leap year');

/////////////

// 순수하지 않은 함수의 예시
const colors = ['red', 'orange', 'yellow','green', 'blue', 'indigo', 'violet'];
let colorIndex = -1;
function getNextRainbowColor(){
    if(++colorIndex >= colors.length) colorIndex = 0;
    return colors[colorIndex];
}

// 순수한 함수의 예시
function isLeapYear(year){
    if(year %4 !==0) return false; 
    else if(year % 100 !=0) return true;
    else if(year % 400 !=0) return false;
    else return true;
}

// 순수한 함수의 예시 2
// 위의 예제를 이용해서 만들기
// 부수효과 없애기
 
const getNextRainbowColor = (function(){
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    let colorIndex = -1;
    return function(){
        if(++colorIndex >= colors.length) colorIndex = 0;
        return colors[colorIndex];
    };
})();

// 위의 예제는 입력이 같아도 결과가 다를 수 있으므로 순수한 함수가 아니다

// 브라우저에서 어떤 요소의 색깔을 0.5초마다 바꾸고 싶다면 아래의 코드

setInterval(function(){
    document.querySelector('.rainbow')
        .style['background-color'] = getNextRainbowColor();
}, 500);

// 위 코드의 문제는 프로그램의 다른 부분에서 getNextRainbowColor()를 호출하게 되면
// 이 코드도 영향을 받는 다는 것

// 여기서는 이터레이터를 사용하는 것이 더 좋은 방법이다
// 이 예제의 getRainbowIterator는 순수한 함수이다
function getRainbowIterator(){
    const colors = ['red', 'orange', 'yellow','green', 'blue', 'indigo', 'violet'];
    let colorIndex = -1;
    return {
        next(){
            if(++colorIndex >= colors.length) colorIndex = 0;
            return {value:colors[colorIndex], done:false}
        }
    }
}

//
const rainbowIterator = getRainbowIterator();
setInterval(function(){
    document.querySelector('.rainbow')
        .style['background-color']=rainbowIterator.next().value;
}, 500);


// next는 함수가 아니라 메서드라는 점에서 계속해서 변화하는 값을 반환해도 
// 이 함수는 순수함수라고 할 수 있다.
