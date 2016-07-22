// Define variables
var windowHeight = $( window ).outerHeight();
var defaultHeight = 656;
var pageHeroHeight = $( '.about_content' ).height();
var Difference = defaultHeight - windowHeight;

$( document ).ready(function() {

	// Function to set height for .about_content depending on the device height

	function setHeight() {
		$( '.about_content' ).removeAttr( 'data-style' );

		$( '.about_content' ).css( 'height', windowHeight + 'px' );

		$( window ).on('resize', function() {
			$( '.about_content' ).css( 'height', windowHeight + 'px' );
		});
	}

	setHeight();

});
