function game() {
    $("<div/>").attr("id", "content").appendTo("body")
    $("<div/>").attr("id", "game").appendTo("#content")
    $("<div/>").attr("id", "ball").appendTo("#game")
    $("<div/>").attr("id", "paddleA").attr("class", "paddle").appendTo("#game").css("left", "10px").css("top", "100")
    $("<div/>").attr("id", "paddleB").attr("class", "paddle").appendTo("#game").css("left", "570px").css("top", "100")


    var ball = {
        speed: 3,
        x: 290,
        y: 140,
        width: $("#ball").width(),
        height: $("#ball").height(),
        directionX: 1,
        directionY: 1
    }
    var paddleA = {
        speed: 3,
        x: $("#paddleA").width() + $("#paddleA").position().left,
        y1: $("#paddleA").position().top,
        y2: $("#paddleA").position().top + $("#paddleA").height()
    };
    var paddleB = {
        speed: 3,
        x: $("#paddleB").position().left,
        y: 100
    }
    // Set main loop to be called on the desired frame rate
    setInterval(gameLoop, 1000 / 60);

    // Main loop of the game
    function gameLoop() {
        moveBall();
    }


    // Control movement of the ball doing collision checking
    function moveBall() {
        var gameWidth = parseInt($("#game").width());
        var gameHeight = parseInt($("#game").height());

        // Check collision to the bottom border and change the moving orientation on Y axis
        if (ball.y + ball.speed * ball.directionY > (gameHeight - parseInt($("#ball").height()))) {
            ball.directionY = -1
        }

        // Check collision to the top border and change the moving orientation on Y axis
        if (ball.y + ball.speed * ball.directionY < 0) {
            ball.directionY = 1
        }

        // Check collision to the left border and change the moving orientation on X axis
        if (ball.x + ball.speed * ball.directionX > (gameWidth - parseInt($("#ball").width()))) {
            ball.directionX = -1
        }

        // Check collision to the right border and change the moving orientation on X axis
        if (ball.x + ball.speed * ball.directionX < 0) {
            ball.directionX = 1
        }
        //paddleA
        if (ball.x + ball.speed * ball.directionX< paddleA.x) {
        
            ball.directionX = 1};
        
        // paddleB 
        if (ball.x + ball.speed * ball.directionX + ball.width> paddleB.x) {
            ball.directionX = -1
        }

        // Update ball position on X and Y axes based on speed and orientation
        ball.x += ball.speed * ball.directionX;
        ball.y += ball.speed * ball.directionY;

        // Render the updated ball position
        $("#ball").css({ "left": ball.x, "top": ball.y });
    };

};