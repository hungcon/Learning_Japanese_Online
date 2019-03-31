$(function() {
    $('.q-abcd-answer').click(function(event) {
    	removeActived();
    	$(this).addClass('actived')
	});
});
function removeActived(argument) {
	var arr = $( ".card-body" ).children( ".q-abcd-answer");
	arr.each(function(index, el) {
		$(el).removeClass('actived');
	});
}