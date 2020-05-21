const canvas  = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let inputs = document.getElementsByTagName('input');

let cWidth;
let cHeight;
let gWidth;
let gHeight;

document.getElementById('create').addEventListener('click', function(){
	validate();

	cWidth = +document.getElementById('cWidth').value  || 500;
    cHeight = +document.getElementById('cHeight').value  || 500;
    gWidth = +document.getElementById('gWidth').value  || 50;
    gHeight = +document.getElementById('gHeight').value  || 50;

    setCanvas();    

    start();
})

function validate(){	
    for(let i = 0; i < inputs.length - 1; i++){    
    	if(+inputs[i].value > +inputs[i].max){
    		inputs[i].value = inputs[i].max;
    	}
    }
}

function setCanvas(){
	canvas.width = cWidth;
    canvas.height = cHeight;
    ctx.strokeStyle = 'red'
    ctx.lineWidth = 5;
}



function createLine(x1,y1,x2,y2){	
	ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);    
    ctx.stroke();
}

function start(){
	for(let x = ctx.lineWidth / 2; x <= cWidth; x += gWidth){
	    createLine(x , 0, x, cHeight);	
    }

    for(let y = ctx.lineWidth / 2; y <= cHeight; y += gHeight){
    	createLine(0 , y, cWidth, y);	
    }
}