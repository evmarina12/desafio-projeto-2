calcularRanking(100, 6);

function calcularRanking(vitorias, derrotas) {
    let saldoJogo = vitorias - derrotas;
    let nivel = "";

    switch (true) {
        case saldoJogo < 10:
            nivel = "Ferro";
            break;

        case saldoJogo >= 10 && saldoJogo <= 20:
            nivel = "Bronze";
            break;

        case saldoJogo >= 21 && saldoJogo <= 50:
            nivel = "Prata";
            break;

        case saldoJogo >= 51 && saldoJogo <= 80:
            nivel = "Ouro";
            break;

        case saldoJogo >= 81 && saldoJogo <= 90:
            nivel = "Diamante";
            break;

        case saldoJogo >= 91 && saldoJogo <= 100:
            nivel = "Lendário";
            break;

        case saldoJogo >= 101:
            nivel = "Imortal";
            break;
    }

    console.log(`O Herói tem um saldo de ${saldoJogo} e está no nível de ${nivel}`);
}