(function(exports) {
	/**
		Classes:
		OS
		Process
		Window
		Application
		WindowManager


	*/
	function OS(){

	};

	OS.prototype.onload = function(){

	};

	function Process(pid){

	};

	function Window(pid){

	};

	function Application(pid){

	};

	function WindowManager(pid){

	};

	exports.OS = new OS(); // Singleton
	exports.OS.Process = Process;
	exports.OS.Window = Window;
	exports.OS.Application = Application;
	exports.OS.WindowManager = WindowManager;
})(window);
