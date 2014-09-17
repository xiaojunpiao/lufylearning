/**
 * Created by MLS on 14-9-11.
 */
init(50,"legend",1024,480,main);

/**层变量*/
//显示进度条所用层
var loadingLayer;

//游戏底层
var backLayer;

//地图层
var mapLayer;

//储存所有汽车的数组
var cars = new Array();

//效果层
var effectLayer;
//控制层
var ctrlLayer;

//方向变量
var DOWN = 0;
var LEFT = 1;
var RIGHT = 2;
var UP = 3;
var STEP = 32;

/**int变量*/
//读取图片位置
var loadIndex = 0;
/**对象变量*/
//玩家
var player;

/**数组变量*/
//图片path数组
var imgData = new Array();

//读取完的图片数组
var imglist = {};
var imageArray;
var stage;
//关卡
var stageIndex = 0;

function main(){
    if(LGlobal.canTouch){
        LGlobal.stageScale = LStageScaleMode.EXACT_FIT;
        LSystem.screen(LStage.FULL_SCREEN);
    }
    //准备读取图片
    imgData.push({name:"car01",path:"./images/01.png"});
    imgData.push({name:"car11",path:"./images/11.png"});
    imgData.push({name:"car21",path:"./images/21.png"});

    imgData.push({name:"bg1",path:"./images/bg1.jpg"});
    imgData.push({name:"bg001",path:"./images/bg001.jpg"});
    imgData.push({name:"bg01",path:"./images/bg01.png"});
    imgData.push({name:"bg11",path:"./images/bg11.png"});
    imgData.push({name:"bg21",path:"./images/bg21.png"});
    imgData.push({name:"bg201",path:"./images/bg201.jpg"});
    imgData.push({name:"bg1001",path:"./images/bg1001.jpg"});
    imgData.push({name:"btn",path:"./images/btn.png"});
    imgData.push({name:"bts",path:"./images/bts.png"});
    imgData.push({name:"crPop1",path:"./images/crPop1.png"});
    imgData.push({name:"gw1",path:"./images/gw1.png"});
    imgData.push({name:"gwBg1",path:"./images/gwBg1.jpg"});
    imgData.push({name:"help1",path:"./images/help1.png"});
    imgData.push({name:"icon",path:"./images/icon.png"});
    imgData.push({name:"logo",path:"./images/logo.png"});
    imgData.push({name:"mm1",path:"./images/mm1.png"});
    imgData.push({name:"mm2",path:"./images/mm2.png"});
    imgData.push({name:"mode1",path:"./images/mode1.png"});
    imgData.push({name:"more1",path:"./images/more1.png"});
    imgData.push({name:"pop1",path:"./images/pop1.png"});
    imgData.push({name:"running1",path:"./images/running1.png"});


    loadingLayer = new LoadingSample3();
    addChild(loadingLayer);
    LLoadManage.load(
        imgData,
        function(progress){
            loadingLayer.setProgress(progress);
        },
        function(result){
            imglist = result;
            removeChild(loadingLayer);
            loadingLayer = null;
            gameInit();
        }
    );
}

function gameInit(event){

    //游戏层显示初始化
    layerInit();
    //地图图片初始化
    initMap();
    //初始化可控制的车
    initCars();

    initRunCars();

    //添加贞事件，开始游戏循环
    backLayer.addEventListener(LEvent.ENTER_FRAME,onframe);

    //添加点击控制事件
//    backLayer.addEventListener(LMouseEvent.MOUSE_DOWN,ondown);
    backLayer.addEventListener(LMouseEvent.MOUSE_UP,onup);
    backLayer.addEventListener(LMouseEvent.MOUSE_MOVE,onMove);

    if(!LGlobal.canTouch){
        //电脑的时候，添加键盘事件 【上 下 左 右 空格】
        LEvent.addEventListener(LGlobal.window,LKeyboardEvent.KEY_DOWN,onkeydown);
        LEvent.addEventListener(LGlobal.window,LKeyboardEvent.KEY_UP,onkeyup);
    }
}

/**
 * 初始化公路的汽车
 */
function initRunCars(){
    for(var i=0;i<runCarList[0].length;i++){
        addCar(runCarList[0][i].n,runCarList[0][i].v,runCarList[0][i].h,0,
            runCarList[0][i].x,runCarList[0][i].y);
    }
}
/**
 * 初始化汽车
 */
