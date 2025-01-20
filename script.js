const canvas = document.getElementById('canvas1');
const cxt = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

/*Symbol class:create and draw individual symbol objects 
that make up the rain effect
*/
class Symbol {
    constructor(){

    }
    draw(){

    }
}
/*Effect class:main wrapper for entire rain effect,place all
functionality to create, update, and draw all symbols
*/
class Effect {
    constructor(canvasWidth, canvasHeight){
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.fontSize = 25;
        this.columns = this.canvasHeight/this.fontSize;
        this.symbols = [];

    }
    #initialize(){

    }
}
function animate(){

}