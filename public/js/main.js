var socket=io(); //we can do this because we imported socket.io in html
$("form").submit(function(){
	//socket.emit(event,data) On event, send the server the event name
	socket.emit("chat message",$("#messageField").val());
	$("#messageField").val("");
	return false;
});

//socket.on(event, callback funciton) callback gets run when event happens
socket.on("chat message",function(msg){
	$("#messages").append($("<li>").text(msg));
});