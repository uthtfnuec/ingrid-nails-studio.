
const servicos = [
    "Unhas em gel",
    "Alongamento em gel",
    "Banho de gel",
    "Fibra de vidro",
    "Manutenção",
    "Esmaltação em gel",
    "Decoração"
];

const lista = document.getElementById("lista-servicos");
const seletor = document.getElementById("servico");

servicos.forEach(function(servico) {
    const item = document.createElement("div");

    item.textContent = "💅 " + servico;
    item.style.padding = "15px";
    item.style.background = "#fff0f5";
    item.style.borderRadius = "12px";
    item.style.marginBottom = "8px";

    lista.appendChild(item);

    const opcao = document.createElement("option");
    opcao.value = servico;
    opcao.textContent = servico;

    seletor.appendChild(opcao);
});

const formulario = document.getElementById("form-agendamento");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const servico = document.getElementById("servico").value;
    const data = document.getElementById("data").value;
    const horario = document.getElementById("horario").value;

    const mensagem =
        "Olá, Ingrid! Gostaria de solicitar um agendamento.%0A%0A" +
        "Nome: " + encodeURIComponent(nome) + "%0A" +
        "Telefone: " + encodeURIComponent(telefone) + "%0A" +
        "Serviço: " + encodeURIComponent(servico) + "%0A" +
        "Data: " + encodeURIComponent(data) + "%0A" +
        "Horário: " + encodeURIComponent(horario);

    const whatsapp = "https://wa.me/5551996450572?text=" + mensagem;

    window.open(whatsapp, "_blank");
});
