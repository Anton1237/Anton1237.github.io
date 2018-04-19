var GameStart = {
 preload: function(){
    this.load.image("background", "assets/starbackground.png")
    this.load.image("plattform", "assets/sten.png")
    this.load.image("play", "assets/playbutt.png")
    this.load.image("instruktioner", "assets/awsd.png")
    this.load.image("wall", "assets/wall.png")
    this.load.image("golv", "assets/golv.png")
    this.load.image("goal", "assets/star.png")
    this.load.image("iwall", "assets/osynligwall.png")
    this.load.spritesheet("player", "assets/tempelrunner.png", 50,60,13);
    this.load.spritesheet("enemy", "assets/pingviner.png", 56,63);
    this.load.spritesheet("igen", "assets/restartknapp.png",150,42)
    this.load.audio("bgmusic","assets/bgmusic.mp3"); 
    this.load.audio("soundeffect","assets/soundeffect.mp3" ); 
 
 }, 
create: function(){
        
       
        this.add.tileSprite(0,0,800,1000,"background");
        this.add.sprite(280,450, "instruktioner");
    
        var namn = this.add.text(game.world.centerX, 200, "SpacePenguin", {fontSize: "55px", fill: "#fff"});
        namn.anchor.setTo(0.5);

        var namn = this.add.text(game.world.centerX, 265, "Press play to start", {fontSize: "35px", fill: "#fff"});
        namn.anchor.setTo(0.5);
    
    
        var button = game.add.button(game.world.centerX, game.world.centerY, "play");
        button.anchor.setTo(0.5);

        button.events.onInputUp.add(function(){
            this.state.start("GameState1", true, false); 
        }, this);

     }
};
