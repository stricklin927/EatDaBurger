$(function() {
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#newburger")
          .val()
          .trim(),
        devoured: 0
      };

    // post request  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(function() {
        console.log("Added new burger");
        location.reload();
      });
    });
  
    // click event (devour!!!), eat the burger
    $(".eatburger").on("click", function(event) {
      event.preventDefault();
  
      var id = $(this).data("id");
      var devouredState = {
        devoured: 1
      };
  
      // put the burger
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredState
      }).then(function() {
        console.log("Burger devoured");
        location.reload();
      });
    });
  
    // delete the burger
    $(".trashburger").on("click", function(event) {
      event.preventDefault();
  
      var id = $(this).data("id");
  
      $.ajax({
        type: "DELETE",
        url: "/api/burgers/" + id
      }).then(location.reload());
    });
  });