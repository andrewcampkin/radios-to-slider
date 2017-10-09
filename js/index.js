$(document).ready(function() {
    window.radiosToSlider = window.radiosToSlider || {};
    window.radiosToSlider.radios = $("#radios").radiosToSlider();

    $('#option6').on('change', function (ev) {
        window.radiosToSlider.radios.forEach(function(el) { el.setSlider(); });
    });
});
