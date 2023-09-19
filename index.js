$( document ).ready(function() {
    console.log( "ready!" );
    $("#go").click(function(){
        var fullName = $("#fname").val() + " " + $("#lname").val();
        $("#jumbotron").text(fullName);
        return false;
    });
});