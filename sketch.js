var aball,database,position

function setup(){
    database = firebase.database();
    createCanvas(500,500);
    aball = createSprite(250,250,10,10);
    aball.shapeColor = "green";
    var ballposition = database.ref("ball/position");
    ballposition.on('value',readposition)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writeposition(-5,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writeposition(5,0);
    }
    else if(keyDown(UP_ARROW)){
        writeposition(0,-5);
    }
    else if(keyDown(DOWN_ARROW)){
        writeposition(0,+5);
    }
    drawSprites();
}

function readposition(data){
position = data.val();
aball.x = position.x;
aball.y = position.y;
}
function writeposition(x,y){
    database.ref("ball/position").set({
        "x" : position.x + x,"y" :position.y + y
    })
}

