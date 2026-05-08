'use strict'

function feedback() {
    let data = document.getElementById("data").value;
    let forno = document.getElementById("forno").value;
    let EA = parseFloat(document.getElementById("EA").value);
    let tensao = parseFloat(document.getElementById("tensao").value);
    let temperatura = parseFloat(document.getElementById("temperatura").value);
    let descricao = document.getElementById("descricao").value;
    let resultado = "";
    resultado += "RELATÓRIO DO FORNO\n\n";
    resultado += "Data: " + data + "\n";
    resultado += "Forno: " + forno + "\n\n";

    //EA
    if (EA <= 0.22) {
        resultado += "\nEA:\n" + "Forno não está saudável\n";
    } else if (EA >= 0.31) {
        resultado +=  "\nEA:\n" + "Forno está saudável\n";
    } else {
        resultado +=  "\nEA:\n" + "Necessário avaliação\n";
    }
    //tensão
    if (tensao <= 4.32) {
        resultado += "\nTensão:\n" + "Possível queda de temperatura e sujeito a banho sujo\n";
    } else if (tensao >= 4.37) {
        resultado += "\nTensão:\n" + "Possível aumento na temperatura e desgaste no ânodo\n";
    } else {
        resultado += "\nTensão:\n" + "A tensão está ideal\n";
    }
    //temperatura
    if (temperatura <= 954) {
        resultado += "\nTemperatura:\n" + "A temperatura está baixa, forno sujeito a banho sujo\n";
    } else if (temperatura >= 964) {
        resultado += "\nTemperatura:\n" + "Possível aumento na temperatura e desgaste no ânodo\n";
    } else {
        resultado += "\nTemperatura:\n" + "Temperatura está no padrão\n";
    }

    resultado += "\nDescrição:\n" + descricao;
    
    document.getElementById("resultado").textContent =
    resultado;
}
