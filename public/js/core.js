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

		OS.prototype.onload = function(){

		};

		OS.prototype.onload = function(){

		};

		return OS;
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

	exports.OS = new OS(); // Singleton
	exports.OS.Process = Process;
	exports.OS.Window = Window;
	exports.OS.Application = Application;
	exports.OS.WindowManager = WindowManager;
})(window);
