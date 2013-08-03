var openN = window.localStorage.panelOpen;
// if(openN=='true'){
// 	$('.setup_panel').animate({'left' : '0px'},600,'easeOutExpo');
// } else { }

$('.setup_ico').fadeIn(1500); //fading in setup icon 
//fading in setup icon 
// in case you don't want to have this panel on just delete the line where this js file connected in index.html
function togglePanel(offsetMe , boool){
	//window.localStorage.panelOpen = boool;
	$('.setup_panel').animate({'left' : offsetMe + 'px'},500,'easeOutExpo');
	//console.log(window.localStorage.panelOpen);
}

$('.setup_ico').toggle(function(){
	togglePanel('0' , 'true');
},function(){
	togglePanel('-200' , 'false');
})
// $('.setup_ico').toggle(function(){
// 	if(openN=='true'){
// 		togglePanel('-200' , 'false');
// 	} else {
// 		togglePanel('0' , 'true');
// 	}
// },function(){
// 	if(openN=='false'){
// 		togglePanel('-200' , 'false');
// 	} else {
// 		togglePanel('0' , 'true');
// 	}
// });

var fadeOutTime = 300; //fade out when switching themes time

// theme change function;
function themeSwitch(bg_color , arrow_color , circ_bg_color , bg_property , digits_color , header_text_color , link_text_color){
	$('.fade_curtain').fadeIn('fast');

	setTimeout(function(){
		$('body').removeClass();
		$('body').css('background-color',bg_color);
		$('.actual_arrow').css('background-color',arrow_color);
		$('.circ_bg').css('background-color',circ_bg_color);
		$('body').addClass(bg_property);

		$('.digits').css('color',digits_color);
		$('.digits span').css('color',digits_color);
		$('.digits p').css('color',digits_color);

		$('header').css('color',header_text_color);
		$('.tweets h3').css('color',header_text_color);
		$('#twitter_update_list').css('color',header_text_color);
		$('#twitter_update_list a').css('color',link_text_color);

		$('.fade_curtain').fadeOut('slower');
	},fadeOutTime);
}

$('.theme1').click(function(){
	themeSwitch('yellow','yellow','rgba(0,0,0,0.1)' , 'background4' , 'white', 'white');
});

$('.theme2').click(function(){
	themeSwitch('yellow','red','rgba(0,0,0,0.7)','background0','white','white','');
})

$('.theme3').click(function(){
	themeSwitch('#2E2D33','white','rgba(251, 57, 73, 0.8)','background2','white' ,'white')
})

$('.theme4').click(function(){
	themeSwitch('#192A34','#FFB737','rgba(255, 255, 255, 0.2)',		''		, '#8CF0FF' , 'white')
})

$('.theme5').click(function(){
	themeSwitch('#192A34','#18AEDF','rgba(0, 0, 0, 0.6)' , 'background8' , 'white' , 'black' , '#18AEDF')
})

$('.theme6').click(function(){
	themeSwitch('#192A34','#18AEDF','rgba(0, 0, 0, 0.6)' , 'background9', 'white' , 'black')
})

$('.theme7').click(function(){
	themeSwitch('#192A34','#18AEDF','rgba(0, 0, 0, 0.6)' , 'background1', 'white' , 'black')
})

$('.theme8').click(function(){
	themeSwitch('#192A34','#18AEDF','rgba(0, 0, 0, 0.6)' , 'background3', 'white' , 'black')
})

$('.theme9').click(function(){
	themeSwitch('#192A34','#18AEDF','rgba(0, 0, 0, 0.6)' , 'background7', 'white' , 'white')
})

$('.reset').click(function(){
	var color = $('body').css('background-color');

		if (color == 'rgb(255, 255, 255)' || color == 'white') // =='white' <- IE hack
		    {
		    	console.log('no need to reset the theme coz its default now')
		    
			} else {
				themeSwitch('white','yellow','rgba(0,0,0,0.5)', '' , 'white' , 'black');
			}
})
