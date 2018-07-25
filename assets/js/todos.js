//check off specific Todos By clicking
$("ul").on("click","li",function(){
	$(this).toggleClass("completed")	
})
//click on X to delete to do
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
})
$("input[type='text']").on("keypress",function(event){
	if(event.which===13){
		//grabbing new text from input
		var ip=$(this).val()
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + ip +"</li>")
	}
});
$(".fa-edit").click(function(){
	$("input[type='text']").fadeToggle();
})