// 1. Функция для кнопок-картинок (ставит знак)
function setSign(sign) {
    document.getElementById('operation').value = sign;
}

// 2. Обработчик кнопки "Вычислить"
document.getElementById('calculate').addEventListener('click', function() {
    // ШАГ 1: Берём значения КАК ТЕКСТ (пока не превращаем в числа!)
    let val1 = document.getElementById('numerator1').value; // ⚠️ Проверьте id в HTML!
    let val2 = document.getElementById('numerator2').value;
    let op = document.getElementById('operation').value;

    // ШАГ 2: Проверяем, не пустые ли поля
    if (val1 === "" || val2 === "") {
        document.getElementById('result').textContent = "Введите оба числа!";
        return; // Останавливаем функцию, дальше не идём
    }

    // ШАГ 3: Только теперь превращаем в числа
    let n1 = Number(val1);
    let n2 = Number(val2);

    // Проверяем, точно ли введены цифры (а не буквы)
    if (isNaN(n1) || isNaN(n2)) {
        document.getElementById('result').textContent = "Введите корректные числа!";
        return;
    }

    let result = 0;

    // ШАГ 4: Считаем
    if (op === '+') {
        result = n1 + n2;
    } else if (op === '-') {
        result = n1 - n2;
    } else if (op === '*') {
        result = n1 * n2;
    } else if (op === '/') {
        if (n2 === 0) {
            document.getElementById('result').textContent = "На ноль делить нельзя!";
            return;
        }
        result = n1 / n2;
    } else {
        document.getElementById('result').textContent = "Выберите операцию (+, -, *, /)";
        return;
    }

    // ШАГ 5: Выводим результат
    document.getElementById('result').textContent = result;
});