
function setup() {
  
   createCanvas(700, 450);
   background(240);
   rectMode(CENTER);
   noStroke();
}


function draw() {
   // charmander's face
   drawFeature(random(255),random(255),random(255), 350, 225, 200, 200, 20


   // charmander's eyes
   fill(29, 45, 49);
   rect(292.5, 182.5, 35 * scaleValue, 65 * scaleValue);
   rect(407.5, 182.5, 35 * scaleValue, 65 * scaleValue);
   fill(60, 109, 126);
   rect(292.5, 205, 35 * scaleValue, 20 * scaleValue);
   rect(407.5, 205, 35 * scaleValue, 20 * scaleValue);
   fill(26, 33, 41);
   rect(292.5, 185, 15 * scaleValue, 40 * scaleValue);
   rect(407.5, 185, 15 * scaleValue, 40 * scaleValue);
   fill(255, 255, 255);
   rect(300, 165, 10 * scaleValue, 20 * scaleValue);
   rect(400, 165, 10 * scaleValue, 20 * scaleValue);


   // charmander's mouth
   fill(160, 111, 141);
   rect(350, 272.5, 150 * scaleValue, 55 * scaleValue);
   fill(201, 153, 191);
   rect(350, 285, 120 * scaleValue, 30 * scaleValue);
   fill(255, 255, 255);
   rect(307.5, 292.5, 15 * scaleValue, 15 * scaleValue);
   rect(392.5, 292.5, 15 * scaleValue, 15 * scaleValue);
   rect(294, 254, 18 * scaleValue, 18 * scaleValue);
   rect(406, 254, 18 * scaleValue, 18 * scaleValue);


   // charmander's nose
   fill(206, 152, 116);
   rect(342.5, 231, 5 * scaleValue, 12 * scaleValue);
   rect(357.5, 231, 5 * scaleValue, 12 * scaleValue);
}

function mouseClicked() {
  scaleValue = random(0.5, 2);
  background(240);
}