function Fib() {
    let x = parseInt(prompt("Bạn muốn bao nhiêu số Fibonnaci:", ""));
    console.log(x);
    let a = 0;
    let b = 1;
    let fib;
    if (isNaN(x)) {
        alert("Please enter a number");
    } else {
        for (i = 1; i <= x; i++) {
            fib = a + b;
            a = b;
            b = fib;

            document.getElementById("demo1").innerHTML += fib + " ";
        }
    }
}

function giaithua() {
    let n = prompt("Enter a  integer number > 0");

    if (parseInt(n) != n) {
        alert("Please enter a INTEGER number");
    } else if (parseInt(n) < 0) {
        alert("Please enter a INTEGER number >0");
    } else {
        let giaithua = 1;
        for (i = 1; i <= n; i++) {
            giaithua = giaithua * i;
        }
        document.getElementById("demo2").innerHTML = giaithua;
    }
}

function print1() {
    for (i = 1; i <= 5; i++) {
        for (j = 1; j <= i; j++) {
            document.writeln("*");
        }
        document.writeln("<br/>");
    }
}

function print2() {
    for (i = 5; i >= 1; i--) {
        for (j = 1; j <= i; j++) {
            document.writeln("*");
        }
        document.write("<br/>");
    }
}

function print3() {
    for (let i = 1; i < 6; i++) {
        for (let k = 0; k < 6 - i; k++) {
            document.writeln("&nbsp;&nbsp");
        }
        for (let j = 0; j < i; j++) {
            document.writeln("*");
        }
        document.writeln("<br>");
    }
}

function print4() {
    for (let i = 1; i < 6; i++) {
        for (j = 1; j <= i; j++) {
            document.writeln("&nbsp;&nbsp");
        }

        for (k = 0; k < 6 - i; k++) {
            document.writeln("*");
        }
        document.writeln("<br>");
    }
}

function print5() {
    let space = "&nbsp;&nbsp;";
    for (i = 1; i <= 7; i++) {
        document.writeln("<br>" + "*");
        for (j = 1; j <= 21; j++) {
            if (i > 1 && j < 21 && i < 7) {
                document.write(space);
            } else {
                document.write("*");
            }
        }
    }
}

function bill() {
    let money = document.getElementById("money").value;
    if (money < 0) {
        alert("Hãy nhập số tiền vay >0");
    } else {
        let month = document.getElementById("month").value;

        let rate = document.getElementById("rate").value;
        if (rate < 0) {
            alert("Lãi suất là 1 số >0 ");
        }
        let bill;
        bill =
            parseFloat(money) + (month * parseFloat(money) * parseFloat(rate)) / 100;
        alert("Số tiền bạn phải trả là : " + bill);
    }
}