function initCars(){
    for(var i=0;i<carList[stageIndex].length;i++){
      addCar(carList[stageIndex][i].n,carList[stageIndex][i].v,carList[stageIndex][i].h,1,
          carList[stageIndex][i].x,carList[stageIndex][i].y);
    }
}

/**
 * 添加汽车
 * */
function addCar(n,v,r,m,x,y){
    var car = new Car(n,v,r,m,x,y);
    //添加点击控制事件
    car.addEventListener(LMouseEvent.MOUSE_DOWN,ondown);
    car.addEventListener(LMouseEvent.MOUSE_UP,onup);


//    car.addEventListener(LMouseEvent.MOUSE_DOWN,touchDown);
//    car.addEventListener(LMouseEvent.MOUSE_MOVE,touchMove);
//    car.addEventListener(LMouseEvent.MOUSE_UP,touchUp);
//    car.addShape(LShape.RECT,[x,y,car.bitmap.getWidth(),car.bitmap.getHeight()]);
    cars.push(car);
    backLayer.addChild(car);
}
//游戏层显示初始化
function layerInit(){
    //游戏底层添加
    backLayer = new LSprite();
    addChild(backLayer);
    //地图层添加
    mapLayer = new LSprite();
    backLayer.addChild(mapLayer);
    //效果层添加
    effectLayer = new LSprite();
    backLayer.addChild(effectLayer);
    //控制层添加
    ctrlLayer = new LSprite();
    backLayer.addChild(ctrlLayer);
}
//地图图片初始化
function initMap(){
    var bitmapdata,bitmap;
    //地图图片数据
    mapLayer.removeAllChild();
    bitmapdata = new LBitmapData(imglist["bg001"],0,0,1024,512);
    bitmap = new LBitmap(bitmapdata);
    mapLayer.addChild(bitmap);
}


var monseIsDown = false;

var moveCar;
function onup(event){
    var self = event.currentTarget;
    for(var i=0;i<cars.length;i++){
        console.log(self.name+","+cars[i].name);
        cars[i].clearShape();
    }
    monseIsDown = false;
}
var oldX,oldY,vx,vy;
function ondown(event){
    monseIsDown = true;
    var touchdownX;
    var touchdownY;
    var self = event.currentTarget;
    touchdownX = event.offsetX;
    touchdownY = event.offsetY;
    oldX = touchdownX;
    oldY = touchdownY;
    self.addEventListener(LMouseEvent.MOUSE_MOVE,onMove);
    moveCar = self;
   // console.log(self.name +",downX:"+touchdownX+",downY:"+touchdownY);
    //self.addShape(LShape.RECT,[self.x,self.y,self.bitmap.getWidth(),self.bitmap.getHeight()]);
}

function onMove(event){
    var touchMoveX;
    var touchMoveY;
    var self = moveCar;
    touchMoveX  = event.offsetX;
    touchMoveY  = event.offsetY;
    //console.log(self.name +",moveX:"+touchMoveX+",moveY:"+touchMoveY);

    //console.log(self.name +",upx:"+touchupX+",upy:"+touchupY);
    vx =0;
    vy =0;
    if(oldX - touchMoveX >0){
        vx = -2;
    }else{
        vx = 2;
    }
    if(oldY-touchMoveY>0){
        vy = -2;
    }else{
        vy = 2;
    }
    if(monseIsDown){
        self.hitTest();
        if(self.moveXy==1){//横
            //
            self.x += vx*self.MOVE_STEP;
        }else{//竖着
            self.y += vy*self.MOVE_STEP;
        }
    }
    oldX = touchMoveX;
    oldY = touchMoveY;

}



/**
 * 循环事件
 * */
function onframe(){
    for(var i=0;i<cars.length;i++){
        if(cars[i].x>500){
            cars[i].move = 1;
            cars[i].speed = Math.random()*30;
//            cars[i].backY += 8*0.1;
//            if(self.backX > LGlobal.width){
//                console.log(self.backX);
//                self.backX -= LGlobal.width;
//            }
//            self.bitmapBuilding1.bitmapData.setCoordinate(self.backX,380);
//            self.bitmapBuilding2.x -= 8*0.2;
//            if(self.bitmapBuilding2.x + 1000 < 0){
//                self.bitmapBuilding2.x = LGlobal.width-50;
//            }
        }
//        if(cars[i].index-- > 0){
//            return ;
//        }
//        cars[i].index = 3;
        cars[i].onframe();
    }
}
