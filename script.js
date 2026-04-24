document.getElementById('calculate').addEventListener('click', function() {
    let n1=document.getElementById('numerator1').value;
    let n2=document.getElementById('numerator2').value;

    let operation=document.getElementById('operation').value;
    let result=0

    if (operation=='+') {
    result = Number(n1) + Number(n2);
    };

    if (operation=='-') {
    result = Number(n1) - Number(n2);
    };

    if (operation=='*') {
    result = Number(n1) * Number(n2);
    };

    if (operation=='/') {
    result = Number(n1) / Number(n2);
    };
    document.getElementById('result').textContent = result;


});