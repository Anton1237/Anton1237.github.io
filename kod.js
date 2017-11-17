    $(function() {
    
        $("#openinfo").click(function(){   
            $("#info").toggle();
        });

        $("li").dblclick(function(){        
            $(this).toggleClass("selected");    
        });

    }); 