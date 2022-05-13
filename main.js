img=""
noseX=""
noseY=""
marioX=325;
marioY=325;
function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	img=loadImage("mario05.png")
}

function setup() {
	canvas = createCanvas(1240,336);
	video=createCapture(VIDEO)
	video.size(800,400);
	canvas.parent('game_console');
	instializeInSetup(mario);

	poseNet=ml5.poseNet(video,modelLoaded);
	poseNet.on('pose',gotPoses);
}

function modelLoaded(){
	console.log("Model Loaded")
}

function draw() {
	game()
	background("#D3D3D3");
	
	image(img,marioX,marioY)
}

function gotPoses(results){
	if(results.length>0){
		console.log(results);
		noseX=results[0].pose.nose.x
		noseY=results[0].pose.nose.noseY
		
	}
}






