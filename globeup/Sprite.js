class Sprite
{
	//sprite to redimensionar in canvas x , y , w , h . float percentage
	constructor(img,x,y,w,h){

		this.img = img;
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.sw = img.width;
		this.sh = img.height;
	
		//redimensionar segun el ancho
		this.pr = img.height/img.width;
		this.dx = Math.floor(canvas_width * this.x);
		this.dy = Math.floor(canvas_height * this.y);
		this.dw = Math.floor(canvas_width * this.w);
		this.dh =  Math.floor(this.dw*this.pr);
	}

	draw()
	{
		console.log(this.img,0,0,this.sw,this.sh,this.dx,this.dy,this.dw,this.dh);
		ctx.drawImage(this.img,0,0,this.sw,this.sh,this.dx,this.dy,this.dw,this.dh);
	}
}