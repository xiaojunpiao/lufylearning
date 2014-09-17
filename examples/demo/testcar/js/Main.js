/**
 * Main类
 * @author lq
 **/
if(LGlobal.canTouch){
	LGlobal.stageScale = LStageScaleMode.EXACT_FIT;
	LSystem.screen(LStage.FULL_SCREEN);
}

//滚动条
function doScroll() {
	if(window.pageYOffset === 0) {
		window.scrollTo(0, 1);
	}
}
window.onload = function() {
	setTimeout(doScroll, 100);
	init(50,"legend",800,480,main,LEvent.INIT);
}
window.onorientationchange = function() {
	setTimeout(doScroll, 100);
};
window.onresize = function() {
	setTimeout(doScroll, 100);
}


/**层变量*/
//显示进度条所用层
var loadingLayer;
//游戏底层
var backLayer;
var stageLayer;
var labelLayer;
/**数组变量*/
//图片path数组
var imgData = [
{name:"num.0",path:"./images/0.png"},
{name:"num.1",path:"./images/1.png"},
{name:"num.2",path:"./images/2.png"},
{name:"num.3",path:"./images/3.png"},
{name:"num.4",path:"./images/4.png"},
{name:"num.5",path:"./images/5.png"},
{name:"num.6",path:"./images/6.png"},
{name:"num.7",path:"./images/7.png"},
{name:"num.8",path:"./images/8.png"},
{name:"num.9",path:"./images/9.png"},
{name:"return",path:"./images/return.png"},
{name:"close",path:"./images/close.png"},
{name:"logo",path:"./images/logo.png"},
{name:"menu_back",path:"./images/menu_back.png"},
{name:"menu_stage",path:"./images/menu_stage.png"},
{name:"back",path:"./images/bg001.png"},
{name:"focus",path:"./images/focus.png"},
{name:"window_mini",path:"./images/window_mini.png"},
{name:"num_back",path:"./images/num_back.png"},
{name:"ico_sina",path:"./images/ico_sina.gif"},
{name:"ico_qq",path:"./images/ico_qq.gif"},
{name:"ico_facebook",path:"./images/ico_facebook.png"},
{name:"ico_twitter",path:"./images/ico_twitter.png"},

{name:"bigcar_up",path:"./images/bigcar_up.png"},
{name:"smallcar_up",path:"./images/smallcar_up.png"}
];
//读取完的图片数组

//var maplayer;//地图层
var carLayer;
var smallLayer;




var effectLayer;
var talkLayer;
var ctrlLayer;

var touchdownX ;
var touchdownY ;

var touchupX;
var touchupY;

//var carHero;//主角
var bitmapdata;



var imglist = {};
var window_back,window_mini;
var imageArray;
var labelText,nameText,btn_update,rankingLayer;
var stageIndex = 0;
var startTime,stages,times,stagetype;
var btnReturn;
var focus;
var nowNum,selectLayer,stageNumList;

function main(){
	loadingLayer = new LoadingSample1();
	addChild(loadingLayer);	
	LLoadManage.load(
		imgData,
		function(progress){
			loadingLayer.setProgress(progress);
		},
		gameInit
	);
}
function gameInit(result){  //？？
	//LGlobal.setDebug(true);//开启测试模式
	imglist = result;
	removeChild(loadingLayer);//注销加载
	loadingLayer = null;
	//游戏底层添加
	backLayer = new LSprite();
	addChild(backLayer);
	gameLogoShow();
}

function gameLogoShow(){
    var layer = new GameLogo();
    backLayer.addChild(layer);
}

function gameStart(index){
	backLayer.removeAllChild();
	backLayer.die();
	stageIndex = index;
	
	stageLayer = new LSprite();
	backLayer.addChild(stageLayer);

	labelLayer = new LSprite();
	backLayer.addChild(labelLayer);

//    maplayer=new LSprite();
//    backLayer.addChild(maplayer);//地图层

//    carLayer=new LSprite();
//    backLayer.addChild(carLayer);//小车层
//    stageLayer.addEventListener(LMouseEvent.MOUSE_DOWN,touchDown);
//    stageLayer.addEventListener(LMouseEvent.MOUSE_MOVE,touchMove);
//    stageLayer.addEventListener(LMouseEvent.MOUSE_UP,touchUp);

    if (stageIndex=="0")
    {
        initStage();
        initButton();

    }


}
//
//function initMap(){
//    var bitmap;
//    bitmap = new LBitmap(new LBitmapData(imglist["back"]));
//    maplayer.addChild(bitmap);
//}

// function addCar(){
//
//     bitmapdata = new LBitmapData(imglist["return"]);
//     carHero = new Car(bitmapdata,2,1);
//     carHero.x= 32*5;
//     carHero.y=32*6;
//     carLayer.addChild(carHero);
// }

