$(document).ready(function () {
  $.get("data.json", function (resp) {
    $(".titel").html(resp.title);
    $(".author").html("by " + resp.author);
  })
});
