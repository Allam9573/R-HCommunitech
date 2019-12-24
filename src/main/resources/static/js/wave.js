$(function () {
    $('.wave').on('click', function (e) {
        e.preventDefault();
        var $waveElement = $('<span class="wave-effect"/>'),
            $buttonElement = $(this),
            btnOffset = $buttonElement.offset(),
            xPos = e.pageX - btnOffset.left,
            yPos = e.pageY - btnOffset.top,
            size = parseInt(Math.min($buttonElement.height(), $buttonElement.width()) * 0.5),
            animate = parseInt(Math.max($buttonElement.height(), $buttonElement.width()) * Math.PI);

        $waveElement.css({
            top: yPos,
            left: xPos,
            width: size,
            height: size,
            backgroundColor: $buttonElement.data('wave-color')
        }).appendTo($buttonElement)
            .animate({
                width: animateSize,
                height: animateSize,
                opacity: 0
            }, 500, function () {
                $(this).remove();
            });

    });
});