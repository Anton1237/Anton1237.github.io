$(function(){
    $("#sakernav").click(function(){
        $("#saker").show();
        $("#schysst").hide();
        $("#standard").hide();
    });

    $("#schysstnav").click(function(){
        $("#schysst").show();
        $("#standard").hide();
        $("#saker").hide();
    });

    $("#standardnav").click(function(){
        $("#standard").show();
        $("#schysst").hide();
        $("#saker").hide();
    });

    $("#sakernav").click(function(){
        $("#huvud").hide();
       
    });

    $("#schysstnav").click(function(){
        $("#huvud").hide();
       
    });


    $("#standardnav").click(function(){
        $("#huvud").hide();
       
    });

});