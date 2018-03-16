var GameStart = {
 preload: function(){
    this.load.spritesheet("end", "assets/endknapp.png",150,42)
    this.load.spritesheet("igen", "assets/restartknapp.png",150,42)
    this.load.image("background", "assets/man.jpg")
    this.load.image("play", "assets/playbutt.png")
 }, 
create: function(){
        this.add.sprite(0,0,"background");

       
        var namn = this.add.text(game.world.centerX, 150, "Spegeln", {fontSize: "35px", fill: "#000"});
        namn.anchor.setTo(0.5);

        var namn = this.add.text(game.world.centerX, 200, "Klicka på knappen för att skriva in en text", {fontSize: "25px", fill: "#000"});
        namn.anchor.setTo(0.5);

        var button = game.add.button(game.world.centerX, game.world.centerY, "play");
        button.anchor.setTo(0.5);

        button.events.onInputUp.add(function(){
            this.state.start("GameState", true, false); 
        }, this);

     }
};
