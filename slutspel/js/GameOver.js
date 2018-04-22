//Skapar objektet
var GameOver = {
    create: function(){
         this.add.tileSprite(0,0,800,1000, "background"); 
        
        var slut = this.add.text(game.world.centerX, 200, "GameOver", {fontSize: "55px", fill: "#fff"});
        slut.anchor.setTo(0.5);

    
      var startom = this.add.button(425,450, "igen");
             startom.anchor.setTo(0.5);

             startom.events.onInputUp.add(function(){
             this.state.start('GameState1',true,false); 
             }, this);
        
        }
    };


