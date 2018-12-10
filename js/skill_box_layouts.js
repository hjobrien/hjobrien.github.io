/**
 * Created by Hank on 7/9/17.
 */

var $window = $(window);
var $skill_box = $('.skill-box');
$window.on('scroll resize', change_box_layout);


function change_box_layout() {
    var window_width = $window.width();
    $.each($skill_box, function () {
        var $element = $(this);

        if (window_width < 500) {
            $element.addClass('vertical-view');
        }
        else {
            $element.removeClass('vertical-view');
        }
    });
}
