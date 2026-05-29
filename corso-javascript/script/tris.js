var turno = 'x_img.png';
var griglia = [0, 0, 0, 0, 0, 0, 0, 0, 0];

function mossa(id) {
    
    if (griglia[id-1] == 0) {
            var cella = document.getElementById(id);
            cella.src = turno;
            if (turno == 'x_img.png') {
                turno = 'o_img.png';
                griglia[id-1] = 1;
            } else {
                turno = 'x_img.png';
                griglia[id-1] = 10;
            }
            let vincitore = controllaVittoria();
            if (vincitore != '') {
                alert('Partita terminata!!! Ha vinto ' + vincitore + '!');
                reset();
            }
        }
    console.log(griglia);
}

function controllaVittoria() {
    var combinazioni = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for(combinazione of combinazioni) {
        let somma = 0;
        for(cella of combinazione) {
            somma += griglia[cella];
        };
        console.log(combinazione,somma);
        if (somma == 3) {
            return 'X';
        } else if (somma == 30) {
            return 'O';
        }
    };
    return '';
}

function reset() {
    turno = 'x_img.png';
    griglia = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i=1; i<=9; i++) {
        let cella = document.getElementById(i);
        cella.src = 'sfondo.png';
    }
}