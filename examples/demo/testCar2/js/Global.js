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
        case "redCarX"://ok
            bitmapdata = new LBitmapData(imglist["car11"],0,264,130,65);
            bitmap = new LBitmap(bitmapdata);
            list = [bitmap,10];
            break;
        case "bigYellowCarX"://ok
            bitmapdata = new LBitmapData(imglist["car11"],0,201,195,65);
            bitmap = new LBitmap(bitmapdata);
            list = [bitmap,10];
            break;
        case "bigGoldCarY"://ok
            bitmapdata = new LBitmapData(imglist["car01"],0,0,65,195);
            bitmap = new LBitmap(bitmapdata);
            list = [bitmap,10];
            break;
        case "yellowCarY"://ok
            bitmapdata = new LBitmapData(imglist["car01"],70,0,65,130);
            bitmap = new LBitmap(bitmapdata);
            list = [bitmap,10];
            break;
        case "yellowCarX"://ok
            bitmapdata = new LBitmapData(imglist["car21"],0,266,130,65);
            bitmap = new LBitmap(bitmapdata);
            list = [bitmap,10];
            break;
        case "goldCarY"://ok
            bitmapdata = new LBitmapData(imglist["car21"],70,0,65,130);
            bitmap = new LBitmap(bitmapdata);
            list = [bitmap,10];
            break;
        case "bigBlueCarY"://ok
            bitmapdata = new LBitmapData(imglist["car11"],0,0,65,195);
            bitmap = new LBitmap(bitmapdata);
            list = [bitmap,10];
            break;
        case "bigBlueCarX"://ok
            bitmapdata = new LBitmapData(imglist["car21"],0,201,195,65);
            bitmap = new LBitmap(bitmapdata);
            list = [bitmap,10];
            break;
        case "blueCarX"://ok
            bitmapdata = new LBitmapData(imglist["car01"],0,266,130,65);
            bitmap = new LBitmap(bitmapdata);
            list = [bitmap,10];
            break;
        case "bigGreyCarX"://ok
            bitmapdata = new LBitmapData(imglist["car01"],0,201,195,65);
            bitmap = new LBitmap(bitmapdata);
            list = [bitmap,10];
            break;
        case "bigGreyCarY"://ok
            bitmapdata = new LBitmapData(imglist["car21"],0,0,65,195);
            bitmap = new LBitmap(bitmapdata);
            list = [bitmap,10];
            break;
        case "greyCarY"://ok
            bitmapdata = new LBitmapData(imglist["car11"],70,0,65,195);
            bitmap = new LBitmap(bitmapdata);
            list = [bitmap,10];
            break;
        case "blackCarR":
            bitmapdata = new LBitmapData(imglist["running1"],0,0,65,130);
            bitmap = new LBitmap(bitmapdata);
            list = [bitmap,10];
            break;
        case "redCarR":
            bitmapdata = new LBitmapData(imglist["running1"],70,0,65,130);
            bitmap = new LBitmap(bitmapdata);
            list = [bitmap,10];
            break;
        case "blueCarR":
            bitmapdata = new LBitmapData(imglist["running1"],140,0,65,130);
            bitmap = new LBitmap(bitmapdata);
            list = [bitmap,10];
            break;
        case "yellowCarR":
            bitmapdata = new LBitmapData(imglist["running1"],0,140,65,130);
            bitmap = new LBitmap(bitmapdata);
            list = [bitmap,10];
            break;
        default:
            list = [bitmap,0];
    }
    return list;
};


