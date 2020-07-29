(function($) {
	'use strict';

	//Navigation

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
