//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class LoadingUI extends egret.Sprite implements RES.PromiseTaskReporter {
    private fnc = new Fnc()

    private loadingBg:egret.Bitmap

    public constructor() {
        super();
        this.createView();
    }

    private textField: egret.TextField;

    private createView(): void {
        var a = new egret.Bitmap()
        // a.texture = RES.getResByUrl('https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F16%2F07%2F06%2F17577cd55945262.jpg%21r650&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1630231154&t=63aec27d4b9394fdb7c8c98f20b98b4b')
        // this.addChild(a)
        // var shp:egret.Shape = new egret.Shape();
        // // shp.graphics.lineStyle(10,0x00ff00);//第一个参数：描边的线条宽度，第二个参数是描边的颜色
		// shp.graphics.beginFill(0xff0000,0.8);//red 设置矩形的填充颜色，第二个参数是透明度；1表示透明度 
		// shp.graphics.drawRect(0,0,egret.MainContext.instance.stage.stageWidth,egret.MainContext.instance.stage.stageHeight);//设置矩形的形状，绘制的是100*200的矩形  
		// // shp.graphics.lineStyle(10,0x00ff00);//无作用
		// shp.graphics.endFill();//结束当前绘制操作 若要对矩形加描边，可以设置线条的样式
		// //通关lineStyle方法来设置 代码需要放在绘制代码之前,否则无效，且不报错 
		// this.addChild(shp);
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.y = 300;
        this.textField.width = 480;
        this.textField.height = 100;
        this.textField.textAlign = "center";
    }

    public onProgress(current: number, total: number): void {
        this.textField.text = `Loading...${current}/${total}`;
    }
}
