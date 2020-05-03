<?php
/**
 * Theme: Link
 * 
 * The "sidebar" for the bottom of the page (before the widgetized footer area). If no 
 * widgets added AND preivewing the theme, then display some widgets as samples. Once the
 * theme is actually in use, it will be empty until the user adds some actual widgets.
 *
 * @package link
 */
?>

<?php 
/* If page bottom "sidebar" has widgets, then retrieve them */
$sidebar_pagebottom = get_dynamic_sidebar( 'Page Bottom' );

/* If not, then display sample widgets unless turned off in theme options */
global $xsbf_theme_options;
if ( $xsbf_theme_options['sample_widgets'] != false AND ! $sidebar_pagebottom ) {

	$sidebar_pagebottom = '<aside id="sample-text" class="widget widget_text section bg-lightgray centered clearfix">'
		.'<div class="container">'
		.'<div class="textwidget">'
		.'</div><!-- textwidget -->'
		.'</div><!-- container -->'
		.'</aside>';

	$sidebar_pagebottom .= '<aside id="sample-text-3" class="widget widget_text section clearfix">'
		.'<div class="container">'
		.'<h2 class="widget-title">' . _x( 'Stay Knnected', null, 'flat-bootstrap' ) . '</h2>'
		.'<div class="textwidget">'
		.'<p>' . _x( "KiT with my social profiles to get the latest updates on me,and i'm happy to make new knnections :)", null, 'flat-bootstrap' ) . '</p>'
		.'</div><!-- textwidget -->'
		.'</div><!-- container -->'
		.'</aside>';

	$sidebar_pagebottom .= '<aside id="sample-text-4" class="widget widget_text section nopadding fullwidth clearfix">'
		.'<div id="sf" class="textwidget social-footer">'
		.'<div class="row">'
		.'<div class="col-md-4 bg-darkgreen padding-top-bottom">
			<h4 class="ml">FACEBOOK</h4>
			<p class="centered aligncenter"><a href="http://www.facebook.com/kthennakoon"><i class="fa fa-facebook icon-lg"></i></a></p>
		</div>'
		.'<div class="col-md-4 bg-lightgreen padding-top-bottom">
			<h4 class="ml">TWITTER</h4>
			<p class="centered aligncenter"><a href="https://twitter.com/tmkasun"><i class="fa fa-twitter icon-lg"></i></a></p>
			
		</div>'
		.'<div class="col-md-4 bg-darkgreen padding-top-bottom">
			<h4 class="ml">GOOGLE+</h4>
			<p class="centered aligncenter"><a href="https://plus.google.com/+KasunThennakoonz/posts"><i class="fa fa-google-plus icon-lg"></i></a></p>
			
		</div>'
		.'</div><!-- row -->'
		.'</div><!-- textwidget -->'
		.'</div><!-- container -->'
		.'</aside>';

	$sidebar_pagebottom .= '<div class="contact-footer">
				<div class="container">
				<div class="col-md-8">
		        	<div id="mapwrap">
						<iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d15838.24769897868!2d79.96311533121336!3d7.06064701010206!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1402393997686" height="400" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
					</div>	
				</div><!--col-md-8-->
				<div class="col-md-4">
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
				</div><!--col-md-4-->
				</div><!-- container -->
			</div><!-- contact-footer -->';

}

/* Apply filters and display the footer widgets */
if ( $sidebar_pagebottom ) :
?>
	<div id="sidebar-pagebottom" class="sidebar-pagebottom">
		<?php echo apply_filters( 'xsbf_pagebottom', $sidebar_pagebottom ); ?>
	</div><!-- .sidebar-pagebottom -->
<?php endif;?>
