/**
 * Created by liqian on 2014-09-13.
 */
function GameLogo(){
    base(this ,LSprite,[]);
    var self = this;

    var bitmap,logoLayer;
    logoLayer = new LSprite();
    bitmap = new LBitmap(new LBitmapData(imglist["mm1"],0,0,803,382));//蓝天
    logoLayer.addChild(bitmap);
    self.addChild(logoLayer);

    var bitmapRoad = new LBitmap(new LBitmapData(imglist['mm2'],0,0,864,163));
    bitmapRoad.x =  0;
    bitmapRoad.y = 300;
    logoLayer.addChild(bitmapRoad);

    self.bitmapBuilding2 = new LBitmap(new LBitmapData(imglist['mm1'],0,612,680,195));
    self.bitmapBuilding2.x = 0;
    self.bitmapBuilding2.y = 100;
    //self.backX = 0;
    self.addChild(self.bitmapBuilding2);

    //['mm1'],0,612,680,195)

     self.bitmapBuilding1 = new LBitmap(new LBitmapData(imglist['mm1'],0,382,855,225));
     self.bitmapBuilding1.x = 0;
     self.bitmapBuilding1.y = 70;
     self.backX = 0;
     self.addChild(self.bitmapBuilding1);

//    self.bitmapBuilding1Copy = new LBitmap(new LBitmapData(imglist['mm1'],0,382,855,225));
//    self.bitmapBuilding1Copy.x = 855;
//    self.bitmapBuilding1Copy.y = 100;
//    self.addChild(self.bitmapBuilding1Copy);

     self.addEventListener(LEvent.ENTER_FRAME,self.onframe);

    /**
     * play button
     * @type {LBitmapData}
     */
    var bitmapDataUp = new LBitmapData(imglist["mm1"],810,5,143,45);
    var bitmapUp = new LBitmap(bitmapDataUp);
    var bitmapDataOver = new LBitmapData(imglist["mm1"],810,60,143,45);
    var bitmapOver = new LBitmap(bitmapDataOver);
    var button02 = new LButton(bitmapUp,bitmapOver);
    button02.x = 20;
    button02.y = 300;
    self.addChild(button02);

    button02.addEventListener(LMouseEvent.MOUSE_UP,menuShow);
};

GameLogo.prototype.onframe = function(event){
//    var self = event.target;
//
//    self.backX += 5*0.1;
//    console.log(self.backX);
//    if(self.backX < LGlobal.width){
//        self.backX -= LGlobal.width;
//    }
//   self.bitmapBuilding1.bitmapData.setCoordinate(self.backX,385);
//    self.bitmapBuilding2.x -= 5*0.5;
//
//    console.log(self.bitmapBuilding2.x);
//    if(self.bitmapBuilding2.x <0){
//        self.bitmapBuilding2.x  = self.bitmapBuilding2.x+LGlobal.width;
//   }



    var self = event.target;

    self.backX += 8*0.1;
    if(self.backX > LGlobal.width){
        console.log(self.backX);
        self.backX -= LGlobal.width;
    }
    self.bitmapBuilding1.bitmapData.setCoordinate(self.backX,382);
    self.bitmapBuilding2.x -= 8*0.2;
    if(self.bitmapBuilding2.x + 960 < 0){
        self.bitmapBuilding2.x = LGlobal.width;
    }
};