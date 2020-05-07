$(function () {
    $(".devour").on("click", function (event) {
        console.log($(this));
        var id = $(this).data("id");
        console.log(id);
        var isDevoured = $(this).data("devoured");
        console.log(isDevoured);
        var devouredState = {
            devoured: isDevoured
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: true
        }).then(function () {
            console.log("changed devoured to", isDevoured);
            location.reload();
        });
    });

    $(".create-burger").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger")
                .val()
                .trim(),
        };
        console.log("New Burger",newBurger)
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("created new burger");
            location.reload();
        });
    });
});
