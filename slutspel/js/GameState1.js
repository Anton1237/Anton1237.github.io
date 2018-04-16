//Skapar objektet
var GameState1 = {
    create:function(){
        this.add.tileSprite(0,0, 800, 1000, "background");
        golv1 = this.add.sprite(-10,690,"golv");
        golv2 = this.add.sprite(500,690,"golv");
        plattform1 = this.add.sprite(150,500,"plattform");
        plattform2 = this.add.sprite(150,180,"plattform");
        plattform3 = this.add.sprite(630,325,"plattform");
        plattform4 = this.add.sprite(480,465,"plattform");
        plattform5 = this.add.sprite(400,180,"plattform");
        player1 = this.add.sprite(3,500,"player",3);
        enemy1 = this.add.sprite(150,570,"enemy");
        enemy2 = this.add.sprite(630,310,"enemy");
        wall1 = this.add.sprite(75,599, "wall")
        checkpoint = this.add.sprite(180,115,"goal");
        player1.inputEnabled = true;
         
        musik = this.add.audio("bgmusic"); 
        //musik.play();
        ljud = this.add.audio("soundeffect");
        
        
//ställ in fysik   
        this.physics.enable([player1, plattform1, plattform2, plattform3, plattform4, plattform5, wall1, golv1, golv2, checkpoint, enemy1, enemy2], Phaser.Physics.ARCADE);
        player1.body.bounce.y = 0.2;
        player1.body.gravity.y = 600; 
        player1.anchor.setTo(0.5);
        enemy1.body.bounce.y = 0.2;
        enemy1.body.gravity.y = 600; 
        enemy1.anchor.setTo(0.5);
        enemy2.body.bounce.y = 0.2;
        enemy2.body.gravity.y = 600; 
        enemy2.anchor.setTo(0.5);
        
    //hindra plattformar från att röra sig         
        plattform1.body.allowGravity = false;
        plattform1.body.immovable = true;
        plattform2.body.allowGravity = false;  
        plattform2.body.immovable = true;    
        plattform3.body.allowGravity = false;  
        plattform3.body.immovable = true; 
        plattform4.body.allowGravity = false;  
        plattform4.body.immovable = true; 
        plattform5.body.allowGravity = false;  
        plattform5.body.immovable = true; 
        wall1.body.allowGravity = false;
        wall1.body.immovable = true;
        golv1.body.allowGravity = false;
        golv1.body.immovable = true;
        golv2.body.allowGravity = false;
        golv2.body.immovable = true;

       
//ställ in tangenterna
        cursors = this.input.keyboard.createCursorKeys();       
        JumpButton = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);       
        
//animationer  
        
        player1.animations.add("run",[3,4,5,6,7,8,9,10],13,true);
        player1.animations.add("stop",[2]);
        
        enemy1.animations.add("walk"[1,2,3,4,5,6],6, true);
        enemy1.animations.add("stop",[4]);
        
        enemy2.animations.add("walk"[1,2,3,4,5,6],6, true);
        enemy2.animations.add("stop",[4]);
    
    },
    

 //rörelse av player   
update: function (){
        if(game.input.keyboard.isDown(Phaser.Keyboard.A)){
            player1.animations.play("run");
            player1.body.velocity.x = -300;
            player1.scale.x = -1;
        }else if (game.input.keyboard.isDown(Phaser.Keyboard.D)){
            player1.animations.play("run");
            player1.body.velocity.x = 300;
            player1.scale.x = 1;
        }else{
            player1.body.velocity.x = 0;
            player1.animations.play("stop")
            //enemy1.animations.play("stop")
        }
        
//rörelse av fiender
        if(player1.x > enemy1.x && player1.y > 500){
            enemy1.animations.play("walk")
            enemy1.body.velocity.x = 100;
            enemy1.scale.x = 1;
        }else if(player1.x < enemy1.x){
            enemy1.animations.play("walk")
            enemy1.body.velocity.x = -100;
            enemy1.scale.x = -1;
        }else{
            enemy1.frame = 0;
            enemy1.body.velocity.x = 0; 
        }
        
        //if(enemy2.x){}
        
            
            
//läs till kollision
        this.physics.arcade.collide(player1,[plattform1, plattform2, plattform3, plattform4, plattform5, wall1, golv1, golv2, enemy1, enemy2]);

        this.physics.arcade.collide(enemy1,[wall1, golv1, golv2]);
        
        this.physics.arcade.collide(enemy2,[wall1, golv1, golv2,plattform1, plattform2, plattform3, plattform4, plattform5]);
       
    
//hopp av player
        if(JumpButton.isDown && player1.body.touching.down){
        player1.body.velocity.y = -450;
        }

        
        this.game.physics.arcade.overlap(player1, checkpoint, this.ny, null, this);
        
        if(this.physics.arcade.collide(player1, checkpoint)){
            this.game.state.start("GameState2", true, false);
        } 

        if(this.physics.arcade.collide(player1, [enemy1, enemy2] )){
        this.game.state.start("GameOver", true, false);
        } 
        
        

    },

};