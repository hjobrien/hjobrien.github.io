/**
 * Created by Hank on 7/13/17.
 * based on:
 * https://code.tutsplus.com/tutorials/a-simple-parallax-scrolling-technique--net-27641
 */

const parallax_factor = 10

const $window = $(window)
const $background = $('.background')
$window.on('scroll', scroll_background())

function scroll_background () {
    $.each($background, function () {
        const $element = $(this)
        var yPos = - ($element.scrollTop() / parallax_factor)

        // Put together our final background position
        var coords = '50% '+ yPos + 'px';

        // Move the background
        $bgobj.css({ backgroundPosition: coords });
    })
}

