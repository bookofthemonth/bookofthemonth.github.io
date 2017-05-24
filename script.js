$(document).ready(function () {
  $.get("data.json", function (resp) {
    $(".title").html(resp.title);
    $(".author").html("by " + resp.author);
    $(".desc").html(resp.desc);
  })
});
