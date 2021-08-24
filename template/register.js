$(document).ready(function (){
    $("#buttonInputName").on("click", function (){
        $.get("/register", {name: $("#inputName").val()})
            .done(function (){
                alert("등록되었습니다.")
                $("#inputName").val("");
            })
    })
})
