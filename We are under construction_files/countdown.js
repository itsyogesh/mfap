var today = new Date();

var endDate = new Date("08/10/2013 01:10:09"); //set the date you want timer to end

var diffMs = (endDate - today); // milliseconds between now & endDate

var diffDays = Math.round(diffMs / 86400000); // days
var diffHrs = Math.round((diffMs % 86400000) / 3600000); // hours
var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
var diffSecs = Math.floor((((diffMs % 86400000) % 3600000) % 60000) / 1000 );


var wsCount    = diffSecs; //seconds
var wsCountM   = diffMins; //minutes
var wsCountH   = diffHrs; //hours
//var wsCountD   = 10; //days
var wsCountD = diffDays;
var wsCountPos = 0-wsCount*6 ; //position for arrow to start
//console.log('wsCountPos = '+wsCountPos+' deg');
var n = wsCountPos;

var temp = 'easeOutBounce';
//var easingStyle = $.easing.temp;

var easingStyle = '.easing.';
easingStyle +=temp;

console.log(easingStyle);

$('.days').text(wsCountD)
$('.hours').text(wsCountH)
$('.min').text(wsCountM)


//set arrows positions before script run

//days
var d = -wsCountD*6+6;
$('.arrow_D').rotate({ angle: d-1.0138, animateTo: d, easing: $.easing.easeInOutExpo  });

//hours
var h = -wsCountH*6;
$('.arrow_H').rotate({ angle: h-6, animateTo: h, easing: $.easing.easeInOutExpo });

//minutes
var m = -wsCountM*6;

$('.arrow_M').rotate({ angle: m-6, animateTo: m, easing: $.easing.easeInOutExpo });

// only after we've set positions of all the cursors let's fade'em in
setTimeout(function(){
	$('.actual_arrow').fadeIn(1000);
},500);

function rotateDay(){
	

	d = d+1.0138;
	//var angle = 0; setInterval(function() { angle+=6; $('.arrow').rotate(angle); }, 500 , $.easing.easeOutBounce);
	// here we set the delay to the cursor so it moves synchronously with digit switching
	setTimeout(function(){
		$('.arrow_D').fadeIn('slower'); // second counting arrow revealing
		$('.arrow_D').rotate({ angle: d-1.0138, animateTo: d, });
	},10)
}

function rotateHour(){
	

	h = h+6;
	//var angle = 0; setInterval(function() { angle+=6; $('.arrow').rotate(angle); }, 500 , $.easing.easeOutBounce);
	// here we set the delay to the cursor so it moves synchronously with digit switching
	setTimeout(function(){
		$('.arrow_H').fadeIn('slower'); // second counting arrow revealing
		$('.arrow_H').rotate({ angle: h-6, animateTo: h, easing: $.easing.easeInOutExpo });
	},100)
}

function rotateMin(){
	
	m = m+6;
	//var angle = 0; setInterval(function() { angle+=6; $('.arrow').rotate(angle); }, 500 , $.easing.easeOutBounce);
	// here we set the delay to the cursor so it moves synchronously with digit switching
	setTimeout(function(){
		$('.arrow_M').fadeIn('slower'); // second counting arrow revealing
		$('.arrow_M').rotate({ angle: m-6, animateTo: m, easing: $.easing.easeInOutExpo });
	},250)
}

function rotateSec(){
	
	n = n+6;
	//var angle = 0; setInterval(function() { angle+=6; $('.arrow').rotate(angle); }, 500 , $.easing.easeOutBounce);
	// here we set the delay to the cursor so it moves synchronously with digit switching
	setTimeout(function(){
		$('.arrow_S').fadeIn('slower'); // second counting arrow revealing
		$('.arrow_S').rotate({ angle: n-6, animateTo: n, easing: $.easing.easeInOutExpo });
	},400)
	
	//$('.arrow').css('-webkit-transform' , 'rotate(' + n + 'deg)');

	//console.log('wsCountPos = ' + n + ' deg');
}


// days countdown
function days(){
	if((wsCountD - 1) >= 0){

		wsCountD--;
		wsCountH=24;

		$('.days').text(wsCountD);
		rotateDay();
		hours();
	} else {

		$('div p').text('the timer has finished counting for you' );

	}
}

// hours countdown
function hours(){
	if((wsCountH - 1) >= 0){

		wsCountH--;
		wsCountM=60;

		$('.hours').text(wsCountH);
		rotateHour();
		minutes();
	} else {

		console.log('call days');
		days();

	}
}
//minutes counting
function minutes(){
	if((wsCountM - 1) >= 0){

		wsCountM--;
		wsCount=60;

		$('.min').text(wsCountM + '');
		rotateMin();
		tick();
	} else {
		console.log('go to hours');
		hours();
	}
}

//seconds counting
function tick(){

	if( (wsCount - 1) >= 0 ){		
		$('.sec').text(wsCount);
		//console.log('wow');
		wsCount--;  //deducting seconds
		rotateSec(); //call arrow rotate function
		
		setTimeout('tick()',1000);
	} else {
		//console.log('showtime');
		minutes();
	}

	
}

tick();
