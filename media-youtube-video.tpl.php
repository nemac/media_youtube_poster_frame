<?php

/**
 * @file media_youtube/includes/themes/media-youtube-video.tpl.php
 *
 * Template file for theme('media_youtube_video').
 *
 * Variables available:
 *  $uri - The media uri for the YouTube video (e.g., youtube://v/xsy7x8c9).
 *  $video_id - The unique identifier of the YouTube video (e.g., xsy7x8c9).
 *  $id - The file entity ID (fid).
 *  $url - The full url including query options for the Youtube iframe.
 *  $options - An array containing the Media Youtube formatter options.
 *  $api_id_attribute - An id attribute if the Javascript API is enabled;
 *  otherwise NULL.
 *  $width - The width value set in Media: Youtube file display options.
 *  $height - The height value set in Media: Youtube file display options.
 *  $title - The Media: YouTube file's title.
 *  $alternative_content - Text to display for browsers that don't support
 *  iframes.
 *
 */
global $media_youtube_poster_frame, $base_path;
if ($media_youtube_poster_frame && $media_youtube_poster_frame[$uri]) {
  $pf = $media_youtube_poster_frame[$uri];
} else {
  $pf = null;
}
?>
<div class="<?php print $classes; ?> media-youtube-<?php print $id; ?>">
<?php if ($pf): ?>
  <div class="media-youtube-poster-frame-wrapper">
    <div class="media-youtube-poster-frame-video">
      <iframe class="media-youtube-player" <?php print $api_id_attribute; ?>width="<?php print $width; ?>"
       height="<?php print $height; ?>" title="<?php print $title; ?>" src="<?php print $url; ?>"
       frameborder="0" allowfullscreen><?php print $alternative_content; ?></iframe>
    </div>
    <div class="media-youtube-poster-frame">
    <img class="media-youtube-poster-frame-img" style="width:<?php print $width; ?>px; height:<?php print $height; ?>px; max-width:<?php print $width; ?>px; max-height:<?php print $height; ?>px" src="<?php print $pf['url'];?>">
      <img class="media-youtube-poster-frame-play-button" src="<?php printf('%s%s/youtube-play-button-black.png',  $base_path, drupal_get_path('module', 'media_youtube_poster_frame'));?>">
    </div>
  </div>
<?php else: ?>
      <iframe class="media-youtube-player" <?php print $api_id_attribute; ?>width="<?php print $width; ?>"
       height="<?php print $height; ?>" title="<?php print $title; ?>" src="<?php print $url; ?>"
       frameborder="0" allowfullscreen><?php print $alternative_content; ?></iframe>
<?php endif; ?>
</div>
