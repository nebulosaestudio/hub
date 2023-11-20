/* Events.js */
/* load events */

class Events{

		constructor(){
			 this.events = [];// if setEvents this.events = 'undefined';
			 //this.PRESS = false;
			 this.init = this.setEvents();
		}

		setEvents()
		{
			if (window.PointerEvent) {

				this.setPointerEvents();
				
			}else{
			
				this.setTouchEvents();
			}	
		}
		/*
		onpress()
		{
			if (this.PRESS) { return true; }
		}
*/
		setPointerEvents(elem = ['stage.canvas'])
		{
			//stage.canvas.addEventListener('pointerdown',this.handlePointerDown,true);
			window.addEventListener('pointerdown', this.handleGestureStart, true);
  			window.addEventListener('pointermove', this.handleGestureMove, true);
  			window.addEventListener('pointerup', this.handleGestureEnd, true);
 			window.addEventListener('pointercancel', this.handleGestureEnd, true);
		}
		setTouchEvents()
		{
			window.addEventListener('touchstart',this.handleTouchStart,true);//handleTouchStart
			window.addEventListener("touchend", this.handleTouchEnd, false);
  			window.addEventListener("touchcancel", this.handleGestureEnd, false);
		}
		handleGestureStart(evt)//NO COGE EL THIS aki( por el addeventlistener de window , supongo)
		{
			evt.preventDefault();
			PRESS = true;
			
		
		}
		handleGestureEnd(evt)
		{
			evt.preventDefault();
			PRESS = false;
		}

		handleTouchStart(evt)//NO COGE EL THIS aki( por el addeventlistener de window , supongo)
		{
			evt.preventDefault();
			PRESS = true;
			
		
		}
		handleTouchEnd(evt)
		{
			evt.preventDefault();
			PRESS = false;
		}
		handleGestureMove(evt)
		{

		}

		handleGestureUp(evt)
		{

		}

		handleGestureCancel(evt)
		{

		}

}

			//console.log(this.PRESS);
			/*
			evt.height
			evt.width
			evt.clientX
			evt.clientY
			evt.presure
			*/
			//evento = new event(evt);
			//eventos.pus(evento);
