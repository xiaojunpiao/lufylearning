/**
 * Created by leiyoo02 on 2014/9/14.
 */

/**
 * 共同类
 * */
var Global = function (){};
/**
 * 获取车属性
 * @param 车
 * 命名规则：大小(big)+颜色(color)＋Car+方向(X表示横向，Y表示竖向,R表示会run的车)
 * */
Global.getCarStatus = function(carObject){
    var list,bitmapdata,bitmap;

    switch (carObject.name){
        case "redCarY"://ok
            bitmapdata = new LBitmapData(imglist["car11"],270,125,65,130);
            bitmap = new LBitmap(bitmapdata);
            list = [bitmap,10];
            break;

        //car01
        case "yellowCarX"://ok
            bitmapdata = new LBitmapData(imglist["car01"],5,120,130,65);
            bitmap = new LBitmap(bitmapdata);
            list = [bitmap,10];
            break;
        case "bigGoldCarX"://ok
            bitmapdata = new LBitmapData(imglist["car01"],5,190,195,60);
            bitmap = new LBitmap(bitmapdata);
            list = [bitmap,10];
            break;
        case "bigGreyCarY"://ok
            bitmapdata = new LBitmapData(imglist["car01"],200,55,70,195);
            bitmap = new LBitmap(bitmapdata);
            list = [bitmap,10];
            break;
        case "blueCarY"://ok
            bitmapdata = new LBitmapData(imglist["car01"],270,125,65,130);
            bitmap = new LBitmap(bitmapdata);
            list = [bitmap,10];
            break;
        //car01 end
            //car11
        case "greyCarX"://ok
            bitmapdata = new LBitmapData(imglist["car11"],0,135,130,65);
            bitmap = new LBitmap(bitmapdata);
            list = [bitmap,10];
            break;
        case "bigBlueCarX"://ok
            bitmapdata = new LBitmapData(imglist["car11"],0,190,195,65);
            bitmap = new LBitmap(bitmapdata);
            list = [bitmap,10];
            break;
        case "bigYellowCarY"://ok
            bitmapdata = new LBitmapData(imglist["car11"],205,60,65,195);
            bitmap = new LBitmap(bitmapdata);
            list = [bitmap,10];
            break;
        //car11 end
            //car21
        case "goldCarX"://ok
            bitmapdata = new LBitmapData(imglist["car21"],5,120,130,65);
            bitmap = new LBitmap(bitmapdata);
            list = [bitmap,10];
            break;
        case "bigGreyCarX"://ok
            bitmapdata = new LBitmapData(imglist["car21"],5,185,195,65);
            bitmap = new LBitmap(bitmapdata);
            list = [bitmap,10];
            break;
        case "bigBlueCarY"://ok
            bitmapdata = new LBitmapData(imglist["car21"],200,60,65,195);
            bitmap = new LBitmap(bitmapdata);
            list = [bitmap,10];
            break;
        case "yellowCarY3"://ok
            bitmapdata = new LBitmapData(imglist["car21"],265,125,65,130);
            bitmap = new LBitmap(bitmapdata);
            list = [bitmap,10];
            break;
        //car21end
//        case "blackCarR":
//            bitmapdata = new LBitmapData(imglist["running1"],0,0,65,130);
//            bitmap = new LBitmap(bitmapdata);
//            list = [bitmap,10];
//            break;
//        case "redCarR":
//            bitmapdata = new LBitmapData(imglist["running1"],70,0,65,130);
//            bitmap = new LBitmap(bitmapdata);
//            list = [bitmap,10];
//            break;
//        case "blueCarR":
//            bitmapdata = new LBitmapData(imglist["running1"],140,0,65,130);
//            bitmap = new LBitmap(bitmapdata);
//            list = [bitmap,10];
//            break;
//        case "yellowCarR":
//            bitmapdata = new LBitmapData(imglist["running1"],0,140,65,130);
//            bitmap = new LBitmap(bitmapdata);
//            list = [bitmap,10];
//            break;
        default:
            list = [bitmap,0];
    }
    return list;
};


