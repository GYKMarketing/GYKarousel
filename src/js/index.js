import '../scss/gykarousel.scss';

/** Global Settings **/
var _globals = {
	'animSpeed' : 1000,
	'autoPlay': true,
	'autoPlayInterval': null,
	'controlLock': false,
	'delay': 5000,
	'elements': {},
	'container': 'gykarousel',
	'wrapper': '.gykarousel__container',
	'slide': '.gykarousel__slide',
	'selected': '.gykarousel__slide--selected'
};

var _utils = {
	extend: function(out) {
		out = out || {};

		for (var i = 1; i < arguments.length; i++) {
			var obj = arguments[i];

			if (!obj)
				continue;

			for (var key in obj) {
				if (obj.hasOwnProperty(key)) {
					if (typeof obj[key] === 'object')
						out[key] = this.extend(out[key], obj[key]);
					else
						out[key] = obj[key];
				}
			}
		}

		console.log('out:', out);

		return out;
	}
};


/** Container Functions **/
var _container = function () {
	_initHeight();

	window.addEventListener('resize', function (e) {
		_initHeight();
	});

	_globals.elements.container = document.querySelector(_globals.container);
	_globals.elements.wrapper = _globals.elements.container.querySelector(_globals.wrapper);

	_globals.elements.wrapper.style.transform = 'translateX(0%)';
};

var _initHeight = function () {
	setTimeout(function() {
		_globals.slideHeight = _globals.elements.slides[0].getBoundingClientRect().height;

		_globals.elements.container.style.height = _globals.slideHeight + 'px';
		_globals.elements.wrapper.style.height = _globals.slideHeight + 'px';
	}, 250);
};


/** Control Functions **/
var _handlePrevious = function (e) {
	e.preventDefault();

	if (_globals.controlLock === false) {
		clearInterval(_globals.autoPlayInterval);

		_showPrevious();
	}
};

var _handleNext = function (e) {
	e.preventDefault();
	
	if (_globals.controlLock === false) {
		clearInterval(_globals.autoPlayInterval);

		_showNext();
	}
};

var _setControlLock = function () {
	_globals.controlLock = true;

	setTimeout(function () {
		_globals.controlLock = false;
	}, _globals.animSpeed);
};

var _showPrevious = function () {
	var _wrap = false;
	var _prevIndex = _globals.selectedIndex - 1;
	var _lastIndex = _globals.slideCount - 1;

	if (_globals.selectedIndex <= 0) {
		_wrap = true;
		_prevIndex = _lastIndex;
		_globals.elements.slides[_lastIndex].style.left = '-100%';
	}

	_setControlLock();

	_globals.elements.wrapper.style.transitionProperty = 'transform';
	_globals.elements.wrapper.style.transitionDuration = _globals.animSpeed + 'ms';


	if (_wrap) {
		_globals.elements.wrapper.style.transform = 'translateX(100%)';

		setTimeout(function () {
			_globals.elements.wrapper.style.transitionProperty = 'none';
			_globals.elements.wrapper.style.transform = 'translateX(-' + ((_lastIndex) * 100) +'%)';
			_globals.elements.slides[_lastIndex].style.left = ((_lastIndex) * 100) +'%';
			_globals.selectedIndex = _lastIndex;
		}, _globals.animSpeed);
	} else {
		_globals.elements.wrapper.style.transform = 'translateX(-' + (_prevIndex * 100) + '%)';
		_globals.selectedIndex = _prevIndex;
	}
};

var _showNext = function () {
	var _wrap = false;
	var _nextIndex = _globals.selectedIndex + 1;

	if (_nextIndex === _globals.slideCount) {
		_wrap = true;
		_globals.selectedIndex = 0;
		_globals.elements.slides[0].style.left = (_nextIndex * 100) + '%';
	}

	_setControlLock();

	_globals.elements.wrapper.style.transitionProperty = 'transform';
	_globals.elements.wrapper.style.transitionDuration = _globals.animSpeed + 'ms';
	_globals.elements.wrapper.style.transform = 'translateX(-' + (_nextIndex * 100) + '%)';

	if (_wrap) {
		setTimeout(function () {
			_globals.elements.wrapper.style.transitionProperty = 'none';
			_globals.elements.wrapper.style.transform = 'translateX(0%)';
			_globals.elements.slides[0].style.left = '0%';
		}, _globals.animSpeed);
		//*/
	} else {
		_globals.selectedIndex = _nextIndex;
	}
};

var _unifyEvent = function (e) {
	return e.changedTouches ? e.changedTouches[0] : e;
};

var _touchLock = function (e) {
	_globals.touchStart = _unifyEvent(e).clientX;
};

var _touchMove = function (e) {
	clearInterval(_globals.autoPlayInterval);

	if(_globals.touchStart || _globals.touchStart === 0) {
		_globals.touchEnd = _unifyEvent(e).clientX - _globals.touchStart;
		var s = Math.sign(_globals.touchEnd);

		if (_globals.touchEnd < 0) {
			_showNext();
		} else {
			_showPrevious();
		}
	}
};

var _initAutoPlay = function () {
	_globals.autoPlayInterval = setInterval(function () {
		_showNext();
	}, _globals.delay);
};

var _controls = function () {
	var _prev = document.createElement('button');
	var _next = document.createElement('button');

	_prev.innerHTML = 'Previous';
	_next.innerHTML = 'Next';

	_prev.classList.add('gykarousel__control', 'gykarousel__control--prev');
	_next.classList.add('gykarousel__control', 'gykarousel__control--next');

	_globals.elements.prevButton = _globals.elements.container.appendChild(_prev);
	_globals.elements.nextButton = _globals.elements.container.appendChild(_next);

	_globals.elements.prevButton.addEventListener('click', _handlePrevious);
	_globals.elements.nextButton.addEventListener('click', _handleNext);

	_globals.elements.wrapper.addEventListener('mousedown', _touchLock, false);
	_globals.elements.wrapper.addEventListener('touchstart', _touchLock, false);

	_globals.elements.wrapper.addEventListener('mouseup', _touchMove, false);
	_globals.elements.wrapper.addEventListener('touchend', _touchMove, false);
}


/** Slide Functions **/
var _slides = function () {
	_globals.elements.slides = _globals.elements.container.querySelectorAll(_globals.slide);
	_globals.slideCount = _globals.elements.slides.length;
	_globals.selectedIndex = 0;

	for (var x = 0, len = _globals.slideCount; x < len; x++) {
		_globals.elements.slides[x].style.left = (x * 100) + '%';
	}
};


/** Init Function **/
var _init = function(_options) {

	Object.assign(_globals, _options);

	_container();
	_slides();
	_controls();
	
	if (_globals.autoPlay) {
		_initAutoPlay();
	}
}

export function init (_obj) {
	_init(_obj);
};