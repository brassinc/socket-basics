var socket = io();
var name = getQueryVariable('name') || 'Anonymous';
var room = getQueryVariable('room');

console.log(name + ' wants to join ' + room);

jQuery('.room-title').text(room);

socket.on('connect', function() {
	console.log('connected to socket.io server!');

	socket.emit('joinRoom', {
		name: name,
		room: room
	});
});

socket.on('message', function(message) {
	var momentTimestamp = moment.utc(message.timestamp);
	$messages = jQuery('.messages')
	$message =jQuery('<li class="list-group-item"></li>')
	console.log('New message:');
	console.log(message.text);

	$message.append('<p><strong>' + message.name + ' ' + momentTimestamp.local().format('hh:m a: ') + '</strong></p>');
	$message.append('<p>' + message.text + '</p>');
	$messages.append($message)

});

// Handles submitting of new message
var $form = jQuery('#message-form');

$form.on('submit', function(event) {
	event.preventDefault();

	var $message = $form.find('input[name=message]');
	var timestamp = moment.utc(moment().valueOf);

	socket.emit('message', {
		name: name,
		text: $message.val()
	});

	$message.val('');
});