$(document).ready(function () {
  $.get("data.json", function (resp) {
    $(".title").html(resp.title);
    $(".author").html("by " + resp.author);
    $(".rating").html( Array(resp.rating + 1).join('<i class="fa fa-star" aria-hidden="true"></i>') );
    $(".desc").html(resp.desc);
  })
});
