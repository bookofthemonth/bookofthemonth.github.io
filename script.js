$(document).ready(function () {
  $.get("data.json", function (resp) {
    var data = jQuery.parseJSON(resp);
    alert(data.title);
  })
});
