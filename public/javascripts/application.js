var Tasks = function() {
  this.pageContainer = $("#todo-list-container");
}

Tasks.prototype.listAll = function() {
  var container = this.pageContainer;

  $.ajax({
    url: "http://localhost:3000/tasks",
    dataType: "JSON"
  }).done(function(response) {
    var template = $("#entry-template").html();
    var compliedTemplate = Handlebars.compile(template);
    $("#todo-list-container").append(compliedTemplate(response))
    })
}

Tasks.prototype.addTask = function() {

  var container = this.pageContainer;

  $("#todo-list-container").on("submit", ".add-task-form", function(e){
    e.preventDefault();

    var form = $(this);
    console.log(form.serialize());
    $.ajax({
      url: "http://localhost:3000/tasks",
      method: "post",
      data: form.serialize(),
      dataType: "JSON"
    }).done(function(response) {
      console.log(response)
      $("#todo-list-container").append('<div><a href="/tasks/' + response.id + '/edit" class="task">' + response.task + '</a></div>')
    })
  })
}

var tasks = new Tasks;
tasks.listAll();
tasks.addTask();
// $(document).ready(function(){
//   tasks.addTask();
// })

