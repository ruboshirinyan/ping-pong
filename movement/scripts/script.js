$(document).ready(function()
{
    var dynamic = $("#dynamic");
 	var directions = {};
	var speed = 4;

	$('html').keyup(stop).keydown(charMovement);

	function charMovement(e)
	{
		directions[e.which] = true;
		console.log(directions);
	}

    function stop(e)
    {
		delete directions[e.which];
    }
	
    function move(e)
    {
		for (var i in directions) 
		{
			if(dynamic.position().left > 0 && i == 37)
			{
				dynamic.css("left", (dynamic.position().left - speed) + "px");
			}

			if(dynamic.position().left < ($("#map").width() - dynamic.width()) && i == 39)
			{
				dynamic.css("left", (dynamic.position().left + speed) + "px");
			}
			
			if(dynamic.position().top > 0 && i == 38)
			{
				dynamic.css("top", (dynamic.position().top - speed) + "px");
			}

			if(dynamic.position().top < ($("#map").height() - dynamic.height()) && i == 40)
			{
				dynamic.css("top", (dynamic.position().top + speed) + "px");
			}
		}
	}
		
    
    var interval = setInterval(move, 20);
	

});