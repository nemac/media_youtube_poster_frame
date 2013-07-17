(function($) {
    var play_button_width  = 88,
        play_button_height = 58,
        play_button_nonactive_opacity = 0.85,
        play_button_active_opacity = 1.0;

    $(document).ready(function() {

        // Find all the <div class="media-youtube-poster-frame-wrapper"> instances on the page, and for each one...
        $('div.media-youtube-poster-frame-wrapper').each(function() {

            // ... capture the wrapper div itself and several child divs in a closure...
            (function($wrapper, $poster_frame, $play_button, $video) {

                var $iframe,
                    width,
                    height,
                    youtube_src,
                    youtube_src_with_autoplay,
                    play_button_black_img_src,
                    play_button_red_img_src;

                // Remove the iframe from the DOM, and then change its src attribute to
                // include the autoplay parameters, so that it will start playing immediately
                // when re-inserted into the DOM
                $iframe = $video.find('iframe');
                $iframe.remove();
                youtube_src = $iframe.attr('src');
                youtube_src_with_autoplay = youtube_src + "&rel=0&autoplay=1";
                $iframe.attr('src', youtube_src_with_autoplay);

                // Grab the width and height of the iframe, and use them to set the size
                // of the wrapper, video, and media-youtube-poster-frame divs, and the position of the play
                // button, so that everything gets laid out properly
                width = $iframe.attr('width');
                height = $iframe.attr('height');
                $wrapper.width(width);
                $wrapper.height(height);
                $video.width(width);
                $video.height(height);
                $poster_frame.width(width);
                $poster_frame.height(height);
                $play_button.css('left', (width - play_button_width) / 2);
                $play_button.css('top', (height - play_button_height) / 2);
                $play_button.css('opacity', play_button_nonactive_opacity);

                play_button_black_img_src = $play_button.attr('src');
                play_button_red_img_src = play_button_black_img_src.replace('black', 'red');

                // Establish the hover and click behavior of the poster frame
                $poster_frame
                    .hover(
                        function() {
                            // on hover-in, change the play button to red
                            $play_button
                                .attr('src', play_button_red_img_src)
                                .css('opacity', play_button_active_opacity);
                        },
                        function() {
                            // on hover-out, change the play button back to black
                            $play_button
                                .attr('src', play_button_black_img_src)
                                .css('opacity', play_button_nonactive_opacity);
                        }
                    )
                    .click(function() {
                        // on click,
                        //    add the video back to the DOM
                        $video.css('display', 'block');
                        $video.append($iframe);
                        //    and undisplay the poster frame
                        $poster_frame.css('display', 'none');
                    });

            }($(this),
              $(this).find('div.media-youtube-poster-frame'),
              $(this).find('img.media-youtube-poster-frame-play-button'),
              $(this).find('div.media-youtube-poster-frame-video')));

        });


    });
}(jQuery));

