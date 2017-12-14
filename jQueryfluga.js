    $(function() {
    
        $("button").click(function(){   
            var x = Math.floor(Math.random()*800); 
            var y = Math.floor(Math.random()*300); 
            $("#fluga").css({left:x, top:y});
        });
});

