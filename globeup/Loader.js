//var event = new Event('ANIMATION_COMPLETED');
function aload(urls)
{
	var promesas = [];

    var imagenes = [];


        for ( var i=0 ; i < urls.length ; i++)
         { 
            const promise = new Promise (( resolve , reject ) => 
            {
              var img = new Image();
              img.src = urls[i];
              img.onload = function(){

                resolve(img);

              }
            });
           // console.log(promise);
            promesas.push(promise);
          }

          //console.log(promesas);

         var allpromises =  Promise.all(promesas).then(values => { 
           
         
           return values;


          }, reason => {
            console.log(reason)
          });
    
	return allpromises;  

}

//return array , but empty till promises fullfilled
function load(urls)
{
	var promesas = [];

    var imagenes = [];


        for ( var i=0 ; i < urls.length ; i++)
         { 
            const promise = new Promise (( resolve , reject ) => 
            {
              var img = new Image();
              img.src = urls[i];
              img.onload = function(){

                resolve(img);

              }
            });
           // console.log(promise);
            promesas.push(promise);
          }

          //console.log(promesas);

          Promise.all(promesas).then(values => { 
           
            imagenes.push(values);


          }, reason => {
            console.log(reason)
          });
    
	return imagenes;  

}



class Loader{

	constructor(urls){


		this.LOADED = new Event('LOADED');
		
		this.promesas = [];
		this.imagenes = [];
		this.urls = this.setUrls(urls);
		this.ERRORS = [];
	}

	setUrls(urls)
	{
		
		 for (var i = 0 ; i < urls.length ; i++)
		 {
            const promise = new Promise (( resolve , reject ) => 
            {
              var img = new Image();
              img.src = urls[i];
              img.onload = function(){

                resolve(img);

              }
              img.onerror = function(e){

                reject(e);
              }

            });
            console.log(promise);
            this.promesas.push(promise);
         }
		 
		 this.runPromises();
	}

	runPromises()
	{
		  Promise.all(this.promesas).then(

            values => { 
            
               //console.log("VAL",values);

              this.imagenes = values;

               dispatchEvent(this.LOADED);

          }, reason => {

          	//ERRORES?
            console.log("RES",reason);


          });

	}

	onload()
	{

	}

}