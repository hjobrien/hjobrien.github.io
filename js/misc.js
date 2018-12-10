/**
 * Created by Hank on 12/9/18.
 */
window.addEventListener("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY - 100);
});

var active_photo_index = 0;
var number_pipeline_photos = 5;
var photo_recurse_index = 3;

function advance_image(){
    var back_to_first = document.getElementById("back_to_first_image");
    if(active_photo_index === photo_recurse_index){
        back_to_first.style.visibility = "visible"
    } else {
        back_to_first.style.visibility = "hidden"
    }


    if(active_photo_index === number_pipeline_photos-1){
        active_photo_index = 0;
        [].forEach.call(document.querySelectorAll('.pipeline_photo'), function (el) {
            el.style.visibility = 'visible';
        });
    } else {
        var photo_id = "image_" + active_photo_index;
        var photo = document.getElementById(photo_id);
        photo.style.visibility = "hidden";
        active_photo_index += 1;

    }
}

function reset_images(){
    active_photo_index = 0;
    [].forEach.call(document.querySelectorAll('.pipeline_photo'), function (el) {
        el.style.visibility = 'visible';
    });
    document.getElementById("back_to_first_image").style.visibility = 'hidden';
}

document.getElementById("next_image_btn").addEventListener('click', advance_image, false);
document.getElementById("back_to_first_image").addEventListener('click', reset_images, false);

