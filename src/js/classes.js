
	class Button extends Phaser.GameObjects.Container {

		constructor ( scene, x, y, key1, key2, text, targetScene, locked ) {

			super ( scene );

			locked = locked || false;

			this.__buttonLocked = locked;
			this.scene = scene;
			this.x = x;
			this.y = y;

			this.button = this.scene.add.sprite ( 0, 0, key1 ).setInteractive ( );

			this.text = this.scene.add.text (
				0, 0, text, 
				{
					fontSize : '32px', fill : '#fff', 
				}
			);

			Phaser.Display.Align.In.Center ( this.text, this.button );

			this.add ( this.button );
			this.add ( this.text );

			this.button.on ( 'pointerdown', function ( ) {
				if ( this.__buttonLocked === false ) {
					this.scene.scene.start ( targetScene );
				}
			}.bind ( this ) );

			this.button.on ( 'pointerover', function ( ) {
				if ( this.__buttonLocked === false ) {
					this.button.setTexture ( key2 );
				}
			}.bind ( this ) );

			this.button.on ( 'pointerout', function ( ) {
					if ( this.__buttonLocked === false ) {
						this.button.setTexture ( key1 );
					}
			}.bind ( this ) );

			this.scene.add.existing ( this );

		}

		update ( __buttonAlpha ) {

			this.__buttonAlpha = __buttonAlpha;

			if ( this.__buttonAlpha === 1 ) {
				this.__buttonLocked = false;
			}

		}

	}

	class TitleScene extends Phaser.Scene {

		constructor ( ) {
			super ( 'Title' );
		}

		preload ( ) {

			// Load Assets needed in our Game

			this.load.image ( 'blueButton1', 'assets/ui/blue_button02.png' );
			this.load.image ( 'blueButton2', 'assets/ui/blue_button03.png' );
			this.load.image ( 'phaserLogo', 'assets/logo.png' );
			this.load.image ( 'box', 'assets/ui/grey_box.png' );
			this.load.image ( 'checkedBox', 'assets/ui/blue_boxCheckmark.png' );

		}

		create ( ) {

			// Game

			this.gameButton = new Button (
				this, ( __config.width / 2 ), ( ( __config.height / 2 ) - 100 ), 
				'blueButton1', 'blueButton2', 'Play', 
				'Game', true
			);

			// Options

			this.optionsButton = new Button (
				this, ( __config.width / 2 ), ( __config.height / 2 ), 
				'blueButton1', 'blueButton2', 'Options', 
				'Options', true
			);

			// Credits

			this.creditsButton = new Button (
				this, ( __config.width / 2 ), ( ( __config.height / 2 ) + 100 ), 
				'blueButton1', 'blueButton2', 'Credits', 
				'Credits', true
			);

			this.gameButton.alpha = 0.0;
			this.optionsButton.alpha = 0.0;
			this.creditsButton.alpha = 0.0;

			this.tweens.add ({
				targets : this.gameButton, 
				alpha : 1.0, 
				duration : 10000, 
			});

			this.tweens.add ({
				targets : this.optionsButton, 
				alpha : 1.0, 
				duration : 10000, 
			});

			this.tweens.add ({
				targets : this.creditsButton, 
				alpha : 1.0, 
				duration : 10000, 
			});

		}

		centerButton ( gameObject, offset = 0 ) {

			Phaser.Display.Align.In.Center (
				gameObject, 
				this.add.zone (
					( __config.width / 2 ), ( ( __config.height / 2 ) - ( offset * 100 ) ), 
					( __config.width ), ( __config.height )
				)
			);

		}

		centerButtonText ( gameText, gameButton ) {

			Phaser.Display.Align.In.Center (
				gameText, gameButton
			);

		}

		update ( ) {

			stats.update ( );

			console.log ( this.gameButton.alpha );

			this.gameButton.update ( this.gameButton.alpha );
			this.optionsButton.update ( this.optionsButton.alpha );
			this.creditsButton.update ( this.creditsButton.alpha );

		}

	}


