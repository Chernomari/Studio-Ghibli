window.onload = function () {  

let mensagem, resposta, mensagem2;
mensagem = prompt('Olá, pessoa! Você gostaria de responder a algumas perguntas sobre esse site? (Favor responder com "sim" ou "não" e se você já tiver respondido, favor escrever "não"): ');
resposta = (`${mensagem}`);
if (resposta == 'sim') {
    window.location.href = "https://forms.gle/M7wVhRuLRRh6a8TK8";
} else {
    mensagem2 = alert('Ah sim! Agradeço de qualquer forma!')
}
}
