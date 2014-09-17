/**
 * Created by liqian on 2014-09-14.
 */

var heroCar;
var bmLayer;
function GameIng(){
    base(this,LSprite,[]);
    var self = this;

    //    初始化可控制的车
    initCars();
    //map地图绘制 begin ???stageIndex
    //console.log(maplist[0][1]);
//   for (var i=0;i<maplist[stageIndex].length;i++)
//   {
//       for(var j=0;j<maplist[stageIndex].length;j++) {
//           if (maplist[stageIndex][i][j] == 1) {
//               var bmd = new LBitmapData("#FF0000",0, 0, 60, 60);
//               var bm = new LBitmap(bmd);
//               bm.x=100+j*65;
//               bm.y= 60+i*65;
//               self.addChild(bm);
//           }
//       }
//   }

    //map地图绘制 end
    for(var i=0;i<cars.length;i++){
        if(cars[i].isHero ==1){
            heroCar = cars[i];
            break;
        }
    }

    bmLayer = new LSprite();
    var bmd = new LBitmapData("#FF0000",0,0,heroCar.getWidth()-55,(400-heroCar.getHeight()));
    var bm = new LBitmap(bmd);
    bmLayer.addChild(bm);
    bmLayer.x = heroCar.x+30;
    bmLayer.y = 300;

    self.addChild(bmLayer);



    var bitmap,logoLayer;
    logoLayer = new LSprite();
    bitmap = new LBitmap(new LBitmapData(imglist["bg001"],0,200,480,800));
    logoLayer.addChild(bitmap);
    self.addChild(logoLayer);

    //添加贞事件，开始游戏循环
    self.addEventListener(LEvent.ENTER_FRAME,onframe);

    logoLayer.addEventListener(LMouseEvent.MOUSE_UP,touchUp);



}

/**
* 初始化汽车
*/
//stageIndex = StageMenu().index;

function initCars(){
    console.log('gameing'+stageIndex);
    for(var i=0;i<carList[stageIndex].length;i++){
        addCar(carList[stageIndex][i].n,carList[stageIndex][i].v,carList[stageIndex][i].h,1,
            carList[stageIndex][i].x,carList[stageIndex][i].y);
    }
}

/**
* 添加汽车
* */
function addCar(n,v,r,m,x,y) {
    var car = new Car(n, v, r, m, x, y);

    car.addEventListener(LMouseEvent.MOUSE_DOWN,touchDown);

    cars.push(car);
    this.addChild(car);
};

var touchX,touchY;
//小车的监听函数
function touchDown(event){
    var car = event.currentTarget;
    touchX = event.offsetX;
    touchY = event.offsetY;
    oldTouchX = event.offsetX;
    oldTouchY = event.offsetY;
    oldX = car.x;
    oldY = car.y;


    car.addEventListener(LMouseEvent.MOUSE_MOVE,touchMove);

    moveFlag=true;
}

var oldX,oldY,oldTouchX,oldTouchY;
var moveFlag = false;
var MOVE_STEP =65;
var heroRoad = false;

function touchMove(event){
    if(moveFlag!=true){
        return ;
    }
    var car = event.currentTarget;



    //添加碰撞矩形范围
    for(var i=0;i<cars.length;i++){
        cars[i].addShape(LShape.RECT,[cars[i].x,cars[i].y,cars[i].getWidth(),cars[i].getHeight()]);
    }

//    console.log("begin hit test");
    //碰撞检测
    for(var i=0;i<cars.length;i++){
      if(car!=cars[i]&&car.hitTestObject(cars[i]))
      {
          MOVE_STEP =0;
          break;
      }
    }
//    console.log("end hit test");

    if(car.moveXy==1) {
        console.log(MOVE_STEP);
        if (event.offsetX > touchX) {
//              car.x = oldX+(event.offsetX-oldTouchX)/2.5;
            car.x = oldX +MOVE_STEP;
        }
        else if(event.offsetX < touchX) {
            car.x = oldX -MOVE_STEP;//*((event.offsetX-touchX)%65);
        }
    }
    else if(car.moveXy==0){
        console.log(MOVE_STEP);
        if(event.offsetY>touchY){
            car.y=oldY+MOVE_STEP;
        }
        else if(event.offsetY<touchY){
            car.y=oldY-MOVE_STEP;
        }
    }

    //通关判断

    //  oldX =car.x;
    oldTouchX = event.offsetX;
    car.addEventListener(LMouseEvent.MOUSE_UP,touchUp);
}

function touchUp(event){
    moveFlag=false;


    MOVE_STEP = 65;
    //添加滑道矩形
    var index=0;
    bmLayer.addShape(LShape.RECT,[bmLayer.x,bmLayer.y,(heroCar.getWidth()-55),(400-heroCar.getHeight())]);
    for(var i=0;i<cars.length;i++) {

        if (cars[i] != heroCar && bmLayer.hitTestObject(cars[i])) {
//            console.log('rect.x'+bmLayer.x+"rect.y"+bmLayer.y +"c:"+(heroCar.getWidth()-55)+"h:"+(400-heroCar.getHeight()));
//            console.log("name:"+cars[i].name+"x:"+cars[i].x+"y:"+cars[i].y);
            index++;
        }
    }
    console.log(index);
    if(index==0){
        heroRoad = true;
    }

    console.log('1'+heroRoad);
    if(heroRoad==true){
        console.log(heroRoad);
        //heroCar.speed = 1;
        heroCar.speed = 5;
        heroCar.canRun = 1;
    }
    for(var i=0;i<cars.length;i++){
        cars[i].clearShape();
    }
    bmLayer.clearShape();
};

/**
 * 循环事件
 * */
function onframe(){
    for(var i=0;i<cars.length;i++) {
        //if (cars[i].y< 330) {
            cars[i].onframe();
       // }
    }
};





