let cliques = 0;

function contarClique() {
  cliques++;
  let frase = `Você clicou ${cliques} vez${cliques > 1 ? 'es' : ''}.`;

  if (cliques === 10) frase += " Tá gostando, hein? 😄";
  else if (cliques === 50) frase += " Isso já é vício! 😂";
  else if (cliques === 100) frase += " 100 cliques? Tá apaixonado por esse botão!";
  else if (cliques > 150) frase += " Ok... você zerou o jogo 👑";

  document.getElementById("resultado").innerText = frase;
}
