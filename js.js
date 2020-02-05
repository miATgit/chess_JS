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
            
            function addSpawn (f){
                spawnIcon = document.createElement('i');
                spawnIcon.className = f;
                block.appendChild(spawnIcon);
            }
            
            if (i == 1) {
                addSpawn ('fas fa-chess-pawn fa-2x spawnBlack');
            }
             if (i == 6) {
                addSpawn ('fas fa-chess-pawn fa-2x spawnWhite');
            }
            if ((i == 0 && j == 0) || (i == 0 && j == 7)) {
                addSpawn ('fas fa-chess-rook fa-2x spawnBlack');
                }
            if ((i == 7 && j == 7) || (i == 7 && j == 0)) {
                addSpawn ('fas fa-chess-rook fa-2x spawnWhite');
                }
            if ((i == 7 && j == 6) || (i == 7 && j == 1)) {
                addSpawn ('fas fa-chess-knight fa-2x spawnWhite');
                }
            if ((i == 0 && j == 1) || (i == 0 && j == 6)) {
                addSpawn ('fas fa-chess-knight fa-2x spawnBlack');
                }
            if ((i == 7 && j == 2) || (i == 7 && j == 5)) {
                addSpawn ('fas fa-chess-bishop fa-2x spawnWhite');
                }
            if ((i == 0 && j == 5) || (i == 0 && j == 2)) {
                addSpawn ('fas fa-chess-bishop fa-2x spawnBlack');
                }
            if (i == 7 && j == 3) {
                addSpawn ('fas fa-chess-queen fa-2x spawnWhite queen');
                }
            if (i == 0 && j == 3) {
                addSpawn ('fas fa-chess-queen fa-2x spawnBlack queen');
                }
             if (i == 7 && j == 4) {
                addSpawn ('fas fa-chess-king fa-2x spawnWhite king');
                }
            if (i == 0 && j == 4) {
                addSpawn ('fas fa-chess-king fa-2x spawnBlack king');
                }
        } 
    }
      
      for (i = 0; i < document.getElementsByClassName("block").length; i++) {
          s = document.getElementsByClassName("block")[i];
        s.style.width = "50px";
        s.style.height = "50px";
        s.style.float = "left";
        s.style.cursor = "pointer";
       s.addEventListener("click", function(){this.classList.toggle("green");});
      }
    
        appendLetters(bb); 
        appendLetters(ba);
        appendFigures(hl);
        appendFigures(hr);
}

drawChess();

