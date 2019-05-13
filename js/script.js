/*

TP numero 4 Jquery

*/

var TD4  = {
	modules : {}
};

TD4.modules.style = (function(){



	var _start = function(){
		$("#changingText").toggleClass("hop");	
		$("#changingText").toggleClass("hop2");
	}


	var _initialise = function(){
		$("#changingText").click(function(){
			_start();		
		})

	};


	//API publique du module action 

	return {
		start : _start,
		initialise : _initialise
	}
}) ();



TD4.modules.boite = (function(){



	var _addClass = function(i){	
		$("#square").children().eq(i).addClass("boite_orange_survol");
	}

	var _removeClass = function(i){	
		$("#square").children().eq(i).removeClass("boite_orange_survol");
	}



	var _initialise = function(){
		for(let i = 0;i<5;i++){
			$("#square").children().eq(i).mouseover(function(){
				_addClass(i);
			})
		}

		for(let i = 0;i<5;i++){
			$("#square").children().eq(i).click(function(){
				_removeClass(i);
			})
		}

		$("#one").click(function(){
			_addBox();
		})

		$("#two").click(function(){
			_changeBox();
		})
		var fadeOut = false;
		$("#three").click(function(){
			if (fadeOut === false) {
				_fadeOutBox();
				fadeOut = true;
			}else{
				_fadeInBox();
				fadeOut = false;
			}
			
		})

	}

	var _addBox = function(){
		let n = $("#square").children().length+1;
		$("#square").append("<div class='boite_orange'>"+n+"</div>");
		$("#square").children().eq(n-1).mouseover(function(){
			_addClass(n-1);
		});
		$("#square").children().eq(n-1).click(function(){
			_removeClass(n-1);
		});
	}


	var _changeBox = function(){
		for (let i = 0;i<$("#square").children().length;i++) {
			$("#square").children().eq(i).toggleClass("boite_orange_change");
		}
	}


	var _fadeOutBox = function(){
		for (let i = 0;i<$("#square").children().length;i++) {
			$("#square").children().eq(i).fadeOut("slow",function(){

			})
		}
	}

	var _fadeInBox = function(){
		for (let i = 0;i<$("#square").children().length;i++) {
			$("#square").children().eq(i).fadeIn("slow",function(){

			})
		}
	}










	//API publique du module action 

	return {
		initialise : _initialise
	}
}) ();


TD4.modules.slider = (function(){

	var hide = false;
	var _initialise = function(){
		$("#showContent").click(function(){
			if (hide === false) {
				_slide_up();
				hide = true;
			}else{
				_slide_down();
				hide = false;
			}
			
		})
	}

	var _slide_down = function(){
		$(".slidingContent").slideDown("slow",function(){
		})
	}
	

	var _slide_up = function(){
		$(".slidingContent").slideUp("slow",function(){
		})
	}

	var set_text = function(text){
		$(".slidingContent").text(text);
	}

	var _fadeInBox = function(){
		for (let i = 0;i<$("#square").children().length;i++) {
			$("#square").children().eq(i).fadeIn("slow",function(){

			})
		}
	}





	return {
		initialise : _initialise
	}
}) ();


TD4.modules.gestionModule = (function(){

	var _initialise = function(){

		initialise_menu1();
		initialise_menu2();
		initialise_menu3();

	}

	var _slide_down1 = function(){
		$(".menu ul").eq(0).slideDown("slow",function(){
		})
	}
	var _slide_down2 = function(){
		$(".menu ul").eq(1).slideDown("slow",function(){
		})
	}
	var _slide_down3 = function(){
		$(".menu ul").eq(2).slideDown("slow",function(){
		})
	}
	

	var _slide_up1 = function(){
		$(".menu ul").eq(0).slideUp("slow",function(){
		})
	}

	var _slide_up2 = function(){
		$(".menu ul").eq(1).slideUp("slow",function(){
		})
	}

	var _slide_up3 = function(){
		$(".menu ul").eq(2).slideUp("slow",function(){
		})
	}
	var hideMenu1 = false;
	var initialise_menu1 = function(){
		$("#menu").children().eq(0).click(function(){
			if (hideMenu1 === false) {
				_slide_up1();
				hideMenu1 = true;
			}else{
				_slide_down1();
				hideMenu1 = false;
				if(hideMenu2 === false){
					_slide_up2();
					hideMenu2 = true;
				}
				if(hideMenu3 === false){
					_slide_up3();
					hideMenu3 = true;
				}

			}
		})
	}
	var hideMenu2 = false;
	var initialise_menu2 = function(){
		$("#menu").children().eq(1).click(function(){
			if (hideMenu2 === false) {
				_slide_up2();
				hideMenu2 = true;
			}else{
				_slide_down2();
				hideMenu2 = false;
				if(hideMenu1 === false){
					_slide_up1();
					hideMenu1 = true;
				}
				if(hideMenu3 === false){
					_slide_up3();
					hideMenu3 = true;
				}		

			}		
		})
	}
	var hideMenu3 = false;
	var initialise_menu3 = function(){
		$("#menu").children().eq(2).click(function(){
			if (hideMenu3 === false) {
				_slide_up3();
				hideMenu3 = true;
			}else{
				_slide_down3();
				hideMenu3 = false;
				if(hideMenu1 === false){
					_slide_up1();
					hideMenu1 = true;
				}
				if(hideMenu2 === false){
					_slide_up2();
					hideMenu2 = true;
				}		

			}
		})
	}





	return {
		initialise : _initialise
	}
}) ();


TD4.modules.modal = (function(){
	var _initialise = function(){
		$("#four").click(function(){
			affiche_photo("#modal1");
			
		})

		$(".modal_close").click(function(){
			supprime_photo("#modal1");
		})


		var affiche_photo = function(id){
			$(id).fadeIn("slow");
		}


		var supprime_photo = function(id){
			$(id).fadeOut("slow");
			
		}

	}



return {
	initialise : _initialise
}
}) ();

function on_load(){

	TD4.modules.style.initialise();
	TD4.modules.boite.initialise();
	TD4.modules.slider.initialise();
	TD4.modules.gestionModule.initialise();
	TD4.modules.modal.initialise();
}

window.onload = on_load();