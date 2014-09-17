/**
 * Created by liqian on 2014-09-13.
 */

function GameMenu(){
    base(this,LSprite,[]);
    var self = this;

    var bitmap,menuLayer;
    menuLayer = new LSprite();
    bitmap = new LBitmap(new LBitmapData(imglist["bg1"],0,223.480,800));
    menuLayer.addChild(bitmap);
   self.addChild(menuLayer);

   var menu1 = new LSprite();
   var menubitmap = new LBitmap(new LBitmapData(imglist["mode1"],10,270,360,240));
   menu1.addChild(menubitmap);
   menu1.x = LGlobal.width/2 - menubitmap.width/2;
   menu1.y = LGlobal.height/2 - menubitmap.height/2;
   menuLayer.addChild(menu1);

   //放大 缩小
    menu1.addEventListener(LMouseEvent.MOUSE_DOWN,menuDown);
//    menu1.addEventListener(LMouseEvent.MOUSE_MOVE,menuMove);
    menu1.addEventListener(LMouseEvent.MOUSE_UP,stageShow);

    var touchX;

    function menuDown(event) {
//        menu1.addEventListener(LMouseEvent.MOUSE_MOVE,menuMove);
        touchX = event.offsetX;
    }

//    function menuMove(event){
//       console.log(event.);
//        var self = event.currentTarget;
   /*     if(touchX < event.offsetX){
            menu1.scaleX = event.offsetX/800;
            menu1.scaleY = event.offsetX/800;
            menu1.x = menu1.x + event.offsetX/2;
            console.log(menu1.scaleX);
        }
        if(touchX > event.offsetX){
            menu1.scaleX = event.offsetX/800;
            menu1.scaleY = event.offsetX/800;
            menu1.x = menu1.x - event.offsetX/2;
        }

        touchX =  event.offsetX/800;
    }*/
};
