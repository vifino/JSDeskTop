(function(exports) {
	/**
		Classes:
		OS
		Process
		Window
		Application
		WindowManager


	*/
	var OS = (function() {
		// constructor
		function OS(){};

		OS.prototype = new EventEmitter2();
		OS.prototype.constructor = OS;

		OS.prototype.load = function(){
			this.container = document.getElementById("container");
			console.log(this.container);
		};

		return new OS;
	})();

	var Process = (function() {
		// constructor
		function Process(){};

		return Process;
	})();

	var drag = (function() {
		var selected = null, // Object of the element to be moved
			x_pos = 0, y_pos = 0, // Stores x & y coordinates of the mouse pointer
			x_elem = 0, y_elem = 0; // Stores top, left values (edge) of the element

		document.onmousemove = function (e) {
			x_pos = document.all ? window.event.clientX : e.pageX;
			y_pos = document.all ? window.event.clientY : e.pageY;
			if (selected !== null) {
				selected.style.left = (x_pos - x_elem) + 'px';
				selected.style.top = (y_pos - y_elem) + 'px';
			}
		};
		document.onmouseup = function() {
			selected = null;
		};

		return function(elem){
			selected = elem;
			x_elem = x_pos - selected.offsetLeft;
			y_elem = y_pos - selected.offsetTop;
		};
	})();

	var Window = (function() {
		var lastPID = 0;
		// constructor
		function Window(){
			this.pid = lastPID++;
		};

		Window.prototype.create = function(width, height, x, y){
			this.element = document.createElement("div");
			this.element.className = "window";
			this.element.style.width = width + "px";
			this.element.style.height = height + "px";
			this.element.onmousedown = function() {
				drag(this);
				return false;
			};
			OS.container.appendChild(this.element);

			if(x !== undefined && y !== undefined) this.setPosition(x, y);
			return this;
		};

		Window.prototype.setPosition = function(x, y){
			this.element.style.top = x  + "px";
			this.element.style.left = y  + "px";
			return this;
		};

		Window.prototype.show = function(){
			if(this.element.style.display == "block") return;
			this.element.style.display = "block";
			return this;
		};

		Window.prototype.hide = function(){
			if(this.element.style.display == "none") return;
			this.element.style.display = "none";
			return this;
		};

		return Window;
	})();

	var Application = (function() {
		// constructor
		function Application(){};

		return Application;
	})();

	var WindowManager = (function() {
		// constructor
		function WindowManager(){};

		return WindowManager;
	})();

	exports.OS = OS;
	exports.OS.Process = Process;
	exports.OS.Window = Window;
	exports.OS.Application = Application;
	exports.OS.WindowManager = WindowManager;
})(window);
