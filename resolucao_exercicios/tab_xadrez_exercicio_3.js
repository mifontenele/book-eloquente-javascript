const tamanho = 8;
    let xadrez = "";

    for (linha = 1; linha <= tamanho; linha = linha + 1) {

        for (let coluna = 1; coluna <= tamanho; coluna = coluna + 1) {
            if ((linha + coluna) % 2 === 0) {
                xadrez = xadrez + "X";
            } else {
                xadrez = xadrez + "  ";
            }
        }
        xadrez = xadrez + "\n";
    }
    console.log(xadrez)