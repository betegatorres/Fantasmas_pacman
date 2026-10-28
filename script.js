function escolherDescricao(fantasma) {
    const descricao = document.getElementById('descricao');
const img = document.getElementById('img');

    switch (fantasma) {
        case "vermelho":
            descricao.innerText = "arroz e feijao";
            img.src =""
            break;
    
        default:
            break;
    }
}