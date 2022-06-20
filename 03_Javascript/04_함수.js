// 1. 함수 선언
// 1) 선언적 함수
function test1() {
    alert('test1() 함수 실행!');
}

// 2) 익명 함수
let btn2 = document.getElementById('btn2');

// btn2.onclick = function() {
//     alert('이벤트 핸들러 실행');
// }

btn2.addEventListener('click', function() {
    alert('이벤트 핸들러 실행');
});

// 함수 정의와 동시에 즉시 실행되는 함수로
// 단, 한 번만 호출되며 다시 호출할 수 없다.
(   
    function (a, b) {
        document.getElementById('p1').innerHTML = `a: ${a}, b: ${b}, a + b ${a + b}`;
    }
)(10, 20);

let btn3 = document.getElementById('btn3');

/*
    [표현법]
        1) 매개 변수 처리
            - 매개 변수가 없을 때 : () => { ... }
            - 매개 변수가 하나일 때 : x => { ... }
            - 매개 변수가 두 개 이상일 때 : (x, y, ... ) => { ... } 
        2) 리턴 처리
            - 처리할 라인이 여러 개라면 {}로 감싸서 처리해야 한다.
                (x, y) => {
                    실행 구문;

                    return x + y;
                }
            - 처리할 라인이 하나라면 {}와 return 문을 생략할 수 있다.
                (x, y) => x + y;
*/

btn3.addEventListener('click', () => alert('화살표 함수 실행'));

// 2. 함수 호출
// 1) 매개 변수
let btn4 = document.getElementById('btn4');

btn4.addEventListener('click', (event) => {
    // argTest()
    // argTest('안녕하세요.');
    // argTest('안녕하세요.', '만나서 반갑습니다.');
    // argTest();
    argTest('안녕하세요.');

    // 화살표 함수에서는 arguments 객체를 생성하지 않는다.
    // console.log(arguments); 
    console.log(event);
});

// function argTest(value) {
// 매개변수 기본값을 지정하면 전달되는 매개값이 없을 경우 기본 값으로 사용한다. (ES6 부터)
function argTest(value = '매개값 없음') {
    alert(value);
}

// 2) arguments 객체
let btn5 = document.getElementById('btn5');

btn5.addEventListener('click', function() {
    let result = 0;

    console.log(arguments);

    // result = sum(124, 500, 11, 370);
    // result = sum(124, 500);
    result = sum(11, 12, 13);

    alert(`sum : ${result}`);   

});

function sum() {
    let result = 0;

    console.log(arguments);

    for (const value of arguments) {
        result += value;
    }

    return result;
}

// 3. 함수 리턴
// 1) 일반적인 값 리턴
let btn6 = document.getElementById('btn6');

btn6.addEventListener('click', () => {
    let random = ran();

    alert(`random: ${random}`);
});

// 1 ~ 100까지의 랜덤값을 리턴하는 함수
function ran() {
    return parseInt(Math.random() * 100) + 1;
}

// 2) 익명 함수 리턴
let btn7 = document.getElementById('btn7');

btn7.addEventListener('click', () => {
    // let func = funcTest();

    // func();
    funcTest(20)();
});

function funcTest(age) {
    // 클로저
    //  - 내부함수가 사용하는 외부함수의 지역변수는 
    //    내부함수가 소멸할 때까지 소멸되지 않는 특성을 클로저라고 한다.
    let name = '홍길동';

    return function() {
        alert(`${name}님 안녕하세요. age: ${age}`);
    };
}

// 4. 내장 함수
// 1) eval() 함수
let btn8 = document.getElementById('btn8');

btn8.addEventListener('click', () => {
    let str = 'let p2 = document.getElementById("p2");'

    str += 'p2.innerHTML = "1과 2의 합은 3 입니다.<br>";';

    eval(str);

    let exec = document.getElementById('exec');
    let p2 = document.getElementById("p2");

    p2.innerHTML += `실제 입력된 값 : ${exec.value}<br>`;
    p2.innerHTML += `eval(exec.value) : ${eval(exec.value)}`;
});

let btn9 = document.getElementById('btn9');

btn9.addEventListener('click', () => {
    let p3 = document.getElementById('p3');

    p3.innerHTML = `10 / 0 : ${10 / 0}<br>`;
    p3.innerHTML += `-10 / 0 : ${-10 / 0}<br>`;
    p3.innerHTML += `isFinite(10 / 0) : ${isFinite(10 / 0)}<br>`;
    p3.innerHTML += `isFinite(-10 / 0) : ${isFinite(-10 / 0)}<br>`;
    p3.innerHTML += `10 / 'a' : ${10 / 'a'}<br>`;
    p3.innerHTML += `isNaN(10 / 'a') : ${isNaN(10 / 'a')}<br>`;
});