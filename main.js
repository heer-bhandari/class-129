song = "";
leftWristX = 0;
rightWristX = 0;
leftWristY = 0;
rightwristY = 0;
scoreleftwrist = 0;

function setup(){
    canvas = createCanvas(550 , 500);
    canvas.position(400 , 200);
    video = createCapture(VIDEO);
    video.hide();
poseNet = ml5.poseNet( video , modelLoaded);
poseNet.on('pose' , gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is Initialized');
}

function draw(){
    image(video , 0 , 0 , 550 , 500);

    fill("grey");
    stroke("white");
    if(scoreleftwrist > 0.2){
        circle(leftWristX , leftWristY , 20);
        zxcvbnm = Number(leftWristY);
       asdfghjkl = floor(zxcvbnm);
       volume1 = asdfghjkl / 1000;
    volume = volume1 * 2;
    document.getElementById("volume").innerHTML = "volume = " + volume;
    song.setVolume(volume);
    }
   

}
 
function preload (){
    song =loadSound("music.mp3");
}
function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function stop(){
    song.stop();
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        scoreleftwrist = results[0].pose.keypoints[9].score;
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log(" leftWristX = " + leftWristX + " leftWristY = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log(" rightWristX = " + rightWristX + " rightWristY = " + rightWristY);
    }
}

