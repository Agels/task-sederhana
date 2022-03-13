let ronde = 1;
let TryAgain = true;

let p1 = 0;
let p2 = 0;
while (ronde <= 5) {

var items = [1, 2, 3];
var itemx = items[Math.floor(Math.random()*items.length)];

let player1 = prompt('player 1 : masukan angka');
let player2  = prompt('player 2 : masukan angka');

if(player1 !== player2 ){
    if(player1 <= 3 && player1 >= 1 && player2 <= 3 && player2 >= 1){
            if(player1 == itemx){
                p1 = p1+= 1;
                alert(`player 1 menang`)
            } else if(player2 == itemx){
                p2 = p2+= 1;
                alert('player 2 menang')
            } else {
                alert(`seri`)
            }

    } else {
        alert('out of range')
       
        TryAgain = confirm('ulangi ?');
        if(TryAgain){
            ronde = ronde -=1;

        }
    }
} else {
    alert('jangan sama')  
    TryAgain = confirm('ulangi ?');
    if(TryAgain){
        ronde = ronde -=1;

    } 
}

        alert(`      Nilai yang dicari ${itemx}
    ==========================
    tebakan player 1 = ${player1} 
    tebakan player 2 = ${player2}
    ===========================
    skor sementara
    player 1 dengan skor ${p1}
    player 2 dengan skor ${p2}  `)
    ronde++;
    TryAgain = confirm(`ronde ${ronde} `);
}

if(p1 > p2){
    alert(`selamat player 1 menang skor : ${p1}`)
} else if(p2 > p1){
    alert(`selamat player 2 menang skor : ${p2}`)
} else {
    alert('seri')
}


