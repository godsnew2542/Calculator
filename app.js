function Clear() {
  document.getElementById("answer").innerHTML = "";
}

function Add() {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  var Char1 = num1.charAt(0);
  var Char2 = num2.charAt(0);
  var float1 = parseFloat(num1);
  var float2 = parseFloat(num2);
  var sum = float1 + float2;

  if (num1 == "" || num2 == "") {
    alert("กรุณากรอกข้อมูลให้ครบถ้วน");
  } else if (Char1 == "-" || Char2 == "-") {
    alert("กรุณากรอกข้อมูลเป็นจำนวนเต็มเท่านั้น");
  } else {
    $("#answer").append();
    var Add = `<h2> = &emsp; ${sum}</h2>`;
    $("#answer").append(Add);
  }
}

function Minus() {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  var Char1 = num1.charAt(0);
  var Char2 = num2.charAt(0);
  var float1 = parseFloat(num1);
  var float2 = parseFloat(num2);
  var sum = float1 - float2;

  if (num1 == "" || num2 == "") {
    alert("กรุณากรอกข้อมูลให้ครบถ้วน");
  } else if (Char1 == "-" || Char2 == "-") {
    alert("กรุณากรอกข้อมูลเป็นจำนวนเต็มเท่านั้น");
  } else {
    $("#answer").append();
    var Minus = `<h2> = &emsp; ${sum}</h2>`;
    $("#answer").append(Minus);
  }
}

function Multiply() {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  var Char1 = num1.charAt(0);
  var Char2 = num2.charAt(0);
  var float1 = parseFloat(num1);
  var float2 = parseFloat(num2);
  var sum = float1 * float2;

  if (num1 == "" || num2 == "") {
    alert("กรุณากรอกข้อมูลให้ครบถ้วน");
  } else if (Char1 == "-" || Char2 == "-") {
    alert("กรุณากรอกข้อมูลเป็นจำนวนเต็มเท่านั้น");
  } else {
    $("#answer").append();
    var Multiply = `<h2> = &emsp; ${sum}</h2>`;
    $("#answer").append(Multiply);
  }
}

function Divide() {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  var Char1 = num1.charAt(0);
  var Char2 = num2.charAt(0);
  var float1 = parseFloat(num1);
  var float2 = parseFloat(num2);
  var sum = float1 / float2;

  if (num1 == "" || num2 == "") {
    alert("กรุณากรอกข้อมูลให้ครบถ้วน");
  } else if (Char1 == "-" || Char2 == "-") {
    alert("กรุณากรอกข้อมูลเป็นจำนวนเต็มเท่านั้น");
  } else if (Char2 == "0") {
    alert("ไม่สามารถคำนวนหาค่าได้");
  } else {
    $("#answer").append();
    var Divide = `<h2> = &emsp; ${sum}</h2>`;
    $("#answer").append(Divide);
  }
}

function Percent() {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;
  var Char1 = num1.charAt(0);
  var Char2 = num2.charAt(0);
  var float1 = parseFloat(num1);
  var float2 = parseFloat(num2);
  var sum = (float1 / float2) * 100;

  if (num1 == "" || num2 == "") {
    alert("กรุณากรอกข้อมูลให้ครบถ้วน");
  } else if (Char1 == "-" || Char2 == "-") {
    alert("กรุณากรอกข้อมูลเป็นจำนวนเต็มเท่านั้น");
  } else if (Char2 == "0") {
    alert("ไม่สามารถคำนวนหาค่าได้");
  } else if (sum > "100") {
    alert("ไม่สามารถคำนวนหาเปอร์เซ็นได้");
  } else {
    $("#answer").append();
    var Percent = `<h2> = &emsp; ${sum} %</h2>`;
    $("#answer").append(Percent);
  }
}
