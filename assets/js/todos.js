// an array for all the todos objects
var todos = [];

var todo = {
    text: "",
    id: ""
}

//Add a todo: adding the todo when the user clicks enter
$("input").on("keypress", function(event) {
    if (event.which === 13) {
        todos.push(newTodo($(this).val(), todos.length));
        $(this).val('');
        displayTodos();
    }
});

$("ul").on("click", "li", function(event) {
    $(this).toggleClass("done");

});
$("ul").on("click", "span", function(event) {
    var line = $(this).parent();
    console.log(line.text());
    event.stopPropagation();
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    //remove this item from the array
    todos = todos.filter(el => el.text !== line.text().trim());
    console.log(todos);





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
function newTodo(chore, i) {
    var todo = {
        text: chore,
        id: i,
    }
    return todo;
}
//display all the chores in a list
function displayTodos() {
    $(" ul li").remove();
    todos.forEach(function(element, i) {
        $("ul").append("<li> <span class=\"trash\"> <i class=\"far fa-trash-alt\"></i> </span>" + element.text + "</li>");
    });

}