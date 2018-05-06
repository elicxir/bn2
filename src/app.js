/****************************************************************************
 Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.
 
 http://www.cocos2d-x.org
 
 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:
 
 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.
 
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/
function GO_NEXT(name){
    var s = cc.TransitionFade.create(2, new name());
    cc.director.runScene(s);
   
}



var TITLE_L = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;
        
        

        



        var Label = new cc.LabelTTF("ver 0.00", "Arial", 42);       
        Label.x = size.width / 2+190;
        Label.y = 70;
        Label.setColor( cc.color(0, 0, 0, 20))
        this.addChild(Label, 5);

        this.sprite = new cc.Sprite(res.back_png);
        this.sprite.attr({
            x: size.width / 2,
            y: size.height / 2
        });
        this.addChild(this.sprite, 0);

        this.sprite2 = new cc.Sprite(res.title_png);
        this.sprite2.attr({
            x: size.width / 2,
            y: size.height / 2
        });
        this.addChild(this.sprite2, 0);



        

        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: function(keyCode, event) {
                 
                if (keyCode == cc.KEY.enter) {
                    
                    GO_NEXT(GAME_S);
                   
                }

                
            },
                
        }, this);

        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            //タッチ開始時の処理
            onTouchBegan: function(touch, event){
                
                GO_NEXT(GAME_S);
              
                //これがないと落ちる
                return true;
            }
            //タッチ移動時の処理
           
           
        }, this);

        return true;
    }
});

var TITLE_S = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new TITLE_L();
        this.addChild(layer);
    }
});

var re=[0,0,0,0,0,0];




var RESULT_L = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;

        this.sprite = new cc.Sprite(res.result_png);
        this.sprite.attr({
            x: size.width / 2,
            y: size.height / 2
        });
        this.addChild(this.sprite, 0);

        return true;
    },

    init:function(){

        var Label = new cc.LabelTTF(re[0], "Arial", 37);       
             Label.x = 810;
            Label.y = 540-100;
            Label.setColor( cc.color(0, 0, 0, 20))
        this.addChild(Label, 5);

        var Label = new cc.LabelTTF(re[1], "Arial", 37);       
             Label.x = 810;
            Label.y = 540-145;
            Label.setColor( cc.color(0, 0, 0, 20))
        this.addChild(Label, 5);

        var Label = new cc.LabelTTF(re[2], "Arial", 37);       
             Label.x = 810;
            Label.y = 540-185;
            Label.setColor( cc.color(0, 0, 0, 20))
        this.addChild(Label, 5);

        var Label = new cc.LabelTTF(re[3], "Arial", 37);       
             Label.x = 810;
            Label.y = 540-230;
            Label.setColor( cc.color(0, 0, 0, 20))
        this.addChild(Label, 5);

        var Label = new cc.LabelTTF(re[4], "Arial", 44);       
             Label.x = 840;
            Label.y = 540-347;
            Label.setColor( cc.color(0, 0, 0, 20))
        this.addChild(Label, 5);

        var Label = new cc.LabelTTF(re[5], "Arial", 70);       
             Label.x = 700;
            Label.y = 540-475;
            Label.setColor( cc.color(0, 0, 0, 20))
        this.addChild(Label, 5);

    }
});

var RESULT_S = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new RESULT_L();
        layer.init();
        this.addChild(layer);
    }
});