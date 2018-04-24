//Skapar objektet
var GameStateWin = {
    create: function(){
         this.add.tileSprite(0,0,800,1000, "background"); 
            var slut = this.add.text(game.world.centerX, 200, "Congratulations!", {fontSize: "55px", fill: "#fff"});
            slut.anchor.setTo(0.5);
            var stars = this.add.text(300, 250, "All stars collected", {fontSize: "25px", fill: "#fff"});
            
//knapp för restart
        var startom = this.add.button(425,450, "igen");
             startom.anchor.setTo(0.5);
             startom.events.onInputUp.add(function(){
             this.state.start('GameState1',true,false); 
             }, this);
        
        }

};