function preload(){
wazaaa=loadImage('https://i.postimg.cc/DzPB2Dny/jhonie-walker.png')
}
function setup(){
canvas=createCanvas(300,300);
canvas.center();
video =createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotposes);
}
function modelLoaded(){
    console.log("modelo_cargadation")
}
narizx=0;
narizy=0;
function gotposes(results){
    if(results.length>0){
        console.log(results);
        console.log("narizx = "+results[0].pose.nose.x-100);
        narizx=results[0].pose.nose.x;
        console.log("narizy = "+ results[0].pose.nose.y);
        narizy=results[0].pose.nose.y;
    }
}
function draw(){
image(video,0,0,300,300);
fill("greenyellow");
stroke("darkgreen");
//circle(narizx,narizy,33);
image(wazaaa,narizx,narizy,50,50);
}
function photo(){
save('Axel.png');
}