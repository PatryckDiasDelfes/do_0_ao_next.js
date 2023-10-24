let jogador = "X"
let table = ["", "", "", "", "", "", "", "", ""]

function mark(indice) {

     if (table[indice] != "") return 
//Verifica se a caixa está com valor. Caso tenha ela encerra a função(return). Caso contrario segue o codigo
    
    table[indice] = jogador
    if (jogador == "X") {
        jogador = "O"
    } 
//Vefica(==) se é "X". Se for "X" ele atribui(=) valor para "0"

    else {
        jogador = "X"
    }
//Se valor foi verificado como "0", ele reatribui valor para "X"

    render()
//Antes do render atualizamos o estado da aplicação. Agora chamando o "render" atualizamos a tela do user.
}

function render() {
    let tds = document.querySelectorAll("td")
//"let tds = document.querySelectorAll("td") acessa o documento do aplicação e verifica os "td" 
    tds.forEach((td, indice) => {
        td.innerHTML = table[indice]
    })
//Chamando a variavel tds ele verifica cada uma(forEach) e da um valor(td) e verifica o valor de "indice". 
//Para então verificar(innerHTML) oque tem em "td" e atribuir o valor de tabela/indice.
//Por fim ele atualiza a tela 
}
