/* Events.js */
class Player{

		constructor(){
				this.size = 10;
				this.vpos  = { x : 10 , y : 80 , z : 0 }; // x , y , z
				this.vvel  = { x : 0 , y : 0 , z : 0 };
				this.grav  = - 0.6;	
				this.drag  = 0.02;
				this.url_sprite = 'url';
				this.data_sprite = { 'sprite1' : { x : 10 , y : 20 , width: 20, height: 20 }};
				this.sprite;
				this.anim;
				this.index = 0;
				this.stp = 0;
				this.box = [];
				this.animspeed = 1;
				this.w = 0;
		}

		setAnim(sec)
		{
			this.anim = sec;
		}
		setSprite(spt)
		{
			this.sprite = spt;
			//this.drawBoundingBox()
		}

		setSprite2(spt)
		{
			this.sprite = spt;
			this.width = this.sprite.width;
			
		}
		drawBoundingBox()
		{
			var w = this.sprite.width;
			var h = this.sprite.height;
			this.box = [ w , h ] ;
		}
		setVel(vel)
		{
			this.vvel.y = vel;
			//recalcular pos?
		}

		setPos()
		{
			//this.vpos.x = this.vpos.x + this.vvel.x;
			this.vpos.y = this.vpos.y - this.vvel.y - this.grav;		
		}

		getX()	{		return this.vpos.x;		}
		getY()	{		return Math.round(this.vpos.y); 	}
		getH() { return this.h;}
		getW() { return this.w;}

		reset() {

			this.vpos  = { x : 10 , y : 80 , z : 0 }; // x , y , z
		
		}

		animup(){
			if (this.index < this.anim.length-1)
			{
				this.index++;
				this.setSprite(this.anim[this.index]);
			}
		}
		animdown(){
			if (this.index > 0)
			{
				this.index--;
				this.setSprite(this.anim[this.index]);
			}
		}

		drawp(x,y,pixel)
		{
			ctx.fillStyle = 'rgba('+pixel[0]+','+pixel[1]+','+pixel[2]+',1)';
			ctx.fillRect(x,y,14,14);
		}

		draw()
		{

			var x = this.vpos.x;
			var y = this.vpos.y;
			var s = this.size;
			var sw = this.sprite.width;
			var sh = this.sprite.height;
			var ratio = sw/sh;
			var h = canvas_height * 0.12;
			var w = h * ratio;
			this.w = w;
			this.h = h;
			
            ctx.fillStyle = 'rgba(0,0,0,1)';
			ctx.fillRect(x,y,this.box[0],this.box[1]);
			//ctx.drawImage(this.sprite,x,y);
			ctx.drawImage(this.sprite,0,0,sw,sh,x,y,w,h);
		
		}
		drawRedim(img,dx,dy,w,h)
	    {
	     
	 	  ctx.drawImage(img,0,0,img.width,img.height,dx,dy,w,h);
	    }

		update()
		{
			
			if ( PRESS )
                 { 
                   this.setVel(3); 
                   this.animup();
                 } 
                else 
                 { 
                 	this.setVel(0);
                 	this.animdown();
                 }

			this.setPos();
			this.draw();

		}
}