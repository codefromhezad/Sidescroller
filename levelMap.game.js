var LevelMap = function(game) {
	
	this.repository = Defaults.stageMap.mapRepository;
	this.textures = {};
	
	this.game = game;
	
	/* Load level map textures */
	for(var i in this.repository) {
		if( this.repository[i] === null ) { continue; }
		
		var pathToTexture = this.repository[i];
		this.textures[i] = PIXI.Texture.fromImage(pathToTexture);
	}
	
	this.levelTiles = [];
	
	/* Add level tiles to stage */
	for(var i = 0; i < Defaults.stageMap.mapSize[0] * Defaults.stageMap.mapSize[1]; i++) {
		var tileIndex = Defaults.stageMap.mapData[i];
		
		if( this.repository[tileIndex] !== null ) {
			this.levelTiles[i] = new MapTile(i, this.textures[tileIndex]);
			
			//this.game.viewport.track(this.levelTiles[i]);
			this.game.stage.addChild( this.levelTiles[i] );
		} else {
			this.levelTiles[i] = null;
		}
	} 
}

var MapTile = function(mapIndex, texture) {
	this.mapIndex = mapIndex;
	this.tileIndex = Defaults.stageMap.mapData[this.mapIndex];
	
	PIXI.Sprite.call(this, texture);
	
	this.mapPosition = Utils.expandToXY(this.mapIndex, Defaults.stageMap.mapSize[0]);
	this.position = Utils.mapPositionToCoordinates(this.mapPosition);
}

MapTile.constructor = MapTile;
MapTile.prototype = Object.create(PIXI.Sprite.prototype);
