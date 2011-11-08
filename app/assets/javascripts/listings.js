$(document).ready(function() {
	
    $('.add').click(function() {
        var kind = $(this).attr('name')
        $('#new-book span#listing_title_kind').html(kind)
        $('#new-book input#listing_kind').val(kind)
        $('#new-book').fadeIn()
    });

    $('#new-book form').submit(function() {
        $('#new-book').fadeOut('fast');
    });

	$(document).delegate(".destroy", "click", function() {
		$(this).parents('.listing').animate({ height: 'toggle', opacity: 'toggle' }, 300, function() {
			$(this).remove()
		})
	})

})