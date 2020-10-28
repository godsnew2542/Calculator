function Clear() {
    document.getElementById("answer").innerHTML = '';
}

function calculator(num1, num2, option) {
    var Char1 = num1.charAt(0);
    var Char2 = num2.charAt(0);
    var float1 = parseFloat(num1);
    var float2 = parseFloat(num2);

    if (num1 == "" || num2 == "") {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    } else if (Char1 == "-" || Char2 == "-") {
        alert("กรุณากรอกข้อมูลเป็นจำนวนเต็มเท่านั้น");
    } else {
        if (option == "Add") {
            add(float1, float2);
        }
        if (option == "Minus") {
            minus(float1, float2);
        }
        if (option == "Multiply") {
            multiply(float1, float2);
        }
        if (option == "Divide") {
            if (Char2 == "0") {
                alert("ไม่สามารถคำนวนหาค่าได้");
            } else {
                divide(float1, float2);
            }
        }
        if (option == "Percent") {
            if (Char2 == "0") {
                alert("ไม่สามารถคำนวนหาค่าได้");
            } else {
                percent(float1, float2);
            }
        }
    }
}

function clearOutput() {
    document.getElementById("num1").value = ''
    document.getElementById("num2").value = ''
}

function updateDisplay(sum) {
    clearOutput();
    $("#answer").append();
    var dis = `<h2> = &emsp; ${sum}</h2>`;
    $("#answer").append(dis);

}

function add(float1, float2) {
    var sum = float1 + float2;
    updateDisplay(sum);
}

function minus(float1, float2) {
    var sum = float1 - float2;
    updateDisplay(sum);
}

function multiply(float1, float2) {
    var sum = float1 * float2;
    updateDisplay(sum);
}

function divide(float1, float2) {
    var sum = float1 / float2
    updateDisplay(sum);
}

function percent(float1, float2) {
    var sum = (float1 / float2) * 100;

    if (sum > "100") {
        alert("ไม่สามารถคำนวนหาเปอร์เซ็นได้");
    } else {
        updateDisplay(sum);
    }
}