$(document).ready(function() {
	//create cage
	var cage = $("<div/>");
	cage.attr("id","cage");
	$("body").append(cage);
	//create ball		
	var ball = $("<div/>");
	ball.attr("id", "ball");
	cage.append(ball);	
	ball.click(function() {
		clearInterval();
		console.log("accelerate");	
		speed.vx = 2*speed.vx; //accelerate the ball
		speed.vy = 2*speed.vy;
		setInterval(moveBall, 40);
	});
});


//------------
var speed = {vx: 3, vy: 4};
var start = {x: 0, y: 0};
var coordinates = {x: 1, y: 1};



function moveBall() {		
		var height = $("#cage").height()-$("#ball").height();
		var width = $("#cage").width()-$("#ball").width();
		if ((0 <= coordinates.x) && (coordinates.x <= width) && (0 <= coordinates.y) && (coordinates.y <= height)) {	
			$("#ball").css({
				top: coordinates.y,
				left: coordinates.x,
			});
			coordinates.y = coordinates.y + speed.vy;
			coordinates.x = coordinates.x + speed.vx;
		}
		else {
			//slow down and change direction
			if (0 < coordinates.x && coordinates.x < width) {
				console.log("height border");
				if (coordinates.y >= height) {
					coordinates.y = height;
				} else {
					coordinates.y = 1;
				}
				speed.vy = 0 - 0.7*speed.vy;
				speed.vx = 0.7*speed.vx;			
			} else {
				console.log("width border");
				if (coordinates.x >= width) {
					coordinates.x = width;
				} else {
					coordinates.x = 1;
				}

				speed.vy = 0.7*speed.vy;
				speed.vx = 0 - 0.7*speed.vx;				
			}
		}	
}