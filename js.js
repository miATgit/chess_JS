function drawChess(){
    let mainBlock = document.querySelector('.mainBlock');
    let block;
    let blockWithLetters;
    let letters = ["A","B","C","D","E","F","G","H"];
    let Length = letters.length;
    let bb = document.querySelector('.blockBefore');
    let ba = document.querySelector('.blockAfter');
    let hl = document.querySelector('.horizLeft');
    let hr = document.querySelector('.horizRight');
    
    function appendLetters(x) {
      for (i = 0; i < Length; i++) {
        blockWithLetters = document.createElement('div');
        blockWithLetters.className = 'withLetters';
        let textnode = document.createTextNode(letters[i]);
        blockWithLetters.appendChild(textnode);
        x.appendChild(blockWithLetters);
        }
    }
    
    function appendFigures(y) {
      for (i = 1; i < 9; i++) {
        blockWithFigures = document.createElement('div');
        blockWithFigures.className = 'withFigures';
        let figurenode = document.createTextNode(i);
        blockWithFigures.appendChild(figurenode);
        y.appendChild(blockWithFigures);
        }
    }


    for (let i = 0; i<8; i++){
        for (let j = 0; j<8; j++){
            block = document.createElement('div');
            if (i % 2 == j % 2) {
        block.className = 'block black';
      } else {
         block.className = 'block white';
      } 
            mainBlock.appendChild(block);
            
            if ((i == 1 && j % 2 !== i % 2) || (i == 6 && j % 2 !== i % 2)) {
                spawnIcon = document.createElement('i');
                spawnIcon.className = 'fas fa-chess-pawn fa-2x spawnBlack'; 
                block.appendChild(spawnIcon);
            }
             if ((i == 1 && j % 2 == i % 2) || (i == 6 && j % 2 == i % 2)) {
                spawnIcon = document.createElement('i');
                spawnIcon.className = 'fas fa-chess-pawn fa-2x spawnWhite';
                block.appendChild(spawnIcon);
            }
            if ((i == 0 && j == 0) || (i == 7 && j == 7)) {
                spawnIcon = document.createElement('i');
                spawnIcon.className = 'fas fa-chess-rook fa-2x spawnWhite'; 
                block.appendChild(spawnIcon);
                }
            if ((i == 0 && j == 7) || (i == 7 && j == 0)) {
                spawnIcon = document.createElement('i');
                spawnIcon.className = 'fas fa-chess-rook fa-2x spawnBlack'; 
                block.appendChild(spawnIcon);
                }
            if ((i == 0 && j == 6) || (i == 7 && j == 1)) {
                spawnIcon = document.createElement('i');
                spawnIcon.className = 'fas fa-chess-knight fa-2x spawnWhite'; 
                block.appendChild(spawnIcon);
                }
            if ((i == 0 && j == 1) || (i == 7 && j == 6)) {
                spawnIcon = document.createElement('i');
                spawnIcon.className = 'fas fa-chess-knight fa-2x spawnBlack'; 
                block.appendChild(spawnIcon);
                }
            if ((i == 0 && j == 2) || (i == 7 && j == 5)) {
                spawnIcon = document.createElement('i');
                spawnIcon.className = 'fas fa-chess-bishop fa-2x spawnWhite'; 
                block.appendChild(spawnIcon);
                }
            if ((i == 0 && j == 5) || (i == 7 && j == 2)) {
                spawnIcon = document.createElement('i');
                spawnIcon.className = 'fas fa-chess-bishop fa-2x spawnBlack'; 
                block.appendChild(spawnIcon);
                }
            if (i == 7 && j == 3) {
                spawnIcon = document.createElement('i');
                spawnIcon.className = 'fas fa-chess-queen fa-2x spawnWhite queen'; 
                block.appendChild(spawnIcon);
                }
            if (i == 0 && j == 3) {
                spawnIcon = document.createElement('i');
                spawnIcon.className = 'fas fa-chess-queen fa-2x spawnBlack queen'; 
                block.appendChild(spawnIcon);
                }
             if (i == 0 && j == 4) {
                spawnIcon = document.createElement('i');
                spawnIcon.className = 'fas fa-chess-king fa-2x spawnWhite king'; 
                block.appendChild(spawnIcon);
                }
            if (i == 7 && j == 4) {
                spawnIcon = document.createElement('i');
                spawnIcon.className = 'fas fa-chess-king fa-2x spawnBlack king'; 
                block.appendChild(spawnIcon);
                }
        }
    }
      for (let i = 0; i < document.getElementsByClassName("black").length; i++) {
        document.getElementsByClassName("black")[i].style.backgroundColor = "black";
      }
      for (i = 0; i < document.getElementsByClassName("white").length; i++) {
        document.getElementsByClassName("white")[i].style.backgroundColor = "white";
      }
      for (i = 0; i < document.getElementsByClassName("block").length; i++) {
        document.getElementsByClassName("block")[i].style.width = "50px";
        document.getElementsByClassName("block")[i].style.height = "50px";
        document.getElementsByClassName("block")[i].style.float = "left";
      }
        appendLetters(bb); 
        appendLetters(ba);
        appendFigures(hl);
        appendFigures(hr);
}

drawChess();

