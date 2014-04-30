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

	var Window = (function() {
		var lastPID = 0;
		// constructor
		function Window(){
			this.pid = lastPID++;
		};

		Window.prototype.create = function(width, height){
			this.element = document.createElement("div");
			this.element.className = "window";
			this.element.style.width = width + "px";
			this.element.style.height = height + "px";
			OS.container.appendChild(this.element);
		};

		Window.prototype.show = function(){

		};

		Window.prototype.hide = function(){

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
