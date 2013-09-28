this.tooltip = function () {
    var xOffset = 10,
        yOffset = 20;
    // these 2 variable determine popup's distance from the cursor
    // you might want to adjust to get the right result		

    
    $(document).on('mouseenter', '.emspeed-tooltip', function (e) {
        this.t = $(this).attr('data-tooltip');
        $("body").append("<p id='tooltip'>" + this.t + "</p>");
        $("#tooltip")
            .css("top", (e.pageY - xOffset) + "px")
            .css("left", (e.pageX + yOffset) + "px")
            .fadeIn("fast");
        
    }).on('mouseleave', '.emspeed-tooltip', function () {
        $("#tooltip").remove();
    });


    $(document).on('mousemove', '.emspeed-tooltip', function (e) {
        $("#tooltip")
            .css("top", (e.pageY - xOffset) + "px")
            .css("left", (e.pageX + yOffset) + "px");
    });
};

$(function () {
    tooltip();
});
