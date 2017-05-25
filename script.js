var injectData = function(topic) {
    $.get("data.json", function(resp) {
        var r = resp[topic];
        $(".title").html(r.title);
        $(".author").html("by " + r.author);
        $(".rating").html( Array(r.rating + 1).join('<i class="fa fa-star" aria-hidden="true"></i>') );
        $(".desc").html(r.desc);
    })
};

var reloadPage = function() {
    var path = window.location.hash;
    if (path == "#" || path == "") {
        $(".orgInfo").show();
        $(".bookInfo").hide();
    } else {
        $(".bookInfo").show();
        $(".orgInfo").hide();
        injectData(path.slice(1)); // Remove leading hash sign
    }
};

$(window).on('hashchange', function() {
    reloadPage();
});

$(document).ready(function() {
    reloadPage();
});
