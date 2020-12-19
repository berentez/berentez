'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};



let rate: number = 25;



function drawStroke( x: number, y: number){
    for (let i: number = 0; i < canvas.width / rate ; i ++){

        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();

        x += rate;
        y += rate;

}

}

function drawStroke2( x: number, y: number){
    for (let i: number = 0; i < rate - 1; i ++){

        ctx.beginPath();
        ctx.moveTo(0, x);
        ctx.lineTo(y, canvas.height);
        ctx.stroke();

        x += rate;
        y += rate;

}

    
}


ctx.strokeStyle = 'purple';
drawStroke( canvas.width / 20, canvas.height / 20 +10);

ctx.strokeStyle = 'green';
drawStroke2( canvas.width / 20, canvas.height / 20 +10);

// Körítő fehér négyzet

ctx.strokeStyle = 'white';
ctx.lineWidth = rate / 2;
ctx.beginPath();
ctx.strokeRect(0, 0, canvas.width, canvas.height);
ctx.stroke()