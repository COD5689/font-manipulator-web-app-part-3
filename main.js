leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(650, 500);
    video.position(200, 150);

    canvas = createCanvas(550, 500);
    canvas.position(1250, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw(){
    background("#969A97");
    document.getElementById("text_size").innerHTML = "Width and Height of the text will be = " + difference + "px";

    textSize(difference);
    fill("black");
    text("Arnav", 0, 350);
}

function modelLoaded(){
    console.log("poseNet is Initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "diffference = " + difference)
    }
}