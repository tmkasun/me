<?php
/**
 * Theme: Link
 * 
 * The "sidebar" for the widgetized footer area. If no widgets added AND just preivewing
 * the theme, then display some widgets as samples. Once the theme is actually in use,
 * it will be empty until the user adds some actual widgets.
 *
 * @package link
 */
?>

<?php 
/* If footer "sidebar" has widgets, then retreive them */
$sidebar_footer = get_dynamic_sidebar( 'Footer' );

/* If not, then display sample widgets, unless turned off in theme options */
/*
global $xsbf_theme_options;
if ( $xsbf_theme_options['sample_widgets'] != false AND ! $sidebar_footer ) {
	$sidebar_footer = '<div id="cf">
				<div class="col-lg-8">
		        	<div id="mapwrap">
						<iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d15838.24769897868!2d79.96311533121336!3d7.06064701010206!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1402393997686" frameborder="0" style="border:0"></iframe>
					</div>	
				</div><!--col-lg-8-->
				<div class="col-lg-4">
					<h4>ADDRESS<br/>Kasun Thennakoon</h4>
					<br>
					<p>
						Ganemulla<br/>
						Gampaha, Srilanka.
					</p>
					<p>
						P: +94 71*******<br/>
						F: +94 71*******<br/>
						E: <a href="mailto:tmkasun+blog@gmail.com">tmkasun+blog@gmail.com</a>
					</p>
				</div><!--col-lg-4-->
			</div><!-- cf -->';
}
*/

/* Apply filters and display the footer widgets */
if ( $sidebar_footer ) :
?>
	<div class="sidebar-footer clearfix">
	<div class="container">
		<div class="row">
		<?php echo apply_filters( 'xsbf_footer', $sidebar_footer ); ?>
		</div><!-- .row -->
	</div><!-- .container -->
	</div><!-- .sidebar-footer -->

<?php endif;?>