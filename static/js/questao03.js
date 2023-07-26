function calcular(){
    var valorA = document.getElementById("valorA").value
    var valorB = document.getElementById("valorB").value
    var op = document.getElementById("op").value
  
    if (op == "soma"){
      document.getElementById("resultado").textContent = parseFloat(valorA) + parseFloat(valorB);
    }
    if (op == "sub"){
      document.getElementById("resultado").textContent = parseFloat(valorA) - parseFloat(valorB);
    }
    if (op == "mult"){
      document.getElementById("resultado").textContent = parseFloat(valorA) * parseFloat(valorB);
    }
    if (op == "div"){
      document.getElementById("resultado").textContent = parseFloat(valorA) / parseFloat(valorB)
    }
  }