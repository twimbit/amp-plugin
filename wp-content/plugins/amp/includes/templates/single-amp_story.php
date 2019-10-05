<?php
/**
 * Template for amp_story post type.
 *
 * @package AMP
 */

the_post();
//CHECKING STATUS OF NUSTHELL OPENING

if ( ! $_COOKIE['user_date_story'] && ( $_GET['story'] == 'nutshell' ) ) {
	$user_date_story  = 'user_date_story';
	$user_value_story = $post->post_date;
	setcookie( $user_date_story, $user_value_story, time() + ( 86400 * 30 ), "/" );
}


// Redirect to custom URL
if($redirect_url=get_field('redirect_url')){
    $url="Location:".$redirect_url;
    header("$url");
    exit();
}
$metadata = amp_get_schemaorg_metadata();

?>
<!DOCTYPE html>
<html amp <?php language_attributes(); ?>>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">

		<?php
		/**
		 * Prints scripts or data in the head tag on the front end.
		 *
		 * @since 1.3
		 */
		do_action( 'amp_story_head' );
		?>
        <style>
            .button_bottom {
                background: rgba(0, 0, 0, 0.28);
                border-radius: 3px;
                left: 10px;
                background-repeat: no-repeat;
                z-index: 10;
                height: 40px;
                width: 15%;
                max-width: 80px;
                margin-top: 14px;
                border: none;
                box-shadow: 0px -2px 9px 1px rgba(0, 0, 0, .2);
                background-position: center center;
                background-size: 20px;
                display: inline-grid;
            }

		* {
			outline: none;
		}
	</style>

</head>


<body>

<!-- Get next and previous post url -->
<?php
$home_url          = get_home_url( null, '/', null );
$next_post_url     = get_permalink( get_adjacent_post( false, '', false )->ID );
$previous_post_url = get_permalink( get_adjacent_post( false, '', true )->ID );

// section to loop stories (from  1st to last on previous click and last to 1st on next click
if ( get_permalink( get_adjacent_post( false, '', false ) ) === get_permalink( $post ) ) {
	// getting the link of oldest story
	$args               = array(
		'numberposts'      => 2,
		'category'         => 0,
		'orderby'          => 'date',
		'order'            => 'ASC', // the 1st array element will be 1st story(oldest story)
		'include'          => array(),
		'exclude'          => array(),
		'meta_key'         => '',
		'meta_value'       => '',
		'post_type'        => 'amp_story',
		'suppress_filters' => true,
	);
	$get_post_for_story = get_posts( $args );
	$first_story        = $get_post_for_story[0]; // 0 will give the 1st story here (oldest story)
	$next_post_url      = get_permalink( $first_story );
}
if ( get_permalink( get_adjacent_post( false, '', true ) ) === get_permalink( $post ) ) {
	// getting the link of latest story
	$args               = array(
		'numberposts'      => 2,
		'category'         => 0,
		'orderby'          => 'date',
		'order'            => 'DESC', // the 1st array element will be last story(latest story)
		'include'          => array(),
		'exclude'          => array(),
		'meta_key'         => '',
		'meta_value'       => '',
		'post_type'        => 'amp_story',
		'suppress_filters' => true,
	);
	$get_post_for_story = get_posts( $args );
	$last_story         = $get_post_for_story[0]; // 0 will give the last  story here (latest story)
	$previous_post_url  = get_permalink( $last_story );
}
?>

<!-- close button -->
<a style="
	color: #fafafa00;position: fixed;
	z-index: 5;
" href="<?php echo $home_url; ?>">
	<button style="background-image: url('<?php echo $home_url; ?>wp-content/plugins/Amp-plugin/assets/images/exit.svg') !important;
			height: 18px;
			width: 18px;
			margin-left: 14px;
			border: none;
			margin-top: 22px;
			background-repeat: no-repeat;
			background: transparent;
			background-size: cover;">

	</button>
</a>
<!-- logo -->

<div
		style="background-image: url('<?php echo $home_url; ?>wp-content/plugins/Amp-plugin/assets/images/logo.png') !important;
				height: 32px;
				width: 40px;
				position: fixed;
				z-index: 5;
				border: none;
				margin-top: 57px;
				background-repeat: no-repeat;
				background: transparent;
				opacity: 0.7;
				background-size: cover;">

</div>
<!-- navigation button -->

<!--<div style="
	position: fixed;
	z-index: 10;
	bottom: 60px;
	width: 100%;
">
	<a style="
	color: #fafafa00;
" href="<?php /*echo $previous_post_url;*/ ?>">
		<button  class="button_bottom" style=" background-image: url('<?php /*echo $home_url; */ ?>wp-content/plugins/Amp-plugin/assets/images/back.svg') !important;
				float: left;
				border-radius: 0px 10px 10px 0px;">

		</button>
	</a>


	<a style="
	color: #fafafa00;
" href="<?php /*echo $next_post_url;*/ ?>">
		<button class="button_bottom" style="background-image: url('<?php /*echo $home_url; */ ?>wp-content/plugins/Amp-plugin/assets/images/next.svg'); !important;

				float: right;
				border-radius: 10px 0px 0px 10px;">

		</button>
	</a>
