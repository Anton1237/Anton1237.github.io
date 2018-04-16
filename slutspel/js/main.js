//Skapa spelet
var game = new Phaser.Game(800,700,Phaser.AUTO);
//Lägger till ett spelläge
game.state.add("GameStart" , GameStart);
game.state.add("GameState1" , GameState1);
game.state.add("GameState2" , GameState2);
game.state.add("GameOver" , GameOver);
game.state.start("GameStart"); 