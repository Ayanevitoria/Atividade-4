function alterarImagem(){
    var forma = document.getElementById("forma").value
    if (forma === "círculo"){
      document.getElementById('img').src = "circulo.jpg";
    }
    else if (forma === "quadrado"){
      document.getElementById('img').src = "quadrado.jpg";
    }
    else if (forma === "triângulo"){
      document.getElementById('img').src = "triangulo.jpg";
    }
    else{
      document.getElementById('img').src = "interrogacao.jpg";
      window.alert("Forma geométrica inválida! Escolha uma das formas geométricas (círculo, quadrado ou triângulo).")
    }
  }