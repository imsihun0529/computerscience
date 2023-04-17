/**

Bouncing Ball with Vectors
Demonstration of using vectors to control motion
of a body.
*/
let location2; // Location of shape
let velocity; // Velocity of shape
let gravity; // Gravity acts at the shape's acceleration
let location1; // Location of shape
let velocity1; // Velocity of shape
let gravity1;

function setup() {
createCanvas(640,360);
location2 = createVector(100,100);
velocity = createVector(1.5,2.1);
gravity = createVector(0,0.2);
location1 = createVector(200,200);
velocity1 = createVector(3,4.2);
gravity1 = createVector(0,0.4);
}

function draw() {
background(0);

// Add velocity to the location.
location2.add(velocity);
location1.add(velocity1);
// Add gravity to velocity
velocity.add(gravity);
velocity1.add(gravity1);

// Bounce off edges
if ((location2.x > width) || (location2.x < 0)) {
velocity.x = velocity.x * -1;
}
if ((location1.x > width) || (location1.x < 0)) {
velocity1.x = velocity1.x * -1;
}

if (location2.y > height) {
// We're reducing velocity ever so slightly
// when it hits the bottom of the window
velocity.y = velocity.y * -0.95;
location2.y = height;
}
if (location1.y > height) {
// We're reducing velocity ever so slightly
// when it hits the bottom of the window
velocity1.y = velocity1.y * -0.95;
location1.y = height;
}

// Display circle at location vector
stroke(255);
strokeWeight(2);
fill(127);
ellipse(location2.x,location2.y,48,48);
stroke(510);
strokeWeight(4);
fill(254);
ellipse(location1.x,location1.y,96,96);
}