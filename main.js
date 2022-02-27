// alarm = "";
// objects = [];
// status = "";

// function preload(){
//     alarm = loadSound("alarm_r.mp3");
// }

// function setup(){
//     canvas = createCanvas(400, 400);
//     canvas.center();
//     video = createCapture(VIDEO);
//     video.hide();
//     objectDetector = ml5.objectDetector("cocossd", modelLoaded);
//     document.getElementById("status").innerHTML = "Finding Baby";
// }

// function modelLoaded(){
//     console.log("Model is Loaded");
//     status = true;
// }

// function gotResults(error, results){
//     if(error){
//         console.error(error);
//     } 
//         console.log(results);
//         objects = results;
// }

// function draw(){
//     image(video, 0, 0, 400, 400);

//     if(status != ""){
//         objectDetector.detect(video, gotResults);
//         for(i = 0; i < objects.length; i++){
//             console.log(objects.length)
//             document.getElementById("status").innerHTML = `Baby Found`;
//             if (objects[i].label == "person"){
//                 document.getElementById("status").innerHTML = "Baby Found";
//                 alarm.stop();
//             }
//             else {
//                 document.getElementById("status").innerHTML = "Baby is not found";
//                 alarm.play();
//             }
//         }
//         if(objects.length == 0){
//             document.getElementById("status").innerHTML = "Baby is not found";
//             alarm.play();
//         }
//     }
// }
//alarm = "";
video="";
objects = [];
status = "";
 
function preload(){
   alarm = loadSound("alarm_r.mp3");
}
 
function setup(){
 
    // canvas = createCanvas(480, 380);
    // canvas.center();
    // video = createCapture(VIDEO);
    // video.hide();
    // objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    // document.getElementById("status").innerHTML = "Status : Detecting Objects";
 
 
 
   canvas = createCanvas(480, 380);
   canvas.center();
   video = createCapture(VIDEO);
   
   video.hide();
   objectDetector = ml5.objectDetector('cocossd', modelLoaded);
   document.getElementById("status").innerHTML = "Finding Baby";
}
 
function modelLoaded(){
   console.log("Model is Loaded");
   //objectDetector.detect(video, gotResults);
   status = true;
}
 
function gotResults(error, results){
   if(error){
       console.error(error);
   }
       console.log(results);
       objects = results;
    }
 
    function draw(){
       image(video, 0, 0, 480, 380);
     
       if(status != ""){
           objectDetector.detect(video, gotResults);
           for(i = 0; i < objects.length; i++){
               console.log(objects.length)
             
               document.getElementById("status").innerHTML = `Baby Found`;
               if (objects[i].label == "person") {
                console.log("stop");
                alarm.stop();
            }
            else {
                document.getElementById("status").innerHTML = "Baby Not Found";
                console.log("play");
                alarm.play();
            }
           }
           if(objects.length == 0){
               document.getElementById("status").innerHTML = "Baby is not found";
               alarm.play();
           }
       }
    }
     
     
    