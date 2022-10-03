difference=0;
rightWristX=0;
leftWristX=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.position(560,120);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    background('#eb4034');
    document.getElementById("font_size").innerHTML="fonnt size of the text will be"+difference+"px";
    textSize(difference);
    fill('#44d8fc');
    text('Mohit',50,400);
}

function modelLoaded(){
    console.log('poseNet Is Initialized.');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        difference=floor(leftWristX-rightWristX);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        console.log("leftWristX="+leftWristX+"rightWristX="+rightWristX+"difference"+difference);
    }
}
