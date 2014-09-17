/**
 * Created by liqian on 2014-09-14.
 */
function StageMenu(){
    base(this,LSprite,[]);
    var self = this;

    var bitmap,menuLayer;
    menuLayer = new LSprite();
    bitmap = new LBitmap(new LBitmapData(imglist["bg1"]));
    menuLayer.addChild(bitmap);
    self.addChild(menuLayer);

    menuLayer.addEventListener(LMouseEvent.MOUSE_UP,gameShow);


}


//var carList=[];
//var car01 = [
//    {n:'bigGreyCarX',v:1,h:0,x:100,y:200},
//    {n:'goldCarY',v:0,h:0,x:300,y:200}
//
//];
//var car02 = [
//    {n:'bigGreyCarX',v:1,h:0,x:100,y:200},
//    {n:'goldCarY',v:0,h:0,x:300,y:200}
//
//];
//carList.push(car01);
//carList.push(car02);

