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
		function OS(){}

		OS.prototype = new EventEmitter2();
		OS.prototype.constructor = OS;

		OS.prototype.load = function(){
			this.container = document.getElementById("container");
			console.log(this.container);
		};

		return new OS();
	})();

	var Process = (function() {
		// constructor
		function Process(){}

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
				selected.setPosition(x_pos - x_elem, y_pos - y_elem);
			}
		};
		document.onmouseup = function() {
			selected = null;
		};

		return function(win){
			selected = win;
			x_elem = x_pos - selected.element.offsetLeft;
			y_elem = y_pos - selected.element.offsetTop;
		};
	})();

	var ui = (function(){
		function Component(){
			this.element = document.createElement("div"); // TODO: Add caching
		}

		Component.prototype.destory = function(){
			if(this.window) this.window.removeComponent(this);
		};

		function HTML(){

		}
		HTML.prototype = new Component();

		return {
			Component = Component,
			Button = Button,
			HTML = HTML
		};
	});

	var Window = (function() {
		var lastPID = 0;
		var domCache = [];
		// constructor
		function Window(width, height, x, y){
			this.pid = lastPID++;
			this.width = width || 0;
			this.height = height || 0;
			this.x = x || 0;
			this.y = y || 0;
			this.components = [];
		}

		Window.prototype.create = function(){
			if(this.element !== undefined) return this;
			this.element = domCache.length > 0 ? domCache.pop() : document.createElement("div");

			this.element.className = "window";
			this.element.style.display = "block";
			this.element.style.width = this.width + "px";
			this.element.style.height = this.height + "px";
			this.element.style.left = this.x  + "px";
			this.element.style.top = this.y  + "px";

			var that = this;
			this.element.onmousedown = function() {
				drag(that);
				return false;
			};

			OS.container.appendChild(this.element);
			return this;
		};

		Window.prototype.setSize = function(width, height){
			if(this.width != width){
				this.width = width;
				this.element.style.width = this.width + "px";
			}
			if(this.height != height){
				this.height = height;
				this.element.style.height = this.height + "px";
			}
			return this;
		};

		Window.prototype.setPosition = function(x, y){
			if(this.x != x){
				this.x = x;
				this.element.style.left = this.x  + "px";
			}
			if(this.y != y){
				this.y = y;
				this.element.style.top = this.y  + "px";
			}
			return this;
		};

		Window.prototype.show = function(){
			if(this.element.style.display != "block")
				this.element.style.display = "block";
			return this;
		};

		Window.prototype.hide = function(){
			if(this.element.style.display != "none")
				this.element.style.display = "none";
			return this;
		};

		Window.prototype.destroy = function(){
			this.hide();
			domCache.push(this.element);
			while(domCache.length > 10){ // Limit cache size to 10
				var elem = domCache.pop();
				elem.parentNode.removeChild(elem);
			}
		};

		Window.prototype.addComponent = function(comp){
			this.components.push(comp);
			return this;
		};

		Window.prototype.removeComponent = function(comp){
			this.components.splice(this.components.indexOf(comp), 1);
			return this;
		};

		return Window;
	})();

	var Application = (function() {
		// constructor
		function Application(){}

		return Application;
	})();

	var WindowManager = (function() {
		// constructor
		function WindowManager(){
			this.windows = [];
		}

		WindowManager.prototype.addWindow = function(win){

		};

		WindowManager.prototype.removeWindow = function(win){

		};

		return WindowManager;
	})();

	exports.OS = OS;
	exports.OS.ui = ui;
	exports.OS.Process = Process;
	exports.OS.Window = Window;
	exports.OS.Application = Application;
	exports.OS.WindowManager = WindowManager;
})(window);
