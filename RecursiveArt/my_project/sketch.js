function setup() {
	createCanvas(400, 400);
}

//function drawShape, which get's called over and over again to draw each shape.
var drawShape = function(x, y, a, z) {

    //Draws a rectangle and fills it, using the variables x, y, a, and z.
    fill(z, a, x);
    rect(x+184,y-216,a+11,z);

    //Draws an ellipse and fills it, using the variables x, y, a, and z.
    fill(x, z, a);
    ellipse(x+247, y-117, a+48, z-4);

    //Draws a triangle and fills it, using the variables x, y, a, and z.
    fill(a, x, z);
    triangle(x+533,y+536,a+86,z-178,x+165,y-359);

    //Draws a quardrilateral and fills it, using the variables x, y, a, and z
    fill(z, x, a);
    quad(x+41, y-260, a+198, z-43, x+37, y-229, a-209, z-260);

    //an If statement, making sure the function isn't called forever, and only as long as a is less than 100
    if (a < 100) {
        //adds or subtracts a certain amount from each variable, so that you get the funky shapes that change with each recursion
        z+=9;
        a += 4;
        y+=8;
        x-=7;

        //calls the function drawShape with new perameters
        drawShape(x, y, a, z);

    }
    //will switch to this elseif statement once a is greater than 100, but will only call the statement if a is less than 350
    else if (a < 350) {
        //adds and subtracts by a different amount than before
        z+=9;
        a += 3;
        y+=4;
        x-=5;

        //calls the function drawShape with new perameters
        drawShape(x, y, a, z);

    }

};

function draw(){
	//calls the function drawShape with original perameters
	drawShape(400/2, 400/2, 0, 0);
}
