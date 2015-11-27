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
	$('.gallary').on('touch', function () {
		if (isMobile) {
			if ($('#float-algo').hasClass('shown')) {
				$('#float-algo').removeClass('shown');
				$('#float-js').removeClass('shown');
				$('#float-pt').removeClass('shown');
			} else {
				$('#float-algo').addClass('shown');
				$('#float-js').addClass('shown');
				$('#float-pt').addClass('shown');
			}
		}
	});
});