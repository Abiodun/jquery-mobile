/*
* "nojs" plugin - class to make elements hidden to A grade browsers
*/

define( [ "jquery" ], function( $ ) {

$( document ).bind( "pagecreate create", function( e ){
	$( ":jqmData(role='nojs')", e.target ).addClass( "ui-nojs" );
	
});

});
