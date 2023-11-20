/* Stage.js */
/* create a canvas with user device size */
class Stage{

		constructor(){
			 
			 this.w = window.innerWidth;
			 this.h = window.innerHeight;
			 this.canvas = this.setCanvas();
			

			 this.elems = [];

			 this.back = '';
			 this.terr = '';
			 this.terrb = '';
			 this.x = 0;
			 this.ratio = 0 ;
		}
	
		//create new canvas 
		getX()
		{
			let x = this.x * -1;
			x = ( x + 100 ) / this.ratio;
			return Math.floor(x);
		}
		setC(c)
		{
			this.canvas = c;
		}
		setCtx(c)
		{
			this.ctx = c;
		}
		getCtx(){
			return this.ctx;
		}
		getCanvas()
		{
			return this.canvas;
		}
		setCanvas()
		{
			if ( document.getElementById("canvas"))
			{
				var canvas_elem = document.getElementById("stage_canvas");
				canvas_elem.width = this.w;
				canvas_elem.height = this.h;

			}else{

				var canvas_elem = document.createElement("canvas");
				canvas_elem.id = "stage_canvas";
				canvas_elem.width = this.w;
				canvas_elem.height = this.h;
				document.body.append(canvas_elem);
				
			}
			//this.ctx = canvas_elem.getContext('2d');
			//console.log(canvas_elem);
			return canvas_elem;
		}
/*
		setCanvasN()
		{
			let canvas = document.getElementById("stage_canvas");
			//this.ctx = ctx;
			return canvas
		}
*/		addElem(spt)
		{
			this.elems.push(spt);
		}
		addBack(bck)
		{
			this.back = bck;
		}
		addTerrain(ter)
		{
			this.terr = ter;
		}
		
		drawTerrain()
		{
			var sw = this.terr.width;
			var sh = this.terr.height;
			var ratio = sw/sh;
			var h = this.h;
			var w = h * ratio;
			
       		
			ctx.drawImage(this.terr,0,0,sw,sh,this.x,0,w,h);
			//ctx.drawImage(this.terr,this.x,0 );
		}
	
		
		drawBackM()
		{
			var sw = this.back.width;
			var sh = this.back.height;
			var ratio = sw/sh;
			var h = this.h;
			var w = h * ratio;
			
       
			ctx.drawImage(this.back,0,0,sw,sh,this.x,0,w,h);
			//ctx.drawImage(this.back, 0, 0 , canvas_width , canvas_height );	
		}
		//fit image on canvas
		drawBack()
		{
			ctx.drawImage(this.back, 0, 0 , canvas_width , canvas_height );	
		}
		drawTerrb()
		{
			ctxb.drawImage(this.terrb, 0, 0 , canvas_width , canvas_height );	

		}
		draw()
		{
			this.drawBackM();
			//this.drawTerrainB(); // FUCKING LAG 

		}
		drawe()
		{
			for( var i = 0 ; i< this.elems.length ; i++)
			{
				//console.log(this.elems[i]);
				this.elems[i].draw();
			}
		}

		update()
		{
			 this.x -= 2;
			 //ctx.fillStyle = 'rgba(200,200,255,0.2)';
             //ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
             this.draw();
		}

		reset()
		{
			 this.x = 0;
		}
}