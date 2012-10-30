$(document).ready(function() {
	$('#input-search').keypress( function(e) {
		if(e.keyCode==13){
			event.preventDefault();
		}
	}); 

	$('#input-search').keyup( function() {
		$('li.data-row').css("display", "none");
		var searchterm = $('#input-search').val();
		if (searchterm.length > 2) {
			var match = $('li.data-row:icontains("' + searchterm + '")');
			match.css("display", "");
		} else {
			$('li.data-row').css("display", "");
		}
	});

	jQuery.expr[':'].icontains = function(a, i, m) {
		return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
	};
});