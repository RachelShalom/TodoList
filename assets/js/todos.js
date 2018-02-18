// an array for all the todos objects
var todos = [];

var todo = {
    text: "",
    completed: false
}

//Add a todo: adding the todo when the user clicks enter
$("input").on("keypress", function(event) {
    if (event.which === 13) {
        todos.push(newTodo($(this).val()));
        console.log(todos);
        $(this).val('');
        displayTodos();
    }
});

$("ul").on("click", "li", function(event) {
    var target = $(event.target);
    if (target.is("span")) {
        alert(target);
        $(this).remove();
        //  strike through the text and make it grey
    } else {
        $(this).toggleClass("done");
    }
});

$("ul").on("mouseenter mouseleave", "li", function(event) {
    if (event.type === "mouseenter") {
        $(this).children().fadeIn();
    }
    if (event.type === "mouseleave") {
        $(this).children().fadeOut();
    }
});

//return an object for each todo
function newTodo(chore) {
    var todo = {
        text: chore,
        completed: false
    }
    return todo;
}
//display all the chores in a list
function displayTodos() {
    $(" ul li").remove();
    todos.forEach(function(element) {
        $("ul").append("<li> <span class=\"trash\"> <i class=\"far fa-trash-alt\"></i> </span>" + " " + element.text + "</li>");
    });
}