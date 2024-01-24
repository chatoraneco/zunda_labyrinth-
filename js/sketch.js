let cvs;// キャンバス
let player;//プレイヤースプライト
let floor;//床
let clear;//クリア


function setup(){

	// キャンバスの準備
	cvs = new Canvas(1100, 500);
	world.gravity.y = 5;// 縦重力
	world.gravity.x = -1;// 横重力
	frameRate(60);// フレームレート
	//スプライトを作る
	player = new Sprite(50,462);
	player.diameter = 35;
	player.image = "./assets/ずんだ.png"
	player.collider = "dynamic";//物理演算有効

	clear = new Sprite(1040,100);
	clear.width = 80
	clear.height = 50
	clear.image  = "./assets/clear.png"
	clear.collider = "static";//物理演算無効
	
	
	//床/壁
	
	floor = new Sprite(10,250);
	floor.width = 10;
	floor.height = 490;
	floor.color = "green"
	floor.collider = "static";//物理演算無効

	floor = new Sprite(990,270);
	floor.width = 10;
	floor.height = 430;
	floor.color = "green"
	floor.collider = "static";//物理演算無効

	floor = new Sprite(1072,35);
	floor.width = 10;
	floor.height = 60;
	floor.color = "green"
	floor.collider = "static";//物理演算無効


	floor = new Sprite(540,10);
	floor.width = 1050;
	floor.height = 10;
	floor.color = "green"
	floor.collider = "static";//物理演算無効

	floor = new Sprite(500,490);
	floor.width = 990;
	floor.height = 10;
	floor.color = "green"
	floor.collider = "static";//物理演算無効



	floor = new Sprite(90,55);
	floor.width = 10;
	floor.height = 80;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	floor = new Sprite(90,135);
	floor.width = 10;
	floor.height = 80;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	floor = new Sprite(90,215);
	floor.width = 10;
	floor.height = 80;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	floor = new Sprite(90,295);
	floor.width = 10;
	floor.height = 80;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	// floor = new Sprite(90,375);
	// floor.width = 10;
	// floor.height = 80;
	// floor.color = "yellowgreen"
	// floor.collider = "static";//物理演算無効

	// floor = new Sprite(90,455);
	// floor.width = 10;
	// floor.height = 80;
	// floor.color = "yellowgreen"
	// floor.collider = "static";//物理演算無効


	floor = new Sprite(170,55);
	floor.width = 10;
	floor.height = 80;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	floor = new Sprite(170,135);
	floor.width = 10;
	floor.height = 80;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	// floor = new Sprite(170,215);
	// floor.width = 10;
	// floor.height = 80;
	// floor.color = "yellowgreen"
	// floor.collider = "static";//物理演算無効

	floor = new Sprite(170,295);
	floor.width = 10;
	floor.height = 80;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	// floor = new Sprite(170,375);
	// floor.width = 10;
	// floor.height = 80;
	// floor.color = "yellowgreen"
	// floor.collider = "static";//物理演算無効

	// floor = new Sprite(170,455);
	// floor.width = 10;
	// floor.height = 80;
	// floor.color = "yellowgreen"
	// floor.collider = "static";//物理演算無効


	floor = new Sprite(250,55);
	floor.width = 10;
	floor.height = 80;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	// floor = new Sprite(250,135);
	// floor.width = 10;
	// floor.height = 80;
	// floor.color = "yellowgreen"
	// floor.collider = "static";//物理演算無効

	floor = new Sprite(250,215);
	floor.width = 10;
	floor.height = 80;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	floor = new Sprite(250,295);
	floor.width = 10;
	floor.height = 80;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	// floor = new Sprite(250,375);
	// floor.width = 10;
	// floor.height = 80;
	// floor.color = "yellowgreen"
	// floor.collider = "static";//物理演算無効

	floor = new Sprite(250,455);
	floor.width = 10;
	floor.height = 80;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効


	floor = new Sprite(330,55);
	floor.width = 10;
	floor.height = 80;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	// floor = new Sprite(330,135);
	// floor.width = 10;
	// floor.height = 80;
	// floor.color = "yellowgreen"
	// floor.collider = "static";//物理演算無効

	floor = new Sprite(330,215);
	floor.width = 10;
	floor.height = 80;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	floor = new Sprite(330,295);
	floor.width = 10;
	floor.height = 80;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	// floor = new Sprite(330,375);
	// floor.width = 10;
	// floor.height = 80;
	// floor.color = "yellowgreen"
	// floor.collider = "static";//物理演算無効

	// floor = new Sprite(330,455);
	// floor.width = 10;
	// floor.height = 80;
	// floor.color = "yellowgreen"
	// floor.collider = "static";//物理演算無効


	floor = new Sprite(410,55);
	floor.width = 10;
	floor.height = 80;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	// floor = new Sprite(410,135);
	// floor.width = 10;
	// floor.height = 80;
	// floor.color = "yellowgreen"
	// floor.collider = "static";//物理演算無効

	floor = new Sprite(410,215);
	floor.width = 10;
	floor.height = 80;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	floor = new Sprite(410,295);
	floor.width = 10;
	floor.height = 80;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	floor = new Sprite(410,375);
	floor.width = 10;
	floor.height = 80;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	floor = new Sprite(410,455);
	floor.width = 10;
	floor.height = 80;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効


	// floor = new Sprite(490,55);
	// floor.width = 10;
	// floor.height = 80;
	// floor.color = "yellowgreen"
	// floor.collider = "static";//物理演算無効

	floor = new Sprite(490,135);
	floor.width = 10;
	floor.height = 80;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	floor = new Sprite(490,215);
	floor.width = 10;
	floor.height = 80;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	floor = new Sprite(490,295);
	floor.width = 10;
	floor.height = 80;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	// floor = new Sprite(490,375);
	// floor.width = 10;
	// floor.height = 80;
	// floor.color = "yellowgreen"
	// floor.collider = "static";//物理演算無効

	floor = new Sprite(490,455);
	floor.width = 10;
	floor.height = 80;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効


	// floor = new Sprite(570,55);
	// floor.width = 10;
	// floor.height = 80;
	// floor.color = "yellowgreen"
	// floor.collider = "static";//物理演算無効

	floor = new Sprite(570,135);
	floor.width = 10;
	floor.height = 80;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	floor = new Sprite(570,215);
	floor.width = 10;
	floor.height = 80;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	// floor = new Sprite(570,295);
	// floor.width = 10;
	// floor.height = 80;
	// floor.color = "yellowgreen"
	// floor.collider = "static";//物理演算無効

	floor = new Sprite(570,375);
	floor.width = 10;
	floor.height = 80;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	floor = new Sprite(570,455);
	floor.width = 10;
	floor.height = 80;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効


	floor = new Sprite(650,55);
	floor.width = 10;
	floor.height = 80;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	floor = new Sprite(650,135);
	floor.width = 10;
	floor.height = 80;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	// floor = new Sprite(650,215);
	// floor.width = 10;
	// floor.height = 80;
	// floor.color = "yellowgreen"
	// floor.collider = "static";//物理演算無効

	floor = new Sprite(650,295);
	floor.width = 10;
	floor.height = 80;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	floor = new Sprite(650,375);
	floor.width = 10;
	floor.height = 80;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	floor = new Sprite(650,455);
	floor.width = 10;
	floor.height = 80;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効


	// floor = new Sprite(730,55);
	// floor.width = 10;
	// floor.height = 80;
	// floor.color = "yellowgreen"
	// floor.collider = "static";//物理演算無効

	floor = new Sprite(730,135);
	floor.width = 10;
	floor.height = 80;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	floor = new Sprite(730,215);
	floor.width = 10;
	floor.height = 80;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	// floor = new Sprite(730,295);
	// floor.width = 10;
	// floor.height = 80;
	// floor.color = "yellowgreen"
	// floor.collider = "static";//物理演算無効

	floor = new Sprite(730,375);
	floor.width = 10;
	floor.height = 80;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	floor = new Sprite(730,455);
	floor.width = 10;
	floor.height = 80;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効


	// floor = new Sprite(810,55);
	// floor.width = 10;
	// floor.height = 80;
	// floor.color = "yellowgreen"
	// floor.collider = "static";//物理演算無効

	floor = new Sprite(810,135);
	floor.width = 10;
	floor.height = 80;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	// floor = new Sprite(810,215);
	// floor.width = 10;
	// floor.height = 80;
	// floor.color = "yellowgreen"
	// floor.collider = "static";//物理演算無効

	floor = new Sprite(810,295);
	floor.width = 10;
	floor.height = 80;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	// floor = new Sprite(810,375);
	// floor.width = 10;
	// floor.height = 80;
	// floor.color = "yellowgreen"
	// floor.collider = "static";//物理演算無効

	floor = new Sprite(810,455);
	floor.width = 10;
	floor.height = 80;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効


	floor = new Sprite(890,55);
	floor.width = 10;
	floor.height = 80;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	// floor = new Sprite(890,135);
	// floor.width = 10;
	// floor.height = 80;
	// floor.color = "yellowgreen"
	// floor.collider = "static";//物理演算無効

	floor = new Sprite(890,215);
	floor.width = 10;
	floor.height = 80;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	floor = new Sprite(890,295);
	floor.width = 10;
	floor.height = 80;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	floor = new Sprite(890,375);
	floor.width = 10;
	floor.height = 80;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	// floor = new Sprite(890,455);
	// floor.width = 10;
	// floor.height = 80;
	// floor.color = "yellowgreen"
	// floor.collider = "static";//物理演算無効


	floor = new Sprite(55,60);
	floor.width = 80;
	floor.height = 10;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	// floor = new Sprite(135,60);
	// floor.width = 80;
	// floor.height = 10;
	// floor.color = "yellowgreen"
	// floor.collider = "static";//物理演算無効

	floor = new Sprite(215,60);
	floor.width = 80;
	floor.height = 10;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	floor = new Sprite(295,60);
	floor.width = 80;
	floor.height = 10;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	floor = new Sprite(375,60);
	floor.width = 80;
	floor.height = 10;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	// floor = new Sprite(455,60);
	// floor.width = 80;
	// floor.height = 10;
	// floor.color = "yellowgreen"
	// floor.collider = "static";//物理演算無効

	floor = new Sprite(535,60);
	floor.width = 80;
	floor.height = 10;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	// floor = new Sprite(615,60);
	// floor.width = 80;
	// floor.height = 10;
	// floor.color = "yellowgreen"
	// floor.collider = "static";//物理演算無効

	floor = new Sprite(695,60);
	floor.width = 80;
	floor.height = 10;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	// floor = new Sprite(775,60);
	// floor.width = 80;
	// floor.height = 10;
	// floor.color = "yellowgreen"
	// floor.collider = "static";//物理演算無効

	floor = new Sprite(855,60);
	floor.width = 80;
	floor.height = 10;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	// floor = new Sprite(935,60);
	// floor.width = 80;
	// floor.height = 10;
	// floor.color = "yellowgreen"
	// floor.collider = "static";//物理演算無効

	
	
	floor = new Sprite(55,140);
	floor.width = 80;
	floor.height = 10;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	floor = new Sprite(135,140);
	floor.width = 80;
	floor.height = 10;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	// floor = new Sprite(215,140);
	// floor.width = 80;
	// floor.height = 10;
	// floor.color = "yellowgreen"
	// floor.collider = "static";//物理演算無効

	floor = new Sprite(295,140);
	floor.width = 80;
	floor.height = 10;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	floor = new Sprite(375,140);
	floor.width = 80;
	floor.height = 10;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	floor = new Sprite(455,140);
	floor.width = 80;
	floor.height = 10;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	// floor = new Sprite(535,140);
	// floor.width = 80;
	// floor.height = 10;
	// floor.color = "yellowgreen"
	// floor.collider = "static";//物理演算無効

	// floor = new Sprite(615,140);
	// floor.width = 80;
	// floor.height = 10;
	// floor.color = "yellowgreen"
	// floor.collider = "static";//物理演算無効

	// floor = new Sprite(695,140);
	// floor.width = 80;
	// floor.height = 10;
	// floor.color = "yellowgreen"
	// floor.collider = "static";//物理演算無効

	floor = new Sprite(775,140);
	floor.width = 80;
	floor.height = 10;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	// floor = new Sprite(855,140);
	// floor.width = 80;
	// floor.height = 10;
	// floor.color = "yellowgreen"
	// floor.collider = "static";//物理演算無効

	floor = new Sprite(935,140);
	floor.width = 80;
	floor.height = 10;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効



	floor = new Sprite(55,220);
	floor.width = 80;
	floor.height = 10;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	// floor = new Sprite(135,220);
	// floor.width = 80;
	// floor.height = 10;
	// floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	floor = new Sprite(215,220);
	floor.width = 80;
	floor.height = 10;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	floor = new Sprite(295,220);
	floor.width = 80;
	floor.height = 10;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	// floor = new Sprite(375,220);
	// floor.width = 80;
	// floor.height = 10;
	// floor.color = "yellowgreen"
	// floor.collider = "static";//物理演算無効

	floor = new Sprite(455,220);
	floor.width = 80;
	floor.height = 10;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	// floor = new Sprite(535,220);
	// floor.width = 80;
	// floor.height = 10;
	// floor.color = "yellowgreen"
	// floor.collider = "static";//物理演算無効

	floor = new Sprite(615,220);
	floor.width = 80;
	floor.height = 10;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	// floor = new Sprite(695,220);
	// floor.width = 80;
	// floor.height = 10;
	// floor.color = "yellowgreen"
	// floor.collider = "static";//物理演算無効

	// floor = new Sprite(775,220);
	// floor.width = 80;
	// floor.height = 10;
	// floor.color = "yellowgreen"
	// floor.collider = "static";//物理演算無効

	floor = new Sprite(855,220);
	floor.width = 80;
	floor.height = 10;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	floor = new Sprite(935,220);
	floor.width = 80;
	floor.height = 10;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効






	floor = new Sprite(55,300);
	floor.width = 80;
	floor.height = 10;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	// floor = new Sprite(135,300);
	// floor.width = 80;
	// floor.height = 10;
	// floor.color = "yellowgreen"
	// floor.collider = "static";//物理演算無効

	floor = new Sprite(215,300);
	floor.width = 80;
	floor.height = 10;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	floor = new Sprite(295,300);
	floor.width = 80;
	floor.height = 10;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	floor = new Sprite(375,300);
	floor.width = 80;
	floor.height = 10;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	// floor = new Sprite(455,300);
	// floor.width = 80;
	// floor.height = 10;
	// floor.color = "yellowgreen"
	// floor.collider = "static";//物理演算無効

	floor = new Sprite(535,300);
	floor.width = 80;
	floor.height = 10;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	// floor = new Sprite(615,300);
	// floor.width = 80;
	// floor.height = 10;
	// floor.color = "yellowgreen"
	// floor.collider = "static";//物理演算無効

	floor = new Sprite(695,300);
	floor.width = 80;
	floor.height = 10;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	// floor = new Sprite(775,300);
	// floor.width = 80;
	// floor.height = 10;
	// floor.color = "yellowgreen"
	// floor.collider = "static";//物理演算無効

	floor = new Sprite(855,300);
	floor.width = 80;
	floor.height = 10;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	// floor = new Sprite(935,300);
	// floor.width = 80;
	// floor.height = 10;
	// floor.color = "yellowgreen"
	// floor.collider = "static";//物理演算無効






	floor = new Sprite(55,380);
	floor.width = 80;
	floor.height = 10;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	floor = new Sprite(135,380);
	floor.width = 80;
	floor.height = 10;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	// floor = new Sprite(215,380);
	// floor.width = 80;
	// floor.height = 10;
	// floor.color = "yellowgreen"
	// floor.collider = "static";//物理演算無効

	floor = new Sprite(295,380);
	floor.width = 80;
	floor.height = 10;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	floor = new Sprite(375,380);
	floor.width = 80;
	floor.height = 10;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	floor = new Sprite(455,380);
	floor.width = 80;
	floor.height = 10;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	// floor = new Sprite(535,380);
	// floor.width = 80;
	// floor.height = 10;
	// floor.color = "yellowgreen"
	// floor.collider = "static";//物理演算無効

	floor = new Sprite(615,380);
	floor.width = 80;
	floor.height = 10;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	floor = new Sprite(695,380);
	floor.width = 80;
	floor.height = 10;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	// floor = new Sprite(775,380);
	// floor.width = 80;
	// floor.height = 10;
	// floor.color = "yellowgreen"
	// floor.collider = "static";//物理演算無効

	// floor = new Sprite(855,380);
	// floor.width = 80;
	// floor.height = 10;
	// floor.color = "yellowgreen"
	// floor.collider = "static";//物理演算無効

	floor = new Sprite(935,380);
	floor.width = 80;
	floor.height = 10;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効






	floor = new Sprite(55,440);
	floor.width = 80;
	floor.height = 10;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	// floor = new Sprite(135,440);
	// floor.width = 80;
	// floor.height = 10;
	// floor.color = "yellowgreen"
	// floor.collider = "static";//物理演算無効

	floor = new Sprite(215,440);
	floor.width = 80;
	floor.height = 10;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	floor = new Sprite(295,440);
	floor.width = 80;
	floor.height = 10;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	// floor = new Sprite(375,440);
	// floor.width = 80;
	// floor.height = 10;
	// floor.color = "yellowgreen"
	// floor.collider = "static";//物理演算無効

	floor = new Sprite(455,440);
	floor.width = 80;
	floor.height = 10;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	floor = new Sprite(535,440);
	floor.width = 80;
	floor.height = 10;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	floor = new Sprite(615,440);
	floor.width = 80;
	floor.height = 10;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	// floor = new Sprite(695,440);
	// floor.width = 80;
	// floor.height = 10;
	// floor.color = "yellowgreen"
	// floor.collider = "static";//物理演算無効

	floor = new Sprite(775,440);
	floor.width = 80;
	floor.height = 10;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効

	// floor = new Sprite(855,440);
	// floor.width = 80;
	// floor.height = 10;
	// floor.color = "yellowgreen"
	// floor.collider = "static";//物理演算無効

	floor = new Sprite(935,440);
	floor.width = 80;
	floor.height = 10;
	floor.color = "yellowgreen"
	floor.collider = "static";//物理演算無効


}

function preload(){
	// 2, 音源ファイルのロード
	sndN = loadSound("./assets/疲労.wav");
}

function draw(){
	background("cadetblue");// 背景色

	if(player != null){

	

	if(kb.presses("up")){
		player.vel.y = -4;
	}
	if(kb.presses("down")){
		player.vel.y = 2;
	}
	if(kb.presses("left")){
		player.vel.y = -2;
		player.vel.x = -2;
	}
	if(kb.presses("right")){
		player.vel.y = -2;
		player.vel.x = 2;
	}

	}

	player.collides(clear,(a,b)=>{
		// a.remove();
		a.remove();
		sndN.play();
	});
}


