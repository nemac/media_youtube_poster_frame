Media: YouTube Custom Poster Frame
==================================

This module adds the ability to use a custom poster frame image for
YouTube videos in climate.gov's "News & Features Video" content type.

At present, this module is specifically tailored for the
news_features_video content type on climate.gov, and it depends on
that content type having a field of type "Image" whose machine name is
'field_poster_frame_image'.  You must manually add that field to
news_features_video content type in order for this module to work.

This module works by:

1. Overriding the media_youtube module's media-youtube-video.tpl.php
   template file with one that includes special markup that displays
   a poster frame image in place of the video

1. Implementing hook_preprocess_field() to arrange that whenever
   a field_featured_video field on node of type news_features_video
   is processed, the path of the node's field_poster_frame_image
   image is made available to the media-youtube-video.tpl.php template,
   so that it can display the correct poster frame image for the video.
   
1. Providing custom css and javascript so that the poster frame image
   is displayed in place of the youtube iframe initially, along with
   a classic youtube-style play button, and when the poster frame
   image is clicked, the youtube iframe is swapped in to replace it,
   with the video URL modified to cause it to start playing immediately.
