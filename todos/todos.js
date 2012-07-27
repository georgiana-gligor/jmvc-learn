steal(
    'jquery/controller',
    'jquery/view/ejs',
    'jquery/dom/fixture',
    'jquery/class',
    'jquery/model',
    function($) {
        // code that uses controller and view goes here
        
        $.Model('Todo',
            {
                findAll : "GET /todos",
                findOne : "GET /todos/{id}",
                create  : "POST /todos",
                update  : "PUT /todos/{id}",
                destroy : "DELETE /todos/{id}"
            },
            {}
        )
        
        var todo = new Todo({name: "do the dishes"});
    }
)