function showTable() {
    var numberInput = document.getElementById('number');
    var number = numberInput.value;

    var result = document.getElementById('result');

    table = "";
    for(i = 0; i <= 9; i++) {
        table += number + 'x' + i + ' = ' + (number * i) + '<br>';
    }

    result.innerHTML = table;
}
