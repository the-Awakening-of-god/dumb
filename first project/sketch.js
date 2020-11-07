var canvas= document.querySelector('canvas');
var c= canvas.getContext('2d');

// var x = 300;

// c.fillStyle = 'rgba(255,0,0,0.5)';
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = 'rgba(0,0,255,0.5)';
// c.fillRect(400, 100, 100, 100);
// c.fillStyle = 'rgba(0,255,0,0.5)';
// c.fillRect(x, 300, 100, 250);

// console.log(canvas);
// //line
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(x+100, 300);
// c.strokeStyle = "blue";
// c.stroke();

 //one cirle

//  c.beginPath();
// c.arc(x,y,30,0, Math.PI * 2,true);
// c.strokeStyle= 'Green';
// c.stroke();
// // arc / Cicle

// for (var i = 0; i < 255; i++) {
// var x = Math.random() * window.innerWidth;
// var randomColor = Math.random()*255;

// c.beginPath();
// c.arc(x,y,30,0, Math.PI * 2,true);
// c.strokeStyle= 'Green';
// c.stroke();
// }
//maybe use later(:

var mouse = {
	x: undefined,
	y: undefined
}

//var maxRadius = 45;


// var minRadius = 2;

var colorArray= [
'#3726A6',
'#4A44F2',
'#F2E635',
'#F2BE22',
'#F20505'
];

window.addEventListener('mousemove',
 function(event){
 	mouse.x = event.x;
 	mouse.y = event.y;
 	console.log(mouse)
 }
)
window.addEventListener('resize',
	 function(){

    canvas.width = window.innerWidth;
    canvas.height= window.innerHeight;
    innit();
	 }

)
	 


function Circle(x,y,dx,dy,radius){
	this.x= x;
	this.y= y;
    this.dx= dx;
    this.dy= dy;
    this.radius= radius;
    this.maxRadius = radius*15
    this.minRadius = radius;
    this.color= colorArray[Math.floor(Math.random()*colorArray.length)];
	this.draw= function(){
		 c.beginPath();
         c.arc(this.x,this.y,this.radius,0, Math.PI * 2,true);
         c.fillStyle = this.color;
         c.fill();
     
         
	}
	this.update= function(){

     if(this.x+this.radius>canvas.width||this.x-this.radius<0){
  
     	this.dx=-this.dx;
     }
     if(this.y+this.radius>=canvas.height||this.y-this.radius<=0){
  
     	this.dy=-this.dy;
     }
     this.x+=this.dx;
     this.y+=this.dy;
     
     if(mouse.x-this.x<50 && mouse.x- this.x>-50 
     	&& mouse.y - this.y<50 && mouse.y - this.y > -50){
        if(this.radius< this.maxRadius){
     this.radius+=1;
     }	
     } else if(this.radius>this.minRadius) {
     	this.radius-=1;
     }


     this.draw();

	}
}

var circleArray = [];


function innit(){
    canvas.width = window.innerWidth;
    canvas.height= window.innerHeight;
	circleArray= [];


for (var i = 0;i<800; i++) {

	var radius = (Math.random()*3)+1;
	var x = Math.random()*(innerWidth-radius*2)+radius;
    var y = Math.random() * (innerHeight-radius*2)+radius;
    var dx = (Math.random()-0.5)*1;
    var dy = (Math.random()-0.5)*1;
 

	circleArray.push(new Circle(x,y,dx,dy,radius,));

}
}
innit();
function animate(){
	requestAnimationFrame(animate);
	
	 c.clearRect(0,0,window.innerWidth, window.innerHeight);
	 for (var i = 0;i<circleArray.length; i++) {
	 	circleArray[i].update();
	 }
    

}



animate();
