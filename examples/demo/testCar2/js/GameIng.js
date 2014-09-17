/**
 * Created by liqian on 2014-09-14.
 */
function GameIng(){
    base(this,LSprite,[]);
    var self = this;

    var bitmap,logoLayer;
    logoLayer = new LSprite();
    bitmap = new LBitmap(new LBitmapData(imglist["bg001"]));
    logoLayer.addChild(bitmap);
    self.addChild(logoLayer);

//    初始化可控制的车
    initCars();

}

/**
* 初始化汽车
*/
function initCars(){
    console.log(stageIndex);
    for(var i=0;i<carList[stageIndex].length;i++){
        addCar(carList[stageIndex][i].n,carList[stageIndex][i].v,carList[stageIndex][i].h,1,
            carList[stageIndex][i].x,carList[stageIndex][i].y);
        console.log(i);
    }
}


/**
* 添加汽车
* */
function addCar(n,v,r,m,x,y) {
    var car = new Car(n, v, r, m, x, y);
    //添加点击控制事件
    //   car.addEventListener(LMouseEvent.MOUSE_DOWN,ondown);
    //   car.addEventListener(LMouseEvent.MOUSE_UP,onup);


    car.addEventListener(LMouseEvent.MOUSE_DOWN,touchDown);
   // car.addEventListener(LMouseEvent.MOUSE_MOVE,touchMove);
//    car.addEventListener(LMouseEvent.MOUSE_UP,touchUp);
//    car.addShape(LShape.RECT,[x,y,car.bitmap.getWidth(),car.bitmap.getHeight()]);
    cars.push(car);
    this.addChild(car);
};

var touchX;
//小车的监听函数
function touchDown(event){
    touchX = event.offsetX;
    console.log(touchX);
    addEventListener(LMouseEvent.MOUSE_MOVE,touchMove);
}

function touchMove(event){
    //if(cars.)
    if(event.offsetX > touchX)
    {

    }
    addEventListener(LMouseEvent.MOUSE_UP,touchUp);
}

function touchUp(event){

};




