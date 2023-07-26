var flores = ["begonia", "dalia", "flordecerejeira","girassol", "hortencia", "lavanda", "lirio", "magnolia", "tulipa", "violeta"]
for (f=0; f<flores.length; f++)
  document.getElementById('flores').innerHTML += "<img src='static/img/"+flores[f]+".jpg' alt=''>"