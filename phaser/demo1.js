var w = 800;
var h = 400;
var jugador;
var fondo;

var bala, balaD = false, nave;
var balaDos, balaDDos = false;

var salto;
var saltoEnX;
var menu;

var velocidadBala, velocidadBalaDos;
var despBala, despBalaDos;
var estatusAire, estatusAireEnX;

var nnNetwork, nnEntrenamiento, nnSalida, datosEntrenamiento = [];
var modoAuto = false, eCompleto = false;

var juego = new Phaser.Game(w, h, Phaser.CANVAS, '', {preload: preload, create: create, update: update, render: render});

function preload(){
	juego.load.image('fondo', 'assets/game/fondo.jpg');
	juego.load.spritesheet('mono', 'assets/sprites/altair.png', 32, 48);
	juego.load.image('nave', 'assets/game/ufo.png');
	juego.load.image('bala', 'assets/sprites/purple_ball.png', 5, 5);
	juego.load.image('menu', 'assets/game/menu.png');
}

function create(){
	juego.physics.startSystem(Phaser.Physics.ARCADE);
	juego.time.desiredFps = 30;
	
	fondo = juego.add.tileSprite(0, 0, w, h, 'fondo');
	nave = juego.add.sprite(w-100, h-70, 'nave');
	nave = juego.add.sprite(w-790, h-390, 'nave');
	bala = juego.add.sprite(w-100, h, 'bala');
	balaDos = juego.add.sprite(0, h-400, 'bala');
	jugador = juego.add.sprite(0, h, 'mono');
	
	juego.physics.enable(jugador);
	jugador.body.collideWorldBounds = true;
	jugador.body.gravity.x = -800;
	jugador.body.gravity.y = 800;
	var corre = jugador.animations.add('corre', [8, 9, 10, 11]);
	jugador.animations.play('corre', 10, true);
	
	juego.physics.enable(bala);
	bala.body.collideWorldBounds = true;

	juego.physics.enable(balaDos);
	balaDos.body.collideWorldBounds = true;
	
	pausaL = juego.add.text(w - 100, 20, 'Pausa', { font: '20px Arial', fill: '#f0f' });
	pausaL.inputEnabled = true;
	pausaL.events.onInputUp.add(pausa, self);
	juego.input.onDown.add(mPausa, self);
	
	salto = juego.input.keyboard.addKey(Phaser.Keyboard.UP);
	saltoEnX = juego.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
	
	nnNetwork = new synaptic.Architect.Perceptron(4, 8, 6, 2);
	nnEntrenamiento = new synaptic.Trainer(nnNetwork);
}

function enRedNeural(){
	nnEntrenamiento.train(datosEntrenamiento, {rate: 0.0003, iterations: 10000, shuffle: true});
}

function datosDeEntrenamiento(param_entrada){
	console.log("Entrada", param_entrada[0] + " " + param_entrada[1] + " " + param_entrada[2] + " " + param_entrada[3]);
	nnSalida = nnNetwork.activate(param_entrada);
	var aire = Math.round(nnSalida[0]*100);
	var aireEnX = Math.round(nnSalida[1]*100);
	console.log("Valor ", "En Aire: " + aire + " En X: " + aireEnX);
	var datos = [];
	datos[0] = aire;
	datos[1] = aireEnX;

	return datos;
}

function pausa(){
	resetVariables();
	resetVariablesDos();
	juego.paused = true;
	menu = juego.add.sprite(w/2, h/2, 'menu');
	menu.anchor.setTo(0.5, 0.5);
}

function mPausa(event){
	if(juego.paused){
		var menu_x1 = w/2 - 270/2, menu_x2 = w/2 + 270/2, menu_y1 = h/2 - 180/2, menu_y2 = h/2 + 180/2;
		var mouse_x = event.x, mouse_y = event.y;
		
		if(mouse_x > menu_x1 && mouse_x < menu_x2 && mouse_y > menu_y1 && mouse_y < menu_y2){
			if(mouse_x >= menu_x1 && mouse_x <= menu_x2 && mouse_y >= menu_y1 && mouse_y <= menu_y1 + 90){
				eCompleto = false;
				datosEntrenamiento = [];
				modoAuto = false;
			} else if (mouse_x >= menu_x1 && mouse_x <= menu_x2 && mouse_y >= menu_y1 + 90 && mouse_y <= menu_y2){
				if(!eCompleto){
					console.log("","Entrenamiento " + datosEntrenamiento.length + " valores");
					enRedNeural();
					eCompleto = true;
				}
				modoAuto = true;
			}
			resetVariables();
			resetVariablesDos();
			menu.destroy();
			juego.paused = false;
		}
	}
}

function resetVariables(){
	jugador.body.velocity.x = 0;
	jugador.body.velocity.y = 0;
	bala.body.velocity.x = 0;
	bala.position.x = w - 100;
	balaD = false;
}

function resetVariablesDos(){
	balaDos.body.velocity.y = 0;
    balaDos.position.y = h-400;
    balaDDos = false;
}

function saltar(){
	jugador.body.velocity.y = -270;
}

function saltarEnX(){
	jugador.body.velocity.x = 320;
}

function update(){
	fondo.tilePosition.x -= 1;
	juego.physics.arcade.collide(bala, jugador, colisionH, null, this);
	juego.physics.arcade.collide(balaDos, jugador, colisionH, null, this);

	estatusAire = 0;
	estatusAireEnX = 0;
	
	if(!jugador.body.onFloor()){
		estatusAire = 1;
	}

	if(!jugador.body.onWall()){
		estatusAireEnX = 1;
	}
	
	despBala = Math.floor(jugador.position.x - bala.position.x);
	despBalaDos = Math.floor( jugador.position.y - balaDos.position.y);
	
	if(modoAuto == false && salto.isDown && jugador.body.onFloor()){
		saltar();
	}

	if(modoAuto==false && saltoEnX.isDown && jugador.body.onWall() ){
        saltarEnX();
    }

	if (modoAuto == true) {
		var accion = datosDeEntrenamiento([despBala, velocidadBala, despBalaDos, velocidadBalaDos])
		if(bala.position.x > 0 && jugador.body.onFloor() && accion[0] > 60){
			saltar();
		}
		if(balaDos.position.y < 400 && jugador.body.onWall() && accion[1] > 60){
			saltarEnX();
		}
	}

	if(balaD == false){
		disparo();
	}

	if(balaDDos == false){
		disparoDos();
	}
	
	if(bala.position.x <= 0){
		resetVariables();
	}

	if(balaDos.position.y >= 380){
		resetVariablesDos();
	}
	
	if(modoAuto == false && bala.position.x > 0){
		datosEntrenamiento.push({'input':[despBala, velocidadBala, despBalaDos, velocidadBalaDos], 'output':[estatusAire, estatusAireEnX]});
		console.log(despBala, + " " + velocidadBala, + " " + despBalaDos, + " " + velocidadBalaDos, + " " + estatusAire + " " + estatusAireEnX);
	}		
}

function disparo(){
	velocidadBala = -1 * velocidadRandom(300,500);
	bala.body.velocity.y = 0;
	bala.body.velocity.x = velocidadBala;
	balaD = true;
}

function disparoDos(){
	velocidadBalaDos = 1 * velocidadRandom(300,400);
    balaDos.body.velocity.x = 0;
    balaDos.body.velocity.y = velocidadBalaDos;
    balaDDos = true;
}

function colisionH(){
	pausa();
}

function velocidadRandom(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function render(){
	
}

//demo Bis