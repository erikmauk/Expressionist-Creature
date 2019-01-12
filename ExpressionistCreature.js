function setup() 
{
   createCanvas(720, 720);
}


function draw() 
{
   background(179, 209, 232);

   // Mountain 1
   push();
   noStroke();
   fill(133, 133, 133);
   triangle(0, 260, 200, 15, 400, 260)
   fill(255);
   triangle (106, 130, 200, 15, 294, 130 )
   pop();

   // Mountain 2
   push();
   noStroke();
   fill(133, 133, 133);
   triangle(360, 260, 560, 100, 720, 260)
   fill(255);
   triangle (522, 130, 560, 100, 590, 130 )
   pop();
   
   // River
   push();
   noStroke();
   fill(141, 191, 255)
   rect(0, 260, 720, 220)
   pop();

   // Ice
   push();
   fill(255);
   rect(0, 480, 720, 240)
   pop();

   // Tail
   fill(0);
   arc(570, 550, 80, 80, 0, .7853981)

   // Body
   fill(242, 233, 210);
   ellipse(550, 480, 100, 225);

   // Fill
   push();
   noStroke();
   fill(63);
   ellipse(569.5, 480, 60, 180)
   triangle(569, 390, 577, 384.5, 589, 410 )
   pop();

   // Head
   fill(63);
   ellipse(545, 370, 70, 60);
   push();
   noStroke();
   translate(560,360)
   fill(232, 180, 95);
   rotate(5.4946019)
   ellipse(4, 0, 20, 30)
   pop();
   fill(0)
   ellipse(530,360,5,5)
   
   // Tear-drop
   fill(145, 207, 255);
   ellipse(531, 364, 3, 5)

   // Beak
   fill(168, 93, 8);
   triangle(524, 370, 480, 382, 527, 382)

   // Left foot
   fill(255, 138, 60)
   triangle(515, 601, 535, 588, 544, 601)

   // Right foot
   fill(255, 138, 60)
   triangle(548, 601, 565, 587, 575, 601)

   // Wing/Arm/Flipper Thing
   push();
   noStroke();
   fill(35);
   quad(552, 413, 591, 420, 570, 530, 563, 540)
   pop();

   // Sun
   fill(255, 255, 172)
   ellipse(720, 0, 150, 150)

}