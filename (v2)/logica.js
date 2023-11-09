// variavel que uso para definir o estado inicial de player
   let player = "X"  

// variavel que uso para definir oque é minha table, no caso um []
let table = ["", "", "", "", "", "", "", "", ""]



    function mark(index) {

        if (table[index] != "") return

        table[index] = player
    if (player == "X") {
        player = "O"
    } 
    else {
        player = "X"
    }
        render()
    }

    function render() {
        let tds = document.querySelectorAll("td")

        tds.forEach((td, index) => { td.innerHTML = table[index] })
    }