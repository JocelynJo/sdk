var dibujarGift=function(data){
	var gift = "";
	var url = "";
	data.forEach(function(element){//recorre json
		gif=element.images.downsized_large.url;
		url=element.images.bitly_gif_url;//buscar en el json
		$("#elementos").append(armarTemplate(gif, url));//rellena con imagenes el body
	});

}

var armarTemplate=function(gif,url){
	var t = "<div class='elemento'><img src='"+ gif +"'/><a href='"+ url +"'>Ver mas</a></div>"
	return t;
}

var ajaxGif=function(gif){
	$.ajax({ 
		url: 'http://api.giphy.com/v1/gifs/search',	
		type: "GET",
		dataType: "json",
		data:{
			q:gif,
			api_key :'dc6zaTOxFJmzC'
		}
	})

	.done(function(response){
		console.log(response);
		dibujarGift(response.data);
	})

	.fail(function(){
		console.log("error");
	});

}

$("buscar-gif").click(function(event){
	console.log("Entro");
	$("#elementos").empty();
	var gif=$("#gif-text").val();
	ajaxGif(gif);
});

