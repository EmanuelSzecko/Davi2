const elogios = [
  "Você é a razão de muitos sorrisos por aqui 😄",
  "Seu brilho deixa qualquer dia mais bonito ✨",
  "Se eu fosse escolher um ser humano favorito, seria você 💙",
  "Sorte de quem tem você por perto!",
  "Você é incrível do seu jeitinho único!",
  "Amizade como a sua vale ouro 💛",
  "Você deixa tudo mais leve e divertido!"
];

function mostrarElogio() {
  const sorteado = elogios[Math.floor(Math.random() * elogios.length)];
  document.getElementById("elogio").innerText = sorteado;
}
