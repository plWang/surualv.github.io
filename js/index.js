var minWebWidth = 769;

var UA = navigator.userAgent,
	IsAndroid = /Android|HTC/i.test(UA) || !!(navigator["platform"] + "").match(/Linux/i),
	IsIOS = !IsAndroid && /iPad|iPod|iPhone/i.test(UA);

var isMobile = determineDevice();

/**
	* determine whether it is a mobile device
	*/
function determineDevice() {
	var deviceWidth = (IsAndroid || IsIOS) ? $('body').width() : window.innerWidth;
	return IsAndroid || IsIOS || deviceWidth < minWebWidth;
}

$(document).ready(function () {
	var floatAlgo = $('#float-algo'), floatJs = $('#float-js'), 
	floatPt = $('#floatPt');
	$('.gallary').on('touchstart', function () {
		if (isMobile) {
			if (floatAlgo.hasClass('shown')) {
				floatAlgo.removeClass('shown');
				floatJs.removeClass('shown');
				$('#float-pt').removeClass('shown');
			} else {
				$('#float-algo').addClass('shown');
				$('#float-js').addClass('shown');
				$('#float-pt').addClass('shown');
			}
		}
	});
});