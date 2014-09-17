/**
 * Created by liqian on 2014-09-13.
 */
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
    init(50,"legend",480,800,main,LEvent.INIT);
}
window.onorientationchange = function() {
    setTimeout(doScroll, 100);
};
window.onresize = function() {
    setTimeout(doScroll, 100);
}

var backgroud1;
var loadingLayer;//loadingLayer 层
var imglist = {};

//关卡
var stageIndex;

//储存所有汽车的数组
var cars = new Array();


var imgData = new Array(
    {name:"gwBg1",path:"./image/gwBg1.jpg"},
    {name:"bg1",path:"./image/bg1.jpg"},
    {name:"bg001",path:"./image/bg001.png"},
    {name:"mm1",path:"./image/mm1.png"},
    {name:"mode1",path:"./image/mode1.png"},
    {name:"car01",path:"./image/01.png"},
    {name:"car11",path:"./image/11.png"},
    {name:"car21",path:"./image/21.png"},
    {name:"mm2",path:"./image/mm2.png"}
);

function main() {
//    gwBackLayer = new LSprite();
//    addChild(gwBackLayer);

//    var gwBgBitmap = new LBitmap(new LBitmapData("./image/gw1.png"));
//    addChild(gwBgBitmap);

    loadingLayer = new LoadingSample3();
    addChild(loadingLayer);


    LLoadManage.load(
        imgData,
        function (progress) {
            loadingLayer.setProgress(progress);
        },
        gameInit
    );
}

function gameInit(result){
    imglist = result;
   removeChild(loadingLayer);
    loadingLayer = null;

    backgroud1 = new LSprite();
    addChild(backgroud1);

    gameLogoShow();
}

function gameLogoShow(){
    var logoLayer = new GameLogo();
    backgroud1.addChild(logoLayer);
}

function menuShow(){
    backgroud1.removeAllChild();
    backgroud1.die();

    var menuLayer = new GameMenu();
    backgroud1.addChild(menuLayer);
}

function stageShow(){
    backgroud1.removeAllChild();
    backgroud1.die();

    var stageLayer = new StageMenu();
    backgroud1.addChild(stageLayer);
}

function gameShow(Index){
    stageIndex = Index;
    backgroud1.removeAllChild();
    backgroud1.die();

    var gameLayer = new GameIng();
    backgroud1.addChild(gameLayer);

}





