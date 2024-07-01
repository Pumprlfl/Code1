const canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;

ctx.rotate(20 * Math.PI/180);
ctx.fillRect(10,10,100,100);