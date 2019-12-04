
	// { Internals Section }

	this.__PHASER_TYPE = Phaser.CANVAS; // Default :: { Phaser.AUTO }
	this.__PHASER_PARENT = ( "game-container" );
	this.__PHASER_SCALE_MODE = ( Phaser.Scale.WIDTH_CONTROLS_HEIGHT ); // Phaser.Scale.RESIZE );
	this.__PHASER_SCALE_AUTOCENTER = ( Phaser.Scale.CENTER_BOTH );

	// { Game Data Section }

	this.__GAME_WIDTH = ( window.innerWidth ); // ( Takes up the inner window's width )
	this.__GAME_HEIGHT = ( window.innerHeight ); // ( Takes up the inner window's height )
	this.__GAME_PIXELRATIO = ( window.devicePixelRatio ); // ( Get's Device's Pixel Ratio )
	this.__GAME_RATIO_WIDTH = ( this.__GAME_WIDTH * this.__GAME_PIXELRATIO ); // ( Gets Game Width * Pixel Ratio )
	this.__GAME_RATIO_HEIGHT = ( this.__GAME_HEIGHT * this.__GAME_PIXELRATIO ); // ( Gets Game Height * Pixel Ratio )
	this.__GAME_RATIO = ( this.__GAME_RATIO_WIDTH / this.__GAME_RATIO_HEIGHT ); // ( Game's Scale Ratio )
	this.__GAME_PIXEL_ART = ( false ); // ( Default `Pixel Art` is `false` )
	this.__GAME_ANTIALIAS = ( false ); // ( Default `Anti Alias` is `false` )
	this.__GAME_BACKGROUND_COLOR = ( "#0064DD" ); // ( Set to `Royal Purple` Background Color )

	// { Scenes Section }

	this.__SCENES_ARRAY = [
		TitleScene, 
	];

	// { Game Physics Section }

	this.__GAME_PHYSICS_GRAVITY = ( 500 ); // ( Default value is `500` )
	this.__GAME_PHYSICS_FPS = ( 100 ); // ( Default value is `100` )
	this.__GAME_PHYSICS_DEBUG = ( true ); // ( Default value is `false` )
	this.__GAME_SCENES = ( this.__SCENES_ARRAY ); // ( Default value is an `array` )
	this.__GAME_PHYSICS_DEFAULT = ( "arcade" ); // ( Default value is `arcade` )

	// { Game Map Section }

	this.__MAP_TILE_WIDTH = ( 66 ); // ( Default `Tile Width` is `32` )
	this.__MAP_TILE_HEIGHT = ( 66 ); // ( Default `Tile Height is `32` )

	// { Game Level{s} Section }

	// this.__MIN_LEVEL_COUNT = ( 0 ); // ( Default `MAX_LEVEL_COUNT` is `0` )
									// ( which is `1` level )
	// this.__MAX_LEVEL_COUNT = ( 1 ); // ( Default `MAX_LEVEL_COUNT` is `1` )
									// ( which is `1` level )

	// { Game Camera Section }

	this.__CAMERA_VIEWPORT_X1 = ( 0 ); // ( Default `X1` is `0` )
	this.__CAMERA_VIEWPORT_X2 = ( 0 ); // ( Default `X2` is `0` )
	this.__CAMERA_VIEWPORT_Y1 = ( this.__GAME_WIDTH ); // ( Default `Viewport` `width` is `Game's Width` )
	this.__CAMERA_VIEWPORT_Y2 = ( this.__GAME_HEIGHT ); // ( Default `Viewport` `height` is `Game's Height` )
	this.__CAMERA_DEADZONE_WIDTH = ( this.__GAME_WIDTH ); // ( Default DeadZone `width` is `Game's Width` )
	this.__CAMERA_DEADZONE_HEIGHT = ( this.__GAME_HEIGHT ); // ( Default DeadZone `height` is `Game's Height` )
	this.__CAMERA_ZOOM_WIDTH = ( 1 ); // ( Default `Width` is `1` )
	this.__CAMERA_ZOOM_HEIGHT = ( 1 ); // ( Default `Height` is `1` )
	this.__CAMERA_LERP_XSPEED = ( 1 ); // ( Default `Lerp X-Speed` is `1` )
	this.__CAMERA_LERP_YSPEED = ( 1 ); // ( Default `Lerp Y-Speed` is `1` )

	// { Game Player Section }

	this.__PLAYER_MIN_MOVESPEED = ( 200 ); // ( Default is `200` )
	this.__PLAYER_MAX_MOVESPEED = ( 600 ); // ( Default is `600` )
	this.__PLAYER_MIN_JUMPSPEED = ( 250 ); // ( Default is `250` )
	this.__PLAYER_MAX_JUMPSPEED = ( 600 ); // ( Default is `600` )

	this.__resize = function ( ) {

		var canvas = document.querySelector ( 'canvas' );
		var windowWidth = ( window.innerWidth );
		var windowHeight = ( window.innerHeight );
		var windowRatio = ( windowWidth / windowHeight );
		var gameRatio = ( __game.config.width / __game.config.height );

		if ( windowRatio < gameRatio ) {

			canvas.style.width = windowWidth + "px";
			canvas.style.height = ( windowWidth / gameRatio ) + "px";

		}

		else {

			canvas.style.width = ( windowHeight * gameRatio ) + "px";
			canvas.style.height = windowHeight + "px";

		}

	}

	// { Game Configuration }

	this.__config = {

		type : this.__PHASER_TYPE, width : this.__GAME_WIDTH, height : this.__GAME_HEIGHT, 
		parent : this.__PHASER_PARENT, pixelArt : this.__GAME_PIXEL_ART, antialias : this.__GAME_ANTIALIAS, 
		backgroundColor : this.__GAME_BACKGROUND_COLOR, 
		scene : this.__GAME_SCENES, 

		scale : {
			mode : this.__PHASER_SCALE_MODE, 
			autoCenter : this.__PHASER_SCALE_AUTOCENTER, 
		}, 

		physics : {

			default : this.__GAME_PHYSICS_DEFAULT, 

			arcade :  {
				debug : this.__GAME_PHYSICS_DEBUG, 
				gravity : {
					y : this.__GAME_PHYSICS_GRAVITY, 
				}, 
				fps : this.__GAME_PHYSICS_FPS, 
			}

		}

	}

	this.stats = new Stats ( );
	document.body.appendChild ( this.stats.dom );

	this.__game = new Phaser.Game ( this.__config );

	window.focus ( );


