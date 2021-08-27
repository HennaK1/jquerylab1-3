$('p:eq(1)').attr('id', 'toka');
$('#fp').remove();
$('#fdiv').css(
    {
        backgroundColor: 'grey',
        color: 'white'
    }
);

function sayHello() {
    $('#toka').after('<p>Hello user<p/>');
}

$('#nappi').click(sayHello);

/* toinen tapa
$('#nappi').click(function() {
    $('#toka').after('<p>Hello user<p/>'); 
});
*/

$('#4p').hide();

$("#sdiv").hover(
	function () {
        $('#4p').text('About to select a link...').show();
    },
    function () {
        $('#4p').hide(); 
    } 	
)