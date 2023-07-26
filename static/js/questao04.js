function alterarImagem(){
    var forma = document.getElementById("forma").value
    if (forma === "círculo"){
      document.getElementById('img').src="{{ url_for('static', filename='img/circulo.jpg') }}";
    }
    else if (forma === "quadrado"){
      document.getElementById('img').src="{{ url_for('static', filename='img/quadrado.jpg') }}";
    }
    else if (forma === "triângulo"){
      document.getElementById('img').src="{{ url_for('static', filename='img/triangulo.jpg') }}";
    }
    else{
      document.getElementById('img').src="{{ url_for('static', filename='img/interrogacao.jpg') }}";
      window.alert("Forma geométrica inválida! Escolha uma das formas geométricas (círculo, quadrado ou triângulo).")
    }
  }
  