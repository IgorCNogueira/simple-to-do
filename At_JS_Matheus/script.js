function soma(){
    let num1 = document.getElementById("num1").value;
    let select = document.getElementById("select").value;
    let num2 = document.getElementById("num2").value;

    operação = parseInt(num1) + parseInt(num2);

    document.getElementById("res").innerHTML = operação;
    
}