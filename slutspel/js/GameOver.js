//Skapar objektet
var GameOver = {
    create: function(){
         this.add.tileSprite(0,0,800,1000, "background"); 
        
        var stil = {font: "50px Arial", fill: "#fff"};
        var text = this.add.text(game.world.centerX, game.world.centerY, "Game Over", stil);
        text.anchor.set(0,5);
    }

};


