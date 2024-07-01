"use strict";
const canvas = document.getElementsByTagName("canvas")[0];
const ctx = canvas.getContext("2d");
ctx.rotate(20 * Math.PI / 180);
ctx.fillRect(10, 10, 100, 100);
