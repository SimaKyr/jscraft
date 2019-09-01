    Xm = 0;
    Ym = 0;
    mouseX = 0;
    mouseY = 0;
    down = window.innerHeight;
    right = window.innerWidth;
    urlImage = 0;
    mapL = 255;
    map = [2,1];
    xPlayer = 0;
    yPlayer = 0;
    a=20024;while(a!=0){a--;map[a]=Math.floor(Math.random()*10);}
    bP = 32+16;
connectCanvas();
saveC();
drawGame();

window.onresize = function() {
document.getElementById('canvas').height = window.innerHeight;
document.getElementById('canvas').width = window.innerWidth;
down = window.innerHeight;
right = window.innerWidth;
e.imageSmoothingEnabled = false;
draw();}

function mouse(){
mouseX = event.pageX;
mouseY = event.pageY;
drawGame();
}

document.onkeydown = function(e) {
//Debug 
    //alert(e.key);
    if(e.key == 'ArrowUp'){yPlayer--;} 
    if(e.key == 'ArrowDown'){yPlayer++;}
    if(e.key == 'ArrowLeft'){xPlayer--;}
    if(e.key == 'ArrowRight'){xPlayer++;}
}
document.onkeypress = function(e) {
 drawGame();   
}

function clickMouse(){
    Xm = event.pageX;
    Ym = event.pageY;
}
function draw(){
drawGame();
}
//the custom drawing

function connectCanvas(){
canvas = document.getElementById('canvas');
document.getElementById('canvas').height = window.innerHeight;
document.getElementById('canvas').width = window.innerWidth;
if (canvas.getContext) {
e = canvas.getContext('2d');
scaleX = 1;
scaleY = 1;
e.imageSmoothingEnabled = false;
}}

function setColor(r,g,b){
    e.fillStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
}

function setColorA(r,g,b,a){
    e.fillStyle = 'rgb(' + r + ',' + g + ','+  b + a + ')';
}

function drawRect(x,y,width,height){
    e.fillRect(x, y, width, height); 
}

function setFont(e){
    e.font = font;
}

function drawText(x,y,text){
    e.fillText(text, x, y);
}

function setRotate(degrees){
    e.rotate((Math.PI / 180) * degrees);
}

function drawImage(x,y,url,h,w){
    if(urlImage = url){
    var img = new Image();
    img.src = url;
    //img.onload = function() {
    }
    urlImage = url;
    if(h!=undefined){
    e.drawImage(img, x, y,h,w);
    }
    else{
     e.drawImage(img, x, y);   
    }
    //}
}


function typePen(type){
if(0==type){e.lineCap = 'butt';}
if(1==type){e.lineCap = 'round';}
if(2==type){e.lineCap = 'square';}
}
function onPen(){e.beginPath();}
function offPen(){e.closePath();e.stroke();}
function movePen(x,y){e.moveTo(x,y);}
function drawPen(x,y){e.lineTo(x,y);}
function sizePen(size){e.lineWidth = size;}
function fillPen(){e.fill();}

function drawCircle(x,y,size,fill){e.arc(100, 100, 142, 0, Math.PI * 2, true);}
function scale(x,y){e.setTransform(x, 0, 0, y, 0, 0);scaleX=x;scaleY=y;}
function fillScreen(r,g,b){setColor(r,g,b);drawRect(0,0,window.innerWidth,window.innerHeight);}

function saveC(){e.save();};
function loadC(){e.restore();};
//end custom drawing
//help math functions for draw

function atX(value){
return window.innerWidth / 100 * value / scaleX;
}
function atY(value){
return window.innerHeight / 100 * value / scaleY;
}

//end

function drawBlock(x,y,id){
    if(id != undefined){
drawImage(x,y,'textures/' + id +'.png', bP, bP);
}
}

function drawGame(){
fillScreen(70,70,180);
bP = Math.floor(atX(4)+2);
drawBlocks(mouseX-mouseX*5,mouseY-mouseY*5);
//drawBlocks(xPlayer,yPlayer);
console.log('load')
drawImage(mouseX+10,mouseY+30,'textures/panel.png', Math.floor(9*atX(3)), Math.floor(1*atX(3)));
}

function drawBlocks(xP,yP){
x=Math.floor(xP/bP);y=Math.floor(yP/bP);
while(y!=Math.floor(down/bP)+1){
    x=Math.floor(xP/bP);
while(x!=Math.floor(right/bP)+1){
    if(map[y*mapL+x] != 0){
drawBlock(bP*x-xP,bP*y-yP, map[y*mapL+x]);
    }
x++;
}
y++;
}
}
