// jQuery

//Cookie banner closing
$( ".cookies-close" ).click(function() {
  $( ".cookies-banner-container" ).fadeOut( 400, function() {
  });
});

// Tooltip
$(document).ready(function() {
// Tooltip only Text
$('.masterTooltip').hover(function(){
				// Hover over code
				var title = $(this).attr('title');
				$(this).data('tipText', title).removeAttr('title');
				$('<p class="tooltip"></p>')
				.text(title)
				.appendTo('body')
				.fadeIn('slow');
}, function() {
				// Hover out code
				$(this).attr('title', $(this).data('tipText'));
				$('.tooltip').remove();
}).mousemove(function(e) {
				var mousex = e.pageX + 20; //Get X coordinates
				var mousey = e.pageY + 10; //Get Y coordinates
				$('.tooltip')
				.css({ top: mousey, left: mousex })
});
});

//JavaScript

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML =
  h + " : " + m + " : " + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};
  return i;
}

// Hire button
$(".cta").mouseenter(function(){
  $(this).addClass("active").delay(300).queue(function(next){
    $(this).removeClass("active");
    next();
  });
});

// Open Tab
function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}

// Skills bar animation
$(window).scroll(function(){
  var wh = $(window).height()-50;
    if($(window).scrollTop() > $('#html').offset().top-wh){
    $('#html').addClass('html');
		$('#sass').addClass('sass');
		$('#javascript').addClass('javascript');
		$('#ror').addClass('ror');
		$('#photoshop').addClass('photoshop');
		$('#illustrator').addClass('illustrator');
  }
});

// Responsive
	if ($(window).width() < 1165) {
		 document.getElementById("overlay").style.display = "block";
	}
	else {
		 document.getElementById("overlay").style.display = "none";
	}

$(window).resize(function() {
	if ($(window).width() < 1165) {
		 document.getElementById("overlay").style.display = "block";
	}
	else {
		 document.getElementById("overlay").style.display = "none";
	}
});