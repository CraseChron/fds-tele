// Exibe uma saudação dinâmica com base no horário do dia
const descricao = document.querySelector('.descricao');
const horaAtual = new Date().getHours();

let saudacao;

if (horaAtual < 12) {
    saudacao = "Bom dia!";
} else if (horaAtual < 18) {
    saudacao = "Boa tarde!";
} else {
    saudacao = "Boa noite!";
}

descricao.textContent = `${saudacao} Eu sou Matheus, estudo ADS na UNINTER e adoro explorar o mundo da tecnologia!`;
