var canvas;
var database;
var pink;

var drawing = [];

function setup() {
    canvas = createCanvas(1250, 510);
    canvas.parent('canvascontainer');
    database = firebase.database()
    background(255);

    var clearButton = select('#clearButton');
    clearButton.mousePressed(clearDrawing);

    pink = createSprite(1210,40,50,50);
    red = createSprite(1210,100,50,50);
    blue = createSprite(1210,160,50,50);
    yellow = createSprite(1210,220,50,50);
    green = createSprite(1210,280,50,50);
    orange = createSprite(1210,340,50,50);
    black = createSprite(1210,400,50,50);
    purple = createSprite(1210,460,50,50);

    textSize(18);
    textFont('Georgia');

}

var db_drawing = [];

function mouseDragged() {

    var point = {
        x: mouseX,
        y: mouseY
    }
    drawing.push(point);
    var drawingRef = database.ref('drawing')
    drawingRef.set({
        "d": drawing
    })
}

function draw() {

    text("Draw and choose your colour!", 20,20);



    readData();
    beginShape();
    //stroke(255);
    //strokeWeight(4);
    noFill();

    pink.shapeColor = "pink";
    red.shapeColor = "red";
    blue.shapeColor = "blue";
    green.shapeColor = "green";
    yellow.shapeColor = "yellow";
    black.shapeColor = "black";
    orange.shapeColor = "orange";
    purple.shapeColor = "purple";

    if(mousePressedOver(pink)){
       
        beginShape();
         readData();
       
        stroke("pink");
        strokeWeight(4);
        noFill();
        for (var i = 0; i < db_drawing.length; i++) {
            vertex(db_drawing[i].x, db_drawing[i].y);
            endShape();
        }
        
        
    }

    if(mousePressedOver(red)){
        readData();
        beginShape();
        stroke("red");
        strokeWeight(4);
        noFill();
        for (var i = 0; i < db_drawing.length; i++) {
            vertex(db_drawing[i].x, db_drawing[i].y);
            endShape();
        }
    }

    if(mousePressedOver(blue)){
        readData();
        beginShape();
        stroke("blue");
        strokeWeight(4);
        noFill();
        for (var i = 0; i < db_drawing.length; i++) {
            vertex(db_drawing[i].x, db_drawing[i].y);
            endShape();
        }
    }

    if(mousePressedOver(green)){
        readData();
        beginShape();
        stroke("green");
        strokeWeight(4);
        noFill();
        for (var i = 0; i < db_drawing.length; i++) {
            vertex(db_drawing[i].x, db_drawing[i].y);
            endShape();
        }
    }

    if(mousePressedOver(yellow)){
        readData();
        beginShape();
        stroke("yellow");
        strokeWeight(4);
        noFill();
        for (var i = 0; i < db_drawing.length; i++) {
            vertex(db_drawing[i].x, db_drawing[i].y);
            endShape();
        }
    }

    if(mousePressedOver(black)){
        readData();
        beginShape();
        stroke("black");
        strokeWeight(4);
        noFill();
        for (var i = 0; i < db_drawing.length; i++) {
            vertex(db_drawing[i].x, db_drawing[i].y);
            endShape();
        }
    }

    if(mousePressedOver(orange)){
        readData();
        beginShape();
        stroke("orange");
        strokeWeight(4);
        noFill();
        for (var i = 0; i < db_drawing.length; i++) {
            vertex(db_drawing[i].x, db_drawing[i].y);
            endShape();
        }
    }

    if(mousePressedOver(purple)){
        readData();
        beginShape();
        stroke("purple");
        strokeWeight(4);
        noFill();
        for (var i = 0; i < db_drawing.length; i++) {
            vertex(db_drawing[i].x, db_drawing[i].y);
            endShape();
        }
    }

  /*  for (var i = 0; i < db_drawing.length; i++) {
        vertex(db_drawing[i].x, db_drawing[i].y);
        endShape();
    }*/

  

    drawSprites();

}

function readData() {
    database.ref('drawing/').on('value', (data) => {
        db_drawing = data.val().d
    })
}

function clearDrawing(){
    db_drawing = [];
     var adaRef = database.ref('drawing'); 
     adaRef.remove()

}

