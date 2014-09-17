/**
 * Created by MLS on 14-9-11.
 * @author lq
 *
 *
 * car的名字，移动方向（0是竖着，1是横着，x坐标，y坐标）
 */
function Car(name,moveXy,isHero,isMoveCar,x,y){
    base(this,LSprite,[]);
    var self = this;

    //汽车名称
    self.name = name;
    //汽车是否是红色
    self.isHero = isHero;
    //汽车位置
    self.x = x;
    self.y = y;
    //移动方向
    self.moveXy = moveXy;
    //获取汽车属性
    self.list = Global.getCarStatus(self);
    //汽车图片
    self.bitmap = self.list[0];
    self.speed = self.list[1];
    //移动方向
    self.move = 0;
    //显示
    self.addChild(self.bitmap);
    self.vx =1;
    self.vy =1;
    self.index=0;
    self.canRun=0;
    self.oldX=x;
    self.oldY=y;
    self.MOVE_STEP=65;
    self.isMoveCar=isMoveCar;
}

/**
 * 循环
 * */


Car.prototype.onframe = function (){
    var self = this;
//
//
// 移动的车
    if(self.isHero==1){

        if(self.y<250){
            if(self.rotate!= -90){
                self.rotate-=5;
            }
            if(self.rotate == -90){
                self.x-=self.speed*self.canRun;
            }
        }else{
            self.y -= self.speed*self.canRun;
        }
    }
//    if(self.y<300){
//        if(self.moveXy==1){//横'
//            self.x += self.move*self.speed;
//        }else{//竖着
//
//            self.y += self.move*self.speed;
//        }
//    }

    //自机移动位置限制
    if(!self.isHero){
    if(self.isMoveCar == 1) {
            if (self.x < 55) {
                self.x = 55;
            } else if (self.x > (LGlobal.width - 55)) {
                self.x = LGlobal.width-55-self.getWidth;
            }

        if(self.y > LGlobal.height-100){
            self.y = LGlobal.height-100;
        }else if(self.y < 300){
            if(self.isHero != 1){
                self.y = 330;
            }
        }
    }
    }
};


