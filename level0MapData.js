var Defaults = {
	backgroundLayersSize: [1024, 512],
	backgroundLayers: {
		sky: {speed: 0.1, offsetY: 0},
		far: {speed: 0.2, offsetY: 64},
		near: {speed: 0.55, offsetY: 128}
	},
	scrollSpeed: 5,
	
	stageSize: [12, 10],
	stageMap: {
		mapSize: [16, 10],
		unitSize: [64, 64],
		mapRepository: {
			0: null,
			1: 'floor.jpg'
		},
		mapData: [
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,
			0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,
			0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,
			1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,
			1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
			1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
		]
	},
	
	viewportPosition: {x: 0, y: 0},
	playerStart: {x: 2, y: 3},
	playerSpeed: 5
};
