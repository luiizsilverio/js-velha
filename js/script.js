const x = document.querySelector(".x")
const o = document.querySelector(".o")
const boxes = document.querySelectorAll(".box")
const buttons = document.querySelectorAll("#buttons-container button")
const msgContainer = document.querySelectorAll("#message")
const messageText = document.getElementById("#message p")

let secondPlayer;

// contador de jogadas
let player1 = 0;
let player2 = 0;

// adicionando o evento de click aos boxes
for(let i = 0; i < boxes.length; i++) {
    
    // quando alguém clica na caixa
    boxes[i].addEventListener("click", function() {
        
        const el = quemVaiJogar(player1, player2);

        // verifica se já tem X ou O
        if (this.childNodes.length === 0) {
            const cloneEl = el.cloneNode(true);

            this.appendChild(cloneEl);

            // alternar jogador
            if (player1 === player2) {
                player1++;
            } else {
                player2++;
            }
        }
    })
}

function quemVaiJogar(player1, player2) {
    if (player1 === player2) {
        return x;
    } else {
        return o;
    }
}