</div>
-->
		<?php
		$metadata = amp_get_schemaorg_metadata();
		if ( isset( $metadata['publisher']['logo']['url'] ) ) {
			$publisher_logo_src = $metadata['publisher']['logo']['url'];
		} elseif ( isset( $metadata['publisher']['logo'] ) && is_string( $metadata['publisher']['logo'] ) ) {
			$publisher_logo_src = $metadata['publisher']['logo'];
		} else {
			$publisher_logo_src = admin_url( 'images/wordpress-logo.png' );
		}
		$publisher = isset( $metadata['publisher']['name'] ) ? $metadata['publisher']['name'] : get_option( 'blogname' );

$meta_images = AMP_Story_Media::get_story_meta_images();
?>
<amp-story
		standalone
	<?php
	/**
	 * Filters whether the story supports landscape.
	 *
	 * @param bool $supports_landscape Whether supports landscape. Currently false by default, but this will change in the future (e.g. via user toggle).
	 * @param wp_Post $post The current amp_story post object.
	 */
	if ( apply_filters( 'amp_story_supports_landscape', get_field('landscape_mode'), get_post() ) ) {
		echo 'supports-landscape';
	}
	?>
		publisher-logo-src="<?php echo esc_url( $publisher_logo_src ); ?>"
		publisher="<?php echo esc_attr( $publisher ); ?>"
		title="<?php the_title_attribute(); ?>"
		poster-portrait-src="<?php echo esc_url( $meta_images['poster-portrait'] ); ?>"
	<?php if ( isset( $meta_images['poster-square'] ) ) : ?>
		poster-square-src="<?php echo esc_url( $meta_images['poster-square'] ); ?>"
	<?php endif; ?>
	<?php if ( isset( $meta_images['poster-landscape'] ) ) : ?>
		poster-landscape-src="<?php echo esc_url( $meta_images['poster-landscape'] ); ?>"
	<?php endif; ?>
>
	<?php
	amp_print_story_auto_ads();
	the_content();
	amp_print_analytics( '' );
	?>
	<amp-story-bookend layout=nodisplay>
		<script type="application/json">
			{
				"bookendVersion": "v1.0",
				"shareProviders": [
					"linkedin",
					"whatsapp",
					"Twitter"
				],
				"components": [
					{
						"type": "heading",
						"text": "Up Next"
					}
<?php
			// to loop post in bookend
			$loop_length = 3;  //specify number of posts ahead you want to display
			$check_help  = 0;    //require as a checkpoint to follow different paths in loop
			global $post;
			$revert_post_content = $post;  //save current global post content to setback changes to current post after loop execution ends
			for ( $loop_start = 1; $loop_start <= $loop_length; $loop_start ++ ) {
				if ( $loop_start === 1 ) {
					$nextPost = get_next_post();
				} else {
					global $post;
					$post = get_next_post();
					setup_postdata( $post );

					if ( $check_help === 1 ) {
						$nextPost   = $post;
						$check_help = 2;
					} else {
						$nextPost   = get_next_post();
						$check_help = 0;
					}
				}
				if ( get_permalink( $nextPost ) != get_permalink( $post ) )   // to check when last post arrives to loop back to first posts
				{
				} else {
					// getting the link of oldest story (1st story)
					$args               = array(
						'numberposts'      => 2,
						'category'         => 0,
						'orderby'          => 'date',
						'order'            => 'ASC', // the 1st array element will be 1st story(oldest story)
						'include'          => array(),
						'exclude'          => array(),
						'meta_key'         => '',
						'meta_value'       => '',
						'post_type'        => 'amp_story',
						'suppress_filters' => true,
					);
					$get_post_for_story = get_posts( $args );
					$first_story        = $get_post_for_story[0]; // 0 will give the 1st  story here ( oldest story)

					global $post;
					$post = $first_story;
					setup_postdata( $post );
					if ( $check_help != 0 ) {
						$nextPost = get_next_post();
					} else {
						$nextPost   = $post;
						$check_help = 1;
					}

				}


				// to stop looping of stories
				if ( get_permalink( $revert_post_content ) !== get_permalink( $nextPost ) ) {
					echo ',{';
					if ( $loop_start === 1 ) {
						echo ' "type": "landscape", ';
					} else {
						echo ' "type": "small", ';
					}
					echo '"title": "';
					echo $nextPost->post_title;
					echo '",';
					echo '"url": "';
					echo get_permalink( $nextPost );
					echo '",';
					echo '"image": "';
					echo get_the_post_thumbnail_url( $nextPost->ID );
					echo '"';
					echo '}';
				} else {
					$loop_start = $loop_length + 2;
				}
				if ( $loop_start >= $loop_length ) { //wp_reset_postdata();
					$post = $revert_post_content;
				}
			}
			?>
  ]
	  }


		</script>
	</amp-story-bookend>
</amp-story>

		<?php
		// Note that \AMP_Story_Post_Type::filter_frontend_print_styles_array() will limit which styles are printed.
		print_late_styles();
		?>
	</body>
</html>
