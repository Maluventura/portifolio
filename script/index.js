var antigo = 0;

window.document.onscroll = function () {
  var atual = window.scrollY;
  if (antigo < atual) {
    console.log("desceu");
    window.document.getElementById("container_cabecalho").style.position =
      "fixed";
  }
  if (atual < antigo) {
    console.log("subiu");
  }
  antigo = atual;
};
