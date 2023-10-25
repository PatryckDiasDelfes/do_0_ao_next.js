let jogador = "X"
let table = ["", "", "", "", "", "", "", "", ""]

function mark(indice) {

     if (table[indice] != "") return 
//Verifica se a caixa está com valor. Caso tenha ela encerra a função(return). Caso contrario segue o codigo
    
    table[indice] = jogador
    if (jogador == "X") {
        jogador = "O"
    } 
//Vefica(==) se é "jogador= X". Se for " jogador= X" ele atribui(=) valor para "jogador= O"

    else {
        jogador = "X"
    }
//Se valor foi verificado como "jogador= O", ele reatribui valor para "jogador= X"

    render()
//Antes do render, atualizamos o estado da aplicação, para agora chamar o "render" atualizamos a tela do user.
}

function render() {
    let tds = document.querySelectorAll("td")
//"let tds = document.querySelectorAll("td") acessa o documento do aplicação e seleciona os "td" 
    tds.forEach((td, indice) => {
        td.innerHTML = table[indice]
    })
//Chamando a variavel "tds" ele passa por cada uma(forEach) e então executa um bloco de codigo "{}".
//Para então acessar o "innerHTML". Pegar oque tem em "td" e atribuir o valor de tabela/indice.
//Por fim ele atualiza a tela 
}
