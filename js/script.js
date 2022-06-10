const x = document.querySelector(".x")
const o = document.querySelector(".o")
const boxes = document.querySelectorAll(".box")
const buttons = document.querySelectorAll("#buttons-container button")
const msgContainer = document.getElementById("message")
const messageText = document.querySelector("#message p")

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

                if (secondPlayer === 'ai-player') {
                    computerPlay();
                    player2++;
                }
            } else {
                player2++;
            }

            checarQuemVenceu()
        }
    })
}


for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {

        secondPlayer = this.getAttribute("id")

        for (let j = 0; j < buttons.length; j++) {
            buttons[j].style.display = "none";
        }

        setTimeout(() => {
            let container = document.getElementById('container')
            container.classList.remove('hide')
        }, 200);
    })
}

function quemVaiJogar(player1, player2) {
    if (player1 === player2) {
        return x;
    } else {
        return o;
    }
}

function checarQuemVenceu() {
    let b1 = document.getElementById("block-1")
    let b2 = document.getElementById("block-2")
    let b3 = document.getElementById("block-3")
    let b4 = document.getElementById("block-4")
    let b5 = document.getElementById("block-5")
    let b6 = document.getElementById("block-6")
    let b7 = document.getElementById("block-7")
    let b8 = document.getElementById("block-8")
    let b9 = document.getElementById("block-9")

    // checar horizontal - primeira linha
    if (b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {
        let b1Child = b1.childNodes[0].className
        let b2Child = b2.childNodes[0].className
        let b3Child = b3.childNodes[0].className

        if (b1Child === 'x' && b2Child === 'x' && b3Child === 'x') {
            declareWinner('x'); // X venceu            
        } else
        if (b1Child === 'o' && b2Child === 'o' && b3Child === 'o') {
            declareWinner('o'); // O venceu            
        }
    }

    // checar horizontal - segunda linha
    if (b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {
        let b4Child = b4.childNodes[0].className
        let b5Child = b5.childNodes[0].className
        let b6Child = b6.childNodes[0].className

        if (b4Child === 'x' && b5Child === 'x' && b6Child === 'x') {
            declareWinner('x'); // X venceu            
        } else
        if (b4Child === 'o' && b5Child === 'o' && b6Child === 'o') {
            declareWinner('o'); // O venceu
        }
    }

    // checar horizontal - terceira linha
    if (b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b7Child = b7.childNodes[0].className
        let b8Child = b8.childNodes[0].className
        let b9Child = b9.childNodes[0].className

        if (b7Child === 'x' && b8Child === 'x' && b9Child === 'x') {
            declareWinner('x'); // X venceu
        } else
        if (b7Child === 'o' && b8Child === 'o' && b9Child === 'o') {
            declareWinner('o'); // O venceu
        }
    }

    // checar vertical - primeira coluna
    if (b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {
        let b1Child = b1.childNodes[0].className
        let b4Child = b4.childNodes[0].className
        let b7Child = b7.childNodes[0].className

        if (b1Child === 'x' && b4Child === 'x' && b7Child === 'x') {
            declareWinner('x'); // X venceu
        } else
        if (b1Child === 'o' && b4Child === 'o' && b7Child === 'o') {
            declareWinner('o'); // O venceu
        }
    }

    // checar vertical - segunda coluna
    if (b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {
        let b2Child = b2.childNodes[0].className
        let b5Child = b5.childNodes[0].className
        let b8Child = b8.childNodes[0].className

        if (b2Child === 'x' && b5Child === 'x' && b8Child === 'x') {
            declareWinner('x'); // X venceu
        } else
        if (b2Child === 'o' && b5Child === 'o' && b8Child === 'o') {
            declareWinner('o'); // O venceu
        }
    }

    // checar vertical - terceira coluna
    if (b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b3Child = b3.childNodes[0].className
        let b6Child = b6.childNodes[0].className
        let b9Child = b9.childNodes[0].className

        if (b3Child === 'x' && b6Child === 'x' && b9Child === 'x') {
            declareWinner('x'); // X venceu
        } else
        if (b3Child === 'o' && b6Child === 'o' && b9Child === 'o') {
            declareWinner('o'); // O venceu
        }
    }

    // checar diagonal
    if (b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {
        let b1Child = b1.childNodes[0].className
        let b5Child = b5.childNodes[0].className
        let b9Child = b9.childNodes[0].className

        if (b1Child === 'x' && b5Child === 'x' && b9Child === 'x') {
            declareWinner('x'); // X venceu
        } else
        if (b1Child === 'o' && b5Child === 'o' && b9Child === 'o') {
            declareWinner('o'); // O venceu
        }
    }

    // checar diagonal
    if (b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {
        let b3Child = b3.childNodes[0].className
        let b5Child = b5.childNodes[0].className
        let b7Child = b7.childNodes[0].className

        if (b3Child === 'x' && b5Child === 'x' && b7Child === 'x') {
            declareWinner('x'); // X venceu
        } else
        if (b3Child === 'o' && b5Child === 'o' && b7Child === 'o') {
            declareWinner('o'); // O venceu
        }
    }

    // deu velha (empate)
    let counter = 0;

    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].childNodes[0] != undefined) {
            counter ++;
        }
    }

    if (counter === 9) {
        declareWinner('velha')
    }
}

//  limpa o jogo, declara o vencedor, atualiza o placar
function declareWinner(winner) {

    let scoreboardX = document.getElementById('scoreboard-1');
    let scoreboardY = document.getElementById('scoreboard-2');
    let msg = '';

    if (winner === 'x') {
        scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
        msg = "O jogador 1 venceu!";
    } else if (winner === 'o') {
        scoreboardY.textContent = parseInt(scoreboardY.textContent) + 1;
        msg = "O jogador 2 venceu!";
    } else {
        msg = "Deu velha!";
    }

    messageText.innerHTML = msg;
    msgContainer.classList.remove("hide")

    // esconde a mensagem, zera a pontuação, limpa o tabuleiro
    setTimeout(() => {
        msgContainer.classList.add('hide')
        
        player1 = 0;
        player2 = 0;

        let boxesRemove = document.querySelectorAll('.box div');
        
        for(let i = 0; i < boxesRemove.length; i++) {
            boxesRemove[i].parentElement.removeChild(boxesRemove[i])
        }
    }, 3000);
}

function computerPlay() {
    let cloneO = o.cloneNode(true);
    counter = 0;
    filled = 0;

    for (let i = 0; i < boxes.length; i++) {
        
        let randomNumber = Math.floor(Math.random() * 5);

        if (boxes[i].childNodes[0] === undefined) {
            if (randomNumber <= 1) {
                boxes[i].appendChild(cloneO);
                counter++;
                break;
                
            } else {
                filled++;                
            }
        }        
    }

    if (counter === 0 && filled < 9) {
        computerPlay()
    }
}