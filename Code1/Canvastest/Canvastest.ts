const canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;
const gradient=ctx.createLinearGradient(20, 0, 220, 0);

gradient.addColorStop(0, "green");
gradient.addColorStop(0.5, "cyan");
gradient.addColorStop(1, "green");

ctx.rect(10, 10, 100, 100);
ctx.fillStyle = "red";
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.stroke();

let path: Path2D=new Path2D();
ctx.stroke(path);
ctx.beginPath();
ctx.ellipse(300, 300, 80, 120, Math.PI/4, 0, 2*Math.PI);
ctx.stroke();
ctx.fillStyle=gradient;