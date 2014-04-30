window.onload = function(){
	OS.load();
	var testWin = new OS.Window(600, 200, 30, 30);
	testWin.create();

	setTimeout(function(){
		testWin.setPosition(10, 10);
		testWin.setSize(300, 90);
	}, 1000);
};
