var Game = function() {
	
	this.stage = new PIXI.Stage(0xFFF);
	this.renderer = PIXI.autoDetectRenderer(
		Defaults.stageSize[0] * Defaults.stageMap.unitSize[0],
		Defaults.stageSize[1] * Defaults.stageMap.unitSize[1]
	);
	document.body.appendChild(this.renderer.view);
	
	this.show_log = true;

	//this.viewport = new Viewport(Defaults.viewportPosition);
	
	this.bgScroller = new BackgroundScroller(this);
	this.levelMap = new LevelMap(this);
	this.player = new Character(this);

	var thisGame = this;
	
	this.start = function() {
		requestAnimFrame( animate );
		
		function animate() {
			requestAnimFrame( animate );

			//thisGame.viewport.update();
			
			thisGame.player.update();
			
			if( this.game.show_log === true ) {
				document.getElementById('log').innerHTML = "Player Action: ............ " + thisGame.player.action + "<br />" +
														   "Player On Floor ? ......... " + thisGame.player.isOnFloor() + "<br />" +
														   "Player Position on Map: ... " + thisGame.player.mapPosition.x + ", " + thisGame.player.mapPosition.y + "<br />" +
														   "Player Coordinates: ....... " + thisGame.player.position.x + ", " + thisGame.player.position.y;
			}

			thisGame.renderer.render(thisGame.stage);
		}
	}
}
