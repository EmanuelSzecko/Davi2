
const mensagens = JSON.parse(localStorage.getItem("mensagens")) || [];
const div = document.getElementById("mensagens");
if (mensagens.length === 0) {
  div.innerHTML = "<p>Nenhuma mensagem ainda.</p>";
} else {
  mensagens.forEach(msg => {
    const p = document.createElement("p");
    p.innerHTML = `<strong>${msg.nome}:</strong> ${msg.mensagem}`;
    div.appendChild(p);
  });
}