function initStage()
{
    //startTime = new Date().getTime();
//    stageNumList = new Array();
//    var numlist = getNumList();
    var bitmapData = new LBitmapData(imglist["back"]);
    var bitmap = new LBitmap(bitmapData);
    stageLayer.addChild(bitmap);

//bit car
    carLayer=new LSprite();
    backLayer.addChild(carLayer);//小车层
    var bitmapDataCar = new LBitmapData(imglist["bigcar_up"]);
    var bitmapCar = new LBitmap(bitmapDataCar);
    carLayer.addChild(bitmapCar);

    carLayer.x  = 400;
    carLayer.y = 100;

    carLayer.addEventListener(LMouseEvent.MOUSE_DOWN,touchDown);
    carLayer.addEventListener(LMouseEvent.MOUSE_MOVE,touchMove);
    carLayer.addEventListener(LMouseEvent.MOUSE_UP,touchUp);

    var rect = new LSprite();
    rect.x = 100;
    rect.graphics.drawRect(2,"#FF0000",[0,0,100,100]);
  //  carLayer.addShape(LShape.RECT,[20,140,200,100]);

//    LShape.addEventListener(LMouseEvent.MOUSE_DOWN,touchDown);
//    LShape.addEventListener(LMouseEvent.MOUSE_MOVE,touchMove);
//    LShape.addEventListener(LMouseEvent.MOUSE_UP,touchUp);


//small car
    smallLayer = new LSprite();
    backLayer.addChild(smallLayer);
    var bitmapDataSmall = new LBitmapData(imglist["smallcar_up"]);
    var bitmapsmall = new LBitmap(bitmapDataSmall);
    smallLayer.addChild(bitmapsmall);

    smallLayer.x = 300;
    smallLayer.y = 300;

    smallLayer.addEventListener(LMouseEvent.MOUSE_DOWN,touchDown);
    smallLayer.addEventListener(LMouseEvent.MOUSE_MOVE,touchMove);
    smallLayer.addEventListener(LMouseEvent.MOUSE_UP,touchUp);



}

function touchDown(event){
//    carLayer=new LSprite();
//    backLayer.addChild(carLayer);//小车层
//    var bitmapDataCar = new LBitmapData(imglist["bigcar_up"]);
//    var bitmapCar = new LBitmap(bitmapDataCar);
//    carLayer.addChild(bitmapCar)
//
//    carLayer.x  = event.currentTarget.x+30;
//    carLayer.y = event.offsetY;

      //event.currentTarget.startDrag(event.touchPointID);
   //  event.startDrag();


//    console.log("down")
//    touchdownX = event.offsetX;
//    touchdownY = event.offsetY;
//    console.log(touchdownX);

    console.log('1111');
    event.currentTarget.startDrag(event.touchPointID);
    carLayer.addShape(LShape.RECT,[20,140,200,100]);
//    if (LGlobal.hitTestRect(carLayer,smallLayer)){
//        backLayer.removeChild(carLayer);
//    }
   // event.currentTarget.startDrag(event.touchPointID);
}

function touchUp(event){
   event.currentTarget.stopDrag();
//    console.log(event);
    // console.log(event.offsetX);

    console.log("up")
    console.log(touchdownX);
   // console.log(carLayer.x);
//    touchupX = event.offsetX;
//    touchupY = event.offsetY;
//    if(touchdownY-touchupY > 0)
//    {
//       carLayer.y = event.offsetY -50;
//    }
//    if(touchdownY-touchupY < 0)
//    {
//        carLayer.y = event.offsetY +50;
//    }
//    if(touchdownX-touchupX < 0)
//    {
//        carLayer.x = event.offsetX -50;
//    }
//
//    if(touchdownX-touchupX > 0)
//    {
//        carLayer.x = event.offsetX +50;
//    }



//    if (LGlobal.hitTestRect(carLayer,smallLayer)){
//        backLayer.removeChild(carLayer);
//    }
}

function touchMove(event){
//    if (LGlobal.hitTestRect(carLayer,smallLayer)){
//        backLayer.removeChild(carLayer);
//    }
}

function menuShow(event){
	backLayer.removeAllChild();
	backLayer.die();
	
	var layer = new GameMenu();
	backLayer.addChild(layer);
}
function gameClearShow(){
	stageLayer.mouseChildren = false;
	backLayer.removeEventListener(LEvent.ENTER_FRAME,onframe);
	var layer = new GameClear();
	backLayer.addChild(layer);
}






function initButton(){
	var bitmap_up = new LBitmap(new LBitmapData(imglist["return"]));
	var bitmap_down = new LBitmap(new LBitmapData(imglist["return"]));
	bitmap_down.alpha = 0.5;
	btnReturn = new LButton(bitmap_up,bitmap_down);
	backLayer.addChild(btnReturn);
	btnReturn.x = 420; 
	btnReturn.y = 30;
	btnReturn.addEventListener(LMouseEvent.MOUSE_UP,menuShow);
}
