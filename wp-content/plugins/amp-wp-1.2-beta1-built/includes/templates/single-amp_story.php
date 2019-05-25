<?php
/**
 * Template for amp_story post type.
 *
 * @package AMP
 */

the_post();
?>
<!DOCTYPE html>
<html amp <?php language_attributes(); ?>>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
		<title><?php echo esc_html( wp_get_document_title() ); ?></title>
		<?php
		wp_enqueue_scripts();
		wp_scripts()->do_items( array( 'amp-runtime' ) ); // @todo Duplicate with AMP_Theme_Support::enqueue_assets().
		wp_styles()->do_items();
		?>
		<?php rel_canonical(); ?>
		<?php amp_add_generator_metadata(); ?>
		<style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
       <!-- style for sidebar navigation -->
        <style amp-custom="">

            .amp-sidebar-toolbar-target-shown {
                display: none;
            }
        </style>

        <script async custom-element="amp-sidebar" src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js"></script>

        <script>
            function myunction() {
               location.replace("https://www.w3schools.com")
            }
        </script>
    </head>

    <body >

    <!-- Get next and previous post url -->
    <?php
    $next_post_url = get_permalink( get_adjacent_post(false,'',false)->ID );
    $previous_post_url = get_permalink( get_adjacent_post(false,'',true)->ID );
    ?>


    <!--  <button style="margin-bottom: -10px;left: 10px;z-index: 10;position: fixed;">TEXT BB</button>    -->
    <a href='<?php echo $previous_post_url ?>'
       style="
    margin-bottom: -10px;
    left: 10px;
    z-index: 10;
    position: fixed;"><img src=home.png width="512" height="512" title="Go  home" alt="Go home"></a>
    <!-- //imgsrc insert https://image.shutterstock.com/image-vector/home-icon-isolated-on-transparent-450w-654663997.jpg https://image.flaticon.com/icons/svg/149/149445.svg  -->
    <!-- <img src="https://image.shutterstock.com/image-vector/home-icon-isolated-on-transparent-450w-654663997.jpg" width="42" height="46" title="Go  home" alt="Go home">   -->

  <?php
		$metadata = amp_get_schemaorg_metadata();
		if ( isset( $metadata['publisher']['logo']['url'] ) ) {
			$publisher_logo_src = $metadata['publisher']['logo']['url']; // @todo Use amp-publisher-logo.
		} else {
			$publisher_logo_src = admin_url( 'images/wordpress-logo.png' );
		}
		$publisher = isset( $metadata['publisher']['name'] ) ? $metadata['publisher']['name'] : get_option( 'blogname' );

		// There is a fallback poster-portrait image added via a filter, in case there's no featured image.
		$thumbnail_id     = get_post_thumbnail_id();
		$poster_portrait  = wp_get_attachment_image_url( $thumbnail_id, AMP_Story_Post_Type::STORY_CARD_IMAGE_SIZE );
		$poster_square    = wp_get_attachment_image_url( $thumbnail_id, AMP_Story_Post_Type::STORY_SQUARE_IMAGE_SIZE );
		$poster_landscape = wp_get_attachment_image_url( $thumbnail_id, AMP_Story_Post_Type::STORY_LANDSCAPE_IMAGE_SIZE );
		?>

		<amp-story
			standalone
			publisher-logo-src="<?php echo esc_url( $publisher_logo_src ); ?>"
			publisher="<?php echo esc_attr( $publisher ); ?>"
			title="<?php the_title_attribute(); ?>"
			poster-portrait-src="<?php echo esc_url( $poster_portrait ); ?>"
			<?php if ( $poster_square ) : ?>
				poster-square-src="<?php echo esc_url( $poster_square ); ?>"
			<?php endif; ?>
			<?php if ( $poster_landscape ) : ?>
				poster-landscape-src="<?php echo esc_url( $poster_landscape ); ?>"
			<?php endif; ?>
		>



            <amp-sidebar id="sidebar2" layout="nodisplay" side="right">
                <ul>
                    <li>Nav item 1</li>
                    <li><a href="#idFour" on="tap:idFour.scrollTo">Nav item 4</a></li>
                    <li><BUTTON id="ub" onclick="myunction()">Click me</BUTTON></li>
                    <li>Nav item 6</li>
                </ul>
                <nav toolbar="(max-width: 400px)" toolbar-target="target-element">

                </nav>
            </amp-sidebar>

                <amp-sidebar id="sidebar1" layout="nodisplay" side="right">
                <ul>
                    <li>Nav item 1</li>
                    <li><a href="#idTwo" on="tap:idTwo.scrollTo">Nav item 2</a></li>
                    <li><a onclick="myunction()">Nav item 3</a></li>
                    <li><a href="#idFour" on="tap:idFour.scrollTo">Nav item 4</a></li>
                    <li><BUTTON id="ub" onclick="myunction()">Click me</BUTTON></li>
                    <li>Nav item 6</li>
                </ul>

                <nav toolbar="(max-width: 400px)" toolbar-target="target-element">
                </nav>
            </amp-sidebar>


			<?php
           echo the_content();
            ?>
        </amp-story>

		<?php
		// Note that \AMP_Story_Post_Type::filter_frontend_print_styles_array() will limit which styles are printed.
		print_late_styles();
		?>

   

</body>

</html>
