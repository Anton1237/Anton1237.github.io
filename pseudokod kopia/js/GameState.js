var ny =[];
//Skapar objektet
var GameState = {
        create:function(){
        this.add.sprite(0,0, "background");
            
        var rad1 = prompt("skriv in ditt namn");     
        this.namn(rad1);
   
        },  
        
        namn:function(rad){
           
            for(var i=rad.length-1; i >= 0; i--){
                 if(rad[i] == " "){
                 ny.push("_");
                 }else{
                 ny.push(rad[i]);
            }    
            }
            
            text = game.add.text(350,300, "orginaltext:  " +rad);
            text2 = game.add.text(350,350, "ny text:  "+ny.join(""));
            
            
              
            var startom = this.add.button(200,450, "igen");
            startom.anchor.setTo(0.5);

            startom.events.onInputUp.add(function(){
            this.state.start(game.state.current); 
            }, this);
            
        
             var end = this.add.button(400,450, "end");
             end.anchor.setTo(0.5);

             end.events.onInputUp.add(function(){
             this.state.start('GameOver',true,false); 
             }, this);
        
        }

};



