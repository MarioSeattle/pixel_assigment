const PIXEL_WIDTH = 1200;
const VALID_COLORS = ['#ffffff', 'red', 'blue', 'green'];

var canvas = {
    selectedColor: "#ffffff",
    drawCanvas: function(){
        let canvasElement = document.getElementById('canvas');
        for (let i = 0; i < PIXEL_WIDTH; i++){
            let pixel = document.createElement("div");
            pixel.className = 'pixel';
            pixel.style.backgroundColor = canvas.selectedColor;
            canvasElement.appendChild(pixel);
        }
        canvasElement.addEventListener('click', function(event) {
            if (event.target.className !== 'pixel') {
                return;
            }
            event.target.style.background = canvas.selectedColor;
        });
    },

    drawPalette: function(){
        let paletteElement = document.getElementById('palette');
        for (let i = 0; i < VALID_COLORS.length; i++){
            let color = document.createElement("div");
            color.className = 'color';
            color.style.backgroundColor = VALID_COLORS[i];
            paletteElement.appendChild(color);
        }
        paletteElement.addEventListener('click', function(event) {
            if (event.target.className !== 'color') {
                return;
            }
            canvas.selectedColor = event.target.style.backgroundColor;
        });
    }
};

canvas.drawCanvas();
canvas.drawPalette();
