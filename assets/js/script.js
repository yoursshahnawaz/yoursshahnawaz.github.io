(function($) {
	'use strict';

	var app = (function() {
		var body = undefined;
		var menu = undefined;
		var menuItems = undefined;
		var init = function init() {
			body = document.querySelector('body');
			menu = document.querySelector('.menu-icon');
			menuItems = document.querySelectorAll('.nav__list-item');
			applyListeners();
		};
		var applyListeners = function applyListeners() {
			menu.addEventListener('click', function() {
				return toggleClass(body, 'nav-active');
			});
		};
		var toggleClass = function toggleClass(element, stringClass) {
			if (element.classList.contains(stringClass)) element.classList.remove(stringClass);
			else element.classList.add(stringClass);
		};
		init();
	})();
})(jQuery);

$( '#topheader .nav__list a' ).on( 'click', function () {
	$( '#topheader .nav__list' ).find( 'li.active-nav' ).removeClass( 'active-nav' );
	$( this ).parent( 'li' ).addClass( 'active-nav' );
});

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
	if (e.target.checked) {
		document.documentElement.setAttribute('data-theme', 'light');
		const emText = (document.getElementById('emText').innerHTML = 'Dark Mode');
	} else {
		document.documentElement.setAttribute('data-theme', 'dark');
		const emText = (document.getElementById('emText').innerHTML = 'Light Mode');
	}
}

toggleSwitch.addEventListener('change', switchTheme, false);

const buttonMeet = document.querySelector(".meet");
const attendance = document.querySelector(".google-meet");
const closeMeet = document.querySelector(".close-meet");
const videoMeet = attendance.querySelector("video");


buttonMeet.addEventListener('click', () => {
	attendance.style.visibility = "visible";
	attendance.style.opacity = "1";
});
closeMeet.addEventListener('click', () => {
	attendance.style.visibility = "hidden";
	attendance.style.opacity = "0";
	videoMeet.pause();
	videoMeet.currentTime = 0;
});

const buttonCovid = document.querySelector(".covid");
const covid = document.querySelector(".covid-tracker");
const closeCovid = document.querySelector(".close-covid");
const videoCovid = covid.querySelector("video");

buttonCovid.addEventListener('click', () => {
	covid.style.visibility = "visible";
	covid.style.opacity = "1";
});

closeCovid.addEventListener('click', () => {
	covid.style.visibility = "hidden";
	covid.style.opacity = "0";
	videoCovid.pause();
	videoCovid.currentTime = 0;
});