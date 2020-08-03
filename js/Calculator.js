function ClickButton(obj) {
    var data = obj.innerHTML;
    var result = document.getElementById("result");
    if (data != "AC" && data != "DEL" && data != "=") {
        result.value += data;
    } else if (data == "AC") {
        result.value = "0";
    } else if (data == "DEL") {
        if (result.value != "0") {
            result.value = result.value.substring(0, result.value.length - 1);
        }
    } else if (data == "=") {
        result.value = eval(result.value);
        if (onkeypress()) result.value = "0";
    }

}