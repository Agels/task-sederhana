alert(` tebak angka 1 - 3
jika salah satu player menebak dengan benar akan mendapatkan skor
ronde permainan berjumlah 5

GOOD LUCK MATE!!
`)

let ronde = 1;
let die = true;
let p1 = 0;
let p2 = 0;
while (die) {
    const items = [1, 2, 3];
    const itemx = items[Math.floor(Math.random()*items.length)];
    
    const player1 = parseInt(prompt('player 1 : masukan angka'));
    const player2  = parseInt(prompt('player 2 : masukan angka'));
    
    
    const letter = CekValidLetter(player1, player2);
    const valid = CekValidNumber(player1, player2);
    ronde++;  
    if (ronde <= 5 ){
        
        
        console.log(letter)
        console.log(valid)
        
        
    if(valid === false){
        let die = confirm('ulangi?')
        if(die){
            die = false;
        }
        
    } else {
        if(letter === false){
            let die = confirm('ulangi?')
            if(die){
                die = false;
            }
        } else {
            if(player1 === itemx){  
                alert('player 1 menang');
                p1 = p1+=1;
            } else if(player2 === itemx){
                alert('player 2 menang');
                p2 = p2+=1;
            } else {
                alert('seri');
            }
            
            alert(`      Nilai yang dicari ${itemx}
            ==========================
            tebakan player 1 = ${player1} 
            tebakan player 2 = ${player2}
            ===========================
            SKOR SEMENTARA
            player 1 dengan skor ${p1}
            player 2 dengan skor ${p2}  `)
            die = confirm(`ronde ${ronde} `);
        }
    }  
    
} else {
    if(p1 > p2){
        alert(`SELAMAT PLAYER 1 ANDA MENANG DENGAN SKOR : ${p1}`)
    } else if(p2 > p1){
        alert(`SELAMAT PLAYER 2 ANDA MENANG DENGAN SKOR : ${p2}`)
    } else {
        alert('PLAYER 1 DAN PLAYER 2 SAMA KUAT BUNG!')
    }
        
        alert('TQ')
        die = false;
    }
}


console.log(ronde)
   

function CekValidLetter(player1, player2){

    // const findLetterP1 = player1.match(/[a-z]/i);
    // const findLetterP2 = player2.match(/[a-z]/i);

    // if(findLetterP1 || findLetterP2){
    //     alert('hanya masukan angka')
    //     return false;
    // } 

    if(isNaN(player1) || isNaN(player2)){
        alert('hanya masukan angka')
            return false;
    }

}


function CekValidNumber(player1, player2){

   if(player1 < 1 || player2 < 1) {
       alert('angka harus lebih besar dari 0')
       return false;
   } 

   if(player1 > 3 || player2 > 3){
       alert('angka harus lebih kecil dari 3');
       return false;
   }
   if(player1 === player2){
       alert('angka tidak boleh sama')
      return false;
    
   }
}
