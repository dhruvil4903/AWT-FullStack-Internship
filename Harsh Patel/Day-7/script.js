
//JQuery makes a use of anonymous functions
$(function () {
console.log("function");
});
$(document).ready(function () {
//$("div").bind('click', function(){});
$("#btnClickEvent").click(function () {
// jQuery code goes here
$(this).text('Button click');
});
$("#btnClickEvent").dblclick(function () {
$(this).text('Button bouble click');
});
$("#divMouseLeaveEnter").mouseenter(function () {
$(this).text('Cursor is in!');

});
$("#divMouseLeaveEnter").mouseleave(function () {
$(this).text('Curosr is out!');
});
$("#divMouseUpDown").mousedown(function () {
$(this).text('Mouse button is down!');
});
$("#divMouseUpDown").mouseup(function () {
$(this).text('Mouse button is released!');
});
});
