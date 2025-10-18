
function atualizarHorarioData(timezone = "America/Sao_Paulo") {
    const agora = new Date().toLocaleString("en-GB", { 
        timeZone: timezone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    const pegarIDhora = document.getElementById("time");
    const pegarIDdata = document.getElementById("date");
    const dataAtual = new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    }).replace(/\//g, " . ");

    if (pegarIDhora) pegarIDhora.textContent = agora;
    if (pegarIDdata) pegarIDdata.textContent = dataAtual;

    console.log(`Horário atualizado (${timezone}): ${agora}`);
}

document.addEventListener("DOMContentLoaded", function() {
    let botoes = document.querySelectorAll(".botao");

    if (!document.querySelector(".botao.selecionado") && botoes.length > 0) { // Define o primeiro botão como ativo se nenhum estiver selecionado
        botoes[0].classList.add("selecionado");
    }

    botoes.forEach((botao, index) => {
        botao.addEventListener("click", function() {
            botoes.forEach(b => b.classList.remove("selecionado")); // Remove a classe 'selecionado' de todos os botões
            this.classList.add("selecionado"); // Adiciona a classe 'selecionado' apenas ao botão clicado
            
            if (index === 1) { 
                atualizarHorarioData("Europe/Dublin"); // Se for o segundo botão (index 1), define o fuso de Galway
            } else {
                atualizarHorarioData("America/Sao_Paulo"); // Fuso padrão
            }
        });
    });

    setInterval(() => { // Atualiza o horário a cada segundo
        const botaoSelecionado = document.querySelector(".botao.selecionado");
        const indexSelecionado = [...botoes].indexOf(botaoSelecionado);
        
        if (indexSelecionado === 1) {
            atualizarHorarioData("Europe/Dublin");
        } else {
            atualizarHorarioData("America/Sao_Paulo");
        }
    }, 1000);
});

atualizarHorarioData(); // Atualiza inicialmente no fuso padrão (Brasil)



