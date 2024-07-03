let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
let crc2: CanvasRenderingContext2D = canvas.getContext("2d")!;

interface cloud {
    xPos: number
    yPos: number
}

let c: cloud = {xPos: 100, yPos: 100}
function drawcloud(cloud: cloud) {
    crc2.beginPath();
    crc2.ellipse(20 + cloud.xPos, 30 + cloud.yPos, 40, 40, Math.PI, Math.PI*180, Math.PI *90);
    crc2.ellipse(10 + cloud.xPos, 0 + cloud.yPos, 40, 40, Math.PI, Math.PI*180, Math.PI *90);
    crc2.ellipse(30 + cloud.xPos, 10 + cloud.yPos, 40, 40, Math.PI, Math.PI*180, Math.PI *90);
    crc2.ellipse(40 + cloud.xPos, 30 + cloud.yPos, 40, 40, Math.PI, Math.PI*180, Math.PI *90);
    crc2.ellipse(50 + cloud.xPos, 30 + cloud.yPos, 40, 40, Math.PI, Math.PI*180, Math.PI *90);
    crc2.fillStyle = "white";
    crc2.fill();
    crc2.closePath()
}

let cloudDef: cloud[] = []
createClouds()
function drawclouds(clouds: cloud[]): void{
    clouds.forEach(cloud => {
        drawcloud(cloud)
    });
}

function createClouds() {
    for (let i: number = 0; i < 4; i = i +1) {
        let cloud: cloud = {xPos: Math.random() * canvas.width, yPos: Math.random() * 150};
        cloudDef.push(cloud)
    }
}
//sky
crc2.fillStyle= "cyan";
crc2.fillRect(0, 0, 600, 350);

//smilingHQ
crc2.beginPath();
crc2.ellipse(300, 220, 150, 150, Math.PI, Math.PI *180, Math.PI*90);
crc2.fillStyle="yellow";
crc2.fill()
crc2.closePath();

//lefteye
crc2.beginPath();
crc2.ellipse(220, 150, 30, 30, Math.PI, Math.PI*180, Math.PI*90);
crc2.fillStyle="white";
crc2.fill()
crc2.closePath();

//lefteyeblack
crc2.beginPath();
crc2.ellipse(210, 150, 7, 7, Math.PI, Math.PI*180, Math.PI*90);
crc2.fillStyle="black";
crc2.fill()
crc2.closePath();

//righteye
crc2.beginPath();
crc2.ellipse(380, 150, 30, 30, Math.PI, Math.PI*180, Math.PI*90);
crc2.fillStyle="white";
crc2.fill()
crc2.closePath();

//righteyeblack
crc2.beginPath();
crc2.ellipse(390, 150, 7, 7, Math.PI, Math.PI*180, Math.PI*90);
crc2.fillStyle="black";
crc2.fill()
crc2.closePath();

//mouth
crc2.beginPath();
crc2.arc(300, 220, 120, 0, Math.PI, false);
crc2.closePath;
crc2.fillStyle="black";
crc2.fill();


//Road
crc2.fillStyle = "gray";
crc2.fillRect(0, 400, 600, 200);

//sidewalk
crc2.fillStyle= "dimgray";
crc2.fillRect(0, 350, 600, 50);


let i: number = 0
let j: number = 600

let iData: ImageData = crc2.getImageData(0, 0, canvas.width, 300)

const speed: number = 0.5;
function updatecloud(){
    for(let i: number = 0; i < cloudDef.length; i++){
        cloudDef[i].xPos += speed;

    }
}

function animationFrame() {
    crc2.clearRect(0, 0, canvas.width, 300);
    crc2.putImageData(iData, 0, 0);
    updatecloud();
    drawclouds(cloudDef);
    requestAnimationFrame(animationFrame)
}
requestAnimationFrame(animationFrame)