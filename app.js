/**
 * jokenpo
 * @author Samuel gadelha
 * link https://github.com/izaaksamuel/novojokenpo.git
 * @version1.0
 */

function jogar() {
    //validação de campos obrigatórios (radio button)
    if (document.getElementById('pedra').checked === false &&
        document.getElementById('papel').checked === false && document.getElementById('tesoura').checked === false) {
        alert("SElecione uma opção")
    } else {
        //lógica principal
        let sorteio = Math.floor(Math.random() * 3)// 0 1 2
        switch (sorteio) {
            case 0:
                document.getElementById('pc').src = "img/pcpedra.png"
                break
            case 1:
                document.getElementById('pc').src = "img/pcpapel.png"
                break
            case 2:
                document.getElementById('pc').src = "img/pctesoura.png"
                break
        }
        //verificar vencedor ou declarar empate
        if ((document.getElementById('pedra').checked === true && sorteio === 0) ||
            (document.getElementById('papel').checked === true && sorteio === 1) ||
            (document.getElementById('tesoura').checked === true && sorteio === 2)) {
            document.getElementById('placar').innerHTML = "empate"
        } else if
            ((document.getElementById('pedra').checked === true && sorteio === 2) ||
            (document.getElementById('papel').checked === true && sorteio === 0) ||
            (document.getElementById('tesoura').checked === true && sorteio === 1)) {
            document.getElementById('placar').innerHTML = " você venceu" 
        } else {
            document.getElementById ('placar').innerHTML = "computador venceu"
        }

    }
}

function limpar() {
    document.getElementById('pc').src = "img/pc.png"
    document.getElementById('placar').innerHTML = ""
}