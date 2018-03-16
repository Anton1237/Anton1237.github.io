//Skapar objektet
var GameOver = {
    create: function(){
        this.add.tileSprite(0,0,800,1000, "background"); 
        var namn = this.add.text(game.world.centerX, 200, "GameOver!", {fontSize: "25px", fill: "#000"});
        namn.anchor.setTo(0.5);

    }
};
 

