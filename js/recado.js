
function salvarMensagem() {
  const nome = document.getElementById("nome").value;
  const mensagem = document.getElementById("mensagem").value;
  if (!nome || !mensagem) return;
  const mensagens = JSON.parse(localStorage.getItem("mensagens")) || [];
  mensagens.push({ nome, mensagem });
  localStorage.setItem("mensagens", JSON.stringify(mensagens));
  alert("Mensagem salva!");
}
