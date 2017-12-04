$(document).ready(function(){
    $(".open-modal").on("click", function(){
        $(".modal").css("display", "block");
    });

    $(".modal__close").on("click", function(){
        $(".modal").css("display", "none");
    });
});