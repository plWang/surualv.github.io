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
  $('.nav-btn').on('click', function () {
    $('.nav-bar').toggleClass('expand'); 
    if ($('.nav-bar').hasClass('expand')) {
      setTimeout(function () {
        $('.nav-bar').find('li').toggleClass('shown');
      }, 200);
    } else $('.nav-bar').find('li').toggleClass('shown');
  });
});
