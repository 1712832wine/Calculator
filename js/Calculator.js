var reset = 'false';

function Reset_0() {
    if (reset == 'true') {
        var result = document.getElementById("result");
        result.value = "0";
        reset = 'false';
    }
}

function Error() {
    var result = document.getElementById("result");
    result.value = "ERROR"
    reset = 'true';
}

function ClickButton(obj) {
    Reset_0();
    var data = obj.innerHTML;
    var result = document.getElementById("result");
    if (data != "AC" && data != "DEL" && data != "=") {
        if (result.value == "0") {
            result.value = "";
        }
        if (data == 'x') result.value += '*'; //MULTIPLY
        else result.value += data;
    } else if (data == "AC") { //BUTTON AC
        result.value = "0";
    } else if (data == "DEL") { //BUTTON DEL
        if (result.value.length > 1) {
            result.value = result.value.substring(0, result.value.length - 1);
        } else {
            result.value = "0";
        }
    } else if (data == "=") { //BUTTON =
        try {
            result.value = eval(result.value);
            reset = 'true';
        } catch (error) {
            Error()
        }
    }
}