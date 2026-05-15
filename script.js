'use strict'

function feedback() {
    let data = document.getElementById("data").value;
    let forno = document.getElementById("forno").value;
    let ea = parseFloat(document.getElementById("ea").value);
    //let tensao = parseFloat(document.getElementById("tensao").value);
    let temperatura = parseFloat(document.getElementById("temperatura").value);
    let db = parseFloat(document.getElementById("db").value);
    let descricao = document.getElementById("descricao").value;
    let resultado = "";
    resultado += "RELATÓRIO DO FORNO\n\n";
    resultado += "Data: " + data + "\n";
    resultado += "Forno: " + forno + "\n\n";

    //EA
    if (ea <= 0.22) {
        resultado += "\n FREQUÊNCIA EA:\n" + "A frequência do EA está fora do padrão\n";
    } else if (ea >= 0.31) {
        resultado +=  "\nEA:\n" + "A frequência do EA está de acordo com o padrão\n";
    } else {
        resultado +=  "\nEA:\n" + "Necessário avaliação\n";
    }
    //tensão
    //if (tensao <= 4.32) {
    //    resultado += "\nTensão:\n" + "Possível queda de temperatura e sujeito a banho sujo\n";
   // } else if (tensao >= 4.37) {
    //    resultado += "\nTensão:\n" + "Possível aumento na temperatura e desgaste no ânodo\n";
   // } else {
   //     resultado += "\nTensão:\n" + "A tensão está ideal\n";
   // }
   
    //temperatura
    if (temperatura <= 954) {
        resultado += "\nTemperatura:\n" + "A temperatura está baixa, forno sujeito a banho sujo\n";
    } else if (temperatura >= 964) {
        resultado += "\nTemperatura:\n" + "Possível aumento na temperatura e desgaste no ânodo\n";
    } else {
        resultado += "\nTemperatura:\n" + "Temperatura está no padrão\n";
    }
   //db
    if (db <= 0.15){
        resultado += "\nDB:\n" + "O DB está de acordo com o padrão\n";
    }else{
        resultado += "\nDB:\n" + "Excesso de alumina, sujeito a lama no banho\n";
    }

    resultado += "\nDescrição:\n" + descricao;
    
    document.getElementById("resultado").textContent =
    resultado;
}
